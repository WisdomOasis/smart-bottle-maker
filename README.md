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
