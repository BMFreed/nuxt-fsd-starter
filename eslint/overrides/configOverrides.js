module.exports = {
  files: ['.*rc.js', 'eslint/**/*.js', 'nuxt.config.ts'],
  rules: {
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
}
