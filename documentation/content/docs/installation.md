---
description: ''
sidebar: 'docs'
prev: '/docs'
next: '/docs'
---

# Installation

This package is designed to be installed globally on your local computer. However, you should be able to install it locally as a project dependency too (for example, we do this when running CI/CD builds so we can cache the package in a relative folder between jobs).

In most instances you can get going by simply installing the package globally via the commands below. However, see the bottom section on some issues we've encountered in the past when going through the installation process.

## Using NPM

You can simply run:

```bash
npm i -g @halfhelix/kit
```

After that run `kit --version` to verify that the tool is working.

## Using Yarn

If you would prefer to use Yarn, you can run:

```bash
yarn global add @halfhelix/kit
```

After that run `kit --version` to verify that the tool is working.

## Installation troubleshooting

In order to install this package we write to the local computer directory that is set to store NPM global packages, and we do install Node Sass (at least until we release a new version using Dart Sass). If there is an issue with permissions for this global directory, or issues with Sass having been built for another version of Node, issues may arise in the installation process.

### Node Sass binding issues

If you run into an error relating to Node Sass about non-compatible binaries "Node Sass could not find a binding for your current environment: OS X 64-bit with Node.js" you may need to rebuild node-sass from within the kit node_modules folder:

```bash
# For Mac OSX Users
cd "$(npm root -g)/@halfhelix/kit" && npm rebuild node-sass;
```

_Note: Its on our roadmap to release a new version with Dart Sass support since [Node Sass is now deprecated](https://www.npmjs.com/package/node-sass)._

### Permission issues

See [this link](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) on resolving permission issues when installing global packages.
