const test = require('ava')
const sinon = require('sinon')
const fs = require('fs-extra')
const path = require('path')
const nock = require('nock')
const { prepareForDeployment } = require('./../shopify-kit')

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

test.before((t) => {
  // fs.existsSync = sinon.stub().returns(true)
  // fs.readFileSync = sinon.stub().returns(mock)

  t.context.spy = fs.outputFileSync = sinon.stub()
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
  t.context.spy.resetHistory()
  nock.cleanAll()
})

test.serial(
  "Don't clear theme assets if production theme and setting set",
  async (t) => {
    try {
      await prepareForDeployment(
        Object.assign({}, settings, {
          'shopify.dontClearOnLive': true
        })
      )
    } catch (e) {
      t.pass()
    }
  }
)

test.serial(
  'Error is not thrown if clearGeneratedFiles is false',
  async (t) => {
    await prepareForDeployment(
      Object.assign({}, settings, {
        'shopify.dontClearOnLive': true,
        'shopify.clearGeneratedFiles': () => false
      })
    )
    t.pass()
  }
)

test.serial(
  'Clear theme assets if production theme and setting not set',
  async (t) => {
    await prepareForDeployment(
      Object.assign({}, settings, {
        'shopify.dontClearOnLive': false
      })
    )
    t.true(t.context.updateAssetMock.isDone())
  }
)
