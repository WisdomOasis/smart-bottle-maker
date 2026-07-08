import zipfile, xml.etree.ElementTree as ET, json, sys
from collections import defaultdict

SERIES_SOURCE_TO_KEY = {
    '经典系列进口奶粉': 'milk_series_classic_imported',
    'Calisma 婴儿奶粉': 'milk_series_calisma_infant',
    'HA深度水解蛋白防过敏奶粉': 'milk_series_ha_hydrolyzed',
    '母乳型奶粉': 'milk_series_breast_milk_style',
    '近母乳系列': 'milk_series_near_breast_milk',
    '婴幼儿奶粉有机': 'milk_series_organic_infant',
    '有机奶粉': 'milk_series_organic',
    '有机婴幼儿奶粉': 'milk_series_organic_infant',
    '有机幼儿配方奶粉': 'milk_series_organic_growing_up',
    '伴宝乐': 'milk_series_babybio',
    '羊奶粉': 'milk_series_goat_milk',
    'CAPREA CROISSANCE ': 'milk_series_caprea_croissance',
    'croissance': 'milk_series_croissance',
    'pelargon': 'milk_series_pelargon',
    'guigoz': 'milk_series_guigoz',
    'BIO': 'milk_series_bio',
    'CAPREA': 'milk_series_caprea',
    'OPTIMA': 'milk_series_optima',
    'Optipro': 'milk_series_optipro',
    'PRIMEA': 'milk_series_primea',
    'Relia': 'milk_series_relia',
}

LEGACY_EN_TO_KEY = {
    'Classic Imported': 'milk_series_classic_imported',
    'Calisma Infant': 'milk_series_calisma_infant',
    'HA Hydrolyzed': 'milk_series_ha_hydrolyzed',
    'Breast Milk Style': 'milk_series_breast_milk_style',
    'Near Breast Milk': 'milk_series_near_breast_milk',
    'Organic Infant': 'milk_series_organic_infant',
    'Organic': 'milk_series_organic',
    'Organic Growing-Up': 'milk_series_organic_growing_up',
    'Babybio': 'milk_series_babybio',
    'Goat Milk': 'milk_series_goat_milk',
    'Caprea Croissance': 'milk_series_caprea_croissance',
    'Croissance': 'milk_series_croissance',
    'Pelargon': 'milk_series_pelargon',
    'Guigoz': 'milk_series_guigoz',
    'Bio': 'milk_series_bio',
    'Caprea': 'milk_series_caprea',
    'Optima': 'milk_series_optima',
    'Optipro': 'milk_series_optipro',
    'Primea': 'milk_series_primea',
    'Relia': 'milk_series_relia',
}

def to_series_i18n_key(series):
    trimmed = series.strip()
    if trimmed.startswith('milk_series_'):
        return trimmed
    return SERIES_SOURCE_TO_KEY.get(series, SERIES_SOURCE_TO_KEY.get(trimmed, LEGACY_EN_TO_KEY.get(series, LEGACY_EN_TO_KEY.get(trimmed, trimmed))))

path = sys.argv[1]
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
for row in rows_data[2:]:
    sku = row.get('B', '').strip()
    if sku:
        by_sku[sku].append(row)

REFERENCE_WATER_ML = 180

def pick_recipe_row(rows):
    """Same barcode may list multiple serving sizes; prefer standard 180 ml."""
    if not rows:
        return None
    if len(rows) == 1:
        return rows[0]
    exact = [
        r for r in rows
        if abs(float(r.get('O') or 0) - REFERENCE_WATER_ML) < 0.01
    ]
    if exact:
        return sorted(exact, key=lambda r: int(r.get('E') or 99))[0]
    return min(
        rows,
        key=lambda r: abs(float(r.get('O') or 0) - REFERENCE_WATER_ML),
    )

records = []
for sku, rows in sorted(by_sku.items()):
    row = pick_recipe_row(rows)
    if not row:
        continue
    amount = float(row.get('N') or 0)
    water = float(row.get('O') or 0)
    records.append({
        'barcode': sku,
        'brand': row.get('C', '').strip(),
        'series': to_series_i18n_key(row.get('D', '').strip()),
        'segment': int(row.get('E') or 1),
        'powderG': round(amount, 2),
        'waterMl': round(water, 2),
        'milkId': row.get('A', '').strip(),
    })

print(json.dumps(records, ensure_ascii=False, indent=2))
