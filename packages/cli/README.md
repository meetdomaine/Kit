![](https://i.imgur.com/emcU0vv.gif)

***Installation:***
```
npm i -g @halfhelix/kit
```

This is a toolkit that we use internally at Half Helix to develop our frontend Shopify themes. It enables us to develop websites the way that we want to, with a focus on modularity.

#### Core technologies included:
- Webpack
- Webpack Dev Middleware
- Sass
- Babel
- BrowserSync
- Eslint
- Stylelint

#### Core Benefits:
- Compile easily and quickly with Webpack
- See Javascript and CSS changes without a round-trip to Shopify
- Browser Reloading after Liquid file upload to Shopify
- Proxy the Shopify instance with BrowserSync
- Lint CSS and Javascript with Eslint and Stylelint
- Compile SASS and autoprefix on build (with sourcemaps in dev)
- Leverage individual module folders (see below)
- Automatic JS module chunking
- Concatination of Shopify settings schema from multiple JSON files

#### Commands
Run these commands from the root of the theme
```
kit build  --env [production|staging|development]
kit deploy --env [production|staging|development]
kit watch  --env [production|staging|development]
```

#### Theme architecture

```
.env
kit.config.js
webpack.config.js
...
src
  |- assets
  |  |- css
  |  |  |- lib
  |  |
  |  |- js
  |  |  |- lib
  |  |
  |  |- images
  |  |- fonts
  |
  |- config
  |  |- lib
  |     |- section-a.json
  |     |- section-b.json
  |
  |- layout
  |- locales
  |- sections
  |- snippets
  |  |- zendesk.liquid
  |
  |- templates
  |- modules
     |- header
     |  |- header.js
     |  |- header.liquid
     |  |- header.scss
     |
     |- footer
     |- newsletter-signup
     |- ...
```

Here, the header, footer and newsletter-signup code is encapsulated inside module folders, in this example. These module folders are a concept that helps us reuse code and keep track of logic, markup and styles across complex themes.

This toolbelt enables this architecture by supporting glob patterns like the examples provided below.
```
// main.scss
// Our Webpack loader takes this glob pattern and injects found
// files into the bundle.
@import "modules/**/*.scss";

// main.js
// Our Webpack loader similarly takes this glob pattern and
// injects found files into the bundle. It'll also chunk the
// files together based on folder.
import 'modules/**/*.js'

```
In addition to style and Javascript files, Liquid is taken out of these module folders and sent to the Snippets, Sections or Templates theme directories. For example:

```
src/modules/header/header.liquid > snippets/header.liquid
src/modules/global/header/header.liquid > snippets/header.liquid
src/modules/header/header.section.liquid > sections/header.liquid
src/modules/cart/cart.template.liquid > templates/header.liquid
```

#### Configuration

The toolkit can be configured through a `kit.config.js` file that must be present in the root of the theme. In addition, an `.env` file is supported to store secrets that should not be stored in Git.

```
// .env (Git ignore)
THEME_ID=xxxx
PASSWORD=xxxx
STORE=xxxx.myshopify.com

// kit.config.js (store in Git)
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
    staging: {
      ...
    },
    production: {
      ...
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
  'path.cdn': 'https://cdn.shopify.com/s/files/1/0234/4347/2480/t/25/assets/'
}
```

#### All kit.config.js options (with defaults)

```
{
  // Environment-specific theme configuration
  // The current environment's theme settings are merged
  // in with the global settings object at runtime
  'themes': {
      development: {},
      staging: {},
      production: {}
  },

  // Babel configuration
  'babel': {},

  // Path to Webpack config.js
  'path.webpack': `${CWD}/webpack.config.js`,

  // Path to folder that the built theme will be compiled to
  'path.dist': `${CWD}/dist`,

  // Path to theme src files
  'path.src': `${CWD}/src`,

  // URL root of assets when accessed in the 'watch' command
  'path.public': `/dev/`,

  // The HMR resource that is added to the bundle in 'watch'
  'path.hmr': 'webpack-hot-middleware/client?reload=true',

  // The theme's CDN URL (used in 'watch' only, relates to "addShopifyLoader")
  'path.cdn': 'https://cdn.shopify.com/replace-this',

  // The global variable used in production to reference the Shopify CDN
  'cdnPathVar': '__GLOBAL__.cdn',

  // The log file to use for non-errors (See 'logging')
  'path.stdout': `${CWD}/node_modules/.logs/kit-stdout.log`,

  // The log file to use for errors (See 'logging')
  'path.stderr': `${CWD}/node_modules/.logs/kit-stderr.log`,

  // The function to return the BrowserSync proxy target URL
  'target': (settings) => {
    return `https://${(settings.domain || settings.store)}?preview_theme_id=${settings['theme']}`
  },

  // The Shopify theme custom domain, if enabled on the instance
  'domain': false, // e.g 'shop.halfhelix.com'

  // The local URL that should be used to access the proxy
  'local': 'localhost',

  // Customizes the placement of the BrowserSync snippet in 'watch'
  'browserSyncSnippetPlacement' (settings) {
    return {
      match: /<\/body>/i,
      fn: function (snippet, match) {
        return snippet + match;
      }
    }
  },

  // Should Webpack Hot Module Reloading be enabled?
  'hmr': true,

  // Ignore certain files from being uploaded to Shopify
  // Can be on this global level or on the theme level
  'ignore': [
    'config/settings_data.json'
  ],

  // Should styles be linted with Stylelint?
  'lintStyles': true,

  // What files should be linted with Stylelint?
  'stylelintPaths' (settings) {
    return [
      `src/assets/css/*.scss`,
      `src/modules/**/*.scss`,
      `src/sections/**/*.scss`
    ]
  },

  // Should CSS be autoprefixed in the 'watch' command?
  'autoprefixInDev': false,

  // Should BrowserSync automatically open a new tab in 'watch'?
  'open': true,

  // What files should be watched for changes in 'watch'?
  'watch': (settings) => {
    return `${settings['path.src']}/**/*`
  },

  // What is the name of the CSS file generated in 'build|deploy'?
  'cssName': '[name].min.css.liquid',

  // The delay between the Shopify upload and the browser reload
  'reloadDelay': 700,

  // Customize the order of assets returned in the CSS/ JS globs
  'sortFunction': false, // (files = [], javascript?) => {}

  // Perform replacements of asset strings with 'watch'
  'replaceAssets': true,

  // The theme HTML asset strings to dynamically replace. We do this
  // to support Hot Module Reloading in 'watch'
  'proxyReplacements': [{
    'regex': /<script.*main(?:[.]min)?[.]js.[^>]*><\/script>/ig,
    'replacement' () {}
  },{
    'regex': /<link.*main(?:[.]min)?[.]css.[^>]*>/ig,
    'replacement' (settings) {
      return `<script src="${settings['path.public']}/main.js"></script>`
    }
  }],

  // Auto-chunk the main JS bundle based on module parent directory
  'autoChunk': true,

  // Interpret {{ ... | asset_url }} tags in Sass files, in 'watch'
  // The 'path.cdn' is used to replace the 'asset_url' filter
  'addShopifyLoader': true,

  // Always log errors and info to the console
  'debug': false
}
```

#### Webpack configuration

This example provides the necessary elements of the Webpack configuration file required in the root of the theme. It is our recommendation to follow this and deviate with care, in these initial versions at least.

```
// webpack.config.js
module.exports = {
  devtool: 'eval-source-map',
  optimization: {
    splitChunks: {
      automaticNameDelimiter: '-',
    }
  },
  entry: {
    "main": [
      './src/assets/css/main.scss',
      './src/assets/js/main'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist/assets'),
    filename: '[name].js',
    chunkFilename: `[name].js?version=${Date.now()}`
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        extract: true,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
    ]
  },
  resolve: {
    alias: {...},
  }
}

```

#### Logging

Most logs from core dependencies are relayed directly to the console. However, there are certain compilation logs that Webpack and other dependencies do not provide configuration access to, and that we occasionally want to silence. When compilation occurs, we redirect these outputs to log files rather than directly to the browser. However, this can be turned off via the `debug` setting.

#### Roadmap

1. Renaming of Shopify theme/s upon deployment
2. Theme scaffolding command/s
3. Critical CSS support baked in
4. Liquid linting (in progress...)

#### Bugs & Missing Information

This package is currently unstable and in it's initial stages. Expect bugs and missing information. We encourage you to submit tickets and let us know the issues you are experiencing! Keep in mind that our current priority is to enable our internal developers so expect delays for general bug reports.