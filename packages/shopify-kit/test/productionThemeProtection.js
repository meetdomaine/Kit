const test = require('ava')
const sinon = require('sinon')
const fs = require('fs-extra')
const path = require('path')
const nock = require('nock')
const {
  prepareForDeployment,
  getThemeInformation
} = require('./../shopify-kit')

const settings = require('@halfhelix/configure/src/defaults/shopify')
settings['path.src'] = '/dummy/user/src/'
settings['path.dist'] = '/dummy/user/dist'
settings['css.chunk.snippet'] = 'snippets/stylesheet.liquid'
settings['store'] = 'dummystore.myshopify.com'
settings['theme'] = 'dummytheme'
settings['ignore'] = []
settings['shopify.clearGeneratedFiles'] = () => {
  return true
}
settings['$emit'] = () => {}

test.before((t) => {
  // fs.existsSync = sinon.stub().returns(true)
  // fs.readFileSync = sinon.stub().returns(mock)

  t.context.outputFileSync = fs.outputFileSync = sinon.stub()
  t.context.processExit = sinon.stub(process, 'exit')
})

test.beforeEach((t) => {
  t.context.getThemeMock = nock('https://dummystore.myshopify.com')
    .get(/\/themes\/dummytheme.json/)
    .reply(200, {
      theme: {
        role: 'main'
      }
    })

  t.context.updateAssetMock = nock('https://dummystore.myshopify.com')
    .put(/\/themes\/dummytheme\/assets.json/)
    .reply(200, (uri, request) => {
      return {
        asset: request.asset.key
      }
    })
})

test.afterEach((t) => {
  t.context.outputFileSync.resetHistory()
  t.context.processExit.resetHistory()
  nock.cleanAll()
})

test.serial(
  "Don't clear theme assets if production theme and setting set",
  async (t) => {
    await getThemeInformation(
      Object.assign({}, settings, {
        'shopify.restrictLiveTheme': () => true
      })
    )
    t.true(t.context.processExit.called)
  }
)

test.serial(
  'Clear theme assets if production theme and setting not set',
  async (t) => {
    const settingsObj = Object.assign({}, settings, {
      'shopify.restrictLiveTheme': () => false
    })
    await getThemeInformation(settingsObj)
    await prepareForDeployment(settingsObj)

    t.true(!t.context.processExit.called)
    t.true(t.context.updateAssetMock.isDone())
  }
)
