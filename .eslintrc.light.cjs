const baseConfig = require('./.eslintrc.cjs')

//Облегчённая версия конфига для IDE
module.exports = {
  ...baseConfig,
  rules: { 'etc/no-deprecated': 'off', 'import/no-cycle': 'off' },
}
