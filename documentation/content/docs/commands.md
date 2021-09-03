---
description: ''
sidebar: 'docs'
prev: '/docs'
next: '/docs'
---

# Core Commands

The main commands with Kit are `kit watch`, `kit build` & `kit deploy`.

## Kit Watch

```
kit watch
```

If you are a developer, this is likely the command that you'll most frequently use. Here's what this command does:

1. Interprets configuration information
1. Generates a Webpack configuration object in memory
1. Starts a Webpack watch session using the JS interface of Webpack
1. Creates a BrowserSync session, connected to Webpack
1. Waits for initial files to be compiled by Webpack
1. Opens your default browser
1. Listens for changes

## Kit Build

```
kit build --env {environment}
```

This command will build the theme locally without deploying it to Shopify. Here's what this command does:

1. Interprets configuration information
1. Generates a Webpack configuration object in memory
1. Starts a Webpack build session using the JS interface of Webpack
1. Waits for Webpack to compile files
1. Merges compiled files with files that Webpack is not informed about (e.g Liquid)
1. Tokenizes all files, mapping each file to their final destination in the build directory
1. Copies all theme files over

## Kit Deploy

```
kit deploy --env {environment}
```

This command will build the theme for deployment to Shopify, only copying the Webpack compiled files to the build directory. Here's what this command does:

1. Interprets configuration information
1. Generates a Webpack configuration object in memory
1. Starts a Webpack build session using the JS interface of Webpack
1. Waits for Webpack to compile files
1. Merges compiled files with files that Webpack is not informed about (e.g Liquid)
1. Tokenizes all files, mapping each file to their final destination in memory
1. Creates a queue that controls a throttled deployment to Shopify
1. Optionally renames the Shopify theme at the end of the deployment

### Deploy Compiled Only

Note the following flag will only deploy Webpack compiled files (usually CSS and JS)

```
kit deploy --env {environment} --compiled-only
```

## Other commands

In addition to these three main commands, Kit also exposes the following commands:

- `kit lint` (see [Linting](/docs/linting))
- `kit gitlab` (see [Gitab](/docs/gitlab-integration))
- `kit theme` (see [Developer Themes](/docs/developer-themes))
- `kit --version` (print your current version of kit)

And run `kit` or `kit help` to print an outline of what is available.
