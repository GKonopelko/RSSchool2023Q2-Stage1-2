module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "airbnb",
    "airbnb-typescript/base",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {},
  parser: "@typescript-eslint/parser",
};

import eslintConfigPrettier from "eslint-config-prettier";

export default [eslintConfigPrettier];
