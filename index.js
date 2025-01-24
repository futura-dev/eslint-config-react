/* eslint-disable @typescript-eslint/no-require-imports */
const eslintrc = require("./eslint.config.js");
const { utils } = require("@futura-dev/eslint-config-typescript");

module.exports = {
  config: eslintrc,
  utils,
};
