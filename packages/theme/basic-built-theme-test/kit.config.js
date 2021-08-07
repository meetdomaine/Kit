module.exports = {
  themes: {
    development: {
      theme: process.env.THEME_ID,
      password: process.env.PASSWORD,
      store: process.env.STORE,
      ignore: ['config/settings_data.json']
    },
    production: {
      theme: process.env.THEME_ID,
      password: process.env.PASSWORD,
      store: process.env.STORE,
      ignore: ['config/settings_data.json']
    }
  },
  'git.builtThemeRepositoryUrl': process.env.BUILT_THEME_REPO_URL,
  'git.srcThemeRepositoryUrl': process.env.SRC_THEME_REPO_URL,
  babel: {
    plugins: ['@babel/plugin-proposal-object-rest-spread'],
    sourceMaps: true,
    presets: ['@babel/preset-env']
  }
}
