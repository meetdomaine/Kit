const test = require('ava')
const assetUpload = require('./../services/assetUpload')
const nock = require('nock')

const settings = require('@halfhelix/configure/src/defaults/shopify')
settings['store'] = 'dummystore.myshopify.com'
settings['theme'] = 'dummytheme'
settings['ignore'] = []
settings['isCI'] = () => false
settings['shopify.requestsPerInterval'] = 4
settings['shopify.interval'] = 1000
settings['shopify.retryUploadErrors'] = false

const createApiMock = (
  code = 200,
  response = (request) => ({
    asset: request.asset.key
  })
) => {
  return nock('https://dummystore.myshopify.com')
    .persist()
    .put(/\/themes\/dummytheme\/assets.json/)
    .reply(code, (uri, request) => {
      return response(request)
    })
}

test.afterEach((t) => {
  nock.cleanAll()
  settings['shopify.retryUploadErrors'] = false
})

test.serial('Three assets are successfully sent to Shopify', async (t) => {
  const interceptor = createApiMock()

  await assetUpload(settings).sync(
    [
      'layout/theme.liquid',
      'snippet/foo.liquid',
      'snippet/bar.liquid'
    ].map((theme) => ({ theme, content: '' }))
  )

  t.true(interceptor.interceptors[0].interceptionCounter == 3)
  t.true(interceptor.isDone())
})

test.serial('Five assets errors are flagged', async (t) => {
  const interceptor = createApiMock(500, (request) => {
    if (request.asset.key === 'layout/theme.liquid') {
      return {
        errors: ['A HTML syntax error was found', 'Cannot override file']
      }
    }
    if (request.asset.key === 'snippet/foo.liquid') {
      return {
        errors: 'Exceeded 4 calls per second for api client.'
      }
    }
    if (request.asset.key === 'snippet/bar.liquid') {
      return {
        errors: {
          0: 'If statement was never closed',
          1: 'Unless statement was never closed'
        }
      }
    }
    return { errors: 'Catchall error' }
  })

  const errors = await assetUpload(settings).sync(
    [
      'layout/theme.liquid',
      'snippet/foo.liquid',
      'snippet/bar.liquid'
    ].map((theme) => ({ theme, content: '' }))
  )

  t.true(interceptor.interceptors[0].interceptionCounter == 3)
  t.true(interceptor.isDone())
  t.true(errors.firstRunErrors.length === 5)
})
