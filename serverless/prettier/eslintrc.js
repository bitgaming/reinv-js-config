const merge = require('../../lib/merge')

module.exports = function base(...sources) {
  return merge(
    require('../../lib/eslint/parser'),
    require('../../lib/eslint/recommended'),
    {
      root: true,
      rules: {
        'semi': ['error', 'never'],
        'indent': 'off',
        'no-empty': ['error', {
          'allowEmptyCatch': true
        }],
        'no-trailing-spaces': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/keyword-spacing': ['error'],
        '@typescript-eslint/member-delimiter-style': ['error', {
          multiline: {
            delimiter: 'none',
            requireLast: true,
          },
        }]
      },
      "env": {
        "node": true,
        "jest": true,
        "es6": true
      },
      extends: [
        "prettier", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
      ]
    },
    ...sources,
  )
}