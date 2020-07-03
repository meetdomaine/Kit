const test = require('ava')
const sinon = require('sinon')
const fs = require('fs-extra')
const path = require('path')
const chunkStylesheets = require('./../src/stylesheetChunkingService')

const settings = require('@halfhelix/configure/src/defaults/css')
settings['path.src'] = '/dummy/user/src/'
settings['path.dist'] = '/dummy/user/dist'

const files = ['/dummy/user/assets/main.min.css.liquid']
const mock = require(path.resolve(__dirname, './mocks/main.min.css.liquid'))

test.before((t) => {
  fs.existsSync = sinon.stub().returns(true)
  fs.readFileSync = sinon.stub().returns(mock)
  t.context.spy = fs.outputFileSync = sinon.stub()
})

test.afterEach((t) => {
  t.context.spy.resetHistory()
})

test('Outputs file stylesheet snippet', async (t) => {
  await chunkStylesheets(files, settings)
  t.true(
    t.context.spy.withArgs('/dummy/user/dist/snippets/stylesheets.liquid')
      .called
  )
})

test('Renders request.type and templates.suffix conditionals', async (t) => {
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
