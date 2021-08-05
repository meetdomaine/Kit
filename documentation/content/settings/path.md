---
description: ''
sidebar: 'docs'
prev: '/docs'
next: '/docs'
---

# Path

- This group of settings follows the pattern "path.{settingName}".
- The defaults for these settings can be found [via this link](https://github.com/halfhelix/Kit/blob/master/packages/configure/src/defaults/path.js).
- Each setting is commented in the link above.

### Noteworthy Settings

#### path.dist

Name of the dist directory to use when building the theme.

```js
{
  'path.dist': path.normalize(`${CWD}/dist`),
}
```

#### path.src

Name of the src directory to fetch source files from (a child directory of your repo).

```js
{
  'path.src': path.normalize(`${CWD}/src`),
}
```

#### path.cdn

This one is a little unique. Since we are compiling javascript and CSS locally in the `watch` command and not sending these files to Shopify on every change (mentioned in [Local Development](/docs/local-development)), we have found the need to interpret the asset_url filter when Liquid has been used on SCSS files. Here, take the Shopify CDN of a theme asset in your instance and add it here. We have a custom loader that with shim `'{{ '{path}.{mine}' | asset_url }}` and add in this property value.

We will not here that using Liquid in SCSS files does have a performance impact and should typically be avoided.

```js
{
  'path.cdn': 'https://cdn.shopify.com/replace-this',
}
```
