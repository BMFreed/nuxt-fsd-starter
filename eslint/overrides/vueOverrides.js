module.exports = {
  files: ['*.vue'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: '../../tsconfig.json',
    tsconfigRootDir: __dirname,
  },
}
