const test = require('ava')
const sinon = require('sinon')
const utils = require('@halfhelix/configure').utils
const {
  prepareDistRepo,
  prepareTempRepo,
  commitAndPush,
  copyOverBuiltFiles
} = require('./../services/github')

const settings = require('@halfhelix/configure/src/defaults/git')
settings['git.builtThemeRepositoryUrl'] = 'git+foo'
settings['git.srcThemeRepositoryUrl'] = 'git+bar'
settings['path.dist'] = '/dist'
settings['path.temp'] = '/temp'
settings['path.cwd'] = '/foo'
settings['git.filesToCopyToBuiltTheme'] = ['.foo-config', '.bar']
settings['path.mapping-json'] = '.kit-mapping.json'

test.before((t) => {
  t.context.getBranch = sinon.stub(utils, 'getBranch').returns('feature/foo')
  t.context.exec = sinon.stub(utils, 'exec').callsFake((command) => {
    if (command === 'git ls-tree -r feature/foo --name-only')
      return {
        stdout: `templates/bar.liquid\ntemplates/foo.liquid`,
        stderr: ''
      }
    return {
      stdout: '',
      stderr: ''
    }
  })
  t.context.emptyDir = sinon.stub(utils, 'emptyDir')
  t.context.pathExists = sinon.stub(utils, 'pathExists').callsFake((path) => {
    if (~path.indexOf('.git')) return false
    return true
  })
  t.context.copyPath = sinon.stub(utils, 'copyPath')
  t.context.readJson = sinon.stub(utils, 'readJson').callsFake((path) => {
    if (path === '/foo/.kit-mapping.json') return {}
  })
})

test.beforeEach((t) => {
  t.context.exec.resetHistory()
  t.context.getBranch.resetHistory()
  t.context.emptyDir.resetHistory()
  t.context.pathExists.resetHistory()
  t.context.copyPath.resetHistory()
  t.context.readJson.resetHistory()
})

test.serial('prepareDistRepo runs through 5 git interactions', async (t) => {
  await prepareDistRepo(Object.assign({}, settings))
  t.true(
    t.context.exec.getCall(0).args[0] === 'git init /dist --initial-branch noop'
  )
  t.true(
    t.context.exec.getCall(1).args[0] ===
      'cd /dist && git remote add slave git+foo'
  )
  t.true(
    t.context.exec.getCall(2).args[0] ===
      'git ls-remote --exit-code -h "git+foo"'
  )
  t.true(t.context.exec.getCall(3).args[0] === 'cd /dist && git fetch slave')
  t.true(
    t.context.exec.getCall(4).args[0] ===
      'cd /dist && git checkout -b feature/foo'
  )
  t.true(t.context.exec.getCalls().length === 5)
})

test.serial('prepareTempRepo runs through 5 git interactions', async (t) => {
  await prepareTempRepo(Object.assign({}, settings))
  t.true(
    t.context.exec.getCall(0).args[0] === 'git init /temp --initial-branch noop'
  )
  t.true(
    t.context.exec.getCall(1).args[0] ===
      'cd /temp && git remote add slave git+bar'
  )
  t.true(
    t.context.exec.getCall(2).args[0] ===
      'git ls-remote --exit-code -h "git+bar"'
  )
  t.true(t.context.exec.getCall(3).args[0] === 'cd /temp && git fetch slave')
  t.true(
    t.context.exec.getCall(4).args[0] ===
      'cd /temp && git checkout -b feature/foo'
  )
  t.true(t.context.exec.getCalls().length === 5)
})

test.serial('commitAndPush runs through 3 git interactions', async (t) => {
  await commitAndPush(Object.assign({}, settings))
  t.true(t.context.exec.getCall(0).args[0] === 'cd /dist && git status')
  t.true(
    t.context.exec.getCall(1).args[0] ===
      'cd /dist &&  git add . && git commit -am "Update from corresponding remote code repository"'
  )
  t.true(
    t.context.exec.getCall(2).args[0] ===
      'cd /dist && git push slave --set-upstream feature/foo'
  )
  t.true(t.context.exec.getCalls().length === 3)
})

test.serial('copyOverBuiltFiles copies over 2 theme files', async (t) => {
  await copyOverBuiltFiles(Object.assign({}, settings))
  t.true(t.context.copyPath.getCalls().length === 2)
})
