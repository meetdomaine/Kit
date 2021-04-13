---
description: ''
sidebar: 'docs'
prev: '/docs'
next: '/docs'
---

# Theme Setup

There are a few things that we need to do to setup a regular Shopify theme for Kit. Follow these steps and you'll have a theme setup (and developer experience) that is pretty, well, top notch.

## Basic Directory Structure

This is our recommended directory structure for new themes. Here, you've got config files in the root and Shopify theme assets in the src/ directory.

```bash
.env
.eslintrc.js
.stylelintrc.js
kit.config.js
webpack.config.js
...
src
  |- assets
  |- config
  |- layout
  |- locales
  |- sections
  |- snippets
  |- templates
```

## kit.config.js

This file can get big but at its core it looks like this. For all projects, we recommend having a Babel config and every project must have a "themes" object where each object under "themes" can map to a environment (however, most of the time it is just "development", "staging" and "production").

Any kit.config.js setting can go into the themes.{environment} object to allow it to be set differently per environment. Further, any value can be set per-instance using ENV variables that are pulled from the .env file in the root directory.

```js
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
  babel: {
    plugins: [],
    sourceMaps: true,
    presets: ['@babel/preset-env']
  }
}
```

## .env

The values in the .env variable should map 1-to-1 to the ENV variables that are referenced in the kit.config.js file. If we use the kit.config.js example above, we'd expect a file that looks like the following example. The properties in this file can grow substantially as you support deployments to different themes or Shopify instances, or what to change kit.config file values without having to update Git every time.

```bash
THEME_ID={shopify-theme-id}
PASSWORD={shopify-private-app-password}
STORE={shopify-store}.myshopify.com
```

## webpack.config.js

Webpack configurations can vary pretty wildly per project but here is an example of a common boilerplate.

- The entry property contains both the main scss file and the main JS file
- The module.rule for `/\.s?css$/` includes an "extract" property that tells Kit to extract the CSS into it's own file at build time. Keep this here and follow this example as a general rule.
- Devtool will be removed when running build and deployment in production (this can be overridden via settings).
- `chunkFilename` includes a version string to cache bust upon deployments.

```js
const path = require('path')

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    main: ['./src/assets/css/main.scss', './src/assets/js/main']
  },
  output: {
    path: path.join(__dirname, 'dist/assets'),
    filename: '[name].js',
    chunkFilename: `[name].js?version=${Date.now()}`
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
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
      }
    ]
  }
}
```

## .eslintrc.js

Add linting rules that make sense for your project. However, here is an example file.

```js
module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018
  },
  extends: ['standard'],
  rules: {}
}
```

## .stylelintrc.js

Again, add linting rules that make sense for your project. Another example below.

```js
module.exports = {
  "extends": "stylelint-config-standard",
  "rules": {
    "selector-class-pattern": "^[a-z-_]+$",
    "at-rule-no-unknown": null,
    "no-descending-specificity": null,
    "max-nesting-depth": 2
  }
}

```