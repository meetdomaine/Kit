---
description: ''
sidebar: 'docs'
prev: '/docs'
next: '/docs'
---

# Gitlab Integration

There is functionality included that:

- Automatically creates merge requests in Gitlab when code is pushed to Gitlab
- Lints Git authors and messages after a merge requests have been pushed

This functionality is configurable via settings that follow the pattern "git.{settingName}", more information on these settings can be found in the [Settings > Git](/settings/git/) section below.

## Commands

```bash
# Create a new MR in Gitlab for current branch
kit gitlab --routine merge-request/create
# Create a new MR in Gitlab & lint Git commit history
kit gitlab --routine commits/lint
```

## Example .gitlab-ci.yml

This has been simplified to include only relevant properties:

```yml
image: node:{version}

before_script:
  - yarn install
  - yarn add @halfhelix/kit@{version}

Check Git:
  script:
    - yarn gitlab:lint
  except:
    - master
    - production
```

## Example kit.config.js

This has been simplified to include only relevant properties:

```js
module.exports = {
  'git.gitlabToken': process.env.GITLAB_TOKEN,
  'git.maintainer': 'gitlabhandle'
}
```
