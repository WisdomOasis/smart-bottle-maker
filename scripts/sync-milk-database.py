import zipfile, xml.etree.ElementTree as ET, json, sys, re
from collections import defaultdict

path = sys.argv[1]
existing_path = sys.argv[2] if len(sys.argv) > 2 else ''

def parse_segment(raw):
    """Map vendor segment labels to app stage numbers."""
    if raw is None or str(raw).strip() == '':
        return 1
    s = str(raw).strip()
    try:
        n = float(s)
        stage = int(round(n))
        return stage if stage >= 1 else 1
    except (TypeError, ValueError):
        pass
    u = re.sub(r'\s+', '', s).upper()
    mapping = {
        'PRE': 1, 'PRE1': 1, 'PREMI': 1,
        '0+': 1, 'PRO': 1, 'HMO': 1,
        '1+': 2,
        '2+': 3,
        '6+': 2, '6M+': 2,
        '12+': 3, '12-36': 3,
        '18+': 4,
        'EC': 1, 'AR': 1, 'AC': 1, 'A2': 1, 'N': 1,
    }
    if u in mapping:
        return mapping[u]
    m = re.match(r'(\d+)', u)
    if m:
        stage = int(m.group(1))
        return stage if stage >= 1 else 1
    return None


with zipfile.ZipFile(path) as z:
    root = ET.fromstring(z.read('xl/sharedStrings.xml'))
    ns = {'m': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
    strings = []
    for si in root.findall('m:si', ns):
        texts = []
        for t in si.iter('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}t'):
            if t.text:
                texts.append(t.text)
        strings.append(''.join(texts))
    sroot = ET.fromstring(z.read('xl/worksheets/sheet1.xml'))

    def col_letter(ref):
        return ''.join(c for c in ref if c.isalpha())

    rows_data = []
    for row in sroot.findall('.//m:sheetData/m:row', ns):
        row_dict = {}
        for c in row.findall('m:c', ns):
            ref = c.get('r', '')
            col = col_letter(ref)
            t = c.get('t')
            v = c.find('m:v', ns)
            val = v.text if v is not None else ''
            if t == 's':
                val = strings[int(val)] if val else ''
            row_dict[col] = val
        rows_data.append(row_dict)

by_sku = defaultdict(list)
# Row 1 = headers, row 2 = Default/Min/Max subheaders → data from row 3+
for row in rows_data[2:]:
    sku = str(row.get('B', '') or '').strip()
    if sku:
        by_sku[sku].append(row)

REFERENCE_WATER_ML = 180

def water_ml(row):
    # 0804+: Q = water default; legacy sheets used O
    raw = row.get('Q')
    if raw is None or raw == '':
        raw = row.get('O') or 0
    try:
        return float(raw)
    except (TypeError, ValueError):
        return 0.0

def powder_g(row):
    # 0804+: P = amount/g; legacy sheets used N
    raw = row.get('P')
    if raw is None or raw == '':
        raw = row.get('N') or 0
    try:
        return float(raw)
    except (TypeError, ValueError):
        return 0.0

def segment_sort_key(row):
    parsed = parse_segment(row.get('E'))
    return parsed if parsed is not None else 99

def pick_recipe_row(rows):
    """Same barcode may list multiple serving sizes; prefer standard 180 ml."""
    if not rows:
        return None
    if len(rows) == 1:
        return rows[0]
    exact = [
        r for r in rows
        if abs(water_ml(r) - REFERENCE_WATER_ML) < 0.01
    ]
    if exact:
        return sorted(exact, key=segment_sort_key)[0]
    return min(rows, key=lambda r: abs(water_ml(r) - REFERENCE_WATER_ML))

sheet_records = []
skipped_segment = 0
for sku, rows in sorted(by_sku.items()):
    row = pick_recipe_row(rows)
    if not row:
        continue
    amount = powder_g(row)
    water = water_ml(row)
    segment = parse_segment(row.get('E'))
    if amount <= 0 or water <= 0:
        continue
    if segment is None:
        skipped_segment += 1
        continue
    # Keep Excel series text as-is (display raw); known i18n keys only in legacy rows.
    sheet_records.append({
        'barcode': sku,
        'brand': str(row.get('C', '') or '').strip(),
        'series': str(row.get('D', '') or '').strip(),
        'segment': segment,
        'powderG': round(amount, 2),
        'waterMl': round(water, 2),
        'milkId': str(row.get('A', '') or '').strip(),
    })


by_barcode = {}
if existing_path:
    try:
        with open(existing_path, 'r', encoding='utf-8') as f:
            existing = json.load(f)
        if isinstance(existing, list):
            for rec in existing:
                bc = str(rec.get('barcode', '') or '').strip()
                if bc:
                    by_barcode[bc] = rec
    except (OSError, json.JSONDecodeError):
        pass

for rec in sheet_records:
    by_barcode[rec['barcode']] = rec

records = [by_barcode[k] for k in sorted(by_barcode.keys())]
print(json.dumps(records, ensure_ascii=False, indent=2))
sys.stderr.write(
    'sheet=%d skipped_segment=%d existing_kept=%d total=%d\n' % (
        len(sheet_records),
        skipped_segment,
        max(0, len(records) - len(sheet_records)),
        len(records),
    )
)
