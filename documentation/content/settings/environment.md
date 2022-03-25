---
description: ''
sidebar: 'docs'
prev: '/docs'
next: '/docs'
---

# Environment / Core

Here we list the "core" settings that allow us to connect to Shopify. These settings are not prefixed like the other settings documented in further pages.

## Core Settings

#### theme

This connects your computer to a dedicated Shopify theme. This connection applies to both `watch` and `deploy` core commands, among others.

```js
{
  'theme': process.env.THEME_ID
}
```

#### password

The password of a private app with Theme Write permissions, or a password generated from the [Kit Theme Access App](https://apps.shopify.com/theme-kit-access).

```js
{
  'password': process.env.PASSWORD
}
```

#### store

The ".myshopify.com" domain of the instance (without the "https://" protocol).

```js
{
  'store': process.env.STORE,
}
```

#### ignore (optional)

Files to not upload and overwrite in the Shopify-hosted theme.

```js
{
  'ignore': [
    'config/settings_data.json'
  ]
}
```

#### domain (optional)

A domain to use as the target for the localhost proxy rather than the ".myshopify.com" domain. This is useful when a site has gone live and the .myshopify.com domain is getting redirected to another domain. In this case, if you do not set the domain you'll get redirected outside of the localhost proxy.

Note: Make sure you include the "www." subdomain if the primary domain configured in Shopify also includes this subdomain.

```js
{
  'domain': "www.store.halfhelix.com"
}
```

## Per-environment Configurations

Every setting (even the ones outlined in subsequent pages) can be configured differently for each environment. The common environments are "development", "staging" and "production" but an environment can be anything, it just needs to match the `--env {environment}` value passed into the `kit` command, e.g. `kit watch --env development`.

Here's an example of a common `kit.config.js` environment setup (the kit.config.js namespace is `themes.{environment}`):

```js
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
      theme: process.env.STAGING_THEME_ID || process.env.THEME_ID,
      password: process.env.STAGING_PASSWORD || process.env.PASSWORD,
      store: process.env.STORE,
      ignore: [
        'config/settings_data.json'
      ]
    },
    production: {
      theme: process.env.PRODUCTION_THEME_ID || process.env.THEME_ID,
      password: process.env.PRODUCTION_PASSWORD || process.env.PASSWORD,
      store: process.env.STORE,
      ignore: [
        'config/settings_data.json'
      ]
    }
  }
  ...
}
```

## Other core properties

#### isCI

This property is used to determine if the command is running in a CI context. We look for the existence of "CI_JOB_NAME" by default, a property set in a Gitlab Runner.

```js
{
  isCI() {
    return !!process.env.CI_JOB_NAME || !!process.env.GITHUB_ACTIONS
  }
}
```

#### watch

The source files that trigger file change events.

```js
{
  watch: settings => {
    return `${settings['path.src']}/**/*`
  }
}
```
