---
description: ''
sidebar: 'docs'
prev: '/docs'
next: '/docs'
---

# Developer Themes

Development themes were introduced by Shopify to provide separation between developer and non-developer workflows, and help avoid a merchant from hitting their Shopify theme limit.

The developer flow here is focused on allowing a developer to have **one development theme per branch**. We have introduced a `.kit-themes.json` file that tracks the theme ID to the branch name. This file will be different for each developer, hence this file should be .gitignore'd.

**Note: Development themes do not show in the Shopify Admin UI.**

## Commands

Here are a list of commands added to support developer themes:

```bash
# Create new developer theme
kit theme init

# Get info about current theme
kit theme info

# Deploy local build to current theme
kit theme deploy (or kit deploy --developer)

# Develop against the current theme
kit theme watch (or kit watch --developer)

# Destroy current theme
kit theme destroy
```

When interacting with Shopify, these commands will use the store myshopify.com URL and password properties that have been configured in your project's kit.config.js file.

## kit theme init

```
kit theme init
```

Create a new development theme for the current branch. If a theme ID is already tracked to the branch name in the `{project}/.kit-themes.json` file, then a new theme is not created and the current theme's information is printed in your terminal window. You can remove the current mapping by running `kit theme destroy` or deleting the reference in the `{project}/.kit-themes.json` using your IDE.

Note: This simply creates an empty theme. Using `kit theme deploy` to update this theme with new files.

## kit theme info

```
kit theme info
```

Prints out information about the current branch's developer theme. You'll get an error messaging if you haven't mapped a theme to the current branch already using `kit theme init`.

## kit theme deploy

```
kit theme deploy (or kit deploy --developer)
```

Deploys theme assets to the current branch's developer theme. This should be run before starting development against a brand new theme.

## kit theme watch

```
kit theme watch (or kit watch --developer)
```

Start a developer environment against the current branch's developer theme. If a developer theme has not been mapped to the current branch, the theme mapped to your current --env setting in your `kit.config.js` will be used (and a notice will be shown in your terminal window).

## kit theme destroy

```
kit theme destroy
```

Note: This action will have immediate effect without an interstitial prompt.

This allows a developer to remove a theme from Shopify once the need for the theme has been satisfied. Generally speaking, the developer who created the theme originally should be the person who removes the theme once they are finished with it.
