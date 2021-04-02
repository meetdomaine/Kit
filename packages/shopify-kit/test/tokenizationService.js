const test = require('ava')
const sanitize = require('./../services/tokenization')

test.serial(
  'Files are correctly mapped to Shopify theme destination',
  async (t) => {
    const tokens = await sanitize(
      [
        '/foo/src/sections/product-template.liquid',
        '/foo/src/modules/product.template.liquid',
        '/foo/src/modules/product/product-test.template.liquid',
        '/foo/src/templates/customers/account.liquid',
        '/foo/src/snippets/product-template.liquid'
      ],
      []
    )
    t.true(
      tokens.every(({ theme }, i) => {
        if (i === 0) {
          return theme === 'sections/product-template.liquid'
        }
        if (i === 1) {
          return theme === 'templates/product.liquid'
        }
        if (i === 2) {
          return theme === 'templates/product-test.liquid'
        }
        if (i === 3) {
          return theme === 'templates/customers/account.liquid'
        }
        if (i === 4) {
          return theme === 'snippets/product-template.liquid'
        }
        return false
      })
    )
  }
)
