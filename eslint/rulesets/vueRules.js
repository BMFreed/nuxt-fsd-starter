module.exports = {
  'vue/html-button-has-type': 'off',
  'vue/no-restricted-syntax': [
    'error',
    {
      selector: 'VDirectiveKey[argument.rawName=/^on.*/]',
      message:
        'Use the @ (v-on) directive instead and pass the event handler without the "on" prefix',
    },
  ],
  'no-restricted-syntax': [
    'error',
    {
      selector: "CallExpression[callee.name='defineEmits']",
      message: 'Pass event handlers as props with the "on" prefix instead',
    },
  ],
  'vue/block-order': [
    'error',
    {
      order: ['script', 'template', 'style'],
    },
  ],
  'vue/block-lang': ['error', { script: { lang: 'ts' } }],
  'vue/multi-word-component-names': 'off',
  'vue/attribute-hyphenation': ['error', 'never'],
  'vue/v-on-event-hyphenation': ['error', 'never'],
  'vue-scoped-css/enforce-style-type': ['error', { allows: ['module'] }],
  'vue/no-multiple-template-root': 'off',
  // Не приносит пользы из-за слабой типизации defineSlots
  'vue/require-explicit-slots': 'off',
  // Работает некорректно, если инпут - кастомный компонент
  'vuejs-accessibility/label-has-for': 'off',
  // Устаревшее правило
  'vue/no-setup-props-reactivity-loss': 'off',
  'vue/v-on-handler-style': ['error', ['method', 'inline']],
  // В теории полезное правило, но на практике - ложные срабатывания, плюс тяжело заглушить
  'sonar/no-vue-bypass-sanitization': 'off',
  'vue/html-self-closing': ['error'],
  'vue/v-slot-style': [
    'error',
    {
      atComponent: 'v-slot',
      default: 'v-slot',
      named: 'longform',
    },
  ],
}
