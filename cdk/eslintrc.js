module.exports = {
  root: true,
  rules: {
    'semi': ['error', 'never'],
    'indent': ['error', 2],
    'no-empty': ['error', { 'allowEmptyCatch': true }],
    'no-trailing-spaces': 'error'
  },
  ...require('./eslint/parser'),
  ...require('./eslint/recommended'),
}