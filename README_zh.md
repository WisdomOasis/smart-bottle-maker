[English](README.md) | 简体中文[](README_zh.md)

## 项目名称：SmartFan

## 使用须知

使用该模板开发前， 需要对 Ray 框架有基本的了解，建议先查阅 [Ray 开发文档](https://developer.tuya.com/cn/miniapp/develop/ray/guide/overview)

## 快速上手

- [创建产品](https://developer.tuya.com/cn/miniapp-codelabs/codelabs/panel-outdoor-guide/index.html#2)
- [创建项目并在 IDE 中导入项目代码](https://developer.tuya.com/cn/miniapp-codelabs/codelabs/panel-outdoor-guide/index.html#3)

## 开发命令

- 安装依赖：`npm install` 或 `yarn install`
- 启动（Tuya target）：`npm run start`
- 打包（Tuya target）：`npm run build`
- Lint：`npm run lint`
- 导出 i18n Excel：`npm run i18n:export`
- 监听 i18n 并自动导出：`npm run i18n:watch`

## i18n 导出流程

- i18n 源文件：`src/i18n/strings.ts`
- 导出文件：`i18n_export.xlsx`
- 手动更新：执行 `npm run i18n:export` 或 `yarn i18n:export`
- 监听模式：执行 `npm run i18n:watch` 或 `yarn i18n:watch`，只要 `src/i18n/strings.ts` 有改动，就会自动重新生成 Excel
- 提交前自动更新：当 `src/i18n` 下有 staged 变更时，pre-commit hook 会自动更新 `i18n_export.xlsx`，并把它一并加入暂存
- 通知方式：脚本一定会输出终端提示；如果 macOS 安装了 `terminal-notifier`，还会发送桌面通知

## 3、能力依赖

- TTT 依赖
  - "BaseKit": "3.0.6",
  - "MiniKit": "3.0.7",
  - "DeviceKit": "4.6.1",
- 组件依赖
  - 暂无
- 功能页依赖
  - 设备详情功能页：settings => 'tyj8e2fjmduxtfw3nc'

## 问题反馈

若有疑问，请访问链接，提交帖子反馈：https://tuyaos.com/viewforum.php?f=10

## 许可

[许可详情](LICENSE)

#### Refactored

- 更新 `@ray-js/ray` 版本至 `1.5.44`
- 更新 `@ray-js/smart-ui` 版本至 `2.0.0`
