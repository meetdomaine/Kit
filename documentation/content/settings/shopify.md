---
description: ''
sidebar: 'docs'
prev: '/docs'
next: '/docs'
---

# Shopify

- This group of settings follows the pattern "shopify.{settingName}".
- The defaults for these settings can be found [via this link](https://github.com/halfhelix/Kit/blob/master/packages/configure/src/defaults/shopify.js).
- Each setting is commented in the link above.

### Noteworthy Settings

#### shopify.requestsPerInterval

The amount of requests that can be handled simultaneously when deploying assets. This can be set to "4" when the instance is a Shopify Plus instance. It can be set to "5" as a max but expect certain requests to hit a throttle limit and automatically be retried at the end of the deployment queue.

```js
{
  'shopify.requestsPerInterval': 2
}
```

#### shopify.cdnPathVar

An in-browser variable in the global scope to use to retrieve the Shopify CDN path for the current theme. We use this to allow Webpack to understand the location from which to fetch Javascript file chunks in a runtime context.

```js
{
  'shopify.cdnPathVar': '__GLOBAL__.cdn',
}
```

This should be set in the top of the `<head />` of the document. For example:

```js
var __GLOBAL__ = {
  cdn: "{{ 'test.jpg' | asset_url }}".replace(/test.jpg\?\d*/, '')
}
```
