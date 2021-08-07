---
description: ''
sidebar: 'docs'
prev: '/docs'
next: '/docs'
---

# Javascript

- This group of settings follows the pattern "js.{settingName}".
- The defaults for these settings can be found [via this link](https://github.com/halfhelix/Kit/blob/master/packages/configure/src/defaults/javascript.js).
- Each setting is commented in the link above.

This settings primary service Webpack config generation, and the way that CSS and Javascript are added to bundles via glob patterns. It's worth reading up on the [Javascript Chunking](/docs/javascript-chunking/) section, and the [Thinking Modular](/docs/thinking-modular) section.

### Noteworthy Settings

#### js.filterWebpackConfig

Filter the entire Webpack Config Javascript object literal right before it is sent to Webpack in any command.

```js
{
  'js.filterWebpackConfig'(config, settings) {
    return config
  },
}
```

Note: There are settings available to override the Webpack "mode", "devTool", "performance" and "stats" configurations specifically.

#### js.hmr

Toggles the Hot Module Reloading Webpack functionality used to reload the browser when bundled assets are changed on and off. This can be turned off when debugging a network-connected mobile device.

```js
{
  'js.hmr': true,
}
```
