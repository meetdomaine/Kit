---
description: ''
sidebar: 'docs'
prev: '/docs'
next: '/docs'
---

# BrowserSync

- This group of settings follows the pattern "bs.{settingName}".
- The defaults for these settings can be found [via this link](https://github.com/halfhelix/Kit/blob/master/packages/configure/src/defaults/browserSync.js).
- Each setting is commented in the link above.
- These settings are focused on the way the [BrowserSync](https://browsersync.io/) localhost proxy is instantiated.

### Noteworthy Settings

#### bs.local

This property sets the value of the proxy address that appears in browser. For almost all instances, you'll want to keep this as localhost. However, if you want to do something like debug a remote device on a local network you can set this to you local IP address.

```js
{
  'bs.local': 'localhost',
}
```

#### bs.target

This is the opposite of `bs.local`, it sets the root URL that the proxy will... proxy. You should not have to overwrite this setting directly but it's here so you can see what is happing behind the scenes. If you have a `domain` property configured in your `kit.config.js` it will be prioritized. This is helpful when a Shopify site has gone live and the ".myshopify.com" URL is getting redirected to a primary domain. Setting `domain` will ensure the localhost proxy does not follow the redirect and get pulled out of the localhost proxy.

```js
{
  'bs.target': settings => {
    return `https://${settings.domain || settings.store}?preview_theme_id=${
      settings['theme']
    }`
  }
}
```

#### bs.proxyReplacementsFilter

Take a read of the [Local Development](/docs/local-development/) section to better understand where this setting fits in. We added this setting so that you don't need to override all BrowserSync proxy replacement rules, rather you can add to them as needed and retain the defaults.

```js
{
  'bs.proxyReplacementsFilter'(rules, settings) {
    return rules
  }
}
```

#### bs.https

This simply proxy's BrowserSync's [https](https://browsersync.io/docs/options#option-https) option but it is powerful since it allows you to add in your own SSL certificates so you can remove the nasty "Your connection to this site is not secure" browser prompt.

```js
{
  'bs.https': true
}
```

Example configuration in a kit.config.js file is below. This would allow different developers to use different certificate pairs, or opt-out of using custom certificates.

```js
{
  "bs.https": process.env.LOCALHOST_CERT ? {
    cert: process.env.LOCALHOST_CERT,
    key: process.env.LOCALHOST_KEY
  } : true,
}
```

See details on how to get setup with this here:

- https://ryanparman.com/posts/2019/how-to-create-local-tls-certificates-for-development-on-macos/
- https://blogjunkie.net/2017/04/enable-https-localhost-browsersync/
