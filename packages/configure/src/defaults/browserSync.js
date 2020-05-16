module.exports = {
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
  'bs.reloadDelay': 1000,
  'bs.proxyReplacements': [
    {
      regex: /<script.*main(?:[.]min)?[.]js.[^>]*><\/script>/gi,
      replacement() {}
    },
    {
      regex: /<link.*main(?:[.]min)?[.]css.[^>]*>/gi,
      replacement(settings) {
        return `<script src="${settings['path.public']}/main.js"></script>`
      }
    }
  ],
  'bs.replaceAssets': true
}
