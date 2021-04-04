const test = require('ava')
const molecules = require('./../src/molecules')
const logger = require('./../src/utils')

test.beforeEach((t) => {
  logger.testing.isActive = true
})

test.afterEach((t) => {
  logger.testing.isActive = false
  logger.testing.logs = []
})

test.serial(
  'Box component logs 3 entries when null and undefined passed in',
  async (t) => {
    molecules.box('TESTING', undefined, null)
    t.true(logger.testing.logs.length === 3)
  }
)

test.serial(
  'Box component logs 3 entries when null passed in twice',
  async (t) => {
    molecules.box(null, null)
    t.true(logger.testing.logs.length === 3)
  }
)

test.serial(
  'Box component logs 3 entries when null passed in once',
  async (t) => {
    molecules.box(null)
    t.true(logger.testing.logs.length === 3)
  }
)

test.serial(
  'TruncatingBox component logs 3 entries when null & undefined passed in',
  async (t) => {
    molecules.truncatingBox(null, null, undefined)
    t.true(logger.testing.logs.length === 3)
  }
)
