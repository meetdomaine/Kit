![](https://i.imgur.com/emcU0vv.gif)

**_Installation:_**

```
npm i -g @halfhelix/kit
```

This is a toolkit that we use internally at Half Helix to develop our frontend Shopify themes. It enables us to develop websites the way that we want to, with a focus on modularity.

> This package is currently in Beta. It is likely to change quickly as we prepare it for initial release.

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
# Compile the theme and save it to your local directory
kit build  --env [production|staging|development]

# Build and deploy the theme to Shopify
kit deploy --env [production|staging|development]

# Setup a dev environment with BrowserSync
# Changed files are deployed to Shopify
# JS and CSS are compiled and served to the browser from memory
kit watch  --env [production|staging|development]

# A helper command to help with defining critical styles
# Compiles and deploys CSS-specific files in a watch-based environment
# --upload defines a single file to upload, in addition to the main css file and liquid snippet
# --close closes the session without watching for file changes
kit critical --env [production|staging|development] --upload [filename] --close
```

#### Shopify theme architecture

We have plans to release the starter theme we use for our Shopify sites over time to sit alongside this toolkit. In the meantime, see here for a little information about how our these are structured. This is the environment in which this toolkit is used.

```
.env
.eslintrc.js
.stylelintrc.js
kit.config.js
webpack.config.js
...
src
  |- assets
  |  |- scss
  |  |  |- lib
  |  |  |- main.scss
  |  |
  |  |- js
  |  |  |- lib
  |  |  |- main.js
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
  |  |- gtm.liquid
  |  |- no-index.liquid
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
src/modules/cart/cart.template.liquid > templates/cart.liquid
```

#### Configuration

The toolkit can be configured through a `kit.config.js` file that must be present in the root of the theme. In addition, an `.env` file is supported to store secrets that should not be stored in Git.

```bash
# .env (Git ignore)
THEME_ID=xxxx
PASSWORD=xxxx
STORE=xxxx.myshopify.com
```

```javascript
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

#### Basic kit.config.js options (with defaults)

There are 50+ settings that can be configured in the kit.config.js file that adjust how the build and deployment process functions, as well as settings that help with debugging issues. See below for a subset of the standard options along with their default values.

```javascript
{
  // Environment-specific theme configuration
  // The current environment's theme settings are merged
  // in with the global settings object at runtime
  'themes': {
      development: {},
      staging: {},
      production: {}
  },

  // The Shopify theme custom domain, if enabled on the instance
  // This is needed if the *Redirect to Primary Domain* Shopify setting is on
  'domain': false, // e.g 'shop.halfhelix.com'

  // What files should be watched for changes in 'watch'?
  'watch': (settings) => {
    return `${settings['path.src']}/**/*`
  },

  // Ignore certain files from being uploaded to Shopify
  // Can be on this global level or on the theme level
  'ignore': [
    'config/settings_data.json'
  ],

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

  // The log file to use for non-errors (See 'logging')
  'path.stdout': `${CWD}/node_modules/.logs/kit-stdout.log`,

  // The log file to use for errors (See 'logging')
  'path.stderr': `${CWD}/node_modules/.logs/kit-stderr.log`,

  // Should styles be linted with Stylelint?
  'css.lintStyles': true,

  // What files should be linted with Stylelint?
  'css.stylelintPaths' (settings) {
    return [
      `src/assets/scss/**/*.scss`,
      `src/modules/**/*.scss`,
      `src/sections/**/*.scss`
    ]
  },

  // What is the name of the CSS file generated in 'build|deploy'?
  'css.mainFileName': '[name].min.css.liquid',

  // The function to return the BrowserSync proxy target URL
  'bs.target': (settings) => {
    return `https://${(settings.domain || settings.store)}?preview_theme_id=${settings['theme']}`
  },

  // The local URL that should be used to access the proxy
  'bs.local': 'localhost',

  // Customizes the placement of the BrowserSync snippet in 'watch'
  'bs.browserSyncSnippetPlacement' (settings) {
    return {
      match: /<\/body>/i,
      fn: function (snippet, match) {
        return snippet + match;
      }
    }
  },

  // Should BrowserSync automatically open a new tab in 'watch'?
  'bs.open': true,

  // The delay between the Shopify upload and the browser reload
  'bs.reloadDelay': 700,

  // Perform replacements of asset strings with 'watch'
  'bs.replaceAssets': true,

  // The theme HTML asset strings to dynamically replace. We do this
  // to support Hot Module Reloading in 'watch'
  'bs.proxyReplacements': [{
    'regex': /<script.*main(?:[.]min)?[.]js.[^>]*><\/script>/ig,
    'replacement' () {}
  },{
    'regex': /<link.*main(?:[.]min)?[.]css.[^>]*>/ig,
    'replacement' (settings) {
      return `<script src="${settings['path.public']}/main.js"></script>`
    }
  }],

  // Should Webpack Hot Module Reloading be enabled?
  'js.hmr': true,

  // Should CSS be autoprefixed in the 'watch' command?
  'js.autoprefixInDev': false,

  // Customize the order of assets returned in the CSS/ JS globs
  'js.chunkSortFunction': false, // (files = [], javascript?) => {}

  // Auto-chunk the main JS bundle based on module parent directory
  'js.autoChunk': true,

  // Interpret {{ ... | asset_url }} tags in Sass files, in 'watch'
  // The 'path.cdn' is used to replace the 'asset_url' filter
  'shopify.addShopifyLoader': true,

  // The global variable used in production to reference the Shopify CDN
  'shopify.cdnPathVar': '__GLOBAL__.cdn',

  // Always log errors and info to the console
  'debug': false
}
```

---

#### CSS Chunking Logic

We've baked in some configurable logic that can automatically create dedicated CSS files for different pages of a Shopify site. So, you can have a CSS file that targets product pages, account pages or a specific page template individually.

The functionality leverages the module grouping folders that were outlined in the "theme architecture" section. How CSS files are requested on certain pages are informed by these folder names. See below:

```bash
src
  |- modules
     |- global
     |  |- header/
     |  |- footer/
     |
     |- page
     |  |- page-wysiwyg/
     |
     |- page-wishlist
     |  |- wishlist-grid/
```

With default settings, this structure will culminate into the following snippet (named via the "css.chunk.snippet" setting) file being generated, with global styles kept into the main stylesheet:

```liquid
...

{% if request.page_type contains 'page' and template.suffix contains 'wishlist' %}
<link type="text/css" href="{{ 'page-wishlist.min.css' | asset_url }}" rel="stylesheet">
{% elsif request.page_type contains 'page' %}
<link type="text/css" href="{{ 'page.min.css' | asset_url }}" rel="stylesheet">
{% endif %}

...
```

If a folder name is in the `css.chunk.criticalWhitelist` setting, the conditional rendered for that chunk will support inline styles and well as a non-blocking critical css file link. Here is an example of the output if "page" is whitelisted like so: `css.chunk.criticalWhitelist: ['page']`

```liquid
...

{% elsif request.page_type contains 'page' %}
<style data-critical data-kit><!-- module critical styles are placed here --></style>
<link rel="preload" href="{{ 'page.min.css' | asset_url }}" as="style" onload="this.onload=null;this.rel='stylesheet'" data-kit>
<noscript><link rel="stylesheet" href="{{ 'page.min.css' | asset_url }}"></noscript>
{% endif %}

...
```

Now, we also load the global stylesheet critically if the page's css is getting loaded critical through this final part of the generated snippet:

```
{% if kit_chunked_styles contains 'critical' %}
<style data-critical data-kit><!-- global critical styles --></style>
<link rel="preload" href="{{ 'main-non-critical.min.css' | asset_url }}" as="style" onload="this.onload=null;this.rel='stylesheet'" data-kit>
<noscript><link rel="stylesheet" href="{{ 'main-non-critical.min.css' | asset_url }}"></noscript>
{% else %}
{{ 'main.min.css' | asset_url | stylesheet_tag }}
{% endif %}

{{ kit_chunked_styles }}
```

**Defining critical CSS blocks**

Within each CSS module, define each block of CSS with the following comments:

```
/*! critical */

...

/*! end critical */
```

**Folder naming conventions**

The "global" folder is marked by default as a location to put any global code. Global styles are kept in the main stylesheet and not referenced in the snippet.

For non global styles, the first word in the top level folder name before the "-" character maps to the `request.page_type`, and anything else after than point maps to the `template.suffix` Liquid variable. These functionality can be modified by the settings outlined below.

**CSS chunking configuration settings**

See below an outline of CSS chunking specific options alongside their default values.

```javascript
{
  // Should the main CSS file/s be chunked?
  'css.chunk': false,

  // The file that will have chunking logic applied
  'css.chunk.fileToProcess': 'main.min.css',

  // What folder/s dictate CSS that should be on every page?
  'css.chunk.globalFolders': ['global'],

  // Any files here will be rolled up into global sheet
  'css.chunk.globalFiles': [],

  // What is the name of the snippet that includes the conditional
  // logic that loads in the specific files on the right pages
  'css.chunk.snippet': 'snippets/stylesheets.liquid',

  // Sort the order of the conditionals in the 'css.chunk.snippet'
  // file. The default order is alphabetically
  'css.chunk.sortFunction': false,

  // Override any of the conditionals in the 'css.chunk.snippet'
  // file. This is called last before the snippet is written
  'css.chunk.conditionalFilter'(obj, defaultString) {
    return defaultString
  },

  // This allows you to map a folder name to a different conditional
  // before the 'css.chunk.snippet' is generated. For example, if
  // you had a {"account": "customers"} entry here, CSS in an "account"
  // folder would be mapped to any 'css.chunk.firstConditionalProperty'
  // liquid value that contains the string "customers"
  'css.chunk.conditionalFolderMapping': {},

  // This is the Liquid property used in the first component
  // of the 'css.chunk.snippet' generated file
  'css.chunk.firstConditionalProperty': 'request.page_type',

  // This is the Liquid property used to in the second component
  // of the 'css.chunk.snippet' generated file
  'css.chunk.secondConditionalProperty': 'template.suffix',

  // This is the Liquid conditional used to in the first component
  // of the 'css.chunk.snippet' generated file. For example, you
  // could change this to "==" for an exact match
  'css.chunk.firstEqualityConditional': 'contains',

  // This is the Liquid conditional used to in the second component
  // of the 'css.chunk.snippet' generated file
  'css.chunk.secondEqualityConditional': 'contains',

  // We are using the module folder name to inform on which pages
  // the generated CSS file is rendered. We do this by breaking down
  // the folder name. This is the character used when we break this
  // down (see above writeup)
  'css.chunk.folderDelimiter': '-',

  // Provides the ability to change the written <link> html between
  // each of the Liquid conditionals in the "css.chunk.snippet" file
  'css.chunk.snippetFilter'(obj, defaultString) {
    return defaultString
  },

  // Any top-level folders that should not make their own individual
  // CSS files, rather roll up into others. This is handy when you
  // have a group of modules that are shared across multiple areas of
  // the site but you don't want to bloat the global stylesheet
  'css.chunk.partials': {},

  // A whitelist of folder names that should be split out into
  // critical and non-critical chunks
  'css.chunk.criticalWhitelist': [],

  // When a folder is in the critical whitelist and has critical styles,
  // this is the HTML that gets rendered for that chunk.
  'css.chunk.deferredChunkLink'(assetPath, settings) {
    return `
      <link rel="preload" href="{{ '${assetPath}' | asset_url }}" as="style" onload="this.onload=null;this.rel='stylesheet'" data-kit>
      <noscript><link rel="stylesheet" href="{{ '${assetPath}' | asset_url }}"></noscript>
      `
  },

}
```

---

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

---

#### NPM Dependencies

Most of the dependencies that are used to compile assets with the Webpack configuration above are declared and managed in this package. However, there are some that will need to be dev dependencies of the theme itself. Currently, the theme dev dependencies we use for the configuration above are:

```
"@babel/core": "^7.7.7",
"@babel/plugin-proposal-object-rest-spread": "^7.7.7",
"@babel/preset-env": "^7.7.7",
"eslint-config-standard": "^14.1.0",
"standard": "^14.3.1",
"stylelint-config-standard": "^19.0.0",
```

---

#### Logging

Most logs from core dependencies are relayed directly to the console. However, there are certain compilation logs that Webpack and other dependencies do not provide configuration access to, and that we occasionally want to silence. When compilation occurs, we redirect these outputs to log files rather than directly to the browser. However, this can be turned off via the `debug` setting.

---

#### Roadmap

1. Theme scaffolding command/s
1. Liquid linting (in progress...)

---

#### Bugs & Missing Information

This package is currently unstable and in it's initial stages. Expect bugs and missing information. We encourage you to submit tickets and let us know the issues you are experiencing! Keep in mind that our current priority is to enable our internal developers so expect delays for general bug reports.

---

#### Testing changes when contributing

Currently, the recommended way to test new changes to this repo is via the following steps:

- Clone this monorepo
- Install lerna globally
- In the root of the repo, run `lerna bootstrap`
- Uninstall the global @halfhelix/kit package `npm uninstall -g @halfhelix/kit`
- Install the local cli package globally `npm i -g /Users/.../packages/cli`
- In the root of your theme, run the global Kit commands
- When ready, submit a MR with the changes
- The changes will be reviewed and released (`lerna publish` or `lerna version && lerna run publish`)
