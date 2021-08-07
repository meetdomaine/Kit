module.exports = {
  // Proxies https://browsersync.io/docs/options#option-online
  'bs.online': true,
  // Proxies https://browsersync.io/docs/options#option-host
  'bs.local': 'localhost',
  // Sets the URL that localhost (bs.local) proxies
  'bs.target': (settings) => {
    return `https://${settings.domain || settings.store}?preview_theme_id=${
      settings['theme']
    }`
  },
  // Sets the location that BrowserSync places the live reload snippet
  'bs.snippetPlacement'(settings) {
    return {
      match: /<\/body>/i,
      fn: function (snippet, match) {
        return snippet + match
      }
    }
  },
  // Automatically open the proxy in a new browser window
  'bs.open': true,
  // Sets a hard delay live reload event and browser reload
  'bs.reloadDelay': 0,
  // A set of regular expressions that transform HTML in the Proxy
  // before it is downloaded by the browser. This set is consumed
  // when CSS is not chunked (activated via CSS setting)
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
  // A set of regular expressions that transform HTML in the Proxy
  // before it is downloaded by the browser. This set is consumed
  // when CSS is chunked (activated via CSS setting)
  'bs.proxyReplacements.chunked': [
    {
      regex: /<script.*main(?:[.]min)?[.]js.[^>]*><\/script>/gi,
      replacement() {}
    },
    {
      regex: /<link.*assets\/.+(?:[.]min)?[.]css.[^>]* data-kit>/gi,
      replacement() {}
    },
    {
      regex: /<style data-critical data-kit>.*<\/style>/gi,
      replacement() {}
    },
    {
      regex: /<!-- kit injection tag -->/gi,
      replacement(settings) {
        return `<script src="${settings['path.public']}main.js"></script>`
      }
    }
  ],
  // If you want to add a new replacement rule but do not
  // want to overwrite the entire set of rules, you can use
  // this filter
  'bs.proxyReplacementsFilter'(rules, settings) {
    return rules
  },
  // A whitelist of URL patterns that force the live reload
  // snippet to be loaded upon
  'bs.whitelist': [
    '/',
    '/collections',
    '/collections/**',
    '/blogs',
    '/blogs/**',
    '/products/**',
    '/checkout/**',
    '/cart',
    '/pages/**'
  ],
  // Ignores the "proxyReplacements" settings when set to false
  'bs.replaceAssets': true
}
