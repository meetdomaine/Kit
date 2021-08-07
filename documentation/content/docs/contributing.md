---
description: ''
sidebar: 'docs'
prev: '/docs'
next: '/docs'
---

# Contributing

## Structure

[Lerna](https://github.com/lerna/lerna) is used to break the underlying source code of this package into smaller NPM packages contained in the same repository. You'll see these packages in the `packages/` directory. `packages/cli` is the CLI entrypoint. `packages/configure` handles settings and stores defaults.

## Getting Setup

Follow these steps to spin up a development environment. This gives a basic rundown but adapt these as needed if you would like to fork the repo and submit an MR with an update to the source code.

```bash
npm uninstall -g @halfhelix/kit # (if already installed)
git clone https://github.com/halfhelix/Kit.git kit
cd kit && npm i
lerna bootstrap
cd ./packages/cli
npm i -g $(PWD)
```

Once these steps have been successfully carried out, you should be able to run `kit {command}` commands globally and have the command be controlled by this local copy of Kit rather than a copy of the code in your npm global `node_modules` directory (as would be standard if you were to run `npm i -g @halfhelix/kit`).

## Unit Testing

We use [ava](https://github.com/avajs/ava) for unit tests. Unit tests for this package are present but not exhaustive. If you are taking the time to contribute to the source code, please create a test to go alongside your source code update.

## Code Formatting

We use [Prettier](https://prettier.io/) for code formatting. Please ensure your IDE is setup to support the `.prettierrc` file in this repo.
