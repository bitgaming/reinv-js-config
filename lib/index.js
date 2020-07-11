module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'semi': ['error', 'never'],
    'indent': ['error', 2],
    'no-empty': ['error', { 'allowEmptyCatch': true }],
    'no-trailing-spaces': 'error'
  }
}