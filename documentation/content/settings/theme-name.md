---
description: ''
sidebar: 'docs'
prev: '/docs'
next: '/docs'
---

# Theme Name

- This group of settings follows the pattern "themeName.{settingName}".
- The defaults for these settings can be found [via this link](https://github.com/halfhelix/Kit/blob/master/packages/configure/src/defaults/themeName.js).
- Each setting is commented in the link above.

### Noteworthy Settings

#### themeName.format

Determines the theme name format base on the --env flag value.

```js
{
  'themeName.format'({ env }) {
    if (env === 'production') {
      return '[LIVE] {context} - {branch} - {commit} - {date}'
    }
    if (env === 'staging') {
      return '[STAGE] {context} - {branch} - {commit} - {date}'
    }
    if (env === 'development') {
      return '[DEV] {name} - {date}'
    }
  },
}
```

The available tokens are applied in this function:

```js
const formatName = async (settings, format) => {
  const commit = await settings['git.getCommit'](settings, getCommit)
  const date = await settings['git.getDate'](settings, getDate)
  const branch = await settings['git.getBranch'](settings, getBranch)
  const username = await settings['git.getUsername'](settings, getUsername)

  return format
    .replace('{context}', settings.isCI() ? 'CI' : '💻')
    .replace('{branch}', branch.split('/').pop())
    .replace('{commit}', commit)
    .replace('{date}', date)
    .replace('{name}', username.split(' ').shift())
}
```

If you want to override default functionality but simplify the function, you can add it to the specific environment config:

```js
module.exports = {
  themes: {
    development: {
      'themeName.format'({ env }) {
        return '[DEV] {context} - {branch} - {commit} - {date}'
      }
      ...
    },
    ...
  }
  ...
}
```

#### themeName.update

Determines if the theme name should be updated using the format above as part of the `deploy` command routine. By default, we only allow this in a CI/CD context (see [here](/settings/environment/#isci)) and not in a "development" environment.

```js
{
  'themeName.update'(settings) {
    return settings.env !== 'development' && settings.isCI()
  }
  },
}
```
