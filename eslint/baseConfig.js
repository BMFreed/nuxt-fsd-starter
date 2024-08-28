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
    project: '../tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'func-style': ['error', 'expression'],
    'arrow-body-style': ['error', 'as-needed'],
    'putout/putout': 'off',
    'total-functions/no-partial-url-constructor': 'off',
    'max-statements': ['error', 20],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['ref', 'model'],
        ignorePropertyModificationsForRegex: ['^.*(?:Ref|Model)$'],
      },
    ],
    'ext/lines-between-object-properties': ['error', 'never'],
    'nested-if/nested-if-statements': ['error', 2],
    'sonarjs/cognitive-complexity': ['error', 12],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        // Указание формата vue необходимо для корректного резолва файлов:
        // https://github.com/vitejs/vite/issues/178
        vue: 'always',
      },
    ],
    // Даёт false positive для bundledDependencies вне зависимости от настроек
    'import/no-extraneous-dependencies': 'off',
    'max-params': ['error', { max: 3 }],
    'etc/no-enum': 'off',
    'unicorn/no-null': 'off',
    some: 'off',
    'promise/avoid-new': 'off',
    'total-functions/no-unsafe-readonly-mutable-assignment': 'off',
    // TODO настроить это правило
    'perfectionist/sort-interfaces': 'off',
    // Не работает с .vue-файлами
    'sonar/no-hardcoded-credentials': 'off',
    'id-length': ['error', { exceptions: ['_'] }],
    'no-warning-comments': 'off',
    'no-await-in-loop': 'off',
    'no-underscore-dangle': 'off',
    '@stylistic/quotes': 'off',
    '@stylistic/max-len': 'off',
    '@stylistic/lines-around-comment': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          ref: true,
          Ref: true,
          refs: true,
          Refs: true,
          args: true,
          props: true,
          Props: true,
          params: true,
          Params: true,
        },
        ignore: [String.raw`\.e2e$`, String.raw`\.e2e-spec$`],
        checkShorthandProperties: true,
      },
    ],
  },
}
