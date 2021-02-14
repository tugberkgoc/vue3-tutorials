module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'vue/no-mutating-props': 0,
    'vue/no-multiple-template-root': 0,
    'vue/no-side-effects-in-computed-properties': 0
  }
}
