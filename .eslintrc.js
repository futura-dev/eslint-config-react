/* eslint-disable no-undef */

module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "@futura-dev/typescript/.eslintrc.js",
    "plugin:import/warnings",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  plugins: ["react-hooks", "@typescript-eslint", "import"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "import/no-duplicates": "warn",
    "react/jsx-no-bind": "warn",
    "import/default": "warn",
    "import/first": "warn",
    "import/export": "error"
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
};
