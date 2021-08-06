---
description: ''
sidebar: 'docs'
prev: '/docs'
next: '/docs'
---

# Introduction

At Half Helix, we've been using this build and development tool for all of our Shopify themes since late 2019. We built and incorporated it into our workflows since we saw a need to have a scalable developer experience that can be purposed on a wide range of Shopify theme projects without our developers having to worry about setup.

We are in 2021 now and there are new tools and features that greatly help with Shopify theme development. Shopify has introduced [Dawn](https://github.com/Shopify/dawn) and with it a set of standards that encourage adoption of simpler approaches to theme development and a preference for JIT asset pipelines. [Shopify CLI for Themes](https://shopify.dev/themes/tools/cli/theme-commands) has been introduced to encourage this approach over robust tooling and file mutations. In part this is an expression of the maturity of modern browser APIs and our ability as a community to leverage greenfield features, like native javascript syntax and APIs like Web Components.

We'll be supporting this tool and allowing theme developers that use this tool to get the most out of Shopify. Feel free to review our recent Online Store 2.0 feature additions which we'll continue to add to.

## Philosophy & Contributing

This tool was made for our team Half Helix and currently our focus is on maintaining it for our immediate stakeholders. If you have an idea or notice a bug please feel free to reach out and submit a Merge Request.

## Dependencies

This tool is built upon Webpack 4 and it is certainly time to upgrade to Webpack 5. There are a number of vulnerability flags that we'll get removed with this pending update.

## Online Store 2.0 Features

During Unite in 2021, Shopify released a number of features under the name "Online Store 2.0". We explore how this tool supports these features in the "Online Store 2.0" section. Here are the features that we've added:

- Github Support
- Theme Kit Access Tokens
- Developer Themes
