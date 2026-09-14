# Smart Bottler Maker 面板

基于涂鸦 Ray Panel SDK 的智慧嬰兒配奶機控制面板，由寵物推車風扇面板模板改造而來。

## 功能

- 首頁儀表盤：水量/奶粉量、溫度、攪拌等級
- 場景預設：標準 / 夜間 / 外出 / 雙倍
- 操作：開始沖奶、僅出水、僅出粉、高溫清潔、停止（透過 `work_mode` / `working_status`）
- 設備狀態：感測器（奶粉盒／漏斗／奶瓶／水箱）、童鎖、錯誤碼、哭聲聯動確認
- 多語言：英 / 日 / 簡中 / 繁中

## 開發

```bash
yarn install
yarn start
```

在 Tuya 開發者平台將本面板綁定產品 PID `SmartBottleMaker`，並確保 DP 標識符與 `src/constant/dpCodes.ts` 一致。

## DP 對照（2026-07-15）

| 標識符                | DP ID     | 說明                              |
| --------------------- | --------- | --------------------------------- |
| `switch`              | 1         | 開關（螢幕顯示）                  |
| `child_lock`          | 118       | 童鎖                              |
| `work_mode`           | 101       | milk / water / powder / clean     |
| `working_status`      | 102       | 運行中 true；寫 false 取消        |
| `milkbox_sensor`      | 103       | 奶粉盒感應（ro）                  |
| `funnel_sensor`       | 104       | 漏斗感應（ro）                    |
| `bottle_sensor`       | 105       | 奶瓶感應（ro）                    |
| `watertank_sensor`    | 106       | 水箱感應（ro）                    |
| `temp`                | 107       | 溫度 20–40℃，步进 5（milk/water） |
| `unit_set`            | 108       | mL / oz                           |
| `ml` / `oz`           | 109 / 110 | 水量設定                          |
| `formula_water`       | 111       | 每勺对应水量 30–300 mL            |
| `formula_ratio`       | 112       | 每勺克数（scale 1，2.5–35 g）     |
| `formula_density`     | 113       | 密度校准（scale 1，0.5–1.5）      |
| `remind_funnel_clean` | 114       | 漏斗清洁提醒                      |
| `drink_record_upload` | 115       | 冲调记录 raw                      |
| `error_code`          | 116       | none / Hot / E01–E03 / C01–C04    |
| `scene_feed_request`  | 117       | none / hungry_pending             |

完整列表見 `src/devices/schema.ts`。
