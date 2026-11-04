#!/usr/bin/env python3
"""Export vendor barcode photo test vs current milk DB to Desktop."""
from datetime import date
from pathlib import Path

from openpyxl import Workbook
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.utils import get_column_letter

OUT = Path.home() / "Desktop" / "vendor-barcode-audit-2026-11-03.xlsx"

NAVY = "2D365F"
TEAL = "4D7294"
GREEN = "1F7A4D"
RED = "B42318"
AMBER = "B54708"
BLUE = "175CD3"
GREY = "F0F3F7"
WHITE = "FFFFFF"
GREEN_BG = "E6F4EA"
RED_BG = "FCE8E6"
AMBER_BG = "FEF4E6"
BLUE_BG = "E8F1FB"
LIGHT = "F8FAFC"

thin = Border(
    left=Side(style="thin", color="D0D5DD"),
    right=Side(style="thin", color="D0D5DD"),
    top=Side(style="thin", color="D0D5DD"),
    bottom=Side(style="thin", color="D0D5DD"),
)
header_font = Font(name="Calibri", bold=True, color=WHITE, size=11)
title_font = Font(name="Calibri", bold=True, color=NAVY, size=18)
subtitle_font = Font(name="Calibri", color=TEAL, size=11)
label_font = Font(name="Calibri", bold=True, color=NAVY, size=11)
body_font = Font(name="Calibri", color="1D2939", size=11)
wrap = Alignment(wrap_text=True, vertical="center", horizontal="left")
center = Alignment(wrap_text=True, vertical="center", horizontal="center")


def fill(hex_color: str) -> PatternFill:
    return PatternFill("solid", fgColor=hex_color)


def set_widths(ws, widths):
    for i, width in enumerate(widths, 1):
        ws.column_dimensions[get_column_letter(i)].width = width


def write_headers(ws, row, headers, color):
    for col, text in enumerate(headers, 1):
        cell = ws.cell(row, col, text)
        cell.fill = fill(color)
        cell.font = header_font
        cell.alignment = center
        cell.border = thin


def write_row(ws, row, values, bg, barcode_cols=(), center_cols=()):
    for col, val in enumerate(values, 1):
        cell = ws.cell(row, col, "" if val is None else val)
        cell.font = body_font
        cell.alignment = wrap
        cell.border = thin
        cell.fill = fill(bg)
        if col in barcode_cols:
            cell.number_format = "@"
            cell.alignment = center
            cell.font = Font(name="Calibri", bold=True, color=NAVY, size=11)
        if col in center_cols:
            cell.alignment = center


FOUND = [
    ("Babybio Caprea Stage 1", "Babybio", "Caprea", 1, "", "3288131580418 / 3288131580517", "CAPREA AU LAIT DE CHÈVRE", "1", "3490 / 1150"),
    ("Babybio Caprea Stage 2", "Babybio", "Caprea", 2, "", "3288131580524", "CAPREA Au lait de chèvre", "2", "816"),
    ("Babybio Caprea Stage 3", "Babybio", "Caprea", 3, "", "3288131580463 / 3288131580531", "CAPREA croissance", "3", "3815 / 430"),
    ("Babybio Optima Stage 1", "Babybio", "Optima", 1, "", "3288131580319", "BABYBIO OPTIMA", "1", "647"),
    ("Blédilait Croissance + Stage 3", "Blédilait", "Croissance +", 3, "", "3041091553324", "Blédilait/croissance +", "3", "2463"),
    ("Blédilait Stage 1", "Blédilait", "Blédilait", 1, "", "3041091439987 / 3041091470966 / 3041091477170", "bledilait / premier âge", "1", "363 / 2048 / 4274"),
    ("Gallia Calisma Bio Croissance Stage 3", "Gallia", "Calisma Bio Croissance", 3, "", "3041091478146（僅供參考）", "Calisma", "3", "1498"),
    ("Gallia Calisma Bio Stage 1", "Gallia", "Calisma Bio", 1, "", "3041091478122（僅供參考）", "Calisma", "1", "1719"),
    ("Gallia Calışma Stage 1", "Gallia", "Calışma / Calisma", 1, "", "3041091725929", "Calisma", "1", "1685"),
    ("HiPP Combiotic Stage 2", "HiPP", "Combiotic", 2, "", "4062300456518 等多筆 Combiotic 2", "BIOLOGIQUE COMBIOTIC 等", "2", "76 等"),
    ("Modilac Doucea Stage 3", "Modilac", "Doucea", 3, "", "3572731142030 / 3572731403650", "DOUCEA CROISSANCE / MODILAC DOUCÉA", "3", "1280 / 673"),
]

MISSING = [
    ("3288131580128", "Babybio", "Optimist", 2, "Babybio Optimist Stage 2", "無此條碼", "ADD", "全新系列 Optimist"),
    ("3288131580210", "Babybio", "Primea", 1, "Babybio Primea Stage 1", "無此條碼", "ADD", "庫內舊碼 3288131580029 Primea 2，不可覆寫"),
    ("3288131580227", "Babybio", "Primea", 2, "Babybio Primea Stage 2", "無此條碼", "ADD", "與舊碼並存"),
    ("3288131580234", "Babybio", "Primea", 3, "Babybio Primea Stage 3", "無此條碼", "ADD", ""),
    ("3041091511744", "Blédilait", "Bledigest", 1, "Blédilait Bledigest Stage 1", "無此條碼", "ADD", ""),
    ("3041091511751", "Blédilait", "Bledigest", 2, "Blédilait Bledigest Stage 2", "無此條碼", "ADD", "勿與 3041091683878 混淆"),
    ("3041091440006", "Blédilait", "Blédilait", 2, "Blédilait Stage 2", "無此條碼", "ADD", "Stage 1 已在庫"),
    ("3700653801333", "France Bébé Bio", "France Bébé Bio", 1, "France Bébé Bio Stage 1", "無此品牌／條碼", "ADD", ""),
    ("3700653801340", "France Bébé Bio", "France Bébé Bio", 2, "France Bébé Bio Stage 2", "無此品牌／條碼", "ADD", ""),
    ("3041091478160", "Gallia", "Calisma Bio", 2, "Gallia Calisma Bio Stage 2", "無此條碼", "ADD", ""),
    ("3041092010550", "Gallia", "Calisma Junior", 4, "Gallia Calisma Junior Stage 4", "無此條碼", "ADD", ""),
    ("3041091725950", "Gallia", "Calisma Relais", 2, "Gallia Calisma Relais Stage 2", "無此條碼", "ADD", ""),
    ("3041091725936", "Gallia", "Calışma / Calisma", 2, "Gallia Calışma Stage 2", "無此條碼", "ADD", ""),
    ("3041091511690", "Gallia", "Galliagest Premium", 2, "Gallia Galliagest Premium Stage 2", "無此條碼", "ADD", "圖檔：Gallia galliagest stage 2"),
    ("3041090841644", "Gallia", "Galliagest Croissance", 3, "Gallia Galliagest Croissance Stage 3", "無此條碼", "ADD", "圖檔：Gallia galliagest stage 3"),
    ("7613036217316", "Guigoz", "Bio", 1, "Guigoz Bio Stage 1", "無此條碼", "ADD", ""),
    ("7613036217347", "Guigoz", "Bio", 2, "Guigoz Bio Stage 2", "無此條碼", "ADD", ""),
    ("7613035124080", "Guigoz", "Gest", 3, "Guigoz Gest Stage 3", "無此條碼", "ADD", ""),
    ("8445290098580", "Guigoz", "Gest", 1, "Guigoz Gest Stage 1", "無此條碼", "ADD", ""),
    ("8445290098719", "Guigoz", "Gest", 2, "Guigoz Gest Stage 2", "無此條碼", "ADD", ""),
    ("8445290000675", "Guigoz", "Optipro", 3, "Guigoz Optipro Stage 3", "無此條碼", "ADD", ""),
    ("8445290624949", "Guigoz", "Optipro", 3, "Guigoz Optipro Stage 3", "無此條碼", "ADD", "另一條 Optipro 3"),
    ("7613038417486", "Guigoz", "Optipro Junior", 4, "Guigoz Optipro Junior Stage 4", "無此條碼", "ADD", ""),
    ("8445290000842", "Guigoz", "Optipro", 1, "Guigoz Optipro Stage 1", "無此條碼", "ADD", ""),
    ("8445290116543", "Guigoz", "Pelargon", 1, "Guigoz Pelargon Stage 1", "無此條碼", "ADD", ""),
    ("8445290116574", "Guigoz", "Pelargon", 2, "Guigoz Pelargon Stage 2", "無此條碼", "ADD", ""),
    ("8445291755604", "Guigoz", "Pelargon", 3, "Guigoz Pelargon Stage 3", "無此條碼", "ADD", ""),
    ("7613038317922", "Guigoz", "Relais", 1, "Guigoz Relais Stage 1", "無此條碼", "ADD", ""),
    ("7613038317533", "Guigoz", "Relais Croissance", 3, "Guigoz Relais Croissance Stage 3", "無此條碼", "ADD", ""),
    ("7613038317649", "Guigoz", "Relais", 2, "Guigoz Relais Stage 2", "無此條碼", "ADD", ""),
    ("4062300456556", "HiPP", "Biologique Combiotic Nutrigest", 2, "HiPP Combiotic Nutrigest Stage 2", "無此條碼", "ADD", "圖檔：Hipp combiotic nutrigest stage 2"),
    ("4062300456617", "HiPP", "Biologique Combiotic Nutrigest", 1, "HiPP Combiotic Nutrigest Stage 1", "無此條碼", "ADD", "圖檔：Hipp combiotic nutrigest stage 1"),
    ("4062300456563", "HiPP", "Biologique Combiotic", 3, "HiPP Combiotic Stage 3", "無此條碼", "ADD", "圖檔：Hipp combiotic stage 3"),
    ("3572731303738", "Modilac", "Actigest", 2, "Modilac Actigest Stage 2", "無此條碼", "ADD", ""),
    ("3572731303417", "Modilac", "Bio", 1, "Modilac Bio Stage 1", "無此條碼", "ADD", ""),
    ("3572731303424", "Modilac", "Bio", 2, "Modilac Bio Stage 2", "無此條碼", "ADD", ""),
    ("3572731303431", "Modilac", "Bio", 3, "Modilac Bio Stage 3", "無此條碼", "ADD", ""),
    ("3572731301598", "Modilac", "Doucea", 1, "Modilac Doucea Stage 1", "無此條碼", "ADD", ""),
    ("7613033112898", "Nidal", "Nidalgest", 2, "Nidal Nidalgest Stage 2", "無此條碼", "ADD", ""),
    ("7613032405687", "Nidal", "Nidal（請確認）", 1, "Nidal Stage 1（產品名請確認）", "無此條碼", "ADD", "圖檔：Nidal stage 1；產品正式名稱待確認"),
    ("7613032506636", "Nidal", "Nidal", 2, "Nidal Stage 2", "無此條碼", "ADD", ""),
    ("7613032322595", "Nidal", "Nidal", 3, "Nidal Stage 3", "無此條碼", "ADD", ""),
    ("7613033112867", "Nidal", "Nidalgest", 1, "Nidal Nidalgest Stage 1", "無此條碼", "ADD", ""),
    ("3551102095564", "Picot", "Picot", 1, "Picot Stage 1", "無此條碼", "ADD", ""),
    ("3551102095571", "Picot", "Picot", 2, "Picot Stage 2", "無此條碼", "ADD", ""),
    ("3551102469225", "Picot", "Picot", 4, "Picot Stage 4", "無此條碼", "ADD", ""),
    ("3551101545398", "Picot", "Bio", 3, "Picot Bio Stage 3", "無此條碼", "ADD", ""),
    ("3288111545277", "Picot", "Lemiel", 3, "Picot Lemiel Stage 3", "無此條碼", "ADD", "圖檔寫 Lemial；建議正式名 Lemiel"),
    ("3288111545253", "Picot", "Lemiel", 1, "Picot Lemiel Stage 1", "無此條碼", "ADD", ""),
    ("3288111545260", "Picot", "Lemiel", 2, "Picot Lemiel Stage 2", "無此條碼", "ADD", ""),
]

WRONG = [
    (
        "3041091683878",
        "572",
        "blédina",
        "BLEDILAIT JUNIOR",
        4,
        "Blédilait / blédina",
        "Bledigest Croissance +",
        3,
        "Bledigest Croissance + Stage 3",
        "UPDATE",
        "圖檔：Bledigest croissance + stage 3。現掃到 Junior 4，需覆蓋。",
    ),
    (
        "3041091725943",
        "1772",
        "Gallia",
        "Calisma",
        2,
        "Gallia",
        "Calisma Relais",
        1,
        "Gallia Calisma Relais Stage 1",
        "UPDATE",
        "測試者說列表有三筆；目前 JSON 僅 1 筆（Calisma stage 2）。圖檔：Gallia calisma relais stage 1。",
    ),
    (
        "3041091510891",
        "2126",
        "Gallia",
        "Galliagest premium/갈리아제스트 프리미엄 1단계(프랑스내수용)",
        1,
        "Gallia",
        "Galliagest Premium",
        1,
        "Gallia Galliagest Premium Stage 1",
        "UPDATE",
        "去掉韓文／法國內需註記；圖檔：Gallia Galliagest stage 1。",
    ),
    (
        "8445290624918",
        "676",
        "Guigoz",
        "Optipro",
        3,
        "Guigoz",
        "Optipro Croissance",
        3,
        "Guigoz Optipro Croissance Stage 3",
        "UPDATE",
        "圖檔：Guigoz optipro croissance stage 3。段位同為 3，系列名需改。",
    ),
]

IMAGE = [
    (
        "3288131580333",
        "Babybio",
        "Optima Croissance",
        3,
        "Babybio Optima Croissance Stage 3",
        "OPTIMA CROISSANCE",
        "955",
        "照片掃不出；手動搜尋得到",
        "請廠商重出條碼圖",
    ),
    (
        "4062300456648",
        "HiPP",
        "Biologique Combiotic",
        1,
        "HiPP Combiotic Stage 1",
        "BIOLOGIQUE COMBIOTIC",
        "282",
        "圖片條形碼掃不出來；庫裡有",
        "請廠商重出條碼圖（勿刪庫內資料）",
    ),
    ("", "HiPP", "Essentia", 1, "HiPP Essentia Stage 1", "", "", "圖檔沒有條碼", "請廠商提供可掃條碼"),
    ("", "HiPP", "Essentia", 2, "HiPP Essentia Stage 2", "", "", "圖檔沒有條碼", "請廠商提供可掃條碼"),
    ("", "HiPP", "Essentia", 3, "HiPP Essentia Stage 3", "", "", "圖檔沒有條碼", "請廠商提供可掃條碼"),
]


def main() -> None:
    wb = Workbook()

    ws = wb.active
    ws.title = "01-說明"
    ws.sheet_properties.tabColor = TEAL
    ws.merge_cells("B2:G2")
    ws["B2"] = "廠商奶粉條碼實測 vs 目前奶粉庫（第二版）"
    ws["B2"].font = title_font
    ws.merge_cells("B3:G3")
    ws["B3"] = (
        f"來源：廠商條碼照片實測  ｜  比對：milkFormulaDatabase.json（261010）"
        f"  ｜  日期：{date.today().isoformat()}  ｜  取代 2026-11-02 版"
    )
    ws["B3"].font = subtitle_font
    ws.row_dimensions[2].height = 28
    ws.row_dimensions[3].height = 22

    notes = [
        ("用途", "給負責整理奶粉庫的工程師：依「處理動作」補資料、改錯、或請廠商重出條碼圖。不要直接改 App 邏輯。"),
        ("已在庫 Found / Yes", "掃碼或搜尋可對到。未附條碼數字時，條碼欄留空，並附庫內可能對應筆。"),
        ("需新增 Missing / No", "條碼不在目前庫。請新增品牌／系列／段位。"),
        ("需更正 Wrong", "條碼已在庫，但品牌／系列／段位與圖檔不符，請覆蓋更正。"),
        ("條碼圖 Image", "庫內有或產品存在，但照片條碼掃不出／沒有條碼。含 4062300456648（庫有、掃不出）。請廠商重出圖。"),
        ("段位 Stage", "1 = 0–6 個月　2 = 6–12 個月　3 = 成長／croissance　4 = junior"),
        ("勘誤提醒", "舊版曾把 3041091683878 當 Junior+ 正確；本版依最新圖檔改為需更正成 Bledigest Croissance + Stage 3。"),
    ]
    ws["B5"] = "欄位說明"
    ws["B5"].font = label_font
    for i, (key, value) in enumerate(notes, 6):
        ws.cell(i, 2, key).font = label_font
        ws.cell(i, 2).fill = fill(GREY)
        ws.cell(i, 2).alignment = wrap
        ws.cell(i, 2).border = thin
        ws.merge_cells(start_row=i, start_column=3, end_row=i, end_column=7)
        ws.cell(i, 3, value).font = body_font
        ws.cell(i, 3).alignment = wrap
        for col in range(3, 8):
            ws.cell(i, col).border = thin
            ws.cell(i, col).fill = fill(LIGHT)
        ws.row_dimensions[i].height = 34

    ws.merge_cells("B14:G14")
    ws["B14"] = (
        "建議處理順序：① 需更正 4 筆　② 需新增 50 筆　"
        "③ 請廠商補條碼圖／Essentia／4062300456648　④ 已在庫回歸確認"
    )
    ws["B14"].font = Font(name="Calibri", bold=True, color=RED, size=12)
    ws.row_dimensions[14].height = 24
    set_widths(ws, [3, 22, 28, 22, 22, 22, 28])
    ws.freeze_panes = "B6"
    ws.sheet_view.showGridLines = False

    ws = wb.create_sheet("02-總覽")
    ws.sheet_properties.tabColor = NAVY
    ws.merge_cells("A1:E1")
    ws["A1"] = "實測結果總覽（2026-11-03）"
    ws["A1"].font = Font(name="Calibri", bold=True, color=WHITE, size=14)
    ws["A1"].fill = fill(NAVY)
    ws["A1"].alignment = wrap
    ws.row_dimensions[1].height = 26
    write_headers(
        ws,
        3,
        ["分類 Category", "筆數 Count", "優先級 Priority", "處理動作 Action", "說明"],
        NAVY,
    )
    summary_rows = [
        ("已在庫 Found / Yes", len(FOUND), "P3 回歸確認", "無需改庫", "掃碼／搜尋可對到", GREEN_BG),
        ("需新增 Missing / No", len(MISSING), "P1 補資料", "新增條碼與配方", "廠商實物有、目前庫沒有", RED_BG),
        ("需更正 Wrong", len(WRONG), "P0 立刻改", "覆蓋現有錯誤資料", "Junior→Bledigest、Calisma→Relais、韓文清理、Optipro Croissance", AMBER_BG),
        ("條碼圖需校正 Image", len(IMAGE), "P2 請廠商", "重出／補條碼圖", "含 Babybio Optima 3、HiPP Combiotic 1（掃不出但庫有）、Hipp Essentia 1–3", BLUE_BG),
    ]
    for i, (cat, count, pri, action, note, bg) in enumerate(summary_rows, 4):
        write_row(ws, i, [cat, count, pri, action, note], bg, center_cols=(2,))
        ws.row_dimensions[i].height = 32
    write_row(
        ws,
        8,
        ["合計", len(FOUND) + len(MISSING) + len(WRONG) + len(IMAGE), "", "以本版為準", "取代 2026-11-02 舊表"],
        GREY,
        center_cols=(2,),
    )
    for col in range(1, 6):
        ws.cell(8, col).font = Font(name="Calibri", bold=True, color=NAVY, size=11)

    ws.merge_cells("A10:E10")
    ws["A10"] = "需新增品牌分布（依品牌／系列）"
    ws["A10"].font = label_font
    write_headers(ws, 11, ["品牌 Brand", "系列 Series", "缺漏段位", "條碼數", "備註"], TEAL)
    brand_rows = [
        ("Babybio", "Optimist / Primea", "1–3", 4, ""),
        ("Blédilait", "Bledigest / Blédilait 2", "1–2", 3, "Junior 那筆改列 Wrong"),
        ("France Bébé Bio", "France Bébé Bio", "1–2", 2, "全新品牌"),
        ("Gallia", "Calisma / Galliagest / Junior / Relais", "多段", 6, ""),
        ("Guigoz", "Bio / Gest / Optipro / Pelargon / Relais", "多段", 15, ""),
        ("HiPP", "Combiotic / Nutrigest", "1–3", 3, "4062300456648 改列條碼圖（庫有但掃不出）"),
        ("Modilac", "Actigest / Bio / Doucea", "1–3", 5, ""),
        ("Nidal", "Nidal / Nidalgest", "1–3", 5, "7613032405687 產品名待確認"),
        ("Picot", "Picot / Bio / Lemiel", "1–4", 7, ""),
    ]
    for i, row in enumerate(brand_rows, 12):
        write_row(ws, i, row, LIGHT, center_cols=(4,))
        ws.row_dimensions[i].height = 28
    set_widths(ws, [34, 14, 24, 28, 48])
    ws.freeze_panes = "A4"
    ws.sheet_view.showGridLines = False

    ws = wb.create_sheet("03-已在庫 Found")
    ws.sheet_properties.tabColor = GREEN
    ws.merge_cells("A1:J1")
    ws["A1"] = f"已在庫 Yes：{len(FOUND)} 款。未附條碼時，庫內對應僅供回歸確認。"
    ws["A1"].font = Font(name="Calibri", bold=True, color=WHITE, size=12)
    ws["A1"].fill = fill(GREEN)
    ws["A1"].alignment = wrap
    ws.row_dimensions[1].height = 26
    write_headers(
        ws,
        2,
        [
            "No.",
            "實測產品",
            "品牌",
            "系列",
            "段位",
            "實測條碼",
            "庫內可能對應條碼",
            "庫內系列",
            "庫內段位",
            "milkId",
        ],
        "157347",
    )
    for i, row in enumerate(FOUND, 3):
        write_row(ws, i, (i - 2,) + row, GREEN_BG, center_cols=(1, 5, 9))
        ws.row_dimensions[i].height = 32
    ws.auto_filter.ref = f"A2:J{2 + len(FOUND)}"
    ws.freeze_panes = "A3"
    set_widths(ws, [6, 42, 14, 24, 10, 16, 46, 34, 10, 16])
    ws.sheet_view.showGridLines = False

    ws = wb.create_sheet("04-需新增 Missing")
    ws.sheet_properties.tabColor = RED
    ws.merge_cells("A1:L1")
    ws["A1"] = f"需新增 No：{len(MISSING)} 筆。請填 powderG / waterMl（建議 180 mL）。"
    ws["A1"].font = Font(name="Calibri", bold=True, color=WHITE, size=12)
    ws["A1"].fill = fill(RED)
    ws["A1"].alignment = wrap
    ws.row_dimensions[1].height = 28
    write_headers(
        ws,
        2,
        [
            "No.",
            "條碼 Barcode",
            "品牌 Brand",
            "系列 Series",
            "段位 Stage",
            "實測產品",
            "目前庫",
            "處理動作",
            "powderG（請填）",
            "waterMl（請填）",
            "優先級",
            "備註 Notes",
        ],
        "B42318",
    )
    for i, row in enumerate(MISSING, 3):
        barcode, brand, series, stage, product, current, action, note = row
        bg = AMBER_BG if action == "VERIFY" else RED_BG
        write_row(
            ws,
            i,
            (i - 2, barcode, brand, series, stage, product, current, action, "", "", "P1", note),
            bg,
            barcode_cols=(2,),
            center_cols=(1, 5, 8, 11),
        )
        ws.cell(i, 9).fill = fill("FFF7ED")
        ws.cell(i, 10).fill = fill("FFF7ED")
        ws.row_dimensions[i].height = 30
    last = 2 + len(MISSING)
    ws.auto_filter.ref = f"A2:L{last}"
    ws.freeze_panes = "A3"
    set_widths(ws, [6, 18, 16, 28, 10, 42, 22, 12, 14, 14, 10, 48])
    ws.sheet_view.showGridLines = False

    ws = wb.create_sheet("05-需更正 Wrong")
    ws.sheet_properties.tabColor = AMBER
    ws.merge_cells("A1:L1")
    ws["A1"] = f"需更正 Wrong：{len(WRONG)} 筆。請覆蓋，不要新增第二筆同條碼。"
    ws["A1"].font = Font(name="Calibri", bold=True, color=WHITE, size=12)
    ws["A1"].fill = fill(AMBER)
    ws["A1"].alignment = wrap
    ws.row_dimensions[1].height = 26
    write_headers(
        ws,
        2,
        [
            "No.",
            "條碼",
            "milkId",
            "庫內品牌",
            "庫內系列",
            "庫內段位",
            "正確品牌",
            "正確系列",
            "正確段位",
            "實測／圖檔產品",
            "處理動作",
            "備註",
        ],
        "B54708",
    )
    for i, row in enumerate(WRONG, 3):
        write_row(
            ws,
            i,
            (i - 2,) + row,
            AMBER_BG,
            barcode_cols=(2,),
            center_cols=(1, 3, 6, 9),
        )
        ws.cell(i, 5).font = Font(name="Calibri", bold=True, color=RED, size=11, strike=True)
        ws.cell(i, 6).font = Font(name="Calibri", bold=True, color=RED, size=11, strike=True)
        ws.cell(i, 8).font = Font(name="Calibri", bold=True, color=GREEN, size=11)
        ws.cell(i, 9).font = Font(name="Calibri", bold=True, color=GREEN, size=11)
        ws.row_dimensions[i].height = 42
    ws.merge_cells("A8:L9")
    ws["A8"] = (
        "特別注意：3041091683878 本版依最新圖檔改為 Bledigest Croissance + Stage 3。"
        "若工程師仍拿著 11-02 舊表（寫 KEEP Junior+），請以本版為準。"
    )
    ws["A8"].alignment = wrap
    ws["A8"].font = Font(name="Calibri", bold=True, color=NAVY, size=11)
    ws["A8"].fill = fill(LIGHT)
    ws.freeze_panes = "A3"
    set_widths(ws, [6, 18, 10, 14, 36, 10, 16, 24, 10, 34, 12, 52])
    ws.sheet_view.showGridLines = False

    ws = wb.create_sheet("06-條碼圖 Image")
    ws.sheet_properties.tabColor = BLUE
    ws.merge_cells("A1:J1")
    ws["A1"] = f"條碼圖需校正：{len(IMAGE)} 筆。庫／產品可能存在，但圖檔掃不出或沒有條碼。"
    ws["A1"].font = Font(name="Calibri", bold=True, color=WHITE, size=12)
    ws["A1"].fill = fill(BLUE)
    ws["A1"].alignment = wrap
    ws.row_dimensions[1].height = 26
    write_headers(
        ws,
        2,
        [
            "No.",
            "條碼",
            "品牌",
            "系列",
            "段位",
            "實測產品",
            "庫內系列",
            "milkId",
            "掃碼／圖檔問題",
            "處理動作",
        ],
        "175CD3",
    )
    for i, row in enumerate(IMAGE, 3):
        write_row(
            ws,
            i,
            (i - 2,) + row,
            BLUE_BG,
            barcode_cols=(2,),
            center_cols=(1, 5, 8),
        )
        ws.row_dimensions[i].height = 32
    ws.freeze_panes = "A3"
    set_widths(ws, [6, 18, 12, 22, 10, 40, 22, 10, 28, 24])
    ws.sheet_view.showGridLines = False

    for sheet in wb.worksheets:
        sheet.page_setup.orientation = "landscape"
        sheet.page_setup.fitToPage = True
        sheet.page_setup.fitToWidth = 1
        sheet.page_setup.fitToHeight = 1
        sheet.page_setup.paperSize = sheet.PAPERSIZE_A4

    wb.save(OUT)
    print(f"wrote {OUT} ({OUT.stat().st_size} bytes)")
    print(
        f"counts found={len(FOUND)} missing={len(MISSING)} "
        f"wrong={len(WRONG)} image={len(IMAGE)}"
    )


if __name__ == "__main__":
    main()
