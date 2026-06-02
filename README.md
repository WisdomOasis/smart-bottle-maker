English[](README.md) | [简体中文](README_zh.md)

## Product name: SmartFan

## Instructions

Before using this template, you need to have a basic understanding of the Ray framework. It is recommended to refer to the [Ray development documentation](https://developer.tuya.com/cn/miniapp/develop/ray/guide/overview)

## Quick start:

- [Create a product](https://developer.tuya.com/cn/miniapp-codelabs/codelabs/panel-outdoor-guide/index.html#2)
- [Create a project and import the project code in the IDE](https://developer.tuya.com/cn/miniapp-codelabs/codelabs/panel-outdoor-guide/index.html#3)

### Development commands

- Install: `npm install` (or `yarn install`)
- Start (Tuya target): `npm run start` (runs `ray start --target tuya`)
- Build (Tuya target): `npm run build` (runs `ray build --target tuya`)
- Lint: `npm run lint`
- Export i18n Excel: `npm run i18n:export`
- Watch i18n and export automatically: `npm run i18n:watch`

### i18n export flow

- Source of truth: `src/i18n/strings.ts`
- Export file: `i18n_export.xlsx`
- Manual export: run `npm run i18n:export` or `yarn i18n:export`
- Watch mode: run `npm run i18n:watch` or `yarn i18n:watch`; when `src/i18n/strings.ts` changes, the Excel file is regenerated automatically
- Pre-commit: when there are staged changes under `src/i18n`, the pre-commit hook regenerates `i18n_export.xlsx` and stages it automatically
- Notification: the script always prints a terminal message; if `terminal-notifier` is installed on macOS, it also sends a desktop notification

## 3. Capability dependency

- TTT dependency
  - "BaseKit": "3.0.6",
  - "MiniKit": "3.0.7",
  - "DeviceKit": "4.6.1",
- Component dependency
  - None
- Function page dependency
  - Device Detail Functional Page: settings => 'tyj8e2fjmduxtfw3nc'

## Problem feedback

If you have any questions, please visit the link and submit post feedback: https://tuyaos.com/viewforum.php?f=10

## License

[License details](LICENSE)

#### Refactored

- Updated `@ray-js/ray` version to `1.5.44`
- Updated `@ray-js/smart-ui` version to `2.0.0`
