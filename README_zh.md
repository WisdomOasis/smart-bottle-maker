# Smart Bottle Maker 面板

基于涂鸦 Ray Panel SDK 的智慧嬰兒配奶機控制面板。

## 功能

- 首頁儀表盤：水量／奶粉量、溫度、場景預設
- 操作：沖奶、僅出水、僅出粉、高溫清潔（`work_mode` / `working_status`）
- 配方條碼掃描、品牌搜尋、自訂比例
- 餵養紀錄（寶寶檔案）與 Smart Prep Reminder（CryAssist 連動）
- 飢餓提醒確認（可調整水量／奶粉／溫度）
- 多語言：英／日／簡中／繁中

## 開發

```bash
yarn install
yarn start
```

在 Tuya 開發者平台將本面板綁定產品 PID `SmartBottleMaker`，並確保 DP 標識符與 `src/constant/dpCodes.ts` 一致。

## DP 對照

詳見 `src/constant/dpCodes.ts` 與 `src/devices/schema.ts`。
