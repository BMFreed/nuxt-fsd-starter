const configOverrides = require('./overrides/configOverrides')
const vueOverrides = require('./overrides/vueOverrides')
const typescriptRules = require('./rulesets/typescriptRules')
const jsdocRules = require('./rulesets/jsdocRules')

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  plugins: ['nested-if', 'eslint-plugin-vue'],
  extends: [
    'plugin:nuxt/recommended',
    'hardcore',
    'hardcore/ts',
    'hardcore/vue',
    'plugin:jsdoc/recommended-typescript-error',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  ignorePatterns: ['.*rc.js', 'eslint/**'],
  rules: {
    'func-style': ['error', 'expression'],
    'putout/putout': 'off',
    'ext/lines-between-object-properties': ['error', 'never'],
    'nested-if/nested-if-statements': ['error', 2],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'never',
      // Указание формата vue необходимо для корректного резолва файлов:
      // https://github.com/vitejs/vite/issues/178
      { vue: 'always' },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'CallExpression[callee.name="reactive"]',
        message: 'use ref instead of reactive for code consistency',
      },
    ],
    'max-params': ['error', { max: 1 }],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          args: true,
          props: true,
          Props: true,
          params: true,
          Params: true,
        },
        ignore: ['\\.e2e$', '\\.e2e-spec$'],
        checkShorthandProperties: true,
      },
    ],
    ...typescriptRules,
    ...jsdocRules,
  },
  overrides: [configOverrides, vueOverrides],
}
