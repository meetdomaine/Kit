module.exports = `
/*! Flickity v2.2.1
https://flickity.metafizzy.co
---------------------------------------------- */

.flickity-enabled {
  position: relative;
}

/* draggable */

/* ---- flickity-button ---- */

/* ---- previous/next buttons ---- */

.flickity-prev-next-button {
  top: 50%;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  /* vertically center */
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
{
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
.grey {
  color: #cdcdcd !important;
}
@font-face {
  font-family: 'Optima LT Pro';
  src: url('{{"OptimaLTPro-Roman.woff2" | asset_url }}');
  src: url('{{"OptimaLTPro-Roman.eot?#iefix" | asset_url }}')
      format('embedded-opentype'),
    url('{{"OptimaLTPro-Roman.woff2" | asset_url }}') format('woff2'),
    url('{{"OptimaLTPro-Roman.woff" | asset_url }}') format('woff'),
    url('{{"OptimaLTPro-Roman.ttf" | asset_url }}') format('truetype'),
    url('{{"OptimaLTPro-Roman.svg#OptimaLTPro-Roman" | asset_url }}')
      format('svg');
  font-weight: normal;
  font-style: normal;
}
:focus {
  outline: 0.05px solid #0b163b !important;
} /*! path: /dummy/user/src/modules/404/404.scss */
.page-error__header {
  display: block;
  padding: 30px 0 0;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  color: #0b163b;
}
.page-error__header .page__head h1 {
  text-align: center;
  margin-bottom: 14px;
}
.page-error__header .page__content {
  margin-bottom: 40px;
}
.page-error__header .page__content p {
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
  line-height: 24px;
}
.page-error__header .page__footer {
  text-align: center;
}
@media (min-width: 415px) {
  .page-error__header {
    padding-top: 40px;
    max-width: 568px;
  }
}
@media (min-width: 769px) {
  .page-error__header {
    max-width: 640px;
    padding-top: 11px;
  }
  .page-error__header .page__content p {
    text-align: left;
  }
}
@media (min-width: 1024px) {
  .page-error__header {
    padding-top: 45px;
    max-width: 930px;
  }
}
.page-error__content {
  display: block;
  padding-bottom: 84px;
  color: #0b163b;
} /*! path: /dummy/user/src/modules/collection/plp.scss */
.plp {
  display: block;
  color: #0b163b;
}
@media (min-width: 1024px) {
  .plp .plp-mobile-hidden {
    display: block;
  }
} /*! path: /dummy/user/src/modules/page/basic-page.scss */
.basic-page__wrapper {
  min-height: calc(100vh - 120px);
  padding: 0 0 10rem;
  color: #0b163b;
}
.basic-page__wrapper a {
  display: inline-block;
  color: #092dc5;
  text-decoration: underline;
} /*! path: /dummy/user/src/modules/page-faq/faq.scss */
.faq > .container {
  max-width: 320px;
}
@media (min-width: 415px) {
  .faq > .container {
    max-width: 568px;
  }
} /*! path: /dummy/user/src/modules/cart/cart-item/cart-item.scss */
.cart-item {
  padding-top: 15px;
  margin-bottom: 15px;
  border-top: 1px solid #c5bdbc;
}
@media (min-width: 769px) {
  .cart-grid--default .cart-item {
    display: table-row;
    padding: 0;
  }
} /*! path: /dummy/user/src/modules/product/pdp.scss */
.pdp {
  display: block;
  padding-bottom: 1px;
}
.pdp--bottom {
  padding-bottom: 1px;
} /*! path: /dummy/user/src/modules/collection-editorial/editorial-grid/editorial-grid.scss */
.plp-editorial__grid {
  padding: 0 30px;
  -webkit-box-align: stretch;
  align-items: stretch;
  justify-content: space-around;
}
@media (min-width: 768px) {
  .plp-editorial__grid {
    max-width: 720px;
  }
} /*! path: /dummy/user/src/modules/collection-editorial/editorial-head/editorial-head.scss */
.plp-editorial__head__image {
  display: block;
  margin-bottom: 115px;
  padding-bottom: 93.5%;
}
@media (min-width: 1024px) {
  .plp-editorial__head__image {
    padding-bottom: 42%;
  }
} /*! path: /dummy/user/src/modules/account/account-order-grid/account-order-grid.scss */
.account-entry-form {
  max-width: 350px;
}
.orders__order {
  padding: 1.2em;
  border-radius: 4px;
}
.orders__order:nth-of-type(odd) {
  background-color: #f2f2f2;
} /*! path: /dummy/user/src/modules/account/account-register-form/account-register-form.scss */
.register-form label.checkbox span {
  color: #0b163b;
} /*! path: /dummy/user/src/modules/account/alert/alert.scss */
.alert {
  padding: 10px;
}
.alert--error {
  color: #da3522;
} /*! path: /dummy/user/src/modules/account/page-title/page-title.scss */
.page-title {
  margin: 50px auto 30px;
} /*! path: /dummy/user/src/modules/page-styleguide/styleguide/styleguide.scss */
.s-guide {
  padding: 50px 0;
}
.s-guide__byline {
  margin-bottom: 15px;
  display: -webkit-box;
  display: flex;
} /*! path: /dummy/user/src/modules/page-stores/stores/stores.scss */
.stores {
  padding-top: 15px;
}
.stores--accordions {
  padding-bottom: 80px;
} /*! path: /dummy/user/src/modules/page-wishlist/wishlist-products/wishlist-products.scss */
.wishlist-products {
  display: block;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: opacity 0.5s, visibility 0.5s;
  transition: opacity 0.5s, visibility 0.5s;
}
.wishlist-products.is-loaded {
  opacity: 1;
  visibility: visible;
} /*! path: /dummy/user/src/modules/product/product-cta/product-cta.scss */
.product-cta {
  display: block;
}
.form-cta-fix {
  text-align: center;
  -webkit-transition: min-width 0.2s ease-in-out;
  transition: min-width 0.2s ease-in-out;
} /*! path: /dummy/user/src/modules/product/product-editorial/product-editorial.scss */
.product-editorial {
  display: block;
}
.product-editorial__slides {
  opacity: 0;
} /*! path: /dummy/user/src/modules/reviews/product-reviews/product-reviews.scss */
.product-reviews {
  color: #0b163b;
}
.scroll-anchor {
  z-index: -10;
  top: 0;
  position: relative;
} /*! path: /dummy/user/src/modules/reviews/reviews-form/reviews-form.scss */
.reviews-form {
  color: #0b163b;
}
`
