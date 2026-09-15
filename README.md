[English](README.md) | [简体中文](README_zh.md)

## Product name: Smart Bottle Maker

Maxi-Cosi Smart Bottle Maker control panel built with the Tuya Ray Panel SDK.

## Features

- Home dashboard: water / powder amount, temperature, scene presets
- Actions: milk / water / powder / high-temp clean via `work_mode` + `working_status`
- Formula barcode scan, brand search, and custom mix ratio
- Feeding record (baby profile) and Smart Prep Reminder (CryAssist)
- Hungry feed-request confirmation with adjustable recipe
- Locales: EN / JA / ZH / ZH-TW

## Quick start

```bash
yarn install
yarn start
```

Bind this panel to product PID `SmartBottleMaker` on the Tuya developer platform, and keep DP identifiers aligned with `src/constant/dpCodes.ts`.

### Development commands

- Install: `yarn install`
- Start: `yarn start` (`ray start --target tuya`)
- Build: `yarn build`
- Lint: `yarn lint`
- Export i18n Excel: `yarn i18n:export`
- Watch i18n export: `yarn i18n:watch`

### i18n export flow

- Source of truth: `src/i18n/strings.ts`
- Export file: `i18n_export.xlsx`
- Pre-commit regenerates the Excel when staged i18n files change
