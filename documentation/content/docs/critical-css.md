---
description: ''
sidebar: 'docs'
prev: '/docs'
next: '/docs'
---

# CSS Chunking & Critical CSS

We've baked in configurable logic that can automatically create dedicated CSS files for different pages of a Shopify site. So, you can have a CSS file that targets product pages, account pages or a specific page template individually.

This functionality leverages the module grouping folders that were outlined in the "Folder naming convention" section below. How CSS files are requested on certain pages are informed by these folder names. See below:

```bash
src
  |- modules
     |- global
     |  |- header/
     |  |- footer/
     |
     |- page
     |  |- page-wysiwyg/
     |
     |- page-wishlist
     |  |- wishlist-grid/
```

With default settings, this structure will culminate into the following snippet (named via the ["css.chunk.snippet" setting](https://github.com/halfhelix/Kit/blob/master/packages/configure/src/defaults/css.js)) file being generated, with global styles kept in the main stylesheet:

```liquid
{% if request.page_type contains 'page' and template.suffix contains 'wishlist' %}
<link type="text/css" href="{{ 'page-wishlist.min.css' | asset_url }}" rel="stylesheet">
{% elsif request.page_type contains 'page' %}
<link type="text/css" href="{{ 'page.min.css' | asset_url }}" rel="stylesheet">
{% endif %}
```

If a folder name is in the `css.chunk.criticalWhitelist` setting, the corresponding Shopify template will parse the folder's CSS into critical and non-critical groups, with the non-critical group of CSS getting rendered asyncronously.

Here is an example of the output if "page" is whitelisted like so:

```js
css.chunk.criticalWhitelist: ['page']
```

```liquid
{% elsif request.page_type contains 'page' %}
<style data-critical data-kit><!-- module critical styles are placed here --></style>
<link rel="stylesheet" href="{{ 'page.min.css' | asset_url }}" media="print" onload="this.media='all'" data-kit>
<noscript><link rel="stylesheet" href="{{ 'page.min.css' | asset_url }}"></noscript>
{% endif %}
```

### Defining critical CSS blocks

Within CSS files, define each block of CSS with the following comments:

```css
/*! critical */
.foo {
  height: 80vh;
}
/*! end critical */
.foo .icon {
  transform: translateZ(0);
}
```

### Folder naming conventions

The "global" folder is marked by default as a location to put any global code shared across files (e.g. styles that relate to a global styleguide system). Global styles are kept in the main stylesheet and loaded on every page.

For non global styles, the first word in the top level folder name before the "-" character (this character is configurable) maps to the `request.page_type`, and anything else after than point maps to the `template.suffix` Liquid variable. All this functionality can be modified by the settings outlined [here](/settings/css/).

This is also communicated in the [Thinking Modular > Folder Naming Conventions](/docs/thinking-modular/#folder-naming-conventions) section.

### Critical CSS Commands

The following commands have been added to the kit to help with making updates specifically to CSS to define critical CSS blocks using the comment blocks above.

```
kit critical --env development --close
kit critical --env development
```

The first command here will compile the CSS specifically and deploy it to Shopify, closing the session once done.

The second command will keep the process running, watch for further changes to CSS and deploy the changes to Shopify so that you can iterate on your changes, getting rid of the flash of unstyled content due to CSS not being configured appropriately as critical.

### Example kit.config.js configuration

```js
{
  ...
  'css.chunk': true,
  'css.chunk.globalFolders': ['global', 'icons'],
  'css.chunk.criticalWhitelist': ['index'],
  'css.chunk.partials': {
    'collection-and-search': ['collection', 'search']
  },
  // 'css.chunk.deferredChunkLink' (assetPath, settings) {
  //   return ``
  // }
}
```

- `css.chunk` tells Kit to chunk the CSS into different files based on on the module directory structure.

- `css.chunk.globalFolders` communicates which module directories should be understood to be global and loaded on every page. Sometimes we put icon related code in it's own directory (`src/modules/icons`), hence this configuration.

- `css.chunk.partials` are top level module directories that include code that should be shared across multiple templates. In this example, we have a `src/modules/collection-and-search` folder that includes modules that should be shared across both collection templates and the search template.

- `css.chunk.deferredChunkLink` overwrites the generated HTML for the non critical CSS `<link>`. Uncommenting this code will tell Kit to not render any non-critical css `<link>` which helps just see the page in it's critical CSS form. This allows a developer to zero in on HTML elements that may be flashing in when the page initially loads.
