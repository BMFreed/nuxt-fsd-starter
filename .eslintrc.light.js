const baseConfig = require('./.eslintrc.js')

//Облегчённая версия конфига для IDE
module.exports = {
  ...baseConfig,
  rules: { 'import/no-cycle': 'off', 'etc/no-deprecated': 'off' },
}
