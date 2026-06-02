module.exports = {
  root: true,
  env: {
    es2020: true,
    browser: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: ["eslint-config-tuya-panel"],
  ignorePatterns: [
    "dist/",
    "node_modules/",
    "typings/",
    "src/@types/",
    "**/*.d.ts",
  ],
};
