---
description: ''
sidebar: 'docs'
prev: '/docs'
next: '/docs'
---

# Gitlab > Github Support

At Half Helix, we currently use Gitlab for repository management, and we differentiate between source code and built theme code in many of our themes. Shopify has introduced Git-triggered deployments (!!!) with the following caveats:

- The integration is only for Github
- The integration does not support the concept of source code that compiles to built code (e.g. a src/ directory). Only the default, flat Shopify directory structure is supported.

Shopify [explores strategies](https://shopify.dev/themes/best-practices/version-control) that can be leveraged by a technical team to use the Github integration while employing a build pipeline to transform source code. This Kit introduces tooling that supports the ["Use separate repositories for source code and compiled code"](https://shopify.dev/themes/best-practices/version-control#use-separate-repositories-for-source-code-and-compiled-code) approach. We selected this approach since we feel it will be limit the amount of complexity for our developers when compared to the other two suggested approaches.

The two additions that we are released are centered around these two commands:

```bash
# Push updates from Gitlab to Github
kit build --sync-with-github
# Push updates from Github to Gitlab
kit gitlab --routine sync-from-build-repo
```

### Workflow A: Gitlab to Github

```bash
kit build --sync-with-github
```

This command is designed to be run in a Gitlab CI/CD Runner and defer ownership of which branches are pushed to Github to the .gitlab-ci.yml file. When this command is run after code has been pushed to a branch, it will execute the following steps:

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
  - apt-get update -y
  - 'which ssh-agent || ( apt-get install openssh-client -y )'
  - eval $(ssh-agent -s)
  - ssh-add <(echo "$GITHUB_SYNC_PRIVATE_KEY")
  - mkdir -p ~/.ssh
  - chmod 700 ~/.ssh
  - ssh-keyscan github.com >> ~/.ssh/known_hosts
  - chmod 644 ~/.ssh/known_hosts
  - yarn install
  - yarn add @halfhelix/kit@{version}

Sync To Github:
  type: deployment
  script:
    - git config --global user.email "deployments@halfhelix.com"
    - git config --global user.name "Half Helix"
    - kit build --sync-with-github
```

### Workflow B: Github to Gitlab

```bash
kit gitlab --routine sync-from-build-repo
```

This command is designed to be run via Github Actions and defer ownership of which branches are pushed to Gitlab via the Github Actions workflow YAML file. When this command is run after code has been pushed to a branch, it will execute the following steps:

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

Note: This workflow is not designed to handle updates to files whose contents are mutated via asset pipelines (e.g. Webpack bundle files, compiled sprite files). Generally speaking, these files should not be modified in the Shopify UI.

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
          git config --global user.email "deployments@halfhelix.com"
          git config --global user.name "Half Helix"
      - run: kit gitlab --routine sync-from-build-repo
```
