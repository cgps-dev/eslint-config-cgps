module.exports = {
  extends: [
    './rules/best-practices.js',
    './rules/errors.js',
    './rules/legacy.js',
    './rules/node.js',
    './rules/style.js',
    './rules/variables.js'
  ],
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false
  },
  globals: {},
  rules: {}
};
