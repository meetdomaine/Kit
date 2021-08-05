---
description: ''
sidebar: 'docs'
prev: '/docs'
next: '/docs'
---

# Eslint & Stylelint

This tool encourages a development workflow that lints JS through using Eslint, and lints CSS using Stylelint.

## Commands

```bash
# Lint both JS and CSS
kit lint

# Lint JS
kit lint --include js

# Lint CSS
kit lint --include css
```

## Eslint

Add an `eslintrc.js` file to your project root. The contents of this file will be informed by your own opinions on syntax. However, he is an example:

```js
module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018
  },
  extends: ['standard'],
  rules: {
    'no-unused-vars': 0,
    'no-undef': 0,
    'no-extra-boolean-cast': 0,
    'dot-notation': 0,
    'import/first': 0,
    'import/no-webpack-loader-syntax': 0
  }
}
```

Eslint can be activated by adding in the `eslint-loader` to your pipeline via the `webpack.config.js`

```js
const path = require('path')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  ...
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          fix: true
        }
      },
      ...
    ]
  },
  resolve: {},
  plugins: [],
}
```

## Stylelint

Add a `.stylelintrc.js` file to your project root. Similar to the above, the contents of this file will be informed by your own opinions on syntax. However, he is an example:

```js
module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'selector-class-pattern': '^[a-z-_]+$',
    'at-rule-no-unknown': null,
    'no-descending-specificity': null,
    'max-nesting-depth': 3
  }
}
```

### Configuration

- Stylelint can be turned off via the `css.lintStyles` property in your kit.config.js
- You can configure paths that are linting for the `css.stylelintPaths` property

```js
{
  'css.lintStyles': true,
  'css.stylelintPaths'(settings) {
    return [
      // `src/assets/css/**/*.scss`,
      `src/assets/scss/**/*.scss`,
      `src/modules/**/*.scss`,
      `src/sections/**/*.scss`
    ]
  },
}
```
