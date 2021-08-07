---
description: ''
sidebar: 'docs'
prev: '/docs'
next: '/docs'
---

# Getting Started

Once you have [**Installed Kit**](/docs/) and [**Setup Your Theme**](/docs/theme-setup), we can move onto the following steps:

1. Install theme dependencies
1. Build the theme for the first time
1. Upload the built theme to Shopify
1. Setup your connection To Shopify
1. Test out you development environment

## Install theme dependencies

We are not going to spend too much time on this step. Ensure that you have installed your project dependencies by running `npm install` or `yarn` while you are in the root directory of your project.

## Build the theme for the first time

This step will help us validate that our theme setup is correct, Webpack is able to compile our JS and CSS assets and the Kit is able to copy over theme assets to the build directly (which defaults to `{project}/dist`). Running this command is always a good initial step when validating a new project.

Run: `kit build --env production`

#### Some problems you might encounter

```
Error: No settings for current env: development
```

This usually means that there is an issue finding the configuration file. Make sure that you have a kit.config.js file in the root of your project and this file follows the format outlined [**in the Theme Setup section**](/docs/theme-setup/#kitconfigjs).

```
UnhandledPromiseRejectionWarning: Error: Cannot find module {module}
```

Make sure that any NPM module you are using in `webpack.config.js` or `kit.config.js` has been installed into the project. This can often be related to Babel plugins, Eslint plugins or Webpack plugins that are specific to your project.

## Upload the built theme to Shopify

It is essential that we have an accurate development theme in your Shopify instance that matches your local environment.

A way to do this when starting a new project is to zip up the build directory (defaults to `{project}/dist`) after the theme has been successfully built and upload it to Shopify using the "Upload Theme" functionality in the Shopify Admin UI.

## Setup your connection To Shopify

Here, we setup the three main variables that we need to get a development environment going:

- The {instance}.myshopify.com URL.
- A private app password that we can use to establish an API connection (this can be a [Theme Kit Access Tokens](/docs/theme-kit-access-tokens)).
- The theme ID of the theme we'll be developing against.

**The .myshopify.com URL**

This should be easy to get ahold of. Head over to your Shopify instance, head over to `/admin/` and copy the `{handle}.myshopify.com` portion of the URL. Don't worry about the HTTP/S protocol. This should look something like `i-love-kit.myshopify.com`.

**Private App Password**

Head over to the Apps section of the Shopify instance admin, click "Manage Private Apps" and create a new private app that has permissions to read and write theme files. Here, we want the **"Password"** property, not the **"Api Key"** property.

Note: See the [Theme Kit Access Tokens](/docs/theme-kit-access-tokens) section if Theme Kit Access Tokens are preferred over private app passwords.

**Theme ID**

Head over to the Theme section of the Shopify instance admin, find your corresponding theme and click "Customize". Grab the ID out of the URL bar. (Note: You'll need to make sure that you your local theme state matches a theme that has been deployed to Shopify servers).

Now that you've acquired these three properties, add them to your `{project}/.env` file following the format in [**Theme Setup / .env**](/docs/theme-setup/#env).

## Test out your dev environment

Alright, lets spin things up! If we've done the setup correctly, this should be nice n' simple.

Run: `kit watch`

Head over to [**Commands / Watch**](/docs/commands#watch) for a run down on what happens in this command.
