module.exports = {
  files: ['.*rc.js', 'eslint/**/*.js', 'nuxt.config.ts'],
  rules: {
    'no-magic-numbers': 'off',
    'unicorn/prefer-module': 'off',
    'import/no-commonjs': 'off',
    'import/unambiguous': 'off',
    'import/extensions': 'off',
    'import/no-internal-modules': 'off',
    'jsdoc/require-jsdoc': 'off',
  },
}
