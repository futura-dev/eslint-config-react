/* eslint-disable @typescript-eslint/no-require-imports */
const {
  config: futuraDevEslintTypescriptConfig,
  utils: futuraEslintUtils,
} = require("@futura-dev/eslint-config-typescript");
const eslintReactHooksPlugin = require("eslint-plugin-react-hooks");
const eslintReactPlugin = require("eslint-plugin-react");
const eslintJsxA11yPlugin = require("eslint-plugin-jsx-a11y");

module.exports = [
  ...futuraDevEslintTypescriptConfig,
  {
    files: ["**/*.ts", "**/*.tsx"],
    ignores: ["dist", "build", "node_modules"],

    plugins: {
      react: eslintReactPlugin,
      "react-hooks": eslintReactHooksPlugin,
      "jsx-a11y": eslintJsxA11yPlugin,
    },

    rules: {
      // react
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-no-bind": "warn",
      // react-hooks
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/rules-of-hooks": "error",

      ...futuraEslintUtils.mergePrettierEslintConfigs(
        futuraDevEslintTypescriptConfig,
        {
          singleAttributePerLine: true,
          bracketSameLine: false,
          htmlWhitespaceSensitivity: "css",
        },
      ),
    },
  },
];
