const { addHook } = require('pirates')

addHook(
  () => {
    return `
  module.exports = () => Promise.resolve()
  `
  },
  {
    exts: ['.js'],
    ignoreNodeModules: false,
    matcher(filename) {
      return !!~filename.indexOf('w2t')
    }
  }
)

addHook(
  () => {
    return `
  module.exports = {
    action () {
      return {
        succeed () {}
      }
    },
    completedAction () {},
    genericListBox () {}
  }
  `
  },
  {
    exts: ['.js'],
    ignoreNodeModules: false,
    matcher(filename) {
      return !!~filename.indexOf('terminal-kit')
    }
  }
)
