module.exports = {
  themes: {
    development: {
      theme: process.env.THEME_ID,
      password: process.env.PASSWORD,
      store: process.env.STORE,
      ignore: [
        'config/settings_data.json'
      ]
    },
    production: {
      theme: process.env.THEME_ID,
      password: process.env.PASSWORD,
      store: process.env.STORE,
      ignore: [
        'config/settings_data.json'
      ]
    }
  },
  babel: {
    plugins: [
      '@babel/plugin-proposal-object-rest-spread'
    ],
    "sourceMaps": true,
    "presets": [
      "@babel/preset-env"
    ],
  },
  'path.cdn': 'https://cdn.shopify.com/s/files/1/0234/4347/2480/t/25/assets/',
  open: false
}
