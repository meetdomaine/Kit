const utils = require('./src/utils')
const atoms = require('./src/atoms')
const molecules = require('./src/molecules')
const organisms = require('./src/organisms')
const protect = require('./protect')

module.exports = {
  protect,
  ...utils,
  ...atoms,
  ...molecules,
  ...organisms
}