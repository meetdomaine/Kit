module.exports = {
  'bs.online': true,
  'bs.local': 'localhost',
  'bs.target': (settings) => {
    return `https://${settings.domain || settings.store}?preview_theme_id=${
      settings['theme']
    }`
  },
  'bs.snippetPlacement'(settings) {
    return {
      match: /<\/body>/i,
      fn: function (snippet, match) {
        return snippet + match
      }
    }
  },
  'bs.open': true,
  'bs.reloadDelay': 1500,
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
  'bs.proxyReplacementsFilter'(rules, settings) {
    return rules
  },
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
  'bs.replaceAssets': true
}
