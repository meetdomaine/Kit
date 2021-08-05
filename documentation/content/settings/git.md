---
description: ''
sidebar: 'docs'
prev: '/docs'
next: '/docs'
---

# Git

- This group of settings follows the pattern "git.{settingName}".
- The defaults for these settings can be found [via this link](https://github.com/halfhelix/Kit/blob/master/packages/configure/src/defaults/git.js).
- Each setting is commented in the link above.

This settings primary service the Gitab Integration, particularly automated Gitlab merge request creation and Git history validation. It's worth reading up on the [Gitlab Integration](/docs/gitlab-integration/) section.

### Noteworthy Settings

#### git.gitlabToken

The Gitlab token to use to authenticate Gitlab API requests with. This can be a Personal Access Token with "api" scope permissions.

```js
{
  'git.gitlabToken': '',
}
```

#### git.maintainer

The Gitlab User Handle to use as the assignee for Gitlab Merge Requests (omit the "@" symbol).

```js
{
  'git.maintainer': ''
}
```

#### git.gitlabMergeRequestConfig

Properties to pass into the Gitlab API request that generates programmatic merge requests. See Gitlab documentation [here](https://docs.gitlab.com/ee/api/merge_requests.html#create-mr). Note that the "source_branch", "title", "target_branch", "assignee_id" properties are automatically set and configurable by other settings (see all Git settings [here](https://github.com/halfhelix/Kit/blob/master/packages/configure/src/defaults/git.js)).

```js
{
  'git.gitlabMergeRequestConfig': {
    remove_source_branch: true
  }
}
```

#### git.gitlabMergeRequestTitle

The name of the programmatic merge request.

```js
{
  'git.gitlabMergeRequestTitle'(branch, targetbranch, settings) {
    return `[WIP] ${branch} into ${targetbranch}`
  }
}
```

#### git.emailRegex

This sets the emails that are approved when running the Gitlab Git history linting command. If a commit has been signed with an invalid email the CI job running the linting command will fail.

```js
{
  'git.emailRegex': /@halfhelix.com/
}
```

#### git.messageValidator

This function is used to validate the commit when running the Gitlab Git history linting command. If a commit has been signed with an invalid email the CI job running the linting command will fail.

```js
{
  'git.messageValidator'(commit, settings) {
    return commit.title.split(' ').length > 1
  }
}
```

#### git.branchValidator

This function is used to validate the branch name when running the Gitlab Git history linting command. If the branch name is invalid the CI job running the linting command will fail.

```js
{
  'git.branchValidator'(branch, settings) {
    return /master|production|feature\/|bugfix\/|qa\//.test(branch)
  }
}
```
