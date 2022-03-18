module.exports = {
  env: {
    es2021: true,
    browser: true,
    jest: true,
  },
  ignorePatterns: ['jest.config*', 'webpack*', '.eslint*'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['simple-import-sort', 'html', 'import'],
  rules: {
    'max-len': [2, { code: 80, ignoreUrls: true }],
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'simple-import-sort/imports': 'error',
  },
};
