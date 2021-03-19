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
})

test.serial(
  'Focus: Three assets are successfully sent to Shopify',
  async (t) => {
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
  }
)

test.serial('Focus: Three assets errors are flagged', async (t) => {
  const interceptor = createApiMock(500, () => ({ errors: 'foo' }))

  const success = await assetUpload(settings).sync(
    [
      'layout/theme.liquid',
      'snippet/foo.liquid',
      'snippet/bar.liquid'
    ].map((theme) => ({ theme, content: '' }))
  )

  t.true(interceptor.interceptors[0].interceptionCounter == 3)
  t.true(interceptor.isDone())
  t.true(success === false)
})
