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
}
