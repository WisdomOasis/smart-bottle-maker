import zipfile, xml.etree.ElementTree as ET, json, sys, re
from collections import defaultdict

path = sys.argv[1]
existing_path = sys.argv[2] if len(sys.argv) > 2 else ""


def parse_segment(raw):
    """Map vendor segment labels to app stage numbers."""
    if raw is None or str(raw).strip() == "":
        return 1
    s = str(raw).strip()
    try:
        n = float(s)
        stage = int(round(n))
        return stage if stage >= 1 else 1
    except (TypeError, ValueError):
        pass
    u = re.sub(r"\s+", "", s).upper()
    mapping = {
        "PRE": 1,
        "PRE1": 1,
        "PREMI": 1,
        "0+": 1,
        "PRO": 1,
        "HMO": 1,
        "1+": 2,
        "2+": 3,
        "6+": 2,
        "6M+": 2,
        "12+": 3,
        "12-36": 3,
        "18+": 4,
        "EC": 1,
        "AR": 1,
        "AC": 1,
        "A2": 1,
        "N": 1,
    }
    if u in mapping:
        return mapping[u]
    m = re.match(r"(\d+)", u)
    if m:
        stage = int(m.group(1))
        return stage if stage >= 1 else 1
    return None


def norm_header(value):
    return re.sub(r"[^a-z0-9]+", "", str(value or "").strip().lower())


def col_index(letter):
    n = 0
    for ch in letter:
        n = n * 26 + (ord(ch.upper()) - 64)
    return n


def col_letter_from_index(n):
    out = ""
    while n:
        n, rem = divmod(n - 1, 26)
        out = chr(65 + rem) + out
    return out


def next_col(letter):
    return col_letter_from_index(col_index(letter) + 1)


with zipfile.ZipFile(path) as z:
    root = ET.fromstring(z.read("xl/sharedStrings.xml"))
    ns = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
    strings = []
    for si in root.findall("m:si", ns):
        texts = []
        for t in si.iter("{http://schemas.openxmlformats.org/spreadsheetml/2006/main}t"):
            if t.text:
                texts.append(t.text)
        strings.append("".join(texts))
    sroot = ET.fromstring(z.read("xl/worksheets/sheet1.xml"))

    def col_letter(ref):
        return "".join(c for c in ref if c.isalpha())

    rows_data = []
    for row in sroot.findall(".//m:sheetData/m:row", ns):
        row_dict = {}
        for c in row.findall("m:c", ns):
            ref = c.get("r", "")
            col = col_letter(ref)
            t = c.get("t")
            v = c.find("m:v", ns)
            val = v.text if v is not None else ""
            if t == "s":
                val = strings[int(val)] if val else ""
            row_dict[col] = val
        rows_data.append(row_dict)

header = rows_data[0] if rows_data else {}
subheader = rows_data[1] if len(rows_data) > 1 else {}
headers_by_name = {}
for col, val in header.items():
    name = norm_header(val)
    if name and name not in headers_by_name:
        headers_by_name[name] = col


def resolve_measure_col(header_name, legacy_default, legacy_fallback):
    start = headers_by_name.get(header_name)
    if not start:
        return legacy_default if header.get(legacy_default) is not None else legacy_fallback
    sub = str(subheader.get(start, "") or "").strip().lower()
    if sub in ("default", "def", ""):
        return start
    current = start
    for _ in range(3):
        current = next_col(current)
        sub = str(subheader.get(current, "") or "").strip().lower()
        if sub in ("default", "def"):
            return current
    return start


barcode_col = headers_by_name.get("barcode", "B")
brand_col = headers_by_name.get("brand", "C")
series_col = headers_by_name.get("series", "D")
segment_col = headers_by_name.get("segments", headers_by_name.get("segment", "E"))
milk_id_col = headers_by_name.get("milkid", "A")
# 261010: O amount/g, P water Default. 0804+: P amount/g, Q water Default.
powder_col = resolve_measure_col("amountg", "P", "N")
if powder_col == "P" and norm_header(header.get("O")) == "amountg":
    powder_col = "O"
water_col = resolve_measure_col("water", "Q", "O")
if water_col == "Q" and norm_header(header.get("P")) == "water":
    # Prefer the labelled water Default column on 261010+ sheets.
    if str(subheader.get("P", "") or "").strip().lower() in ("default", "def", ""):
        water_col = "P"

by_sku = defaultdict(list)
for row in rows_data[2:]:
    sku = str(row.get(barcode_col, "") or "").strip()
    if sku:
        by_sku[sku].append(row)

REFERENCE_WATER_ML = 180


def as_float(raw):
    try:
        return float(raw)
    except (TypeError, ValueError):
        return 0.0


def water_ml(row):
    return as_float(row.get(water_col) or 0)


def powder_g(row):
    return as_float(row.get(powder_col) or 0)


def segment_sort_key(row):
    parsed = parse_segment(row.get(segment_col))
    return parsed if parsed is not None else 99


MAX_POWDER_G = 100


def is_plausible_recipe(row):
    amount = powder_g(row)
    water = water_ml(row)
    return 0 < amount <= MAX_POWDER_G and water > 0


def pick_recipe_row(rows):
    """Same barcode may list multiple serving sizes; prefer standard 180 ml."""
    usable = [r for r in rows if is_plausible_recipe(r)]
    if not usable:
        return None
    if len(usable) == 1:
        return usable[0]
    exact = [r for r in usable if abs(water_ml(r) - REFERENCE_WATER_ML) < 0.01]
    if exact:
        return sorted(exact, key=segment_sort_key)[0]
    return min(usable, key=lambda r: abs(water_ml(r) - REFERENCE_WATER_ML))


sheet_records = []
skipped_segment = 0
for sku, rows in sorted(by_sku.items()):
    row = pick_recipe_row(rows)
    if not row:
        continue
    amount = powder_g(row)
    water = water_ml(row)
    segment = parse_segment(row.get(segment_col))
    if amount <= 0 or water <= 0:
        continue
    if segment is None:
        skipped_segment += 1
        continue
    sheet_records.append(
        {
            "barcode": sku,
            "brand": str(row.get(brand_col, "") or "").strip(),
            "series": str(row.get(series_col, "") or "").strip(),
            "segment": segment,
            "powderG": round(amount, 2),
            "waterMl": round(water, 2),
            "milkId": str(row.get(milk_id_col, "") or "").strip(),
        }
    )


by_barcode = {}
if existing_path:
    try:
        with open(existing_path, "r", encoding="utf-8") as f:
            existing = json.load(f)
        if isinstance(existing, list):
            for rec in existing:
                bc = str(rec.get("barcode", "") or "").strip()
                if bc:
                    by_barcode[bc] = rec
    except (OSError, json.JSONDecodeError):
        pass

for rec in sheet_records:
    by_barcode[rec["barcode"]] = rec

records = [by_barcode[k] for k in sorted(by_barcode.keys())]
print(json.dumps(records, ensure_ascii=False, indent=2))
sys.stderr.write(
    "sheet=%d skipped_segment=%d existing_kept=%d total=%d powder_col=%s water_col=%s\n"
    % (
        len(sheet_records),
        skipped_segment,
        max(0, len(records) - len(sheet_records)),
        len(records),
        powder_col,
        water_col,
    )
)
