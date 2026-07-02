# Smart Bottler Maker 面板

基于涂鸦 Ray Panel SDK 的智慧嬰兒配奶機控制面板，由寵物推車風扇面板模板改造而來。

## 功能

- 首頁儀表盤：水量/奶粉量、溫度、攪拌等級
- 場景預設：標準 / 夜間 / 外出 / 雙倍
- 操作：開始沖奶、僅出水、僅出粉、高溫清潔、停止
- 設備狀態：`work_mode`、`wifi_status`、啟動攔截、哭聲聯動確認
- 多語言：英 / 日 / 簡中 / 繁中

## 開發

```bash
yarn install
yarn start
```

在 Tuya 開發者平台將本面板綁定產品 PID `SmartBottleMaker`，並確保 DP 標識符與 `src/constant/dpCodes.ts` 一致。

## DP 對照

| 標識符                   | 說明                                 |
| ------------------------ | ------------------------------------ |
| `milk`                   | 遠程啟動沖奶                         |
| `water`                  | 僅出水                               |
| `powder`                 | 僅出粉                               |
| `clean`                  | 高溫清潔                             |
| `work_mode`              | milk / water / powder / clean / idle |
| `ml` / `oz` / `unit_set` | 水量與單位                           |
| `temp`                   | 37 / 40 / 45 °C                      |
| `formula_ratio`          | 奶粉比例 (g/100mL, scale 1)          |
| `cancel_work`            | 取消當前流程                         |

完整列表見雲端 DP 表或 `src/devices/schema.ts`。
