const path = require('path')

const {
  CWD
} = require('./../constants')

module.exports = {
  'package': require(path.normalize(`${CWD}/package.json`)),
  'path.config': [
    path.normalize(`${CWD}/kit.config.js`),
    path.normalize(`${CWD}/config.yml`)
  ],
  'path.cwd': path.normalize(`${CWD}`),
  'path.webpack': path.normalize(`${CWD}/webpack.config.js`),
  'path.dist': path.normalize(`${CWD}/dist`),
  'path.src': path.normalize(`${CWD}/src`),
  'path.public': `/dev/`,
  'path.hmr': 'webpack-hot-middleware/client?reload=true',
  'path.cdn': 'https://cdn.shopify.com/replace-this',
  'path.stdout': path.normalize(`${CWD}/node_modules/.logs/kit-stdout.log`),
  'path.stderr': path.normalize(`${CWD}/node_modules/.logs/kit-stderr.log`)
}