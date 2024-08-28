module.exports = {
  extends: [
    './eslint/baseConfig',
    './eslint/featureSlicedConfig',
    './eslint/rulesets/vueConfig',
    './eslint/rulesets/typescriptConfig',
    './eslint/rulesets/jsdocConfig',
    './eslint/overrides/configOverrides',
  ],
}
