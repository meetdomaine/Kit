---
description: ''
sidebar: 'docs'
prev: '/docs'
next: '/docs'
---

# Javascript Chunking

There is functionality included to split Javascript into chunks based on folder name, under the assumption that folder names map to finite locations of a theme, like the home page, or a specific page template. The aim here is to help prevent say, an extensive amount of javascript required for a robust page template to impact a part of the site that is separate, like the home page.

The [Thinking Modular](/docs/thinking-modular) section is important to read, since this functionality is baked on top of the way modules are sorted into directories as explained there. Lets take a directory structure as follows:

```js
src
  |- assets/
  |- config/
  |- layout/
  |- locales/
  |- sections/
  |- snippets/
  |- templates/
  |- modules
     |- global/
     |  |- module-a/
     |  |  |- module-a.js
     |  |  |- module-a.liquid
     |  |  |- module-a.scss
     |  |- module-b/
     |- index
     |  |- module-c/
     |  |  |- module-c.js
     |  |- module-d/
     |  |  |- module-d.js
     |- page-landing
     |  |- module-e/
     |  |  |- module-e.js
     |  |- module-f/
     |  |  |- module-f.js
     |- ...
```

This functionality will leverage Webpack to attempt to separate the landing page module JS from the index page JS, but have both areas of the site (the homepage and a page using a "landing" template) access the necessary global javascript. By using folder names to dictate Webpack chunks, we aim to provide an out of the box performance enhancement that can be configured as need be.

Behind the scenes, the implementation is quite simple, we are ingesting the path of the chunk in a custom Webpack loader, and using the top level module folder as the value for the `webpackChunkName` of the module's javascript file.

Note that there is still a single JS bundle entrypoint that Webpack creates to control the loading of subsequent JS chunks.

### Defining custom JS chunks

Sometimes we might have a specific module, or collection of modules that use some big NPM dependencies (e.g. like GSAP, ScrollMagic, etc). Using Kit and under the hood, Webpack, we can ensure that these dependencies only get loaded in the parts of the theme that they are relevant to.

#### Custom JS chunk configuration example

```js
// src/modules/global/vertical-scroll.js

export default function (el) {
  Promise.all([
    import(/* webpackChunkName: "vertical-scroll" */ 'scrollmagic'),
    import(/* webpackChunkName: "vertical-scroll" */ 'gsap'),
    import(/* webpackChunkName: "vertical-scroll" */ 'scrollmagic-plugin-gsap')
  ]).then(([ScrollMagic, { gsap }, { ScrollMagicPluginGsap }]) => {
    ScrollMagicPluginGsap(ScrollMagic, gsap)

    // module code...
  }
}

```

In this example, we communicate to Webpack that certain dependencies should be in the custom javascript bundle "vertical-scroll". Further, by using `import()` we let Webpack load these in asynchronously and once they are all loaded, we run our module code.

In this way, we only load dependencies in the `vertical-scroll` bundle when we actually have the module on the page. If the module is not on a page, we don't load the dependencies in the browser.
