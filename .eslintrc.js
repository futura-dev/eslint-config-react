/* eslint-disable no-undef */
import { eslintrc } from "@futura-dev/eslint-config-typescript";

module.exports = {
  // parser
  parser: "@typescript-eslint/parser",

  // extensions
  plugins: ["react-hooks", "@typescript-eslint", "import"],
  extends: [
    "@futura-dev/typescript/.eslintrc.js",
    "plugin:import/warnings",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],

  // rules
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "import/no-duplicates": "warn",
    "react/jsx-no-bind": "warn",
    "import/default": "warn",
    "import/first": "warn",
    "import/export": "error",

    "prettier/prettier": [
      "error",
      {
        ...eslintrc.rules["prettier/prettier"][1],
        singleAttributePerLine: true,
        bracketSameLine: false,
        htmlWhitespaceSensitivity: "css",
      },
    ],
  },

  // settings
  settings: {
    react: {
      version: "detect",
    },
  },
};
