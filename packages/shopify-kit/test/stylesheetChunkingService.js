const test = require('ava')
const sinon = require('sinon')
const fs = require('fs-extra')
const path = require('path')
const chunkStylesheets = require('./../services/stylesheetChunking')

const settings = require('@halfhelix/configure/src/defaults/css')
settings['path.src'] = '/dummy/user/src/'
settings['path.dist'] = '/dummy/user/dist'

const mock = require(path.resolve(__dirname, './mocks/main.min.css.liquid'))

function getFileWriteData(t, filePath) {
  return t.context.spy.withArgs(`/dummy/user/${filePath}`).args[0][1]
}
function getFileWriteCall(t, filePath) {
  return t.context.spy.withArgs(`/dummy/user/${filePath}`)
}
test.before((t) => {
  fs.existsSync = sinon.stub().returns(true)
  fs.readFileSync = sinon.stub().returns(mock)
  t.context.spy = fs.outputFileSync = sinon.stub()
})

test.afterEach((t) => {
  t.context.spy.resetHistory()
})

test.serial('Outputs file stylesheet snippet', async (t) => {
  await chunkStylesheets(['/dummy/user/assets/main.min.css.liquid'], settings)
  t.true(
    t.context.spy.withArgs('/dummy/user/dist/snippets/stylesheets.liquid')
      .called
  )
})

test.serial('Renders request.type and templates.suffix', async (t) => {
  const output = chunkStylesheets.createLiquidSnippet(
    require('./mocks/fileTokens'),
    settings
  )
  const conditionals = output.match(/\{\%.[^}]*\%\}/gi)
  t.true(!!~conditionals[0].indexOf(`request.page_type contains '404'`))
  t.true(!!~conditionals[1].indexOf(`request.page_type contains 'product'`))
  t.true(
    !!~conditionals[2].indexOf(
      `request.page_type contains 'page' and template.suffix contains 'faq'`
    )
  )
})

test.serial('Reviews partial is rolled chunk', async (t) => {
  await chunkStylesheets(
    ['/dummy/user/assets/main.min.css.liquid'],
    Object.assign({}, settings, {
      'css.chunk.partials': {
        reviews: ['product', 'account']
      }
    })
  )

  const accountStyles = getFileWriteData(t, 'assets/account.min.css.liquid')
  const productStyles = getFileWriteData(t, 'assets/product.min.css.liquid')
  const reviewStyles = getFileWriteCall(t, 'assets/reviews.min.css.liquid')

  t.false(reviewStyles.called)
  t.true(!!~productStyles.indexOf('product-reviews'))
  t.true(!!~productStyles.indexOf('reviews-form'))
  t.true(!!~accountStyles.indexOf('product-reviews'))
  t.true(!!~accountStyles.indexOf('reviews-form'))
})

test.serial('Honors main file mime type', async (t) => {
  await chunkStylesheets(
    ['/dummy/user/assets/main.min.css'],
    Object.assign({}, settings)
  )
  const accountStyles = getFileWriteCall(t, 'assets/account.min.css')
  t.true(accountStyles.called)
})

test.serial('Critical CSS writes non critical main file', async (t) => {
  await chunkStylesheets(
    ['/dummy/user/dist/assets/main.min.css'],
    Object.assign({}, settings, {
      'css.chunk.critical': true
    })
  )
  const nonCriticalMainStyles = getFileWriteCall(
    t,
    'dist/assets/main-non-critical.min.css'
  )
  t.true(nonCriticalMainStyles.called)
})

test.serial('Critical CSS uses liquid template markup', async (t) => {
  await chunkStylesheets(
    ['/dummy/user/dist/assets/main.min.css'],
    Object.assign({}, settings, {
      'css.chunk.critical': true
    })
  )

  const liquidSnippet = getFileWriteCall(t, 'dist/snippets/stylesheets.liquid')
    .args[0][1]

  t.true(!!~liquidSnippet.indexOf('kit_chunked_styles'))
})

test.serial('Critical CSS does not use liquid template markup', async (t) => {
  await chunkStylesheets(
    ['/dummy/user/dist/assets/main.min.css'],
    Object.assign({}, settings, {
      'css.chunk.critical': false
    })
  )

  const liquidSnippet = getFileWriteCall(t, 'dist/snippets/stylesheets.liquid')
    .args[0][1]

  t.true(!~liquidSnippet.indexOf('kit_chunked_styles'))
})

test.serial('Critical CSS conditionally does remove critical', async (t) => {
  await chunkStylesheets(
    ['/dummy/user/dist/assets/main.min.css'],
    Object.assign({}, settings, {
      'css.chunk.critical': true
    })
  )

  const produceStyles = getFileWriteCall(t, 'dist/assets/product.min.css')
    .args[0][1]
  t.true(!~produceStyles.indexOf('/*! critical */'))
})

test.serial(
  'Critical CSS conditionally does not remove critical',
  async (t) => {
    await chunkStylesheets(
      ['/dummy/user/dist/assets/main.min.css'],
      Object.assign({}, settings, {
        'css.chunk.critical': false
      })
    )

    const produceStyles = getFileWriteCall(t, 'dist/assets/product.min.css')
      .args[0][1]
    t.true(!!~produceStyles.indexOf('/*! critical */'))
  }
)
