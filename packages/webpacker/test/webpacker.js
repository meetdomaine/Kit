const test = require('ava')
const sinon = require('sinon')
const webpacker = require('../webpacker')
const cloneDeep = require('lodash.clonedeep')

let settings = require('@halfhelix/configure').settings
settings['path.src'] = '/dummy/user/src/'
settings['path.dist'] = '/dummy/user/dist'
settings['webpack'] = require('./mocks/webpack.config')
const defaults = cloneDeep(settings)

test.beforeEach((t) => {
  t.context.settings = cloneDeep(defaults)
})

const consoleHelpers = require('./../src/console')
consoleHelpers.interceptConsole = sinon.stub()

test('Webpack returns set of compiled files on build', async (t) => {
  const files = await webpacker(t.context.settings)
  t.true(files.length === 18)
})

test('Config is correctly configured in staging', async (t) => {
  const stub = sinon.stub(t.context.settings, 'js.overrideWebpack')
  await webpacker({
    ...t.context.settings,
    env: 'staging'
  })
  t.true(stub.getCall(0).args[0].mode === 'production')
  t.true(stub.getCall(0).args[0].devtool === '')
})

test('Config is correctly configured in production', async (t) => {
  const stub = sinon.stub(t.context.settings, 'js.overrideWebpack')
  await webpacker({
    ...t.context.settings,
    env: 'production'
  })
  t.true(stub.getCall(0).args[0].mode === 'production')
  t.true(stub.getCall(0).args[0].devtool === '')
})

test('Plugins are correctly set in in production', async (t) => {
  process.env.NODE_ENV = 'production'
  const stub = sinon.stub(t.context.settings, 'js.overrideWebpack')
  await webpacker({
    ...t.context.settings,
    task: 'build'
  })
  const plugins = stub.getCall(0).args[0].plugins
  t.true(
    [
      'stylelint-webpack-plugin',
      'extract-text-webpack-plugin',
      'babel-minify-webpack-plugin',
      'NoEmitOnErrorsPlugin',
      'DefinePlugin',
      'dynamic-public-path-webpack-plugin'
    ].every((name, index) => {
      return !!~plugins[index].name.indexOf(name)
    })
  )
})

test('Plugins are correctly set in watch command', async (t) => {
  process.env.NODE_ENV = 'development'
  const stub = sinon.stub(t.context.settings, 'js.overrideWebpack')
  await webpacker.watch({
    ...t.context.settings,
    task: 'watch'
  })
  const plugins = stub.getCall(0).args[0].plugins
  t.true(
    [
      'stylelint-webpack-plugin',
      'SourceMapDevToolPlugin',
      'HotModuleReplacementPlugin',
      'NoEmitOnErrorsPlugin',
      'DefinePlugin'
    ].every((name, index) => {
      return !!~plugins[index].name.indexOf(name)
    })
  )
})
