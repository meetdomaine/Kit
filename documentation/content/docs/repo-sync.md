---
description: ''
sidebar: 'docs'
prev: '/docs'
next: '/docs'
---

# Repo <> Repo Sync

At Half Helix (and similar to many agencies), we currently structure our themes differently then the simple flat directory structure that gets uploaded to Shopify. This is particularly valuable for more complex themes that benefit from asset pipelines and child directories. As part of the Online Store 2.0 release, Shopify introduced Git-triggered deployments (yay!) with the following caveats:

- The integration is only for Github.
- The integration does not support the concept of source code that compiles to built code (e.g. a src/ directory). Only the default, flat Shopify directory structure is supported.

So in response to this, this Kit feature allows for a code repository that manages the source code of a theme to sync to a code repository that represents the simplified built theme and thus make use of Shopify's Github deployments and other connected workflows like theme linting and performance testing.

### Why this repo to repo strategy?

Shopify [explores 3 strategies](https://shopify.dev/themes/best-practices/version-control) that can be leveraged by a technical team to use the Github integration while employing a build pipeline to transform source code. This Kit introduces tooling that supports the ["Use separate repositories for source code and compiled code"](https://shopify.dev/themes/best-practices/version-control#use-separate-repositories-for-source-code-and-compiled-code) approach. We selected this approach since we feel it will limit the amount of complexity for our developers when compared to the other two suggested approaches.

### Relevant Commands

This feature is centered around these two commands:

```bash
# Push updates from source repo to built theme repo
kit build --sync-with-repo
# Push updates from built theme repo to source repo
kit sync-back-to-source-repo
```

### We currently use Gitlab at Half Helix

As do a lot of Shopify agencies, we use Gitlab to manage our repositories. The following workflows detail automated relationship management between a Gitlab theme source code repository and a Github built theme repository. However, this workflow can easily work with a Github theme source code repository.

### Direction A: Source to built theme repo

We describe this workflow below using a Gitlab hosted theme source code repo as the example (as you can see in the "Example in Gitlab CI YAML" section).

```bash
kit build --sync-with-repo
```

This command is designed to be run in a CI/CD runner (see the example below using a Gitlab CI/CD Runner), and defer ownership of which branches are pushed to Github to the CI/CD configuration (e.g. the .gitlab-ci.yml file). When this command is run after code has been pushed to a branch on the remote, it will execute the following steps:

- Get the name of the current branch
- Clear out the {project}/dist directory
- Initialize a new Git repository in the /dist directory
- Add Github as a remote under the remote name "slave"
- Run `ls-remote` to ping the remote and confirm connection
- Run `git fetch slave` to bring in remote branches
- If a branch of the same name exists, this branch is checked out
- If a branch of the same name does not exist, this branch is created in the repo
- Build theme and layer any updates over the current branch
- Create `.kit-mapping.json` file to map built theme file location to the source location
- Commit any file modifications
- Push the file modifications to Github

#### Example in Gitlab CI YAML

```yml
image: node:{version}

before_script:
  - git checkout -B "$CI_COMMIT_REF_NAME" "$CI_COMMIT_SHA"
  - apt-get update -y
  - 'which ssh-agent || ( apt-get install openssh-client -y )'
  - eval $(ssh-agent -s)
  # https://gitlab.com/gitlab-org/gitlab-foss/-/issues/14434#note_36717658
  # Run "cat ~/.ssh/private_ssh_key | base64" for value to add as Gitlab CI variable
  - ssh-add <(echo "$PRIVATE_SSH_KEY" | base64 --decode)
  - mkdir -p ~/.ssh
  - chmod 700 ~/.ssh
  - ssh-keyscan github.com >> ~/.ssh/known_hosts
  - ssh-keyscan gitlab.com >> ~/.ssh/known_hosts
  - chmod 644 ~/.ssh/known_hosts
  - git config --global init.defaultBranch master
  - git config --global user.email "ci@halfhelix.com"
  - git config --global user.name "Half Helix"
  - npm i -g @halfhelix/kit

Sync To Github:
  type: deployment
  script:
    - kit build --sync-with-repo
```

### Direction B: Built theme to source repo

```bash
kit sync-back-to-source-repo
```

This command is designed to be run via Github Actions and defer ownership of which branches are pushed to Gitlab via the Github Actions workflow YAML file. When this command is run after code has been pushed to a branch on the remote, it will execute the following steps:

- Get the name of the current branch
- Create a {project}/temp directory
- Initialize a new Git repository in the /dist directory
- Add Gitlab as a remote under the remote name "slave"
- Run `ls-remote` to ping the remote and confirm connection
- Run `git fetch slave` to bring in remote branches
- If a branch of the same name exists, this branch is checked out
- If a branch of the same name does not exist, this branch is created in the repo
- Use the `.kit-mapping.json` to copy over built theme files to their source file location
- Commit any file modifications
- Push the file modifications to Gitlab

#### Example in Github Actions YAML

```yml
name: push-to-gitlab
on: [push]
jobs:
  push-to-gitlab:
    runs-on: ubuntu-latest
    if: "contains(github.event.head_commit.message, 'Update from Shopify')"
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '14'
      - uses: shimataro/ssh-key-action@v2
        with:
          key: ${{ secrets.SSH_KEY }}
          known_hosts: ${{ secrets.KNOWN_HOSTS }}
      - run: |
          npm i -g @halfhelix/kit
          git config --global init.defaultBranch master
          git config --global user.email "ci@halfhelix.com"
          git config --global user.name "Half Helix"
      - run: kit sync-back-to-source-repo
```

### Files mutated via asset pipelines

This workflow is not designed to handle updates to files whose contents are mutated via asset pipelines (e.g. Webpack bundle files, compiled sprite files). Generally speaking, these files should not be modified in the Shopify UI.

### Relevant Settings

#### git.srcThemeRepositoryUrl

The remote URL to use to interact with the source code repository (e.g. "git@gitlab.com:halfhelix/source-theme-code.git")

```js
{
  'git.srcThemeRepositoryUrl': '',
}
```

#### git.builtThemeRepositoryUrl

The remote URL to use to interact with the built theme code repository (e.g. "git@github.com:halfhelix/built-theme-code.git")

```js
{
  'git.builtThemeRepositoryUrl': '',
}
```

#### git.filesToCopyToBuiltTheme

Configuration files (and directories) to copy over and commit to the built them repo, from the source code repo. If they do not exist they will be ignored.

```js
{
  'git.filesToCopyToBuiltTheme': [
    '.github',
    'translation.yml',
    '.theme-check.yml',
    'kit.config.js',
    'package.json'
  ],
}
```
