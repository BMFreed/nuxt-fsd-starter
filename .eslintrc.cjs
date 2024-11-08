module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:nuxt/recommended',
    'hardcore',
    'hardcore/ts',
    'hardcore/vue',
    'hardcore/feature-sliced',
    'hardcore/jsdoc',
  ],
  overrides: [
    {
      files: ['.*rc.cjs', '.eslintrc.light.cjs', 'nuxt.config.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.configs.json',
        tsconfigRootDir: __dirname,
      },
      rules: {
        '@stylistic/lines-around-comment': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        'import/extensions': 'off',
        'import/no-commonjs': 'off',
        'import/no-internal-modules': 'off',
        'import/unambiguous': 'off',
        'jsdoc/require-jsdoc': 'off',
        'no-magic-numbers': 'off',
        'no-template-curly-in-string': 'off',
        'unicorn/prefer-module': 'off',
      },
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
}
