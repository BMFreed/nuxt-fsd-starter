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
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ['.*rc.js', 'eslint/**/*.js', 'nuxt.config.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.configs.json',
        tsconfigRootDir: __dirname,
      },
      rules: {
        '@typescript-eslint/no-unsafe-call': 'off',
        '@stylistic/lines-around-comment': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        'no-magic-numbers': 'off',
        'unicorn/prefer-module': 'off',
        'import/no-commonjs': 'off',
        'import/unambiguous': 'off',
        'import/extensions': 'off',
        'import/no-internal-modules': 'off',
        'jsdoc/require-jsdoc': 'off',
        'no-template-curly-in-string': 'off',
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
}
