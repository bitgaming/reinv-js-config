module.exports = {
  root: true,
  ...require('./lib/typescript').default,
  rules: {
    'semi': ['error', 'never'],
    'indent': ['error', 2],
    'no-empty': ['error', { 'allowEmptyCatch': true }],
    'no-trailing-spaces': 'error'
  }
}