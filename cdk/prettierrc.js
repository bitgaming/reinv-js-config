const merge = require('../lib/merge')

module.exports = function base(...sources) {
  return merge(
    {
      semi: false,
      trailingComma: "es5",
      singleQuote: true,
      tabWidth: 2,
    },
    ...sources,
  )
}
