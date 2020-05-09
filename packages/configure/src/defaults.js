module.exports = {
  ...require('./defaults/path'),
  ...require('./defaults/git'),
  ...require('./defaults/themeName'),
  cdnPathVar: '__GLOBAL__.cdn',
  theme: '',
  password: '',
  store: '',
  target: (settings) => {
    return `https://${settings.domain || settings.store}?preview_theme_id=${
      settings['theme']
    }`
  },
  domain: false,
  local: 'localhost',
  browserSyncSnippetPlacement(settings) {
    return {
      match: /<\/body>/i,
      fn: function (snippet, match) {
        return snippet + match
      }
    }
  },
  hmr: true,
  ignore: ['config/settings_data.json'],
  webpack: {},
  lintStyles: true,
  stylelintPaths(settings) {
    return [
      // `src/assets/css/**/*.scss`,
      `src/assets/scss/**/*.scss`,
      `src/modules/**/*.scss`,
      `src/sections/**/*.scss`
    ]
  },
  isCI() {
    return !!process.env.CI_JOB_NAME
  },
  autoprefixInDev: false,
  open: false,
  watch: (settings) => {
    return `${settings['path.src']}/**/*`
  },
  cssName: '[name].min.css.liquid',
  bypassWebpack: false,
  reloadDelay: 700,
  sortFunction: false,
  replaceAssets: true,
  proxyReplacements: [
    {
      regex: /<script.*main(?:[.]min)?[.]js.[^>]*><\/script>/gi,
      replacement() {}
    },
    {
      regex: /<link.*main(?:[.]min)?[.]css.[^>]*>/gi,
      replacement(settings) {
        return `<script src="${settings['path.public']}/main.js"></script>`
      }
    }
  ],
  autoChunk: true,
  addShopifyLoader: true,
  mock: false,
  mockTarget() {
    return `http://localhost:8080`
  },
  debug: false,
  writeWebpackOutputToFile: false
}
