module.exports = {
  "env": {
    "browser": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2015,
    "sourceType": "module"
  },
  "rules": {
    "no-console": "warn",
    "quotes": [2, "single"],
    "no-alert": "error",
    "no-irregular-whitespace": "error",
    "eqeqeq": "warn",
    "key-spacing": "error",
    "no-dupe-keys": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
    "no-underscore-dangle": "warn",
    "no-control-regex": "warn",
    "no-use-before-define": "warn",
    "no-cond-assign": "warn",
    "no-restricted-globals": "warn",
    "indent": ["error", 2],
    "max-nested-callbacks": ["error", { "max": 3 }],
    "no-underscore-dangle": ["warn", { "allow": ["_on", "_off"] }]
  }
};