const merge = require('../lib/merge')

module.exports = function base(...sources) {
  return merge(
    require('../lib/eslint/parser'),
    require('../lib/eslint/recommended'), {
      root: true,
      rules: {
        'semi': ['error', 'never'],
        'indent': ['error', 2],
        'no-empty': ['error', {
          'allowEmptyCatch': true
        }],
        'no-trailing-spaces': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    ...sources,
  )
}
