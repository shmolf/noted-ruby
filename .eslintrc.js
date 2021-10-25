const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports =
{
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: module,
  },
  rules: {
    'no-use-before-define': [ERROR, { functions: false, classes: false }],
    'prefer-destructuring': [WARN, { object: true, array: false }],
    'max-len': [ERROR, { code: 120, comments: 130, ignoreUrls: true, ignoreRegExpLiterals: true }],
    'import/no-extraneous-dependencies': OFF,
    'no-param-reassign': OFF,
    '@typescript-eslint/no-non-null-assertion': OFF,
  },
  ignorePatterns: [
    'webpack.config.js',
    '**/node_modules/*',
    'public/**/*',
  ],
  settings: {
    'import/resolver': 'webpack',
  },
}
