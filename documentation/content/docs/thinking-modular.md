---
description: ''
sidebar: 'docs'
prev: '/docs'
next: '/docs'
---

# Thinking Modular

When we create themes at Half Helix using this Kit, we structure our code into contained modules using the theme structure below:

```bash
.env
.eslintrc.js
.stylelintrc.js
kit.config.js
webpack.config.js
...
src
  |- assets
  |  |- scss
  |  |  |- lib
  |  |  |- main.scss
  |  |
  |  |- js
  |  |  |- lib
  |  |  |- main.js
  |  |
  |  |- images
  |  |- fonts
  |
  |- config
  |  |- lib
  |     |- section-a.json
  |     |- section-b.json
  |
  |- layout
  |- locales
  |- sections
  |- snippets
  |  |- gtm.liquid
  |  |- no-index.liquid
  |
  |- templates
  |- modules
     |- header
     |  |- header.js
     |  |- header.liquid
     |  |- header.scss
     |
     |- footer
     |- newsletter-signup
     |- ...
```

## Globbing JS and CSS files

In this example the header, footer and newsletter-signup code is encapsulated inside module folder. These module folders are a concept that helps us reuse code and keep track of logic, markup and styles across complex themes.

This toolbelt enables this architecture by supporting glob patterns like the examples provided below using a custom Webpack loader:

```js
// main.scss
// Our Webpack loader takes this glob pattern and injects found
// files into the bundle.
@import "modules/**/*.scss";

// main.js
// Our Webpack loader similarly takes this glob pattern and
// injects found files into the bundle. It'll also chunk the
// files together based on folder.
import 'modules/**/*.js'
```

## File Type Support

In addition to style and Javascript files, Liquid is taken out of these module folders and sent to the Snippets, Sections or Templates theme directories. For example:

```bash
src/modules/header/header.liquid > snippets/header.liquid
src/modules/global/header/header.liquid > snippets/header.liquid
src/modules/header/header.section.liquid > sections/header.liquid
src/modules/cart/cart.template.liquid > templates/cart.liquid
```

## Folder Naming Conventions

If the top-level module folders are named a certain way, CSS chunking and JS asset chunking is more readily supported. The standard convention is to follow the pattern: `{request.page_type}-{template.suffix}`. Here is an example of a common structure:

```bash
src
  |- modules
     |- global
     |  |- header
     |     |- header.js
     |     |- header.liquid
     |     |- header.scss
     |
     |- account/
     |- cart/
     |- collection/
     |- product/
     |- page-{template}
     |- ...
```
