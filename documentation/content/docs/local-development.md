---
description: ''
sidebar: 'docs'
prev: '/docs'
next: '/docs'
---

# Local Development

Here, we are going to spend some time talking about how local development works since there is a little bit happening behind the scenes.

## Behind the scenes of "kit watch"

When you trigger "kit watch", this tool will execute the following actions:

- Parse your .env and interpret your `kit.config.js` settings.
- Get your theme information from Shopify via an API call.
- Use Webpack to create your asset bundles.
- Use BrowserSync to proxy your Shopify instance address.
- Once Webpack has finished it's initial compilation, BrowserSync establishes a socket connection between your browser and computer.

## In-memory CSS and Javascript

Now, CSS and Javascript are treated a little differently to other types of files. To speed up development, Webpack keeps track of file updates in your local memory rather than saving the files to a disk or uploading them to Shopify. For this reason, if you view the theme outside of your localhost and you haven't run `kit deploy` on theme you are trying to preview, you'll likely see up-to-date liquid files but you'll probably not see your up-to-date CSS and JS because it hasn't been pushed to Shopify yet!

In order to allow for this in-memory handling of CSS and Javascript and allow changes to be fed to the browser, we use Webpack HMR (Hot Module Reloading) functionality. We also use BrowserSync replacements to change the URL references of your JS and CSS assets from the Shopify CDN destinations to local URLs that are connected to this HMR functionality (when in the localhost only). So if you see your Javascript coming from a URL like `/dev/main.js` while in localhost, this is the reason.

## Localhost Proxy Replacements

So this lead us to the default array of proxy replacement rules that BrowserSync interprets:

```js
{
  'bs.proxyReplacements.normal': [
    {
      regex: /<script.*main(?:[.]min)?[.]js.[^>]*><\/script>/gi,
      replacement() {}
    },
    {
      regex: /<link.*main(?:[.]min)?[.]css.[^>]*>/gi,
      replacement(settings) {
        return `<script src="${settings['path.public']}main.js"></script>`
      }
    }
  ],
}
```

Note that this is under the setting 'bs.proxyReplacements.normal' (with "normal" at the end because we have a slightly different set of rules when critical CSS functionality is getting leveraged. [Check out this file](https://github.com/halfhelix/Kit/blob/master/packages/configure/src/defaults/browserSync.js) to compare these settings) .

To talk through the "normal" settings above, the first setting actually removes the `//shopify.cdn.com/main.min.js` file from the localhost proxy during local development. This is because the CSS and the Javascript are coming from the same bundle in development, the `/dev/main.js` bundle. The second setting replaces the `//shopify.cdn.com/main.min.css` file with the `/dev/main.js` and thus establishes a connection to the HMR handled bundle.

For most use cases, having one bundle here, a "main" bundle like we have above works well. However, there are cases when you need to add a different bundle, such as a bundle specifically for modifying a Shopify Plus Checkout layout. In this instance, you want to add the additional bundle to your `webpack.config.js` and you'll want to add to these replacement rules so that your checkout styles can be modified in a nice live reloading environment. In this instance, you'll want to add something like the following to your `kit.config.js` file:

```js
{
  'bs.proxyReplacementsFilter'(rules) {
    return rules.concat([
      {
        regex: /<script.*checkout(?:[.]min)?[.]js.[^>]*><\/script>/gi,
        replacement() {}
      },
      {
        regex: /<link.*checkout[.]min[.]css.[^>]*>/gi,
        replacement(settings) {
          return `<script src="${settings['path.public']}checkout.js"></script>`
        }
      }
    ])
  }
}
```

And, modify your webconfig.js by adding in another bundle like so:

```js
{
  entry: {
    "main": [
      './src/assets/css/main.scss',
      './src/assets/js/main'
    ],
    "checkout": [
      './src/assets/css/checkout.scss',
      './src/assets/js/checkout'
    ]
  },
}
```
