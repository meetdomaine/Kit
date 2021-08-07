---
description: ''
sidebar: 'docs'
prev: '/docs'
next: '/docs'
---

# CSS

- This group of settings follows the pattern "css.{settingName}".
- The defaults for these settings can be found [via this link](https://github.com/halfhelix/Kit/blob/master/packages/configure/src/defaults/css.js).
- Each setting is commented in the link above.

If you check out the link above, you'll see that there are a hefty amount of settings available and most of then relate to CSS chunking and critical CSS splitting. For this reason, it's worth reading up on the [CSS Chunking & Critical CSS](/docs/critical-css/) section, and the [Thinking Modular](/docs/thinking-modular) section.

### Noteworthy Settings

#### css.lintStyles

This property toggles [Stylelint](https://stylelint.io/) linting.

```js
{
  'css.lintStyles': true
}
```

#### css.stylelintPaths

This property sets the glob paths that communicate to [Stylelint](https://stylelint.io/) what files to lint (and thus which to not).

```js
{
  'css.stylelintPaths'(settings) {
    return [
      `src/assets/scss/**/*.scss`,
      `src/modules/**/*.scss`,
      `src/sections/**/*.scss`
    ]
  }
}
```

#### css.chunk

This is the flag that enables a whole host of CSS chunking and critical CSS behavior (configurable by a whole bunch of settings). This is pretty dependant on the modular approach to ordering your files so as mentioned above, it's worth reading up on the [CSS Chunking & Critical CSS](/docs/critical-css/) section, and the [Thinking Modular](/docs/thinking-modular) section.

See relevant commented settings [via this link](https://github.com/halfhelix/Kit/blob/master/packages/configure/src/defaults/css.js).

```js
{
  'css.chunk': true
}
```

### CSS chunking and Critical Example

Here's an example kit.config.js with CSS chunking and Critical CSS enabled, pulled from one of our projects:

```js
{
  'css.chunk': true,
  'css.chunk.criticalWhitelist': ['index'],
  'css.chunk.globalFolders': ['global'],
  'css.chunk.globalFiles': [
    'account-forms.scss'
  ],
  'css.chunk.conditionalFolderMapping': {
    account: 'customers'
  },
  'css.chunk.conditionalFilter' (obj, defaultString) {
    if (obj.key === 'checkout') {
      return 'checkout'
    }
    return defaultString
  }
}
```
