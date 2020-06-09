module.exports = `
/*! Flickity v2.2.1
https://flickity.metafizzy.co
---------------------------------------------- */

.flickity-enabled {
  position: relative;
}

.flickity-enabled:focus {
  outline: none;
}

.flickity-viewport {
  overflow: hidden;
  position: relative;
  height: 100%;
}

.flickity-slider {
  position: absolute;
  width: 100%;
  height: 100%;
}

/* draggable */

.flickity-enabled.is-draggable {
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.flickity-enabled.is-draggable .flickity-viewport {
  cursor: move;
  cursor: -webkit-grab;
  cursor: grab;
}

.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
  cursor: -webkit-grabbing;
  cursor: grabbing;
}

/* ---- flickity-button ---- */

.flickity-button {
  position: absolute;
  background: hsla(0, 0%, 100%, 0.75);
  border: none;
  color: #333;
}

.flickity-button:hover {
  background: white;
  cursor: pointer;
}

.flickity-button:focus {
  outline: none;
  box-shadow: 0 0 0 5px #19f;
}

.flickity-button:active {
  opacity: 0.6;
}

.flickity-button:disabled {
  opacity: 0.3;
  cursor: auto;
  /* prevent disabled button from capturing pointer up event. #716 */
  pointer-events: none;
}

.flickity-button-icon {
  fill: currentColor;
}

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

.flickity-prev-next-button.previous {
  left: 10px;
}
.flickity-prev-next-button.next {
  right: 10px;
}
/* right to left */
.flickity-rtl .flickity-prev-next-button.previous {
  left: auto;
  right: 10px;
}
.flickity-rtl .flickity-prev-next-button.next {
  right: auto;
  left: 10px;
}

.flickity-prev-next-button .flickity-button-icon {
  position: absolute;
  left: 20%;
  top: 20%;
  width: 60%;
  height: 60%;
}

/* ---- page dots ---- */

.flickity-page-dots {
  position: absolute;
  width: 100%;
  bottom: -25px;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
  line-height: 1;
}

.flickity-rtl .flickity-page-dots {
  direction: rtl;
}

.flickity-page-dots .dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 8px;
  background: #333;
  border-radius: 50%;
  opacity: 0.25;
  cursor: pointer;
}

.flickity-page-dots .dot.is-selected {
  opacity: 1;
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
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  cursor: default;
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote::before,
blockquote::after,
q::before,
q::after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
*,
*:focus,
*:active {
  outline: none;
  box-shadow: none;
}
a {
  color: inherit;
  text-decoration: none;
}
button[disabled],
input[disabled] {
  cursor: default;
}
button {
  cursor: pointer;
}
input,
select,
button {
  background-color: transparent;
  border: none;
  border-radius: 0;
  box-shadow: none;
  color: inherit;
  font-size: inherit;
  margin: 0;
  outline: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
}
input[type='number'] {
  -moz-appearance: textfield;
}
select::-ms-expand {
  display: none;
}
.bg-indigo {
  background-color: #0b163b !important;
}
.indigo {
  color: #0b163b !important;
}
.bg-reflex-blue {
  background-color: #092dc5 !important;
}
.reflex-blue {
  color: #092dc5 !important;
}
.bg-champagne {
  background-color: #f9ece1 !important;
}
.champagne {
  color: #f9ece1 !important;
}
.bg-cream {
  background-color: #fbf4ed !important;
}
.cream {
  color: #fbf4ed !important;
}
.bg-indigo-lt {
  background-color: #5b667f !important;
}
.indigo-lt {
  color: #5b667f !important;
}
.bg-tangerine {
  background-color: #da3522 !important;
}
.tangerine {
  color: #da3522 !important;
}
.bg-blue-grey {
  background-color: #c5bdbc !important;
}
.blue-grey {
  color: #c5bdbc !important;
}
.bg-blue-lt {
  background-color: #eefaff !important;
}
.blue-lt {
  color: #eefaff !important;
}
.bg-black {
  background-color: #0b163b !important;
}
.black {
  color: #0b163b !important;
}
.bg-white {
  background-color: #fff !important;
}
.white {
  color: #fff !important;
}
.bg-red {
  background-color: #da3522 !important;
}
.red {
  color: #da3522 !important;
}
.bg-grey {
  background-color: #cdcdcd !important;
}
.grey {
  color: #cdcdcd !important;
}
.bg-grey-2 {
  background-color: #e0e0e0 !important;
}
.grey-2 {
  color: #e0e0e0 !important;
}
.bg-grey-5 {
  background-color: #333 !important;
}
.grey-5 {
  color: #333 !important;
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
@font-face {
  font-family: 'Optima LT Pro';
  src: url('{{"OptimaLTPro-Bold.eot" | asset_url }}');
  src: url('{{"OptimaLTPro-Bold.eot?#iefix" | asset_url }}')
      format('embedded-opentype'),
    url('{{"OptimaLTPro-Bold.woff2" | asset_url }}') format('woff2'),
    url('{{"OptimaLTPro-Bold.woff" | asset_url }}') format('woff'),
    url('{{"OptimaLTPro-Bold.ttf" | asset_url }}') format('truetype'),
    url('{{"OptimaLTPro-Bold.svg#OptimaLTPro-Bold" | asset_url }}')
      format('svg');
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: 'Sofia Pro';
  src: url('{{"SofiaPro-Bold.eot" | asset_url }}');
  src: url('{{"SofiaPro-Bold.eot?#iefix" | asset_url }}')
      format('embedded-opentype'),
    url('{{"SofiaPro-Bold.woff2" | asset_url }}') format('woff2'),
    url('{{"SofiaPro-Bold.woff" | asset_url }}') format('woff'),
    url('{{"SofiaPro-Bold.ttf" | asset_url }}') format('truetype'),
    url('{{"SofiaPro-Bold.svg#SofiaPro-Bold" | asset_url }}') format('svg');
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: 'Sofia Pro';
  src: url('{{"SofiaProRegular.eot" | asset_url }}');
  src: url('{{"SofiaProRegular.eot?#iefix" | asset_url }}')
      format('embedded-opentype'),
    url('{{"SofiaProRegular.woff2" | asset_url }}') format('woff2'),
    url('{{"SofiaProRegular.woff" | asset_url }}') format('woff'),
    url('{{"SofiaProRegular.ttf" | asset_url }}') format('truetype'),
    url('{{"SofiaProRegular.svg#SofiaProRegular" | asset_url }}') format('svg');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Sofia Pro';
  src: url('{{"SofiaProMedium.eot" | asset_url }}');
  src: url('{{"SofiaProMedium.eot?#iefix" | asset_url }}')
      format('embedded-opentype'),
    url('{{"SofiaProMedium.woff2" | asset_url }}') format('woff2'),
    url('{{"SofiaProMedium.woff" | asset_url }}') format('woff'),
    url('{{"SofiaProMedium.ttf" | asset_url }}') format('truetype'),
    url('{{"SofiaProMedium.svg#SofiaProMedium" | asset_url }}') format('svg');
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: 'Sofia Pro Semi';
  src: url('{{"SofiaProSemiBold.eot" | asset_url }}');
  src: url('{{"SofiaProSemiBold.eot?#iefix" | asset_url }}')
      format('embedded-opentype'),
    url('{{"SofiaProSemiBold.woff2" | asset_url }}') format('woff2'),
    url('{{"SofiaProSemiBold.woff" | asset_url }}') format('woff'),
    url('{{"SofiaProSemiBold.ttf" | asset_url }}') format('truetype'),
    url('{{"SofiaProSemiBold.svg#SofiaProSemiBold" | asset_url }}')
      format('svg');
  font-weight: 600;
  font-style: normal;
}
.basic-page__title h1,
.account-grid .account__content h1,
.account__nav__head p,
.wysiwyg.container.basic-page .wysiwyg__container h1,
.h1,
.wysiwyg__container h1,
.h1--sm,
.wysiwyg.container.basic-page .wysiwyg__container .section-title,
.h2,
.wysiwyg__container h2,
.h2--sm,
.page-error__header .page__head h1,
.h2--lg,
.regular-form__title,
.h2--modal-title,
.account-forms__title,
.account__login-grid__title,
.h3,
.wysiwyg__container h3,
.wysiwyg.container.basic-page .wysiwyg__container h4,
.h4,
.wysiwyg__container h4,
.wysiwyg__container h5,
.wysiwyg__container h6,
.bq,
.wysiwyg__container,
.wysiwyg.container.basic-page .wysiwyg__container h1 > strong,
.wysiwyg.container.basic-page .wysiwyg__container h1 > span {
  font-family: 'Optima LT Pro', arial, sans-serif;
  font-weight: normal;
}
body,
.h1--secondary-sm,
.bottle-counter .bottle-counter__title,
.h2--secondary,
.h3--secondary,
.nav-mobile .dropdown-block--large .dropdown-block__title,
.section-size-charts .section__entry h4,
.nav-mobile > ul > li > a,
.nav-mobile .nav__dropdown-title,
.nav-mobile .nav__dropdown-subtitle,
.h4--secondary,
.h4--secondary-lg,
.wysiwyg.container.basic-page .wysiwyg__container h2,
.wysiwyg.container.basic-page .wysiwyg__container ul li::before,
.wysiwyg.container.basic-page .wysiwyg__container .section-subtitle,
.h4--secondary-md,
.h4--secondary-sm,
.nav-mobile .dropdown-block__title,
.p0,
.form-subtext p,
.form-success p,
.form-errors p,
.account__login-grid__description,
.register-form label.checkbox span,
div.fs-text-container .fs-entry-date,
div.fs-detail-container .fs-post-info,
div.fs-wrapper div.fs-has-links::after,
.fs-text-product,
.fs-overlink-text,
#fs-detail-products .fs-product-column .fs-shopify-options .fs-view,
#fs-detail-products
  .fs-product-column
  .fs-shopify-options
  .fs-view
  .fs-product-name,
#fs-detail-products
  .fs-product-column
  .fs-shopify-options
  .fs-view
  .fs-product-vendor,
#fs-detail-products
  .fs-product-column
  .fs-shopify-options
  .fs-view
  .fs-product-price,
.fs-detail-content div.fs-detail-title,
.fs-option-group .fs-option-name,
.multi-option__title,
.multi-option__label > span,
.dropdown-block--large .dropdown-block__title,
.dropdown-menu .dropdown-menu__value,
.form-newsletter .field,
.radio-button .radio-button__title,
.radio-button .radio-button__label > span,
.text-input__el,
.wysiwyg.container.basic-page .wysiwyg__container table tr td,
.header .header__search-field,
.nav > ul > li > .nav__dropdown > a,
.nav .nav__dropdown .nav__dropdown > ul,
.nav-mobile .nav__dropdown .nav__dropdown li,
.p1,
.page-error__header .page__content p,
.p1--md,
.faq-search__field .text-input__label,
.account-new-addr .text-input .text-input__el,
.account-new-addr .text-input:not(.is-active) .text-input__label,
.wysiwyg.container.basic-page .wysiwyg__container,
.wysiwyg.container.basic-page .wysiwyg__container h3,
.wysiwyg.container.basic-page .wysiwyg__container p.header-note,
.p1--lg,
.a3,
.ul,
.ol,
.form-newsletter .form__note,
.form-newsletter .form__message--error,
.product-card__details__title .badge span.medium,
.p2,
.wysiwyg.container.basic-page .wysiwyg__container h3.subtitle,
.p2--lg,
#fs-detail-products .fs-product-column .fs-shopify-options p,
#fs-detail-products .fs-product-column .fs-shopify-options .fs-add button,
.fs-detail-content .fs-post-info,
.fs-detail-content .fs-post-info a,
.fs-detail-content .fs-post-info .fs-detail-date,
.fs-detail-content .fs-post-info .fs-service-username,
.fs-detail-content .fs-post-info .fs-service-username::after,
.fs-option-group .fs-variant-select,
.fs-option-group .fs-variant-select .fs-option-label,
.fs-add-to-cart-enabled .fs-button-bar a,
.fs-add-to-cart-enabled .fs-button-bar a.fs-buy-button,
.product-card__details__title .badge span.small,
.footer__nav a,
.header-cart-icon__count,
.p3,
.account__subtitle,
.wysiwyg.container.basic-page .wysiwyg__container h4,
.wysiwyg.container.basic-page .wysiwyg__container h5,
.wysiwyg.container.basic-page .wysiwyg__container h6 {
  font-family: 'Sofia Pro', arial, sans-serif;
  font-weight: normal;
}
.btn,
.wysiwyg.container.basic-page .wysiwyg__container h5,
.nav > ul > li > a,
.h5,
.yotpo-stars__cta,
.btn--link--sm,
.form-newsletter .form__btn,
.notification-bar .notification-bar__btn,
.product-card__details__title .badge span.small-uppercase,
.wysiwyg.container.basic-page .wysiwyg__container h6,
.nav-mobile > ul > li > .nav__dropdown > ul > li > a,
.h6,
.h6--secondary,
.h6--lg,
.btn--link,
.hello-bar__text,
.product-card__details__title .badge span.medium-uppercase,
.section-size-charts .section__entry tr:first-child td,
.wysiwyg.container.basic-page .wysiwyg__container a.cta-link,
.nav > ul > li > .nav__dropdown > ul > li > a,
.h6--link,
.semi,
.basic-page__wrapper strong,
.faq-search__dropdown mark,
.order-details .order-details__meta strong,
.order-addresses .address strong,
.wysiwyg.container.basic-page .wysiwyg__container h2 strong,
.wysiwyg.container.basic-page .wysiwyg__container h3,
.wysiwyg.container.basic-page .wysiwyg__container h3 strong,
.wysiwyg.container.basic-page .wysiwyg__container h3.subtitle,
.wysiwyg.container.basic-page .wysiwyg__container h4 strong,
.wysiwyg.container.basic-page .wysiwyg__container h5 strong,
.wysiwyg.container.basic-page .wysiwyg__container h6 strong,
.order-details-item .order-details-item__content p strong,
.order-item .order-item__content p strong,
.header .header__account-title {
  font-family: 'Sofia Pro Semi', arial, sans-serif;
  font-weight: 600;
}
body {
  letter-spacing: 0.5px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
}
.basic-page__title h1,
.account-grid .account__content h1,
.account__nav__head p,
.wysiwyg.container.basic-page .wysiwyg__container h1,
.h1,
.wysiwyg__container h1 {
  font-size: 48px;
  line-height: 56px;
}
@media (min-width: 769px) {
  .basic-page__title h1,
  .account-grid .account__content h1,
  .account__nav__head p,
  .wysiwyg.container.basic-page .wysiwyg__container h1,
  .h1,
  .wysiwyg__container h1 {
    font-size: 54px;
    line-height: 62px;
  }
}
.h1--sm {
  font-size: 36px;
  line-height: 44px;
}
@media (min-width: 769px) {
  .h1--sm {
    font-size: 54px;
    line-height: 62px;
  }
}
.h1--secondary-sm {
  font-size: 36px;
  line-height: 44px;
}
@media (min-width: 769px) {
  .h1--secondary-sm {
    font-size: 54px;
    line-height: 62px;
  }
}
.wysiwyg.container.basic-page .wysiwyg__container .section-title,
.h2,
.wysiwyg__container h2 {
  font-size: 36px;
  line-height: 44px;
}
@media (min-width: 415px) {
  .wysiwyg.container.basic-page .wysiwyg__container .section-title,
  .h2,
  .wysiwyg__container h2 {
    font-size: 48px;
    line-height: 56px;
  }
}
.h2--sm {
  font-size: 24px;
  line-height: 32px;
}
@media (min-width: 415px) {
  .h2--sm {
    font-size: 36px;
    line-height: 44px;
  }
}
@media (min-width: 769px) {
  .h2--sm {
    font-size: 48px;
    line-height: 56px;
  }
}
.page-error__header .page__head h1,
.h2--lg {
  font-size: 36px;
  line-height: 32px;
}
@media (min-width: 415px) {
  .page-error__header .page__head h1,
  .h2--lg {
    font-size: 36px;
    line-height: 44px;
  }
}
@media (min-width: 769px) {
  .page-error__header .page__head h1,
  .h2--lg {
    font-size: 48px;
    line-height: 56px;
  }
}
.bottle-counter .bottle-counter__title,
.h2--secondary {
  font-size: 36px;
  line-height: 44px;
}
@media (min-width: 415px) {
  .bottle-counter .bottle-counter__title,
  .h2--secondary {
    font-size: 48px;
    line-height: 56px;
  }
}
.regular-form__title,
.h2--modal-title {
  font-size: 36px;
  line-height: 42px;
}
.account-forms__title,
.account__login-grid__title,
.h3,
.wysiwyg__container h3 {
  font-size: 24px;
  line-height: 32px;
}
@media (min-width: 415px) {
  .account-forms__title,
  .account__login-grid__title,
  .h3,
  .wysiwyg__container h3 {
    font-size: 36px;
    line-height: 42px;
  }
}
.h3--secondary {
  font-size: 30px;
  line-height: 40px;
}
.wysiwyg.container.basic-page .wysiwyg__container h4,
.h4,
.wysiwyg__container h4,
.wysiwyg__container h5,
.wysiwyg__container h6 {
  font-size: 24px;
  line-height: 32px;
}
.nav-mobile .dropdown-block--large .dropdown-block__title,
.section-size-charts .section__entry h4,
.nav-mobile > ul > li > a,
.nav-mobile .nav__dropdown-title,
.nav-mobile .nav__dropdown-subtitle,
.h4--secondary {
  font-size: 24px;
  line-height: 32px;
}
.h4--secondary-lg {
  font-size: 20px;
  line-height: 30px;
}
@media (min-width: 769px) {
  .h4--secondary-lg {
    font-size: 24px;
    line-height: 32px;
  }
}
.wysiwyg.container.basic-page .wysiwyg__container h2,
.wysiwyg.container.basic-page .wysiwyg__container ul li::before,
.wysiwyg.container.basic-page .wysiwyg__container .section-subtitle,
.h4--secondary-md {
  font-size: 16px;
  line-height: 24px;
}
@media (min-width: 376px) {
  .wysiwyg.container.basic-page .wysiwyg__container h2,
  .wysiwyg.container.basic-page .wysiwyg__container ul li::before,
  .wysiwyg.container.basic-page .wysiwyg__container .section-subtitle,
  .h4--secondary-md {
    font-size: 18px;
    line-height: 26px;
  }
}
@media (min-width: 415px) {
  .wysiwyg.container.basic-page .wysiwyg__container h2,
  .wysiwyg.container.basic-page .wysiwyg__container ul li::before,
  .wysiwyg.container.basic-page .wysiwyg__container .section-subtitle,
  .h4--secondary-md {
    font-size: 24px;
    line-height: 32px;
  }
}
.h4--secondary-sm {
  font-size: 16px;
  line-height: 24px;
}
@media (min-width: 415px) {
  .h4--secondary-sm {
    font-size: 24px;
    line-height: 32px;
  }
}
.btn,
.wysiwyg.container.basic-page .wysiwyg__container h5,
.nav > ul > li > a,
.h5 {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 3px;
  text-transform: uppercase;
}
.yotpo-stars__cta,
.btn--link--sm,
.form-newsletter .form__btn,
.notification-bar .notification-bar__btn,
.product-card__details__title .badge span.small-uppercase,
.wysiwyg.container.basic-page .wysiwyg__container h6,
.nav-mobile > ul > li > .nav__dropdown > ul > li > a,
.h6 {
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 3px;
  text-transform: uppercase;
}
.h6--secondary {
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 3px;
  text-transform: uppercase;
}
@media (min-width: 415px) {
  .h6--secondary {
    font-size: 14px;
    line-height: 22px;
  }
}
.h6--lg {
  font-size: 12px;
  line-height: 13px;
  letter-spacing: 3px;
  text-transform: uppercase;
}
@media (min-width: 415px) {
  .h6--lg {
    font-family: 'Sofia Pro', arial, sans-serif;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
  }
}
.btn--link,
.hello-bar__text,
.product-card__details__title .badge span.medium-uppercase,
.section-size-charts .section__entry tr:first-child td,
.wysiwyg.container.basic-page .wysiwyg__container a.cta-link,
.nav > ul > li > .nav__dropdown > ul > li > a,
.h6--link {
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 3px;
  text-transform: uppercase;
}
.nav-mobile .dropdown-block__title,
.p0 {
  font-size: 18px;
  line-height: 26px;
}
.form-subtext p,
.form-success p,
.form-errors p,
.account__login-grid__description,
.register-form label.checkbox span,
div.fs-text-container .fs-entry-date,
div.fs-detail-container .fs-post-info,
div.fs-wrapper div.fs-has-links::after,
.fs-text-product,
.fs-overlink-text,
#fs-detail-products .fs-product-column .fs-shopify-options .fs-view,
#fs-detail-products
  .fs-product-column
  .fs-shopify-options
  .fs-view
  .fs-product-name,
#fs-detail-products
  .fs-product-column
  .fs-shopify-options
  .fs-view
  .fs-product-vendor,
#fs-detail-products
  .fs-product-column
  .fs-shopify-options
  .fs-view
  .fs-product-price,
.fs-detail-content div.fs-detail-title,
.fs-option-group .fs-option-name,
.multi-option__title,
.multi-option__label > span,
.dropdown-block--large .dropdown-block__title,
.dropdown-menu .dropdown-menu__value,
.form-newsletter .field,
.radio-button .radio-button__title,
.radio-button .radio-button__label > span,
.text-input__el,
.wysiwyg.container.basic-page .wysiwyg__container table tr td,
.header .header__search-field,
.nav > ul > li > .nav__dropdown > a,
.nav .nav__dropdown .nav__dropdown > ul,
.nav-mobile .nav__dropdown .nav__dropdown li,
.p1 {
  font-size: 16px;
  line-height: 24px;
}
.page-error__header .page__content p,
.p1--md {
  font-size: 16px;
  line-height: 24px;
}
@media (min-width: 769px) {
  .page-error__header .page__content p,
  .p1--md {
    font-size: 18px;
    line-height: 26px;
  }
}
.faq-search__field .text-input__label,
.account-new-addr .text-input .text-input__el,
.account-new-addr .text-input:not(.is-active) .text-input__label,
.wysiwyg.container.basic-page .wysiwyg__container,
.wysiwyg.container.basic-page .wysiwyg__container h3,
.wysiwyg.container.basic-page .wysiwyg__container p.header-note,
.p1--lg {
  font-size: 16px;
  line-height: 24px;
}
@media (min-width: 1024px) {
  .faq-search__field .text-input__label,
  .account-new-addr .text-input .text-input__el,
  .account-new-addr .text-input:not(.is-active) .text-input__label,
  .wysiwyg.container.basic-page .wysiwyg__container,
  .wysiwyg.container.basic-page .wysiwyg__container h3,
  .wysiwyg.container.basic-page .wysiwyg__container p.header-note,
  .p1--lg {
    font-size: 18px;
    line-height: 26px;
  }
}
.a3,
.ul,
.ol,
.form-newsletter .form__note,
.form-newsletter .form__message--error,
.product-card__details__title .badge span.medium,
.p2 {
  font-size: 14px;
  line-height: 22px;
}
.wysiwyg.container.basic-page .wysiwyg__container h3.subtitle,
.p2--lg {
  font-size: 14px;
  line-height: 22px;
}
@media (min-width: 1024px) {
  .wysiwyg.container.basic-page .wysiwyg__container h3.subtitle,
  .p2--lg {
    font-size: 18px;
    line-height: 26px;
  }
}
#fs-detail-products
  .fs-product-column
  .fs-shopify-options
  .fs-view
  .fs-product-price,
#fs-detail-products .fs-product-column .fs-shopify-options p,
#fs-detail-products .fs-product-column .fs-shopify-options .fs-add button,
.fs-detail-content .fs-post-info,
.fs-detail-content .fs-post-info a,
.fs-detail-content .fs-post-info .fs-detail-date,
.fs-detail-content .fs-post-info .fs-service-username,
.fs-detail-content .fs-post-info .fs-service-username::after,
.fs-option-group .fs-variant-select,
.fs-option-group .fs-variant-select .fs-option-label,
.fs-add-to-cart-enabled .fs-button-bar a,
.fs-add-to-cart-enabled .fs-button-bar a.fs-buy-button,
.product-card__details__title .badge span.small,
.footer__nav a,
.header-cart-icon__count,
.p3 {
  font-size: 12px;
  line-height: 20px;
}
.bq {
  font-size: 20px;
  line-height: 1.4;
}
@media (min-width: 415px) {
  .bq {
    font-size: 28px;
  }
}
.a1,
.link {
  cursor: pointer;
  opacity: 1;
}
.a1:hover,
.link:hover {
  text-decoration: underline;
}
.a2 {
  text-decoration: underline;
}
.a3 {
  display: inline-block;
  margin-left: -6px;
  padding: 0 6px;
  position: relative;
}
.a3 span {
  position: relative;
  z-index: 1;
}
.a3::before {
  content: '';
  height: 100%;
  right: 0;
  position: absolute;
  top: 0;
  width: 0;
  z-index: 0;
}
.no-touch .a1 {
  -webkit-transition: opacity 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out;
}
.no-touch .a1:hover {
  opacity: 0.6;
}
.no-touch .a2::after {
  -webkit-transition: width 0.2s ease-in-out;
  transition: width 0.2s ease-in-out;
}
.no-touch .a2:hover::after {
  width: calc(100% - 10px);
}
.no-touch .a3::before {
  -webkit-transition: width 0.2s ease-in-out;
  transition: width 0.2s ease-in-out;
}
.no-touch .a3:hover::before {
  left: 0;
  right: auto;
  width: 100%;
}
.link--withicon {
  -webkit-box-align: center;
  align-items: center;
  display: -webkit-inline-box;
  display: inline-flex;
}
.link--withicon .icon {
  height: 8px;
  width: 15px;
  margin: 0 5px;
}
.hr {
  background-color: #0b163b;
  border: none;
  display: block;
  height: 1px;
  opacity: 0.2;
  width: 100%;
}
.italic,
.wysiwyg__container i,
.wysiwyg__container em {
  font-style: italic;
}
.uppercase {
  text-transform: uppercase;
}
.lowercase {
  text-transform: lowercase;
}
.underline {
  text-decoration: underline;
}
.decoration--none {
  text-decoration: none;
}
.light {
  font-weight: 100;
}
.medium {
  font-weight: 500;
}
.bold,
.wysiwyg__container b,
.wysiwyg__container strong {
  font-weight: 900;
}
.ls1 {
  letter-spacing: 1px;
}
.ls2 {
  letter-spacing: 2px;
}
.ls3 {
  letter-spacing: 3px;
}
.no-wrap {
  white-space: nowrap;
}
.text-with-dots {
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.align-l {
  text-align: left;
}
.align-c {
  text-align: center;
}
.align-r {
  text-align: right;
}
.align-j {
  text-align: justify;
}
.align-m {
  vertical-align: middle;
}
.align-t {
  vertical-align: top;
}
.align-b {
  vertical-align: baseline;
}
.flip-h {
  -webkit-transform: scale(-1, 1);
  transform: scale(-1, 1);
}
.container {
  margin: 0 auto;
  position: relative;
  max-width: 1440px;
  width: calc(100% - 30px);
}
@media (min-width: 415px) {
  .container {
    width: calc(100% - 80px);
  }
}
.container--full-xs {
  width: 100%;
}
@media (min-width: 415px) {
  .container--full-xs {
    width: calc(100% - 80px);
  }
}
.container--mobile-no-margin {
  width: 100%;
}
@media (min-width: 768px) {
  .container--mobile-no-margin {
    width: calc(100% - 30px);
  }
}
@media (max-width: 414px) {
  .container--mobile {
    margin: 0 auto;
    max-width: 300px !important;
  }
}
.container--xxs {
  max-width: 375px;
}
.container--xs {
  max-width: 414px;
}
.container--s {
  max-width: 768px;
}
.container--m {
  max-width: 1023px;
}
.container--l {
  max-width: 1440px;
}
.inline {
  display: inline;
}
.inline-block {
  display: inline-block;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.fixed {
  position: fixed;
}
.static {
  position: static;
}
.pointer {
  cursor: pointer;
}
.block {
  display: block;
}
@media (min-width: 376px) {
  .block--xxs {
    display: block;
  }
}
@media (min-width: 415px) {
  .block--xs {
    display: block;
  }
}
@media (min-width: 769px) {
  .block--s {
    display: block;
  }
}
@media (min-width: 1024px) {
  .block--m {
    display: block;
  }
}
@media (min-width: 1441px) {
  .block--l {
    display: block;
  }
}
.hide {
  display: none;
}
@media (min-width: 376px) {
  .hide--xxs {
    display: none;
  }
}
@media (min-width: 415px) {
  .hide--xs {
    display: none;
  }
}
@media (min-width: 769px) {
  .hide--s {
    display: none;
  }
}
@media (min-width: 1024px) {
  .hide--m {
    display: none;
  }
}
@media (min-width: 1441px) {
  .hide--l {
    display: none;
  }
}
.o-hidden {
  overflow: hidden;
}
.o-inherit {
  overflow: inherit;
}
.f {
  display: -webkit-box;
  display: flex;
}
.fw {
  flex-wrap: wrap;
}
.ais {
  -webkit-box-align: start;
  align-items: flex-start;
}
.aie {
  -webkit-box-align: end;
  align-items: flex-end;
}
.aic {
  -webkit-box-align: center;
  align-items: center;
}
.aib {
  -webkit-box-align: baseline;
  align-items: baseline;
}
.jcs {
  -webkit-box-pack: start;
  justify-content: flex-start;
}
.jce {
  -webkit-box-pack: end;
  justify-content: flex-end;
}
.jcc {
  -webkit-box-pack: center;
  justify-content: center;
}
.jcb {
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.jca {
  justify-content: space-around;
}
.fa {
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
}
.ff {
  flex-shrink: 0;
}
.fdc {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}
form.demo-form {
  max-width: 45rem;
  padding: 1rem;
}
.form-row {
  position: relative;
  margin-bottom: 7px;
}
.form-row.double {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.form-row.double > div {
  width: calc(50% - 10px);
}
.form-row > .checkbox.fixed {
  height: 4.25rem;
}
.regular-form,
.account-form {
  margin: 0 auto;
  width: 375px;
}
.regular-form .form-row,
.account-form .form-row {
  width: 320px;
  margin-left: auto;
  margin-right: auto;
}
.regular-form .form-row.form-subtext,
.account-form .form-row.form-subtext {
  width: 100%;
}
.regular-form .button-row,
.account-form .button-row {
  text-align: center;
  margin: 40px 0 30px;
}
.regular-form p {
  color: #0b163b;
}
.regular-form a {
  color: #092dc5;
}
.regular-form.slim-form {
  width: 320px;
}
.regular-form.slim-form .form-row.form-subtext {
  width: 320px;
}
.regular-form__title {
  padding: 0 0 20px;
  margin: 0 auto;
  text-align: center;
}
.regular-form__messages-area {
  padding-bottom: 2.5rem;
}
.regular-form__messages-area .form-row:last-child,
.regular-form__messages-area .form-subtext:last-child,
.regular-form__messages-area .form-errors:last-child {
  margin-bottom: 0;
}
.button-row {
  margin-bottom: 8px;
}
.button-row.button-row-centered {
  text-align: center;
}
.button-row:last-child {
  margin-top: 30px;
  margin-bottom: 0;
}
.form-legal-advise {
  width: 320px;
  color: #0b163b;
  font-size: 14px;
  letter-spacing: 0.5px;
  line-height: 22px;
  text-align: center;
  padding: 0;
  margin: 30px 0 0;
}
.form-legal-advise a {
  color: #092dc5;
  text-decoration: underline;
}
select {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px #fff inset !important;
}
.form-subtext,
.form-success,
.form-errors {
  padding: 0;
  margin: 0 0 1rem;
}
.form-subtext p,
.form-success p,
.form-errors p {
  text-align: center;
  margin: 0 0 1em;
}
.form-subtext p:last-child,
.form-success p:last-child,
.form-errors p:last-child {
  margin-bottom: 0;
}
.form-subtext p {
  color: #0b163b;
}
.form-success p {
  color: #092dc5;
}
.form-errors p {
  color: #da3522;
}
.ratio {
  position: relative;
}
.ratio::before {
  content: '';
  display: block;
  width: 100%;
}
.square::before {
  padding-top: 100%;
}
.rectangle {
  padding-bottom: calc(575 / 765 * 100%);
}
.hidden {
  display: none !important;
}
.vertical-absolute {
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
[v-cloak] {
  opacity: 0;
}
.sr-only {
  display: block;
  height: 0;
  overflow: hidden;
  text-indent: -9999px;
  width: 0;
}
.sr-only.sr-only-visible {
  height: 1px;
  width: 1px;
}
.icon,
.logo {
  position: relative;
}
.icon svg,
.logo svg {
  display: block;
  height: 100%;
  width: 100%;
}
.fill {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}
hr {
  border: 0;
  width: 100%;
  height: 1px;
  margin: 30px 0;
  background: #0b163b;
}
hr.hr-grey {
  background: #f2f2f2;
}
.visible-block,
.visible-inline,
.visible-inline-block,
.visible-xxs-block,
.visible-xxs-inline,
.visible-xxs-inline-block,
.visible-xs-block,
.visible-xs-inline,
.visible-xs-inline-block,
.visible-s-block,
.visible-s-inline,
.visible-s-inline-block,
.visible-m-block,
.visible-m-inline,
.visible-m-inline-block,
.visible-md-block,
.visible-md-inline,
.visible-md-inline-block,
.visible-l-block,
.visible-l-inline,
.visible-l-inline-block {
  display: none !important;
}
@media (max-width: 375px) {
  .visible-block {
    display: block !important;
  }
  .visible-inline {
    display: inline !important;
  }
  .visible-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 376px) and (max-width: 414px) {
  .hidden-xxs {
    display: none !important;
  }
  .visible-xxs-block {
    display: block !important;
  }
  .visible-xxs-inline {
    display: inline !important;
  }
  .visible-xxs-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 415px) and (max-width: 768px) {
  .hidden-xs {
    display: none !important;
  }
  .visible-xs-block {
    display: block !important;
  }
  .visible-xs-inline {
    display: inline !important;
  }
  .visible-xs-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 769px) and (max-width: 1023px) {
  .hidden-s {
    display: none !important;
  }
  .visible-s-block {
    display: block !important;
  }
  .visible-s-inline {
    display: inline !important;
  }
  .visible-s-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 1024px) and (max-width: 1200px) {
  .hidden-m {
    display: none !important;
  }
  .visible-m-block {
    display: block !important;
  }
  .visible-m-inline {
    display: inline !important;
  }
  .visible-m-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 1201px) and (max-width: 1440px) {
  .hidden-md {
    display: none !important;
  }
  .visible-md-block {
    display: block !important;
  }
  .visible-md-inline {
    display: inline !important;
  }
  .visible-md-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 1441px) {
  .hidden-l {
    display: none !important;
  }
  .visible-l-block {
    display: block !important;
  }
  .visible-l-inline {
    display: inline !important;
  }
  .visible-l-inline-block {
    display: inline-block !important;
  }
}
.grid {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
}
.grid .grid__col {
  -webkit-box-flex: 1;
  flex: 1 1;
  max-width: 100%;
}
.grid .grid__col--1of2 {
  -webkit-box-flex: 0;
  flex: 0 0 50%;
  max-width: 50%;
}
.section-placeholder {
  width: 100%;
  position: relative;
  padding-bottom: 40%;
}
.section-placeholder p {
  left: 0;
  top: 50%;
  right: 0;
  position: absolute;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.no-scroll {
  overflow: hidden;
}
.wrapper {
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}
.has-offset-main .wrapper {
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
}
@media (min-width: 415px) {
  .has-offset-main .wrapper {
    -webkit-transform: none;
    transform: none;
  }
}
.wrapper--max-width,
.header {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
.main {
  padding-bottom: 1px;
  min-height: calc(100vh - 105px);
  padding-top: 105px;
}
@media (min-width: 1024px) {
  .main {
    min-height: calc(100vh - 120px);
    padding-top: 120px;
  }
}
.header,
.footer {
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  width: 100%;
}
.ul,
.ol {
  padding-left: 24px;
}
.ul li,
.ol li {
  margin-top: 3px;
  position: relative;
}
@media (min-width: 415px) {
  .ul li,
  .ol li {
    margin-top: 5px;
  }
}
.ul li:first-child,
.ol li:first-child {
  margin-top: 0;
}
.ul ul,
.ul ol,
.ol ul,
.ol ol {
  margin-top: 3px;
}
@media (min-width: 415px) {
  .ul ul,
  .ul ol,
  .ol ul,
  .ol ol {
    margin-top: 5px;
  }
}
.ul {
  list-style: disc;
}
.ol {
  list-style: decimal;
}
.mv--section {
  margin-top: 80px;
  margin-bottom: 80px;
}
@media (min-width: 1024px) {
  .mv--section {
    margin-top: 120px;
    margin-bottom: 120px;
  }
}
.mv--section--mobile {
  margin-top: 80px;
  margin-bottom: 40px;
}
@media (min-width: 1024px) {
  .mv--section--mobile {
    margin-top: 120px;
    margin-bottom: 120px;
  }
}
@media (min-width: 1024px) {
  .mv--section--lg {
    margin-top: 150px;
    margin-bottom: 150px;
  }
}
.mha,
.mxa {
  margin-left: auto;
}
.mha,
.mxa {
  margin-right: auto;
}
.mva,
.mxa {
  margin-top: auto;
}
.mva,
.mxa {
  margin-bottom: auto;
}
.mt0,
.mv0,
.mx0 {
  margin-top: 0;
}
.mb0,
.mv0,
.mx0 {
  margin-bottom: 0;
}
.pt0,
.pv0,
.px0 {
  padding-top: 0;
}
.pb0,
.pv0,
.px0 {
  padding-bottom: 0;
}
.pr0,
.ph0,
.px0 {
  padding-right: 0;
}
.pl0,
.ph0,
.px0 {
  padding-left: 0;
}
.mt025,
.mv025,
.mx025 {
  margin-top: 0.25em;
}
.mb025,
.mv025,
.mx025 {
  margin-bottom: 0.25em;
}
.ml025,
.mh025,
.mx025 {
  margin-left: 0.25em;
}
.mr025,
.mh025,
.mx025 {
  margin-right: 0.25em;
}
.pt025,
.pv025,
.px025 {
  padding-top: 0.25em;
}
.pb025,
.pv025,
.px025 {
  padding-bottom: 0.25em;
}
.pl025,
.ph025,
.px025 {
  padding-left: 0.25em;
}
.pr025,
.ph025,
.px025 {
  padding-right: 0.25em;
}
.mt05,
.mv05,
.mx05 {
  margin-top: 0.5em;
}
.mb05,
.mv05,
.mx05 {
  margin-bottom: 0.5em;
}
.ml05,
.mh05,
.mx05 {
  margin-left: 0.5em;
}
.mr05,
.mh05,
.mx05 {
  margin-right: 0.5em;
}
.pt05,
.pv05,
.px05 {
  padding-top: 0.5em;
}
.pb05,
.pv05,
.px05 {
  padding-bottom: 0.5em;
}
.pl05,
.ph05,
.px05 {
  padding-left: 0.5em;
}
.pr05,
.ph05,
.px05 {
  padding-right: 0.5em;
}
.mt075,
.mv075,
.mx075 {
  margin-top: 0.75em;
}
.mb075,
.mv075,
.mx075 {
  margin-bottom: 0.75em;
}
.ml075,
.mh075,
.mx075 {
  margin-left: 0.75em;
}
.mr075,
.mh075,
.mx075 {
  margin-right: 0.75em;
}
.pt075,
.pv075,
.px075 {
  padding-top: 0.75em;
}
.pb075,
.pv075,
.px075 {
  padding-bottom: 0.75em;
}
.pl075,
.ph075,
.px075 {
  padding-left: 0.75em;
}
.pr075,
.ph075,
.px075 {
  padding-right: 0.75em;
}
.mt1,
.mv1,
.mx1 {
  margin-top: 1em;
}
.mb1,
.mv1,
.mx1 {
  margin-bottom: 1em;
}
.ml1,
.mh1,
.mx1 {
  margin-left: 1em;
}
.mr1,
.mh1,
.mx1 {
  margin-right: 1em;
}
.mln1 {
  margin-left: -1em;
}
.mrn1 {
  margin-right: -1em;
}
.mhn1 {
  margin-left: -1em;
  margin-right: -1em;
}
.pt1,
.pv1,
.px1 {
  padding-top: 1em;
}
.pb1,
.pv1,
.px1 {
  padding-bottom: 1em;
}
.pl1,
.ph1,
.px1 {
  padding-left: 1em;
}
.pr1,
.ph1,
.px1 {
  padding-right: 1em;
}
.mt15,
.mv15,
.mx15 {
  margin-top: 1.5em;
}
.mb15,
.mv15,
.mx15 {
  margin-bottom: 1.5em;
}
.ml15,
.mh15,
.mx15 {
  margin-left: 1.5em;
}
.mr15,
.mh15,
.mx15 {
  margin-right: 1.5em;
}
.mln15 {
  margin-left: -1.5em;
}
.mrn15 {
  margin-right: -1.5em;
}
.mhn15 {
  margin-left: -1.5em;
  margin-right: -15em;
}
.pt15,
.pv15,
.px15 {
  padding-top: 1.5em;
}
.pb15,
.pv15,
.px15 {
  padding-bottom: 1.5em;
}
.pl15,
.ph15,
.px15 {
  padding-left: 1.5em;
}
.pr15,
.ph15,
.px15 {
  padding-right: 1.5em;
}
.mt2,
.mv2,
.mx2 {
  margin-top: 2em;
}
.mb2,
.mv2,
.mx2 {
  margin-bottom: 2em;
}
.ml2,
.mh2,
.mx2 {
  margin-left: 2em;
}
.mr2,
.mh2,
.mx2 {
  margin-right: 2em;
}
.mln2 {
  margin-left: -2em;
}
.mrn2 {
  margin-right: -2em;
}
.mhn2 {
  margin-left: -2em;
  margin-right: -2em;
}
.pt2,
.pv2,
.px2 {
  padding-top: 2em;
}
.pb2,
.pv2,
.px2 {
  padding-bottom: 2em;
}
.pl2,
.ph2,
.px2 {
  padding-left: 2em;
}
.pr2,
.ph2,
.px2 {
  padding-right: 2em;
}
.w1 {
  width: 100%;
}
.z0 {
  z-index: 0;
}
.z1,
.bottle-counter .bottle-counter__content,
.form-newsletter .form__btn,
.product-card__wishlist,
.section-text-media .section__content,
.section-vertical-carousel .section__box,
.nav-mobile .nav__close {
  z-index: 100;
}
.z2 {
  z-index: 200;
}
.z3,
.form-cta-fix__postion {
  z-index: 300;
}
.z4,
.hotspot .hotspot__container,
.header,
.nav-mobile {
  z-index: 400;
}
.z5 {
  z-index: 500;
}
.z6 {
  z-index: 600;
}
.z7 {
  z-index: 700;
}
.z8 {
  z-index: 800;
}
.z9,
.modal__bg,
.modal__wrap,
.notification-bar {
  z-index: 900;
}
.z10,
.modal__wrapper.active {
  z-index: 1000;
}
#preview-bar-iframe {
  height: 60px;
}
html {
  padding: 0 !important;
}
@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.fade-enter-active,
.fade-leave-active {
  -webkit-transition: opacity 1s;
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to,
.fade-out {
  opacity: 0;
}
.slide-fade-enter-active {
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  -webkit-transform: translateY(10px);
  transform: translateY(10px);
  opacity: 0;
}
.expand-enter-active,
.expand-leave-active {
  -webkit-transition: height 1s ease-in-out;
  transition: height 1s ease-in-out;
  overflow: hidden;
}
.expand-enter,
.expand-leave-to {
  height: 0;
}
.arrow-visible-left {
  left: 20px;
}
.arrow-visible-right {
  right: 20px;
}
.slider-with-arrows > span {
  display: block !important;
}
.slider--images {
  overflow: hidden;
}
.slider--images__single {
  height: 450px;
  display: inline-block;
}
@media (min-width: 415px) {
  .slider--images__single {
    margin: 0 10px;
  }
}
.slider--images__single img {
  margin: 0;
  height: 100%;
  display: block;
}
.table td,
.table th {
  padding: 10px 15px;
  text-align: center;
  border: 1px solid #5b667f;
}
.table thead {
  background: #f9ece1;
}
.table thead th {
  vertical-align: middle;
  font-weight: bold;
}
.table tbody tr:nth-of-type(2n) {
  background: #fbf4ed;
}
.table--flex {
  width: 100%;
  display: -webkit-box;
  display: flex;
  margin: 0 auto;
  max-width: 378px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}
.table--flex > div {
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.table--flex .title {
  width: 100%;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: stretch;
  align-items: stretch;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.table--flex .title .height {
  width: 63px;
  display: -webkit-box;
  display: flex;
  padding: 5px 0;
  color: #0b163b;
  line-height: 160%;
  -webkit-box-align: center;
  align-items: center;
  background: #f9ece1;
  border-left: 2px solid #fff;
}
.table--flex .title .height.active {
  color: #fff;
  border-left: none;
  background: #0b163b;
}
.table--flex .body {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.table--flex .body .row {
  width: 63px;
}
.table--flex .body .row.active {
  position: relative;
}
.table--flex .body .row.active p {
  border: none;
  margin: 0 2px;
}
.table--flex .body .row.active p:last-of-type {
  position: relative;
}
.table--flex .body .row.active p:last-of-type:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #0b163b;
}
.table--flex .body .row.active:before,
.table--flex .body .row.active:after {
  top: 0;
  bottom: 0;
  width: 2px;
  content: '';
  position: absolute;
  background: #0b163b;
}
.table--flex .body .row.active:before {
  left: 0;
}
.table--flex .body .row.active:after {
  right: 0;
}
.table--flex .body .row p {
  color: #0b163b;
}
.table--flex .body .row p:nth-last-of-type(2n) {
  background: #fbf4ed;
  border-left: 2px solid #fff;
}
.table--flex p {
  -webkit-box-flex: 1;
  flex: 1;
  padding: 10px 5px;
  text-align: center;
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
.plp .plp-mobile-hidden {
  display: none;
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
}
.basic-page__wrapper .button-row {
  margin-top: 75px;
  text-align: center;
}
.basic-page__wrapper .button-row a.btn--primary {
  color: white;
  display: -webkit-inline-box;
  display: inline-flex;
  text-decoration: none;
}
.basic-page__wrapper .wysiwyg.container {
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
}
.basic-page__header {
  height: 345px;
  position: relative;
  margin: 0 0 30px;
}
@media (min-width: 768px) {
  .basic-page__header {
    height: 316px;
  }
}
@media (min-width: 769px) {
  .basic-page__header {
    height: 365px;
  }
}
@media (min-width: 1024px) {
  .basic-page__header {
    height: 514px;
    margin: 0 0 75px;
  }
}
.basic-page__title {
  width: calc(100% - 44px);
  max-width: 568px;
  margin: 0 auto 20px;
  text-align: center;
}
@media (min-width: 769px) {
  .basic-page__title {
    max-width: 824px;
  }
}
@media (min-width: 1024px) {
  .basic-page__title {
    max-width: 930px;
  }
} /*! path: /dummy/user/src/modules/page-faq/faq.scss */
.faq > .container {
  max-width: 320px;
}
@media (min-width: 415px) {
  .faq > .container {
    max-width: 568px;
  }
}
@media (min-width: 769px) {
  .faq > .container {
    max-width: 640px;
  }
}
.faq__head {
  margin-bottom: 80px;
  padding-top: 30px;
}
@media (min-width: 769px) {
  .faq__head {
    padding-top: 40px;
  }
}
@media (min-width: 1024px) {
  .faq__head {
    margin-bottom: 150px;
  }
}
.faq__title {
  margin-bottom: 15px;
}
.faq-search {
  position: relative;
  margin-bottom: 80px;
}
@media (min-width: 1024px) {
  .faq-search {
    margin-bottom: 150px;
  }
}
.faq-search__icon {
  position: absolute;
  top: 50%;
  left: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.faq-search__icon > svg {
  width: 20px;
  height: 20px;
}
.faq-search__field .text-input__label {
  left: 30px;
  -webkit-transition: all 0s;
  transition: all 0s;
}
.faq-search__field .text-input__el {
  padding-left: 30px;
}
.faq-search__field.is-active .text-input__label {
  opacity: 0;
}
.faq-search__dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 454px;
  overflow: auto;
  background: #fff;
  z-index: 1;
}
.faq-search__dropdown::-webkit-scrollbar {
  -webkit-appearance: none;
}
.faq-search__dropdown::-webkit-scrollbar:vertical {
  width: 2px;
}
.faq-search__dropdown::-webkit-scrollbar:horizontal {
  height: 2px;
}
.faq-search__dropdown::-webkit-scrollbar-thumb {
  opacity: 0.5;
  border: none;
  border-radius: 0;
  background-color: #0b163b;
}
.faq-search__dropdown::-webkit-scrollbar-track {
  border-radius: 0;
  background-color: #ecedf0;
}
.faq-search__dropdown li {
  margin-bottom: 25px;
  cursor: pointer;
}
.faq-search__dropdown li:last-child {
  margin-bottom: 0;
}
.faq-search__dropdown mark {
  background-color: transparent;
}
.faq-block {
  margin-bottom: 80px;
}
.faq-block:last-child {
  margin-bottom: 0;
}
.faq-block--single {
  margin-top: 40px;
  padding-bottom: 35px;
  border-bottom: 1px solid #c5bdbc;
}
@media (min-width: 415px) {
  .faq-block--single {
    margin-top: 80px;
    padding-bottom: 50px;
  }
}
@media (min-width: 769px) {
  .faq-block--single {
    margin-top: 75px;
    padding-bottom: 45px;
  }
}
.faq-block__title {
  margin-bottom: 10px;
}
.faq-component__title {
  margin-bottom: 40px;
}
@media (min-width: 769px) {
  .faq-component__title {
    margin-bottom: 75px;
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
}
.cart-item__update {
  opacity: 0.3;
  pointer-events: none;
}
.cart-item__update.is-active {
  opacity: 1;
  pointer-events: auto;
}
@media (min-width: 769px) {
  .cart-grid--default .cart-item__info,
  .cart-grid--default .cart-item__price,
  .cart-grid--default .cart-item__quantity,
  .cart-grid--default .cart-item__total {
    display: table-cell;
    position: static;
    padding-top: 20px;
    padding-bottom: 1.8rem;
  }
}
.cart-item__info {
  overflow: hidden;
}
@media (min-width: 1024px) {
  .cart-grid--default .cart-item__info {
    padding-right: 1em;
    text-align: left;
  }
}
@media (min-width: 1024px) {
  .cart-grid--default .cart-item__price {
    padding-right: 1em;
  }
}
.cart-item__total {
  position: absolute;
  top: 15px;
  right: 0;
}
.cart-item__quantity {
  padding-left: 90px;
  position: relative;
  z-index: 1;
}
@media (min-width: 376px) {
  .cart-item__quantity {
    padding-left: 110px;
  }
}
.cart-grid--default .cart-item__quantity {
  display: none;
  padding-left: 0;
}
@media (min-width: 769px) {
  .cart-grid--default .cart-item__quantity {
    display: block;
  }
}
@media (min-width: 1024px) {
  .cart-grid--default .cart-item__quantity {
    padding-left: 0;
    padding-right: 1em;
  }
}
.cart-item__remove {
  line-height: 1.2;
}
.cart-item__featured {
  width: 100%;
  max-width: 90px;
  float: left;
}
@media (min-width: 376px) {
  .cart-item__featured {
    padding-right: 1.5em;
    max-width: calc(90px + 1.5em);
  }
}
.cart-item__featured::before {
  padding-bottom: 100%;
}
.cart-item__details {
  max-width: 170px;
  width: 50%;
  float: left;
}
@media (min-width: 769px) {
  .cart-grid--default .cart-item__details {
    width: calc(100% - 100px - 1.5em);
  }
}
.cart-item__details__heading,
.cart-item__details__description {
  padding-bottom: 10px;
}
@media (min-width: 769px) {
  .cart-grid--default .cart-item__details-quantity {
    display: none;
  }
}
@media (min-width: 1024px) {
  .cart-item__title {
    max-width: calc(100% - 60px);
  }
} /*! path: /dummy/user/src/modules/cart/cart-grid/cart-grid.scss */
.cart-grid {
  position: relative;
  min-height: 320px;
  padding-top: 70px;
}
.cart-grid__subtitle {
  margin: 20px 0;
}
.cart__header {
  display: none;
}
@media (min-width: 769px) {
  .cart-grid--default .cart__header {
    display: table-header-group;
  }
}
@media (min-width: 769px) {
  .cart-grid--default .cart__header__item {
    display: table-cell;
    padding: 5px 0 10px;
  }
}
.cart__header__item:first-child {
  border-left: 0;
  width: 40%;
}
.cart__header__item:nth-of-type(2) {
  width: 20%;
}
.cart__header__item:nth-of-type(3) {
  width: 20%;
}
.cart__header__item:last-child {
  border-right: 0;
  width: 20%;
}
@media (min-width: 769px) {
  .cart-grid--default .cart__body {
    display: table-row-group;
  }
}
@media (min-width: 769px) {
  .cart-grid--default .cart-grid__items {
    display: table;
    table-layout: fixed;
    border-collapse: collapse;
  }
}
.cart-grid__items.is-loading {
  opacity: 0.6;
  pointer-events: none;
}
.cart__body-item {
  padding-top: 15px;
  margin-bottom: 15px;
}
.cart__subtotal {
  padding-top: 15px;
  margin-bottom: 15px;
}
.cart__subtotal span {
  margin-left: 20px;
} /*! path: /dummy/user/src/modules/product/pdp.scss */
.pdp {
  display: block;
  padding-bottom: 1px;
}
.pdp > .mv--section:last-of-type {
  margin-bottom: 0;
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
}
@media (min-width: 1025px) {
  .plp-editorial__grid {
    padding: 0;
    max-width: 1330px;
  }
}
@media (min-width: 1441px) {
  .plp-editorial__grid {
    max-width: 1360px;
  }
}
.plp-editorial__grid .product-card {
  margin-bottom: 60px;
}
@media (min-width: 1025px) {
  .plp-editorial__grid .product-card {
    margin-bottom: 120px;
  }
}
.plp-editorial__grid__small-image {
  display: block;
  margin: 35px 0 0;
}
@media (min-width: 768px) {
  .plp-editorial__grid__small-image {
    width: 270px;
    height: 270px;
  }
}
@media (min-width: 1025px) {
  .plp-editorial__grid__small-image {
    width: 290px;
    height: 290px;
    margin-top: 55px;
  }
}
.plp-editorial__grid__big-image {
  width: 958px;
  padding: 15px;
  height: 420px;
  display: block;
  margin: 40px 20px 80px;
}
.plp-editorial__grid__footer-image {
  width: 100%;
  height: 420px;
  display: none;
  margin: 40px 0 180px;
}
@media (min-width: 1024px) {
  .plp-editorial__grid__footer-image {
    display: block;
  }
}
.plp-editorial__grid .plp-editorial__grid__small-image,
.plp-editorial__grid .plp-editorial__grid__big-image {
  display: none;
}
@media (min-width: 768px) {
  .plp-editorial__grid .plp-editorial__grid__small-image,
  .plp-editorial__grid .plp-editorial__grid__big-image {
    display: block;
  }
}
@media (min-width: 768px) {
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(3) {
    -webkit-box-ordinal-group: 2;
    order: 1;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(4) {
    -webkit-box-ordinal-group: 3;
    order: 2;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(5) {
    -webkit-box-ordinal-group: 4;
    order: 3;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(6) {
    -webkit-box-ordinal-group: 7;
    order: 6;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(7) {
    -webkit-box-ordinal-group: 8;
    order: 7;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(8) {
    -webkit-box-ordinal-group: 9;
    order: 8;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(9) {
    -webkit-box-ordinal-group: 10;
    order: 9;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(10) {
    -webkit-box-ordinal-group: 11;
    order: 10;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(11) {
    -webkit-box-ordinal-group: 12;
    order: 11;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(12) {
    -webkit-box-ordinal-group: 13;
    order: 12;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(13) {
    -webkit-box-ordinal-group: 14;
    order: 13;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(14) {
    -webkit-box-ordinal-group: 15;
    order: 14;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(15) {
    -webkit-box-ordinal-group: 16;
    order: 15;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(16) {
    -webkit-box-ordinal-group: 17;
    order: 16;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(17) {
    -webkit-box-ordinal-group: 18;
    order: 17;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(18) {
    -webkit-box-ordinal-group: 19;
    order: 18;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(19) {
    -webkit-box-ordinal-group: 20;
    order: 19;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(20) {
    -webkit-box-ordinal-group: 21;
    order: 20;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(21) {
    -webkit-box-ordinal-group: 22;
    order: 21;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(22) {
    -webkit-box-ordinal-group: 23;
    order: 22;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(23) {
    -webkit-box-ordinal-group: 24;
    order: 23;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(24) {
    -webkit-box-ordinal-group: 25;
    order: 24;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(25) {
    -webkit-box-ordinal-group: 26;
    order: 25;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(26) {
    -webkit-box-ordinal-group: 27;
    order: 26;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(27) {
    -webkit-box-ordinal-group: 28;
    order: 27;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(28) {
    -webkit-box-ordinal-group: 29;
    order: 28;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(29) {
    -webkit-box-ordinal-group: 30;
    order: 29;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(30) {
    -webkit-box-ordinal-group: 31;
    order: 30;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(31) {
    -webkit-box-ordinal-group: 32;
    order: 31;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(32) {
    -webkit-box-ordinal-group: 33;
    order: 32;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(33) {
    -webkit-box-ordinal-group: 34;
    order: 33;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(34) {
    -webkit-box-ordinal-group: 35;
    order: 34;
  }
  .plp-editorial__grid.with-small-and-big-images
    .plp-editorial__grid__small-image {
    -webkit-box-ordinal-group: 5;
    order: 4;
  }
  .plp-editorial__grid.with-small-and-big-images
    .plp-editorial__grid__big-image {
    -webkit-box-ordinal-group: 6;
    order: 5;
  }
}
@media (min-width: 1025px) {
  .plp-editorial__grid.with-small-and-big-images
    .plp-editorial__grid__small-image {
    -webkit-box-ordinal-group: 8;
    order: 7;
  }
  .plp-editorial__grid.with-small-and-big-images
    .plp-editorial__grid__big-image {
    -webkit-box-ordinal-group: 11;
    order: 10;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(3) {
    -webkit-box-ordinal-group: 2;
    order: 1;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(4) {
    -webkit-box-ordinal-group: 3;
    order: 2;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(5) {
    -webkit-box-ordinal-group: 4;
    order: 3;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(6) {
    -webkit-box-ordinal-group: 5;
    order: 4;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(7) {
    -webkit-box-ordinal-group: 6;
    order: 5;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(8) {
    -webkit-box-ordinal-group: 7;
    order: 6;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(9) {
    -webkit-box-ordinal-group: 9;
    order: 8;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(10) {
    -webkit-box-ordinal-group: 10;
    order: 9;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(11) {
    -webkit-box-ordinal-group: 12;
    order: 11;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(12) {
    -webkit-box-ordinal-group: 13;
    order: 12;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(13) {
    -webkit-box-ordinal-group: 14;
    order: 13;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(14) {
    -webkit-box-ordinal-group: 15;
    order: 14;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(15) {
    -webkit-box-ordinal-group: 16;
    order: 15;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(16) {
    -webkit-box-ordinal-group: 17;
    order: 16;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(17) {
    -webkit-box-ordinal-group: 18;
    order: 17;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(18) {
    -webkit-box-ordinal-group: 19;
    order: 18;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(19) {
    -webkit-box-ordinal-group: 20;
    order: 19;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(20) {
    -webkit-box-ordinal-group: 21;
    order: 20;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(21) {
    -webkit-box-ordinal-group: 22;
    order: 21;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(22) {
    -webkit-box-ordinal-group: 23;
    order: 22;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(23) {
    -webkit-box-ordinal-group: 24;
    order: 23;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(24) {
    -webkit-box-ordinal-group: 25;
    order: 24;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(25) {
    -webkit-box-ordinal-group: 26;
    order: 25;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(26) {
    -webkit-box-ordinal-group: 27;
    order: 26;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(27) {
    -webkit-box-ordinal-group: 28;
    order: 27;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(28) {
    -webkit-box-ordinal-group: 29;
    order: 28;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(29) {
    -webkit-box-ordinal-group: 30;
    order: 29;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(30) {
    -webkit-box-ordinal-group: 31;
    order: 30;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(31) {
    -webkit-box-ordinal-group: 32;
    order: 31;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(32) {
    -webkit-box-ordinal-group: 33;
    order: 32;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(33) {
    -webkit-box-ordinal-group: 34;
    order: 33;
  }
  .plp-editorial__grid.with-small-and-big-images .product-card:nth-child(34) {
    -webkit-box-ordinal-group: 35;
    order: 34;
  }
}
.product-card__wrapper {
  height: 100%;
  margin: 0 auto;
  max-width: 335px;
  padding-bottom: 15px;
}
@media (min-width: 768px) {
  .product-card__wrapper {
    max-width: 100%;
  }
}
.product-card__wrapper__limits {
  height: 100%;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: normal;
  align-items: normal;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: stretch;
  justify-content: stretch;
}
.product-card__footer {
  -webkit-box-flex: 1;
  flex: 1;
  width: 100%;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}
.product-card__footer .product-card__footer__title {
  height: 100%;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
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
}
.plp-editorial__head__text {
  display: block;
  margin-bottom: 80px;
}
@media (min-width: 1024px) {
  .plp-editorial__head__text {
    margin-bottom: 110px;
  }
} /*! path: /dummy/user/src/modules/account/account-address/account-address.scss */
.account-address {
  padding-bottom: 80px;
}
@media (min-width: 769px) {
  .account-address {
    padding-bottom: 80px;
  }
}
@media (min-width: 1024px) {
  .account-address {
    padding-bottom: 150px;
  }
}
.account-address .account-address__head {
  margin-bottom: 30px;
  text-align: center;
}
.account-address .account-address__list {
  max-width: 340px;
  margin: 0 auto;
}
.account-address .account-address__item {
  position: relative;
  margin-bottom: 15px;
  border: 1px solid #c5bdbc;
}
.account-address .account-address__item:last-child {
  margin-bottom: 0;
}
.account-address .account-address__item.is-default {
  border: 2px solid #0b163b;
}
.account-address .account-address__item.is-default .account-address__footer {
  pointer-events: none;
}
.account-address .account-address__content {
  padding: 10px 15px 20px;
}
.account-address .account-address__footer {
  padding: 15px;
}
.account-address .account-address__link {
  margin-top: 10px;
  font-size: 12px;
}
.account-address .account-address__remove {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 22px;
  height: 22px;
}
.account-address .account-address__remove span {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: #0b163b;
  -webkit-transform: translateY(-50%) rotate(45deg);
  transform: translateY(-50%) rotate(45deg);
}
.account-address .account-address__remove span:last-child {
  -webkit-transform: translateY(-50%) rotate(-45deg);
  transform: translateY(-50%) rotate(-45deg);
}
.account-address .account-address__confirmation {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
}
.account-address .account-address__confirmation p {
  max-width: 220px;
  margin: 0 auto;
}
.account-address .account-address__confirmation .btn--link {
  margin-top: 30px;
} /*! path: /dummy/user/src/modules/account/account-dashboard/account-dashboard.scss */
.section-account {
  padding-bottom: 80px;
  padding-top: 40px;
  color: #0b163b;
}
@media (min-width: 769px) {
  .section-account {
    padding-bottom: 80px;
  }
}
@media (min-width: 1024px) {
  .section-account {
    padding-bottom: 150px;
  }
}
.section-account .section__container {
  max-width: 930px;
  margin: 0 auto;
}
.section-account .section__head {
  margin-bottom: 40px;
  text-align: center;
}
@media (min-width: 769px) {
  .section-account .section__head {
    margin-bottom: 80px;
  }
}
.section-account .section__title {
  margin-bottom: 20px;
}
.section-account .section__title:last-child {
  margin-bottom: 0;
}
.section-account .section__description {
  max-width: 568px;
  margin: 0 auto;
  text-align: left;
}
@media (min-width: 769px) {
  .section-account .section__description {
    text-align: center;
  }
}
.section-account--order .section__head {
  margin-bottom: 15px;
}
@media (min-width: 769px) {
  .section-account--order .section__head {
    margin-bottom: 40px;
  }
} /*! path: /dummy/user/src/modules/account/account-details/account-details.scss */
.account-details {
  margin-bottom: 80px;
  text-align: center;
}
@media (min-width: 769px) {
  .account-details {
    margin-bottom: 80px;
  }
}
@media (min-width: 1024px) {
  .account-details {
    margin-bottom: 150px;
  }
}
.account-details .account-details__link {
  margin-bottom: 30px;
}
.account-details .account-details__subtitle {
  margin-bottom: 5px;
}
.account-details .account-details__inner {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
  padding: 8px 15px 20px;
}
@media (min-width: 376px) {
  .account-details .account-details__inner {
    padding-left: 25px;
    padding-right: 25px;
  }
}
@media (min-width: 415px) {
  .account-details .account-details__inner {
    padding-left: 15px;
    padding-right: 15px;
  }
}
@media (min-width: 769px) {
  .account-details .account-details__inner {
    padding-bottom: 40px;
  }
}
.account-details .account-details__col {
  margin-bottom: 30px;
  text-align: left;
}
.account-details .account-details__col:last-child {
  margin-bottom: 0;
}
@media (min-width: 415px) {
  .account-details .account-details__col {
    -webkit-box-flex: 0;
    flex: 0 0 50%;
    max-width: 50%;
    margin-bottom: 30px;
  }
}
.account-details .account-details__col p span {
  display: block;
}
.account-details .account-details__col p span.placeholder {
  color: rgba(11, 22, 59, 0.65);
} /*! path: /dummy/user/src/modules/account/account-details-form/account-details-form.scss */
.account-details-form {
  width: calc(100vw - 40px);
  max-width: 385px;
  margin: 0 auto 80px;
  padding-top: 60px;
}
@media (min-width: 769px) {
  .account-details-form {
    margin-bottom: 80px;
  }
}
@media (min-width: 1024px) {
  .account-details-form {
    margin-bottom: 150px;
  }
}
.account-details-form .account-details-form__title {
  margin-bottom: 40px;
  text-align: center;
}
.account-details-form .text-input__el {
  border-color: #f9ece1;
} /*! path: /dummy/user/src/modules/account/account-forms/account-forms.scss */
.account-forms {
  min-height: calc(100vh - 105px);
}
.account-forms .modal__footer {
  position: absolute;
}
@media (min-width: 1201px) {
  .account-forms {
    min-height: calc(100vh - 120px);
  }
}
.account-forms__title {
  padding: 0 0 50px;
  margin: 0 auto;
  text-align: center;
}
.account-forms__title.account-forms__with-text {
  padding-bottom: 25px;
}
.account-forms__messages-area {
  margin-top: -25px;
  padding-bottom: 30px;
}
.account-forms__wrapper {
  margin: 0 auto;
  padding: 2rem 0;
  width: 100%;
  position: relative;
  max-width: 375px;
}
.account-forms__wrapper > div {
  min-height: calc(100vh - 105px - 4rem);
}
@media (min-width: 769px) {
  .account-forms__wrapper {
    padding-bottom: 6rem;
  }
  .account-forms__wrapper > div {
    min-height: auto;
  }
} /*! path: /dummy/user/src/modules/account/account-grid/account-grid.scss */
.account-grid {
  height: 100vh;
}
.account-grid .account__content {
  width: 100%;
  padding: 114px 110px;
}
.account-grid .account__content h1 {
  color: #0b163b;
  text-align: left;
  margin: 0 0 50px;
  text-transform: none;
}
.account-grid .account__content > section {
  width: 100%;
}
.account__subtitle {
  color: #0b163b;
  text-transform: uppercase;
} /*! path: /dummy/user/src/modules/account/account-info/account-info.scss */
.account__profile__info {
  -webkit-box-flex: 1;
  flex: 1;
}
.account__profile .account__subtitle {
  margin-bottom: 20px;
}
.account__profile__info__content {
  line-height: 200%;
}
.account__profile__info__footer {
  margin-top: 20px;
}
.account__profile__info__footer a {
  text-decoration: underline;
} /*! path: /dummy/user/src/modules/account/account-login-form/account-login-form.scss */
.account__login-grid {
  display: block;
  width: 100%;
}
.account__login-grid__container {
  min-height: 0;
  position: relative;
  padding-top: 5rem;
  padding-bottom: 3rem;
  margin: 0 auto;
  width: 320px;
}
@media (min-width: 1441px) {
  .account__login-grid__container {
    justify-content: space-around;
  }
}
.account__login-grid__container::before {
  content: '';
  top: 0;
  bottom: 0;
  left: 50%;
  z-index: -1;
  right: -10%;
  background: #f2f2f2;
  position: absolute;
}
.account__login-grid__title {
  text-align: center;
  margin: 0 0 50px;
  text-transform: initial;
}
.account__login-grid__description {
  color: #77777a;
  margin-bottom: 20px;
}
.account__login-grid__sign-in,
.account__login-grid__sign-up {
  -webkit-box-flex: 1;
  flex: 1;
  padding: 0;
}
.account__login-grid__form {
  top: 0;
  height: 0;
  opacity: 0;
  -webkit-transform: translateY(-2rem);
  transform: translateY(-2rem);
  pointer-events: none;
  position: relative;
  -webkit-transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.account__login-grid__form.active {
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  pointer-events: all;
  height: auto;
}
.account__login-grid__form-footer {
  margin-top: 4rem;
}
.account__login-grid__form-footer a.footer-big-button {
  display: block;
  margin: 0 auto;
  padding: 1rem;
  width: 180px;
  box-sizing: content-box;
  height: 26px;
}
.account__login-grid__form-footer a.footer-big-button svg {
  display: block;
  float: left;
}
.account__login-grid__form-footer a.footer-big-button span {
  display: block;
  float: right;
  line-height: 26px;
} /*! path: /dummy/user/src/modules/account/account-nav/account-nav.scss */
.account__nav {
  min-width: 340px;
  background: #f2f2f2;
  padding: 114px 50px;
}
.account__nav__head p {
  color: #0b163b;
  margin: 0 0 50px;
}
.account__nav__list {
  margin: 0;
}
.account__nav__list__link {
  margin-bottom: 15px;
  text-transform: uppercase;
}
li.account__nav__link {
  padding: 0 20px;
} /*! path: /dummy/user/src/modules/account/account-new-address/account-new-address.scss */
.address-form__title {
  margin-bottom: 25px;
}
@media (min-width: 769px) {
  .address-form__title {
    margin-bottom: 45px;
  }
}
.address-form__group {
  margin-bottom: 20px;
}
.address-form__footer {
  margin-top: 25px;
  margin-bottom: 40px;
}
@media (min-width: 769px) {
  .address-form__footer {
    margin-top: 45px;
    margin-bottom: 80px;
  }
}
.account-new-addr {
  width: calc(100vw - 40px);
  max-width: 385px;
  margin: 0 auto;
}
.account-new-addr .account-new-addr__title {
  margin-bottom: 30px;
  text-align: center;
}
.account-new-addr .account-form__checkbox {
  margin-bottom: 40px;
}
.account-new-addr .select-input__el-wrap {
  border-color: #c5bdbc;
} /*! path: /dummy/user/src/modules/account/account-order-address/account-order-address.scss */ /*! path: /dummy/user/src/modules/account/account-order-details/account-order-details.scss */
.order-details {
  max-width: 382px;
  margin: 0 auto 80px;
}
@media (min-width: 769px) {
  .order-details {
    max-width: 824px;
    margin-bottom: 80px;
  }
}
@media (min-width: 1024px) {
  .order-details {
    margin-bottom: 150px;
  }
}
.order-details .order-details__meta {
  margin-bottom: 30px;
}
@media (min-width: 415px) {
  .order-details .order-details__meta {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row wrap;
    -webkit-box-pack: center;
    justify-content: center;
    margin-bottom: 40px;
  }
}
@media (min-width: 769px) {
  .order-details .order-details__meta {
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
}
.order-details .order-details__meta li {
  margin-right: 20px;
}
.order-details .order-details__meta li:last-child {
  margin-right: 0;
}
@media (min-width: 769px) {
  .order-details .order-details__items {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row wrap;
    margin: 0 -30px;
  }
}
@media (min-width: 769px) {
  .order-details .order-details-item {
    -webkit-box-flex: 0;
    flex: 0 0 50%;
    max-width: 50%;
    padding: 0 30px;
  }
}
.order-addresses {
  position: relative;
  max-width: 568px;
  margin: 0 auto 80px;
  padding: 30px;
  border: 1px solid #c5bdbc;
}
@media (min-width: 769px) {
  .order-addresses {
    max-width: 100%;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row wrap;
    margin-bottom: 80px;
    padding: 50px 0;
  }
}
@media (min-width: 1024px) {
  .order-addresses {
    margin-bottom: 150px;
  }
}
.order-addresses::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 30px;
  right: 30px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  height: 1px;
  background: #c5bdbc;
}
@media (min-width: 769px) {
  .order-addresses::after {
    top: 30px;
    bottom: 30px;
    left: 50%;
    right: auto;
    height: auto;
    width: 1px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
}
.order-addresses .order-addresses__col {
  -webkit-box-flex: 0;
  flex: 0 0 200px;
  max-width: 200px;
  margin: 0 auto 30px;
  padding-bottom: 30px;
}
@media (min-width: 769px) {
  .order-addresses .order-addresses__col {
    margin-bottom: 0;
    padding-bottom: 0;
  }
}
.order-addresses .order-addresses__col:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
}
.order-addresses .order-addresses__col h2 {
  margin-bottom: 10px;
}
.order-summary {
  max-width: 495px;
  margin: 0 auto 80px;
}
@media (min-width: 769px) {
  .order-summary {
    margin-bottom: 80px;
  }
}
@media (min-width: 1024px) {
  .order-summary {
    margin-bottom: 150px;
  }
}
.order-summary .order-summary__title {
  margin-bottom: 20px;
  text-align: center;
}
@media (min-width: 769px) {
  .order-summary .order-summary__title {
    font-size: 16px;
  }
}
@media (min-width: 1024px) {
  .order-summary .order-summary__title {
    font-size: 18px;
  }
}
.order-summary .order-summary__total {
  margin: 10px 0;
  padding-top: 10px;
  border-top: 1px solid #c5bdbc;
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
}
.s-guide__tag {
  white-space: nowrap;
  background-color: #f9ece1;
  padding: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 3px;
  max-height: calc(1em + 12px);
}
.s-guide__byline span:nth-child(2) {
  padding-top: 6px;
}
.s-guide__hr {
  margin: 45px 0;
}
.s-guide__container {
  width: 100%;
  padding-top: 60%;
} /*! path: /dummy/user/src/modules/page-stores/stores/stores.scss */
.stores {
  padding-top: 15px;
}
.stores--accordions {
  padding-bottom: 80px;
}
@media (min-width: 769px) {
  .stores--accordions {
    padding-top: 75px;
    padding-bottom: 80px;
  }
}
@media (min-width: 1024px) {
  .stores--accordions {
    padding-bottom: 150px;
  }
}
.stores--no-pt {
  padding-top: 0 !important;
}
.stores__head {
  max-width: 290px;
  margin: 0 auto 80px;
}
@media (min-width: 415px) {
  .stores--accordions .stores__head {
    max-width: 100%;
  }
}
@media (min-width: 769px) {
  .stores__head {
    max-width: 100%;
  }
}
.stores__head > a {
  margin: 0 10px;
}
.stores__title {
  margin-bottom: 15px;
}
.stores__description {
  margin-bottom: 15px;
}
.stores__description p {
  margin-bottom: 10px;
}
.stores__description p:last-child {
  margin-bottom: 0;
}
.stores__description a {
  text-decoration: underline;
}
.stores__description a:hover {
  text-decoration: none;
}
.stores-list {
  max-width: 904px;
  margin: 0 auto;
}
.stores-list--accordions .stores-list__inner {
  max-width: 290px;
}
@media (min-width: 415px) {
  .stores-list--accordions .stores-list__inner {
    max-width: 428px;
  }
}
@media (min-width: 769px) {
  .stores-list--accordions .stores-list__inner {
    max-width: unset;
  }
}
.stores-list__inner {
  max-width: 428px;
  margin: 0 auto;
}
@media (min-width: 769px) {
  .stores-list__inner {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row wrap;
    max-width: unset;
    margin: 0 -28px;
  }
  .stores-list__inner > * {
    -webkit-box-flex: 0;
    flex: 0 0 50%;
    max-width: 50%;
    padding: 0 28px;
  }
}
.stores-list__media {
  margin-bottom: 35px;
}
@media (min-width: 769px) {
  .stores-list__media {
    margin-bottom: 0;
  }
}
.stores-list__map,
.stores-list__media .video-container {
  margin: 0 auto;
  padding-bottom: 71.9%;
}
.stores-list__inner--large .stores-list__media .video-container {
  padding-bottom: 150%;
}
.stores-list__map-container {
  margin-top: 18px;
}
.store {
  margin-bottom: 80px;
  text-align: center;
}
@media (min-width: 769px) {
  .store {
    margin-bottom: 80px;
  }
}
@media (min-width: 1024px) {
  .store {
    margin-bottom: 150px;
  }
}
.stores--accordions .store {
  margin-bottom: 0;
}
.store__address {
  margin-bottom: 20px;
}
.store__text {
  margin-bottom: 20px;
}
.store__email {
  margin-bottom: 30px;
}
.store__content {
  max-width: 286px;
  margin: 0 auto;
}
@media (min-width: 415px) {
  .store__content {
    max-width: 100%;
    padding: 0 30px;
  }
}
.store__hours {
  max-width: 264px;
  margin: 0 auto 30px;
}
.store__map-container {
  padding: 0 30px;
}
.store__map {
  height: 0;
  padding-top: 100%;
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
}
.wishlist-products__head {
  margin-bottom: 40px;
  text-align: center;
}
@media (min-width: 415px) {
  .wishlist-products__head {
    margin-bottom: 50px;
  }
}
@media (min-width: 769px) {
  .wishlist-products__head {
    margin-bottom: 75px;
  }
}
.wishlist-products__title {
  margin-bottom: 7px;
  padding-top: 30px;
}
@media (min-width: 769px) {
  .wishlist-products__title {
    padding-top: 60px;
  }
}
.wishlist-products__grid {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
  -webkit-box-pack: center;
  justify-content: center;
  max-width: 1190px;
  margin: 0 auto;
}
.wishlist-products__grid .product-card {
  max-width: 375px;
}
.wishlist-products__share-link {
  display: inline-block;
  margin: 0 14px 20px;
  padding: 9px 45px;
  word-break: break-all;
} /*! path: /dummy/user/src/modules/product/product-breadcrumb/product-breadcrumb.scss */
.product-breadcrumb {
  display: block;
  text-align: center;
  margin-bottom: 30px;
}
@media (min-width: 769px) {
  .product-breadcrumb {
    text-align: left;
    margin-bottom: 20px;
  }
}
@media (min-width: 1024px) {
  .product-breadcrumb {
    margin: 15px auto;
  }
}
@media (min-width: 1441px) {
  .product-breadcrumb {
    max-width: 1150px;
  }
}
.product-breadcrumb a {
  display: inline-block;
} /*! path: /dummy/user/src/modules/product/product-card-slider/product-card-slider.scss */
.product-carousel {
  color: #0b163b;
}
.container--slider .product-card-slider__carousel {
  max-width: 710px;
  margin-left: auto;
  margin-right: auto;
}
@media (min-width: 1024px) {
  .container--slider .product-card-slider__carousel {
    max-width: 1060px;
  }
}
.container--slider .arrow-visible-left {
  left: 0;
}
.container--slider .arrow-visible-right {
  right: 0;
}
.product-card-slider__carousel {
  width: 100%;
  display: -webkit-box;
  display: flex;
  overflow: auto;
  padding-bottom: 15px;
}
.product-card-slider__carousel::-webkit-scrollbar {
  -webkit-appearance: none;
}
.product-card-slider__carousel::-webkit-scrollbar:vertical {
  width: 2px;
}
.product-card-slider__carousel::-webkit-scrollbar:horizontal {
  height: 2px;
}
.product-card-slider__carousel::-webkit-scrollbar-thumb {
  opacity: 0.5;
  border: none;
  border-radius: 0;
  background-color: #0b163b;
}
.product-card-slider__carousel::-webkit-scrollbar-track {
  border-radius: 0;
  background-color: #ecedf0;
}
@media (min-width: 769px) {
  .product-card-slider__carousel {
    display: block;
    overflow: hidden;
  }
}
.product-card-slider__carousel::after {
  content: '';
  display: none;
}
@media (min-width: 769px) {
  .product-card-slider__carousel::after {
    content: 'flickity';
  }
}
.product-card-slider__slide {
  width: 100%;
  padding: 5px 0;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
}
@media (min-width: 415px) {
  .product-card-slider__slide {
    width: 50%;
    -webkit-box-flex: 0;
    flex: none;
  }
}
@media (min-width: 1024px) {
  .product-card-slider__slide {
    width: 33%;
  }
}
.product-card-slider__arrow {
  display: none;
}
@media (min-width: 769px) {
  .product-card-slider__arrow {
    display: block;
  }
}
@media (max-width: 414px) {
  .product-carousel__slider .with-padding {
    padding: 0;
  }
} /*! path: /dummy/user/src/modules/product/product-cta/product-cta.scss */
.product-cta {
  display: block;
}
.form-cta-fix {
  text-align: center;
  -webkit-transition: min-width 0.2s ease-in-out;
  transition: min-width 0.2s ease-in-out;
}
.form-cta-fix__postion {
  left: 10px;
  right: 10px;
  bottom: 10px;
  position: fixed;
  width: calc(100% - 20px);
}
.form-cta-fix__postion button {
  min-width: 100%;
  -webkit-transition: min-width 0.2s ease-in-out;
  transition: min-width 0.2s ease-in-out;
}
@media (min-width: 769px) {
  .form-cta-fix__postion {
    z-index: 1;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    position: relative;
  }
}
.form-cta-fix.passive {
  max-width: 100%;
}
.form-cta-fix.passive .form-cta-fix__postion {
  z-index: 1;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  position: relative;
}
.form-cta-fix.passive .form-cta-fix__postion button {
  min-width: 240px;
  -webkit-transition: min-width 0.2s ease-in-out;
  transition: min-width 0.2s ease-in-out;
}
.karma {
  margin: 40px auto 26px;
} /*! path: /dummy/user/src/modules/product/product-editorial/product-editorial.scss */
.product-editorial {
  display: block;
}
.product-editorial__slides {
  opacity: 0;
}
.product-editorial__slides.is-visible {
  opacity: 1;
}
.product-editorial__slides::after {
  content: '';
  display: none;
}
@media (min-width: 415px) {
  .product-editorial__slides::after {
    content: 'flickity';
  }
}
.slider--images__single {
  min-width: 450px;
}
.product-editorial__image {
  width: 100%;
}
.product-editorial__image::before {
  padding-top: 100%;
} /*! path: /dummy/user/src/modules/product/product-gallery/product-gallery.scss */
.product-gallery__images {
  width: 100%;
  padding: 20px 0;
} /*! path: /dummy/user/src/modules/product/product-hero/product-hero.scss */
.product-hero {
  display: block;
  color: #0b163b;
}
.product-hero__wrapper {
  display: block;
}
@media (min-width: 769px) {
  .product-hero__wrapper {
    margin: auto;
    display: -webkit-box;
    display: flex;
    max-width: 935px;
    -webkit-box-align: start;
    align-items: flex-start;
    width: calc(100% - 20px);
    justify-content: space-around;
  }
}
@media (min-width: 1024px) {
  .product-hero__wrapper {
    width: 100%;
    margin: 0 auto;
    max-width: 944px;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
}
@media (min-width: 1441px) {
  .product-hero__wrapper {
    max-width: 1150px;
  }
}
.product-hero__wrapper__gallery {
  display: block;
  margin-bottom: 40px;
}
@media (min-width: 415px) {
  .product-hero__wrapper__gallery {
    max-width: 345px;
    margin: 0 auto;
  }
}
@media (min-width: 769px) {
  .product-hero__wrapper__gallery {
    width: 100%;
    margin-left: 0;
    cursor: -webkit-zoom-in;
    cursor: zoom-in;
    position: relative;
    align-self: flex-start;
    max-width: calc(100% - 370px);
    -webkit-tap-highlight-color: transparent;
  }
}
@media (min-width: 1024px) {
  .product-hero__wrapper__gallery {
    max-width: 550px;
  }
}
@media (min-width: 1441px) {
  .product-hero__wrapper__gallery {
    max-width: 650px;
  }
}
.product-hero__wrapper__info {
  max-width: 600px;
}
@media (min-width: 415px) {
  .product-hero__wrapper__info {
    margin: 40px auto;
  }
  .product-hero__wrapper__info .product-swatches,
  .product-hero__wrapper__info .product-sizes {
    max-width: 345px;
    margin-left: auto;
    margin-right: auto;
  }
  .product-hero__wrapper__info .product-cta {
    max-width: 275px;
    margin-left: auto;
    margin-right: auto;
  }
  .product-hero__wrapper__info .product-cta form {
    margin-left: auto;
    margin-right: auto;
  }
}
@media (min-width: 769px) {
  .product-hero__wrapper__info {
    margin: 0;
    width: auto;
    max-width: 540px;
    position: relative;
  }
}
@media (min-width: 1441px) {
  .product-hero__wrapper__info {
    max-width: 410px;
  }
}
.product-hero__wrapper__info__position {
  width: 100%;
}
@media (min-width: 769px) {
  .product-hero__wrapper__info__position {
    width: 100%;
    display: -webkit-box;
    display: flex;
    margin-top: 40px;
    max-width: 348px;
    margin-left: auto;
    margin-right: auto;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }
  .product-hero__wrapper__info__position > div:nth-child(1) {
    -webkit-box-ordinal-group: 3;
    order: 2;
  }
  .product-hero__wrapper__info__position > div:nth-child(2) {
    -webkit-box-ordinal-group: 4;
    order: 3;
  }
  .product-hero__wrapper__info__position > div:nth-child(3) {
    -webkit-box-ordinal-group: 5;
    order: 4;
  }
  .product-hero__wrapper__info__position > div:nth-child(4) {
    -webkit-box-ordinal-group: 2;
    order: 1;
  }
  .product-hero__wrapper__info__position > div:nth-child(5) {
    -webkit-box-ordinal-group: 6;
    order: 5;
  }
  .product-hero__wrapper__info__position .product-info__accordion {
    margin-bottom: 0;
  }
}
@media (min-width: 769px) {
  .product-hero__wrapper__info__position.is-sticky {
    top: 40px;
    bottom: 0;
    margin-top: 0;
    position: -webkit-sticky;
    position: sticky;
  }
}
.product-info__head {
  margin: 30px 0 0;
}
.product-info__head__description {
  margin-top: 20px;
}
@media (min-width: 1201px) {
  .product-info__head {
    display: -webkit-box;
    display: flex;
    margin-bottom: 40px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }
  .product-info__head .product-info__head__title {
    -webkit-box-ordinal-group: 3;
    order: 2;
    margin: 10px 0 20px;
  }
  .product-info__head .product-info__head__reviews {
    -webkit-box-ordinal-group: 2;
    order: 1;
    margin: 0 0 40px;
  }
  .product-info__head .product-info__head__description {
    -webkit-box-ordinal-group: 4;
    order: 3;
    margin: 0;
  }
}
@media (min-width: 1441px) {
  .product-info__head {
    margin-top: 40px;
  }
  .product-info__head .product-info__head__title {
    font-size: 30px;
    line-height: 40px;
  }
}
.product-info__accordion {
  margin: 30px 0 80px;
}
.product-card__wishlist.product-hero__whislist-icon {
  right: 0;
  position: absolute;
  margin: 0 10px 0 0;
  top: calc(100% - 45px);
}
.product-card__wishlist.product-hero__whislist-icon svg {
  width: 30px;
  height: 30px;
}
@media (min-width: 769px) {
  .product-hero__wrapper__gallery.heart-sticky .product-hero__whislist-icon {
    margin: 0 20px 0 0;
    top: calc(100vh - 170px);
  }
  .product-hero__wrapper__gallery.heart-sticky
    .product-hero__whislist-icon
    .product-card__wishlist-btn {
    margin-bottom: 17px;
  }
}
.product-hero__info--moblie-wrapper {
  margin: 0 auto;
  max-width: 335px;
}
@media (min-width: 768px) {
  .product-hero__info--moblie-wrapper {
    max-width: 100%;
  }
} /*! path: /dummy/user/src/modules/product/product-reviews/product-reviews.scss */
.product-reviews {
  color: #0b163b;
}
.scroll-anchor {
  z-index: -10;
  top: 0;
  position: relative;
}
.yotpo-reviews-component {
  display: block;
  max-width: 696px;
  margin: 0 auto;
}
.yotpo-reviews-component .intro {
  text-align: center;
  padding: 0 20px;
}
@media (min-width: 769px) {
  .yotpo-reviews-component .intro {
    padding: 0;
  }
}
.yotpo-reviews-component .intro h3 {
  margin: 0 0 5px;
  letter-spacing: 0.5px;
}
.yotpo-reviews-component .intro p {
  margin: 0 0 10px;
}
.yotpo-reviews-component .intro p:last-child {
  margin-bottom: 35px;
}
@media (min-width: 769px) {
  .reviews-component .reviews-wrapper {
    display: -webkit-box;
    display: flex;
    height: 300px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
  }
}
@media (min-width: 769px) {
  .reviews-component .reviews-wrapper.no-height {
    height: auto;
  }
}
.reviews-component .reviews-wrapper .reviews-summary {
  height: 292px;
  margin-bottom: 27px;
}
@media (min-width: 769px) {
  .reviews-component .reviews-wrapper .reviews-summary {
    height: auto;
    width: 215px;
    margin-bottom: 0;
  }
}
.reviews-component .reviews-wrapper.no-reviews {
  height: 260px;
}
.reviews-component .reviews-wrapper.no-reviews .reviews-summary {
  width: 100%;
}
.reviews-component .reviews-summary {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  height: 100%;
}
.reviews-component .reviews-summary .stars {
  display: block;
  margin: 0 auto 1rem;
}
@media (min-width: 769px) {
  .reviews-component .reviews-summary .stars {
    margin-bottom: 1rem;
  }
}
.reviews-component .reviews-summary .stars .yotpo .stars-wrapper {
  margin: 0 auto;
  width: 7em;
  display: block;
  text-align: center;
}
.reviews-component .reviews-summary .stars .yotpo .yotpo-icon {
  font-size: 18.5px;
  margin-right: 1px;
}
.reviews-component .reviews-summary .stars .yotpo .yotpo-icon::before {
  color: #092dc5;
}
@media (min-width: 769px) {
  .reviews-component .reviews-summary .stars .yotpo .yotpo-icon {
    font-size: 14px;
  }
}
.reviews-component .reviews-summary .stars .yotpo .yotpo-icon:last-child {
  margin-right: 0;
}
.reviews-component .reviews-summary .review-cta {
  margin: 0 auto;
}
.reviews-component .reviews-summary h2 {
  margin-bottom: 8px;
  font-family: Optima, Arial, sans-serif;
  font-size: 54px;
  letter-spacing: 0.33px;
  line-height: 68.25px;
  text-align: center;
}
@media (min-width: 769px) {
  .reviews-component .reviews-summary h2 {
    margin-bottom: 20px;
  }
}
.reviews-component .reviews-summary p {
  display: block;
  text-align: center;
  margin: 0 auto 45px;
  letter-spacing: 0.5px;
}
@media (min-width: 769px) {
  .reviews-component .reviews-summary p {
    max-width: 125px;
    font-size: 12px;
    line-height: 1.375;
    margin-bottom: 20px;
  }
}
.reviews-component .reviews-detail-wrapper {
  max-width: 100%;
  padding: 0 30px;
}
@media (min-width: 376px) {
  .reviews-component .reviews-detail-wrapper {
    padding: 0 50px;
  }
}
@media (min-width: 769px) {
  .reviews-component .reviews-detail-wrapper {
    width: calc(100% - 215px);
    padding: 0 0 0 30px;
  }
}
.reviews-component .sort-by {
  margin-bottom: 52px;
}
@media (min-width: 769px) {
  .reviews-component .sort-by {
    margin: 0 0 28.5px;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
  }
}
.reviews-component .sort-by span {
  display: inline-block;
  margin: 0 1em 5px 2px;
  color: #0b163b;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
}
@media (min-width: 769px) {
  .reviews-component .sort-by span {
    margin: 0 1em 0 0;
    height: 37.5px;
    line-height: 37.5px;
  }
}
.reviews-component .sort-by .select {
  position: relative;
}
.reviews-component .sort-by .select::after {
  content: '';
  width: 6px;
  height: 6px;
  display: inline-block;
  vertical-align: middle;
  border-width: 0 0 2px 2px;
  border-style: solid;
  border-color: #092dc5;
  margin: 0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-transition: -webkit-transform 0.4s;
  transition: -webkit-transform 0.4s;
  transition: transform 0.4s;
  transition: transform 0.4s, -webkit-transform 0.4s;
  transition: transform 0.4s, -webkit-transform 0.4s;
  position: absolute;
  top: 50%;
  right: 15px;
  -webkit-transform: translateY(-50%) rotate(-45deg);
  transform: translateY(-50%) rotate(-45deg);
  margin-top: -2px;
}
.reviews-component .sort-by select {
  display: block;
  height: 50px;
  width: 100%;
  border: 1.5px solid #f9ece1;
  background-color: white;
  padding: 0 0.7em;
  letter-spacing: 0.5px;
  color: #0b163b;
}
@media (min-width: 769px) {
  .reviews-component .sort-by select {
    width: 364.5px;
    height: 37.5px;
    font-size: 14px;
    padding: 0 0.5em;
  }
}
.reviews-component .reviews-area-wrapper {
  display: block;
  width: 100%;
  overflow: hidden;
  margin: 0 0 0 auto;
  border-bottom: 0.75px solid rgba(11, 22, 59, 0.25);
}
@media (min-width: 769px) {
  .reviews-component .reviews-area-wrapper {
    height: 180px;
  }
}
.reviews-component .reviews-area-wrapper .review-items-wrapper {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: start;
  align-items: flex-start;
  -webkit-transition: all ease 0.6s;
  transition: all ease 0.6s;
}
@media (min-width: 769px) {
  .reviews-component .reviews-area-wrapper .review-items-wrapper {
    height: 100%;
  }
}
.reviews-component .reviews-area-wrapper .review-item {
  display: block;
  width: 100%;
  overflow-y: auto;
  position: relative;
}
@media (min-width: 769px) {
  .reviews-component .reviews-area-wrapper .review-item {
    width: 450px;
    height: 100%;
    margin: 0 30px 0 0;
    padding-bottom: 15px;
  }
}
.reviews-component .reviews-area-wrapper .review-item:last-child {
  margin-right: 0;
}
.reviews-component .reviews-area-wrapper .review-items-wrapper.child-0 {
  width: 0%;
}
.reviews-component .reviews-area-wrapper .review-items-wrapper.on-child-0 {
  margin-left: 0%;
}
.reviews-component .reviews-area-wrapper .review-items-wrapper.child-1 {
  width: 100%;
}
.reviews-component .reviews-area-wrapper .review-items-wrapper.on-child-1 {
  margin-left: -100%;
}
.reviews-component .reviews-area-wrapper .review-items-wrapper.child-2 {
  width: 200%;
}
.reviews-component .reviews-area-wrapper .review-items-wrapper.on-child-2 {
  margin-left: -200%;
}
.reviews-component .reviews-area-wrapper .review-items-wrapper.child-3 {
  width: 300%;
}
.reviews-component .reviews-area-wrapper .review-items-wrapper.on-child-3 {
  margin-left: -300%;
}
.reviews-component .reviews-area-wrapper .review-items-wrapper.child-4 {
  width: 400%;
}
.reviews-component .reviews-area-wrapper .review-items-wrapper.on-child-4 {
  margin-left: -400%;
}
.reviews-component .reviews-area-wrapper .review-items-wrapper.child-5 {
  width: 500%;
}
.reviews-component .reviews-area-wrapper .review-items-wrapper.on-child-5 {
  margin-left: -500%;
}
.reviews-component .reviews-area-wrapper .review-items-wrapper.child-6 {
  width: 600%;
}
.reviews-component .reviews-area-wrapper .review-items-wrapper.on-child-6 {
  margin-left: -600%;
}
.reviews-component .reviews-area-wrapper .review-items-wrapper.child-7 {
  width: 700%;
}
.reviews-component .reviews-area-wrapper .review-items-wrapper.on-child-7 {
  margin-left: -700%;
}
.reviews-component .reviews-area-wrapper .review-items-wrapper.child-8 {
  width: 800%;
}
.reviews-component .reviews-area-wrapper .review-items-wrapper.on-child-8 {
  margin-left: -800%;
}
.reviews-component .reviews-area-wrapper .review-items-wrapper.child-9 {
  width: 900%;
}
.reviews-component .reviews-area-wrapper .review-items-wrapper.on-child-9 {
  margin-left: -900%;
}
.reviews-component .reviews-area-wrapper .review-items-wrapper.child-10 {
  width: 1000%;
}
.reviews-component .reviews-area-wrapper .review-items-wrapper.on-child-10 {
  margin-left: -1000%;
}
@media (min-width: 769px) {
  .reviews-component .reviews-area-wrapper .review-items-wrapper.child-0 {
    width: 0px;
  }
}
@media (min-width: 769px) {
  .reviews-component .reviews-area-wrapper .review-items-wrapper.on-child-0 {
    margin-left: 0px;
  }
}
@media (min-width: 769px) {
  .reviews-component .reviews-area-wrapper .review-items-wrapper.child-1 {
    width: 480px;
  }
}
@media (min-width: 769px) {
  .reviews-component .reviews-area-wrapper .review-items-wrapper.on-child-1 {
    margin-left: -480px;
  }
}
@media (min-width: 769px) {
  .reviews-component .reviews-area-wrapper .review-items-wrapper.child-2 {
    width: 960px;
  }
}
@media (min-width: 769px) {
  .reviews-component .reviews-area-wrapper .review-items-wrapper.on-child-2 {
    margin-left: -960px;
  }
}
@media (min-width: 769px) {
  .reviews-component .reviews-area-wrapper .review-items-wrapper.child-3 {
    width: 1440px;
  }
}
@media (min-width: 769px) {
  .reviews-component .reviews-area-wrapper .review-items-wrapper.on-child-3 {
    margin-left: -1440px;
  }
}
@media (min-width: 769px) {
  .reviews-component .reviews-area-wrapper .review-items-wrapper.child-4 {
    width: 1920px;
  }
}
@media (min-width: 769px) {
  .reviews-component .reviews-area-wrapper .review-items-wrapper.on-child-4 {
    margin-left: -1920px;
  }
}
@media (min-width: 769px) {
  .reviews-component .reviews-area-wrapper .review-items-wrapper.child-5 {
    width: 2400px;
  }
}
@media (min-width: 769px) {
  .reviews-component .reviews-area-wrapper .review-items-wrapper.on-child-5 {
    margin-left: -2400px;
  }
}
@media (min-width: 769px) {
  .reviews-component .reviews-area-wrapper .review-items-wrapper.child-6 {
    width: 2880px;
  }
}
@media (min-width: 769px) {
  .reviews-component .reviews-area-wrapper .review-items-wrapper.on-child-6 {
    margin-left: -2880px;
  }
}
@media (min-width: 769px) {
  .reviews-component .reviews-area-wrapper .review-items-wrapper.child-7 {
    width: 3360px;
  }
}
@media (min-width: 769px) {
  .reviews-component .reviews-area-wrapper .review-items-wrapper.on-child-7 {
    margin-left: -3360px;
  }
}
@media (min-width: 769px) {
  .reviews-component .reviews-area-wrapper .review-items-wrapper.child-8 {
    width: 3840px;
  }
}
@media (min-width: 769px) {
  .reviews-component .reviews-area-wrapper .review-items-wrapper.on-child-8 {
    margin-left: -3840px;
  }
}
@media (min-width: 769px) {
  .reviews-component .reviews-area-wrapper .review-items-wrapper.child-9 {
    width: 4320px;
  }
}
@media (min-width: 769px) {
  .reviews-component .reviews-area-wrapper .review-items-wrapper.on-child-9 {
    margin-left: -4320px;
  }
}
@media (min-width: 769px) {
  .reviews-component .reviews-area-wrapper .review-items-wrapper.child-10 {
    width: 4800px;
  }
}
@media (min-width: 769px) {
  .reviews-component .reviews-area-wrapper .review-items-wrapper.on-child-10 {
    margin-left: -4800px;
  }
}
.reviews-component .review-item .human-date {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  line-height: 13px;
  text-transform: uppercase;
}
.reviews-component .review-item .stars {
  margin-bottom: 3px;
}
@media (min-width: 769px) {
  .reviews-component .review-item .stars {
    margin-bottom: 5px;
  }
}
.reviews-component .review-item .stars .yotpo .yotpo-icon {
  font-size: 19px;
  margin: 0 0 4px;
}
@media (min-width: 769px) {
  .reviews-component .review-item .stars .yotpo .yotpo-icon {
    font-size: 15px;
  }
}
.reviews-component .review-item .author {
  margin-bottom: 25px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.5px;
}
@media (min-width: 769px) {
  .reviews-component .review-item .author {
    font-size: 12px;
    letter-spacing: 0.38px;
    line-height: 18px;
    margin: 0 0 12px;
  }
}
.reviews-component .review-item .review-title {
  margin-bottom: 17px;
}
@media (min-width: 769px) {
  .reviews-component .review-item .review-title {
    font-size: 18px;
    line-height: 24px;
    margin: 0;
  }
}
.reviews-component .review-item .review-content {
  margin-bottom: 20px;
}
@media (min-width: 769px) {
  .reviews-component .review-item .review-content {
    font-size: 14px;
    line-height: 18px;
  }
}
.reviews-component .review-item .review-votes > span {
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
}
.reviews-component .review-item .review-votes > span::before {
  margin-right: 5px;
  color: #9da2b0;
}
.reviews-component .review-item .review-votes > span:last-child {
  margin-right: 0;
}
.reviews-component .review-item .review-votes span span {
  font-size: 14px;
  letter-spacing: 0.5px;
  color: #0b163b;
  text-decoration: underline;
}
.reviews-component .reviews-controls-wrapper {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 25px;
}
@media (min-width: 769px) {
  .reviews-component .reviews-controls-wrapper {
    max-width: 320px;
    margin: 0 auto;
    padding-top: 22px;
  }
}
.reviews-component .reviews-controls-wrapper button {
  -webkit-transition: all ease 0.3;
  transition: all ease 0.3;
  width: 10px;
  height: 30px;
  text-decoration: none;
  color: #0b163b;
  font-size: 14px;
  letter-spacing: 0.5px;
  position: relative;
  text-align: center;
  margin: 0 auto;
  display: block;
}
.reviews-component .reviews-controls-wrapper button::after {
  content: '';
  height: 1px;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 7px;
  background: #0b163b;
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
}
.reviews-component .reviews-controls-wrapper button.current {
  text-decoration: none;
  font-weight: bold;
}
.reviews-component .reviews-controls-wrapper button.current::after {
  width: 0%;
  left: 50%;
}
.reviews-component .reviews-controls-wrapper button.inactive {
  pointer-events: none;
  opacity: 0.7;
}
.reviews-component .reviews-controls-wrapper > div {
  width: 30px;
  height: 30px;
}
.reviews-component .reviews-controls-wrapper > div.rounded button {
  background: #f9ece1;
  color: #0b163b;
  border-radius: 50%;
  width: 30px;
}
.reviews-component .reviews-controls-wrapper > div.rounded button::before {
  content: '';
  width: 8px;
  height: 8px;
  display: inline-block;
  vertical-align: middle;
  border-width: 0 0 2px 2px;
  border-style: solid;
  border-color: #0b163b;
  margin: 0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-transition: -webkit-transform 0.4s;
  transition: -webkit-transform 0.4s;
  transition: transform 0.4s;
  transition: transform 0.4s, -webkit-transform 0.4s;
  transition: transform 0.4s, -webkit-transform 0.4s;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%) rotate(45deg);
  transform: translate(-50%, -50%) rotate(45deg);
  margin-left: 2px;
}
.reviews-component .reviews-controls-wrapper > div.rounded button::after {
  content: '';
  display: none;
}
.reviews-component .reviews-controls-wrapper > div.rounded:first-child {
  margin-right: auto;
}
.reviews-component .reviews-controls-wrapper > div.rounded:last-child {
  margin-left: auto;
}
.reviews-component
  .reviews-controls-wrapper
  > div.rounded:last-child
  button::before {
  -webkit-transform: translate(-50%, -50%) rotate(225deg);
  transform: translate(-50%, -50%) rotate(225deg);
  margin-left: -2px;
}
.reviews__write {
  margin: 40px auto;
  padding: 30px 20px 40px;
}
.reviews__write__wrapper {
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
}
@media (min-width: 769px) {
  .reviews__write__wrapper {
    max-width: inherit;
  }
}
@media (min-width: 1024px) {
  .reviews__write {
    margin: 100px 0 50px;
    padding: 40px 30px 50px;
  }
}
.reviews__write__form {
  margin-top: 10px;
}
.reviews-wrapper__response {
  margin: 20px 0;
}
.add-review__form {
  display: block;
}
.add-review__form .form-row .dropdown-menu {
  margin-bottom: 1.5rem;
}
.add-review__form .form-row > label {
  display: block;
  margin-bottom: 0.5rem;
} /*! path: /dummy/user/src/modules/product/product-sizes/product-sizes.scss */
.product-sizes {
  -webkit-overflow-scrolling: touch;
  margin: 10px 0;
  overflow-y: auto;
}
.product-sizes__title {
  margin: 10px 0;
  text-align: center;
}
@media (min-width: 1024px) {
  .product-sizes {
    overflow: initial;
  }
}
.product-sizes__wrapper {
  overflow: auto;
  margin: 10px 0;
  white-space: nowrap;
}
.product-sizes__wrapper .product-sizes__single {
  display: inline-block;
}
@media (min-width: 415px) {
  .product-sizes__wrapper {
    margin-right: 0;
    padding-right: 0;
  }
}
@media (min-width: 769px) {
  .product-sizes__wrapper {
    padding: 0;
    display: -webkit-box;
    display: flex;
    margin: 0 -5px;
    flex-wrap: wrap;
    white-space: normal;
  }
}
.product-sizes__single {
  width: 40px;
  height: 40px;
  cursor: pointer;
  text-align: center;
  background: #fbf4ed;
  margin: 5px 5px 5px 0;
}
@media (min-width: 769px) {
  .product-sizes__single {
    margin: 5px;
  }
}
.product-sizes__single span {
  left: 0;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.product-sizes__single.active {
  color: #fff;
  pointer-events: none;
  background: #092dc5;
}
.product-sizes__single.disabled {
  color: #5b667f;
  cursor: no-drop;
  background: transparent;
  border: 1px solid #5b667f;
}
.product-sizes__single.disabled::before {
  content: '';
  top: 50%;
  left: -8px;
  width: 54px;
  height: 1px;
  position: absolute;
  pointer-events: none;
  background: #5b667f;
  -webkit-transform: translateY(-50%) rotate(-45deg);
  transform: translateY(-50%) rotate(-45deg);
}
.product-sizes__single.active.disabled {
  color: #fff;
  background: #0b163b;
  border: 1px solid #0b163b;
}
.product-sizes__single.active.disabled::before {
  background: #fff;
}
.product-size__guide {
  padding: 16px 20px;
  margin: 50px auto 30px;
}
.product-size__guide__wrapper {
  margin: 0 auto;
  display: block;
  max-width: 300px;
} /*! path: /dummy/user/src/modules/product/product-swatches/product-swatches.scss */
.product-swatches {
  margin: 10px auto 20px;
}
@media (min-width: 1024px) {
  .product-swatches {
    margin: 20px auto 30px;
  }
}
.product-swatches__colors {
  opacity: 1;
  overflow: auto;
  margin: 10px -5px;
  white-space: nowrap;
  -webkit-transition: opacity 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out;
}
@media (min-width: 769px) {
  .product-swatches__colors {
    display: -webkit-box;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    white-space: normal;
  }
}
.product-swatches__colors__single {
  margin: 5px;
  width: 41px;
  height: 41px;
  cursor: pointer;
  vertical-align: top;
  display: inline-block;
  border: 2px solid transparent;
  background: center center no-repeat;
  background-size: cover;
}
@media (min-width: 769px) {
  .product-swatches__colors__single {
    width: 40px;
    height: 40px;
  }
}
.product-swatches__colors__single.active {
  pointer-events: none;
  border: 2px solid #092dc5;
}
.product-swatches__colors__single span {
  display: none;
}
.product-swatches__colors.disabled {
  opacity: 0.5;
  pointer-events: none;
} /*! path: /dummy/user/src/modules/product/product-two-up/product-two-up.scss */
.product-two-up__videos {
  max-width: 414px;
  margin-left: auto;
  margin-right: auto;
}
@media (min-width: 769px) {
  .product-two-up__videos {
    display: -webkit-box;
    display: flex;
    max-width: 100%;
    -webkit-box-pack: center;
    justify-content: center;
  }
}
@media (min-width: 1024px) {
  .product-two-up__videos.one {
    -webkit-box-pack: center;
    justify-content: center;
  }
}
.product-two-up__videos.ipad-one-row {
  flex-wrap: wrap;
  max-width: 500px;
}
@media (min-width: 1201px) {
  .product-two-up__videos.ipad-one-row {
    max-width: 100%;
    flex-wrap: nowrap;
  }
}
.product-two-up__videos.ipad-one-row .product-two-up__videos__single {
  margin-bottom: 80px;
}
@media (min-width: 769px) {
  .product-two-up__videos.ipad-one-row .product-two-up__videos__single {
    margin-bottom: 150px;
  }
}
@media (min-width: 1201px) {
  .product-two-up__videos.ipad-one-row .product-two-up__videos__single {
    margin-bottom: 0;
  }
}
.product-two-up__videos.ipad-one-row
  .product-two-up__videos__single:last-of-type {
  margin-bottom: 0;
}
@media (min-width: 768px) {
  .product-two-up__videos.ipad-one-row
    .product-two-up__videos__single:last-of-type {
    margin-bottom: 70px;
  }
}
@media (min-width: 1024px) {
  .product-two-up__videos.ipad-one-row
    .product-two-up__videos__single:last-of-type {
    margin-bottom: 30px;
  }
}
@media (min-width: 1201px) {
  .product-two-up__videos.ipad-one-row
    .product-two-up__videos__single:last-of-type {
    margin-bottom: 0;
  }
}
.product-two-up__videos__single {
  width: 100%;
  margin: 0 auto 82px;
}
.product-two-up__videos__single:last-of-type {
  margin-bottom: 0;
}
@media (min-width: 769px) {
  .product-two-up__videos__single {
    width: 100%;
    margin: 0 30px 0;
    max-width: 414px;
  }
}
.product-two-up {
  margin-left: auto;
  margin-right: auto;
  color: #0b163b;
}
@media (min-width: 769px) {
  .product-two-up {
    max-width: 100%;
  }
} /*! path: /dummy/user/src/modules/product/product-ugc/product-ugc.scss */
.fs-has-links::after {
  padding: 5px 7.5px;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
  content: 'SHOP IT';
}
.fs-wrapper div.fs-text-container .fs-entry-title,
div.fs-detail-title {
  font-family: Times New Roman, serif;
  font-style: italic;
  font-weight: normal;
}
div.fs-text-container .fs-entry-date,
div.fs-detail-container .fs-post-info,
div.fs-wrapper div.fs-has-links::after,
.fs-text-product,
.fs-overlink-text {
  font-weight: bold;
}
.fs-image-container .fs-overlink {
  box-shadow: 0 2px 0 #222;
}
.fs-image-container .fs-overlink:hover {
  box-shadow: 0 6px 0 #222;
}
.fs-image-container .fs-overlink-text {
  display: none !important;
}
.fs-wrapper div.fs-text-container * {
  color: #fff;
}
.fs-wrapper div.fs-text-container {
  background-color: rgba(0, 0, 0, 0.8);
  margin: 0;
}
div.fs-entry-date {
  display: none;
}
div.fs-entry-title {
  display: none;
}
div.fs-wrapper .fs-service-icon i.fs-icon {
  display: block;
  margin: 0 auto;
  text-align: center;
  padding: 0;
  width: 24px;
  height: 24px;
  position: relative;
}
div.fs-wrapper .fs-service-icon i.fs-icon.fs-icon.fs-fa-instagram::before {
  content: ' ';
  width: 24px;
  height: 24px;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background: transparent center center no-repeat;
  background-size: contain;
}
div.fs-wrapper div.fs-timeline-entry {
  margin: 1px;
}
div.fs-wrapper div.fs-has-links::after {
  padding: 0 1em;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
  content: 'Shop It';
  font-weight: 600;
  letter-spacing: 3px;
  height: 1.8em;
  line-height: 2.1em !important;
  text-transform: uppercase;
}
.fs-timeline-detail {
  background: rgba(0, 0, 0, 0.35);
}
.fs-detail-nav-bar-arrows {
  position: relative;
  z-index: 2;
}
.fs-detail-nav-bar-arrows .fs-detail-nav-button {
  display: none;
}
.fs-detail-nav-bar-close {
  float: none;
  position: absolute;
  right: -10px;
  top: -50px;
  padding: 0;
  margin: 0;
}
.fs-detail-nav-bar-close .fs-detail-nav-button {
  display: block;
  padding: 0;
  width: 30px;
  height: 30px;
  background: #fbf4ed;
  border-radius: 50%;
}
.fs-detail-nav-bar-close .fs-detail-nav-button::after {
  width: 16px;
  height: 16px;
  position: absolute;
  content: ' ';
  background-size: contain;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.fs-detail-nav-bar-close .fs-detail-nav-button svg {
  display: none;
}
.fs-detail-container {
  padding: 0;
}
.fs-detail-container.fs-slid {
  -webkit-transform: translateY(10em) scale(0.7);
  transform: translateY(10em) scale(0.7);
  opacity: 0;
}
#fs-detail-products {
  padding: 0;
  position: relative;
}
#fs-detail-products .fs-product-column {
  clear: both;
  float: none;
  position: relative;
  height: auto;
  left: 0;
  padding: 0;
  margin: 0 30px 0 auto;
  width: 100% !important;
}
#fs-detail-products .fs-product-column a.fs-shop-link.fs-link-list {
  display: block;
  position: relative;
  padding: 0;
  height: 150px;
  margin: 0 0 40px;
  clear: both;
  float: left;
  width: 150px;
}
#fs-detail-products .fs-product-column .fs-detail-product-container {
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  height: 100%;
}
#fs-detail-products
  .fs-product-column
  .fs-detail-product-container
  .fs-detail-product-image {
  height: 100%;
  display: block;
  margin: 0;
}
#fs-detail-products .fs-product-column .fs-shopify-options {
  text-align: left;
  top: 0;
  left: 0;
  height: 150px;
  position: relative;
  padding: 0;
  display: block;
  float: right;
  width: calc(100% - 170px);
  clear: none;
  margin: 0 !important;
}
#fs-detail-products .fs-product-column .fs-shopify-options .fs-view {
  position: relative;
  display: block;
  width: 100%;
  height: 150px;
  padding: 20px 0 0;
  margin: -5px 0 0;
}
#fs-detail-products .fs-product-column .fs-shopify-options .fs-view a {
  display: block;
  width: 100%;
  height: 150px;
}
#fs-detail-products
  .fs-product-column
  .fs-shopify-options
  .fs-view
  .fs-product-name,
#fs-detail-products
  .fs-product-column
  .fs-shopify-options
  .fs-view
  .fs-product-vendor,
#fs-detail-products
  .fs-product-column
  .fs-shopify-options
  .fs-view
  .fs-product-price {
  display: block;
}
#fs-detail-products
  .fs-product-column
  .fs-shopify-options
  .fs-view
  .fs-product-name {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
#fs-detail-products
  .fs-product-column
  .fs-shopify-options
  .fs-view
  .fs-product-vendor {
  display: block;
}
#fs-detail-products
  .fs-product-column
  .fs-shopify-options
  .fs-view
  .fs-product-price {
  top: 66px;
  position: absolute;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
#fs-detail-products .fs-product-column .fs-shopify-options .fs-view div {
  padding: 0;
}
#fs-detail-products .fs-product-column .fs-shopify-options p,
#fs-detail-products .fs-product-column .fs-shopify-options .fs-add {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 !important;
  margin: 0 !important;
  display: block !important;
  width: 100%;
  max-width: 175px;
}
#fs-detail-products .fs-product-column .fs-shopify-options p,
#fs-detail-products .fs-product-column .fs-shopify-options .fs-add button {
  background: #092dc5;
  color: #fff;
  width: 100%;
  height: 40px;
  line-height: 42px !important;
  font-size: 12px !important;
  font-weight: 600;
  letter-spacing: 3px;
  padding: 0 !important;
  margin: 0 !important;
}
#fs-detail-products .fs-product-column .fs-shopify-options p {
  background: #fff !important;
  color: #5b667f !important;
  width: auto;
}
#fs-detail-products .fs-product-column .fs-shopify-options .fs-add button {
  width: 100%;
  max-width: 100%;
  position: relative;
  font-weight: 600;
  letter-spacing: 3px;
  background: #092dc5;
  color: #fff;
  text-decoration: none;
}
.fs-detail-content > img {
  display: none !important;
}
.fs-detail-content .fs-detail-left {
  padding: 20px;
  box-sizing: content-box;
  max-width: 415px;
}
.fs-detail-content .fs-detail-right {
  width: 345px;
  box-sizing: content-box;
  padding: 60px 20px 10px 0;
}
.fs-detail-content div.fs-detail-title {
  text-align: left;
  font-style: normal;
  margin: 0;
  width: 100% !important;
  padding: 0;
}
.fs-detail-content .fs-post-info {
  margin: 20px 0 0;
  padding: 0;
}
.fs-detail-content .fs-post-info a {
  display: block;
}
.fs-detail-content .fs-post-info a,
.fs-detail-content .fs-post-info .fs-detail-date,
.fs-detail-content .fs-post-info .fs-service-username {
  letter-spacing: 3px;
  line-height: 18px;
  color: #0b163b;
  display: inline-block;
  font-weight: bold;
}
.fs-detail-content .fs-post-info .fs-slashes {
  display: none;
}
.fs-detail-content .fs-post-info .fs-service-username {
  padding-right: 1.6em;
  position: relative;
}
.fs-detail-content .fs-post-info .fs-service-username::after {
  content: '᛫';
  position: absolute;
  height: 100%;
  right: 0.3em;
}
.fs-detail-content .fs-post-info .fs-detail-date {
  display: block;
}
.fs-detail-content .fs-detail-shares {
  margin: 20px 0;
  padding: 0;
}
.fs-detail-content .fs-detail-shares a {
  font-size: 24px;
  color: #0b163b;
}
#fs-detail-branding {
  width: 0;
  height: 0;
  overflow: hidden;
}
.fs-mobile .fs-detail-nav-bar-arrows {
  position: fixed;
  z-index: 300;
  top: 0;
  left: 50%;
  height: 50px;
  width: 50%;
  max-width: calc(588px * 0.5);
}
.fs-mobile .fs-detail-nav-bar-arrows .fs-detail-nav-button {
  display: none !important;
}
.fs-mobile .fs-image-container {
  width: 100%;
  max-width: 588px;
}
.fs-mobile .fs-detail-nav-bar-close {
  top: 1rem;
  right: calc(30px + 1rem);
}
.fs-mobile #fs-detail-close {
  display: block !important;
  margin: 0;
}
.fs-mobile #fs-detail-products {
  padding-top: 0;
}
.fs-mobile #fs-detail-products .fs-product-column {
  margin: 0 auto;
  width: calc(100% - 40px) !important;
}
.fs-mobile .fs-detail-content {
  width: 100%;
  max-width: 580px;
}
.fs-mobile .fs-detail-content .fs-detail-left {
  width: 100%;
  max-width: 100%;
  padding: 0 0 25px;
}
.fs-mobile .fs-detail-content .fs-detail-right {
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin: 0;
}
.fs-mobile .fs-detail-content div.fs-detail-title {
  margin: 10px auto 50px;
  width: calc(100% - 40px) !important;
}
.fs-mobile .fs-detail-content .fs-post-info {
  margin: 0 auto 50px;
}
.fs-mobile .fs-detail-content .fs-detail-shares {
  margin: 0 auto 0;
  padding: 0 0 50px;
}
.fs-detail-shares {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: space-evenly;
  justify-content: space-evenly;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
  -webkit-box-align: stretch;
  align-items: stretch;
}
.fs-detail-shares a.fs-share {
  width: 24px;
  height: 24px;
  display: block;
  margin: 0;
  padding: 0;
}
.fs-detail-shares a.fs-share i.fs-icon {
  display: block;
  margin: 0 auto;
  text-align: center;
  padding: 0;
  width: 24px;
  height: 24px;
  position: relative;
}
.fs-detail-shares a.fs-share i.fs-icon.fs-fa-facebook::before,
.fs-detail-shares a.fs-share i.fs-icon.fs-fa-twitter::before,
.fs-detail-shares a.fs-share i.fs-icon.fs-fa-instagram::before,
.fs-detail-shares a.fs-share i.fs-icon.fs-fa-pinterest::before {
  content: ' ';
  width: 24px;
  height: 24px;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background: transparent center center no-repeat;
  background-size: contain;
}
.fs-option-group {
  margin: 0 auto;
}
.fs-option-group .fs-variant-select {
  border: 1px solid #092dc5;
  margin: 0 0.3rem 1rem;
  padding: 0;
}
.fs-option-group .fs-variant-select .fs-option-label {
  color: #092dc5;
  padding: 0;
  width: 70px;
  line-height: 42px;
  height: 40px;
}
.fs-option-group
  .fs-variant-select
  input[type='radio']:checked
  + .fs-option-label {
  background-color: #092dc5;
}
.fs-add-to-cart-enabled .fs-buy-now-form {
  max-width: 720px;
}
.fs-add-to-cart-enabled .fs-option-name {
  margin: 0 0 1rem;
}
.fs-add-to-cart-enabled .fs-button-bar {
  max-width: 210px;
  margin: 1.2rem auto !important;
}
.fs-add-to-cart-enabled .fs-button-bar a,
.fs-add-to-cart-enabled .fs-button-bar a.fs-buy-button {
  height: 40px;
  line-height: 42px;
  background: #092dc5;
  color: #fff;
  width: 100%;
  font-weight: 600;
  letter-spacing: 3px;
  padding: 0;
  margin: 0 auto 1rem;
}
div.section-instagram .fs-wrapper.fs-desktop .fs-timeline {
  height: 550px;
  max-height: 550px;
}
div.section-instagram .fs-wrapper.fs-desktop .fs-entry-container {
  width: calc(524px * 0.5);
  height: calc(524px * 0.5);
  margin: 0 10px 10px 0;
  padding: 0;
}
div.section-instagram .fs-wrapper.fs-desktop .fs-entry-container:nth-child(3n) {
  width: 550px;
  height: 550px;
}
div.section-instagram .fs-wrapper.fs-desktop .fs-text-container {
  padding: 0;
}
div.section-instagram .fs-wrapper.fs-desktop .fs-timeline-entry {
  margin: 0;
  padding: 0;
}
div.section-instagram .fs-wrapper.fs-mobile .fs-timeline {
  height: 380px;
  max-height: 380px;
}
div.section-instagram .fs-wrapper.fs-mobile .fs-entry-container {
  width: calc(366px * 0.5);
  height: calc(366px * 0.5);
  margin: 0 7px 7px 0;
  padding: 0;
}
div.section-instagram .fs-wrapper.fs-mobile .fs-entry-container:nth-child(3n) {
  width: 380px;
  height: 380px;
}
div.section-instagram .fs-wrapper.fs-mobile .fs-text-container {
  padding: 0;
}
div.section-instagram .fs-wrapper.fs-mobile .fs-timeline-entry {
  margin: 0;
  padding: 0;
}
@media (min-width: 415px) {
  div.section-instagram .fs-wrapper.fs-mobile .fs-timeline {
    height: 440px;
    max-height: 440px;
  }
  div.section-instagram .fs-wrapper.fs-mobile .fs-entry-container {
    width: calc(424px * 0.5);
    height: calc(424px * 0.5);
    margin: 0 8px 8px 0;
  }
  div.section-instagram
    .fs-wrapper.fs-mobile
    .fs-entry-container:nth-child(3n) {
    width: 440px;
    height: 440px;
  }
} /*! path: /dummy/user/src/modules/product/yotpo-stars/yotpo-stars.scss */
.product-info__head__reviews {
  min-height: 40px;
}
.product-info__head__reviews .yotpo {
  width: auto;
  margin: 0 auto;
  text-align: center;
}
.product-info__head__reviews .yotpo .yotpo-display-wrapper {
  width: auto;
  display: block;
  max-width: 91px;
  margin: 0 auto 5px;
}
.yotpo-area {
  cursor: pointer;
}
.yotpo-stars__cta {
  display: inline;
  border-bottom: 1px solid #0b163b;
} /*! path: /dummy/user/src/modules/global/accordion/accordion.scss */
.accordion {
  padding-bottom: 17px;
}
.accordion--border-bottom {
  border-bottom: 1px solid #c5bdbc;
}
.accordion--border-top:first-of-type {
  border-top: 1px solid #c5bdbc;
}
@media (min-width: 415px) {
  .accordion--footer {
    max-width: 325px;
  }
}
.accordion--full {
  max-width: 100%;
}
.accordion__title {
  cursor: pointer;
  position: relative;
  padding: 19px 25px 0 0;
}
.accordion__title__icon::after,
.accordion__title__icon::before {
  content: '';
  right: 3px;
  height: 2px;
  width: 10px;
  top: calc(50% + 9px);
  display: block;
  position: absolute;
  -webkit-transform-origin: center;
  transform-origin: center;
  background-color: #0b163b;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: -webkit-transform 300ms;
  transition: -webkit-transform 300ms;
  transition: transform 300ms;
  transition: transform 300ms, -webkit-transform 300ms;
}
.accordion__title__icon::before {
  -webkit-transform: translateY(-50%) rotate(90deg);
  transform: translateY(-50%) rotate(90deg);
}
.is-active .accordion__title__icon::before {
  -webkit-transform: translateY(-50%) rotate(0);
  transform: translateY(-50%) rotate(0);
}
.accordion--no-icon .accordion__title__icon {
  display: none;
}
.accordion__body {
  overflow: hidden;
  max-height: 0;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.accordion__body__content {
  padding-top: 20px;
  padding-bottom: 5px;
}
.accordion--faq .accordion__body__content {
  padding-top: 40px;
}
@media (min-width: 769px) {
  .accordion--faq .accordion__body__content {
    padding-top: 75px;
  }
}
.accordion__body__content * {
  color: #0b163b !important;
  font-size: 14px !important;
  line-height: 22px !important;
}
.accordion__body__content a {
  color: #092dc5 !important;
}
.accordion.focus-within .accordion__title::before {
  -webkit-transform: translateY(-50%) rotate(0);
  transform: translateY(-50%) rotate(0);
}
.accordion.focus-within .accordion__body {
  max-height: none !important;
} /*! path: /dummy/user/src/modules/global/affix/affix.scss */
.vue-affix {
  position: relative;
}
@media (max-width: 768px) {
  .vue-affix {
    left: 0 !important;
    top: 0 !important;
  }
}
.vue-affix:not(.affix) {
  left: 0 !important;
}
@media (min-width: 769px) {
  .affix {
    position: fixed;
  }
}
.affix-bottom {
  position: relative;
}
.affix-recalculating {
  position: relative !important;
  left: 0 !important;
}
.flex-end {
  -webkit-box-align: end !important;
  align-items: flex-end !important;
}
.flex-end .flex-end__cancel-top {
  top: inherit !important;
} /*! path: /dummy/user/src/modules/global/bottle-counter/bottle-counter.scss */
.bottle-counter .video-container {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.bottle-counter .bottle-counter__media {
  position: relative;
  height: 0;
  padding-top: 65%;
  overflow: hidden;
}
@media (min-width: 376px) {
  .bottle-counter .bottle-counter__media {
    padding-top: 58.45%;
  }
}
@media (min-width: 769px) {
  .bottle-counter .bottle-counter__media {
    padding-top: 43.95%;
  }
}
.bottle-counter .bottle-counter__media .video-container {
  padding-bottom: 76%;
}
.bottle-counter .bottle-counter__content {
  top: 50%;
  left: 50%;
  color: #fff;
  min-width: 286px;
  padding: 19px 30px;
  text-align: center;
  position: absolute;
  background-color: #0b163b;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
@media (min-width: 415px) {
  .bottle-counter .bottle-counter__content {
    padding: 40px 65px 45px;
  }
}
.bottle-counter .bottle-counter__title {
  margin-bottom: 5px;
}
@media (min-width: 769px) {
  .bottle-counter .bottle-counter__title {
    font-size: 54px;
    margin-bottom: 13px;
  }
} /*! path: /dummy/user/src/modules/global/breadcrumbs/breadcrumbs.scss */
.breadcrumbs .container {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
  -webkit-box-pack: center;
  justify-content: center;
}
@media (min-width: 769px) {
  .breadcrumbs .container {
    -webkit-box-pack: start;
    justify-content: flex-start;
  }
} /*! path: /dummy/user/src/modules/global/button/button.scss */
.btn {
  height: 60px;
  padding: 1px 20px 0;
  min-width: 240px;
  text-align: center;
  display: -webkit-inline-box;
  display: inline-flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}
.btn.btn--full {
  width: 100%;
}
.btn.btn--black {
  color: #fff;
  background: #0b163b;
}
.btn.btn--small {
  height: auto;
  padding: 5px 0;
  min-width: initial;
  line-height: 1.3;
}
.btn.btn--underline {
  position: relative;
}
.btn.btn--underline span::before {
  content: '';
  left: 0;
  right: 0;
  height: 1px;
  bottom: -2px;
  background: #0b163b;
  position: absolute;
}
.btn--link,
.btn--link--sm,
.wysiwyg.container.basic-page .wysiwyg__container a.cta-link,
.btn--reset {
  padding: 0;
  height: auto;
  text-align: left;
  min-width: inherit;
  text-decoration: underline;
  line-height: 1.3;
}
.btn--primary {
  color: #fff;
  border: 1px solid #092dc5;
  background-color: #092dc5;
  -webkit-transition: all 300ms;
  transition: all 300ms;
}
.btn--primary:disabled {
  opacity: 1;
}
.btn--primary:hover:not(:disabled) {
  background-color: #0b163b;
  border-color: #0b163b;
}
.btn--outlined {
  color: #092dc5;
  border: 2px solid #092dc5;
  -webkit-transition: all 300ms;
  transition: all 300ms;
}
.btn--outlined:hover:not(:disabled) {
  color: #fff;
  background-color: #0b163b;
  border: 2px solid #0b163b;
}
.btn--outlined:disabled {
  opacity: 1;
}
.btn--full-width {
  width: 100%;
}
.btn--link {
  text-decoration: none;
  position: relative;
  line-height: calc(1em + 9px);
}
.btn--link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100% - 3px);
  height: 2px;
  background-color: currentColor;
}
.btn--link--sm {
  text-decoration: none;
  position: relative;
  line-height: calc(1em + 4px);
}
.btn--link--sm::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100% - 3px);
  height: 1px;
  background-color: currentColor;
}
.btn--switch--passive {
  display: -webkit-box;
  display: flex;
}
.btn--switch--active {
  display: none;
}
.btn--switch.active .btn--switch--passive {
  display: none;
}
.btn--switch.active .btn--switch--active {
  display: -webkit-box;
  display: flex;
}
.btn--circle {
  width: 50px;
  height: 50px;
  min-width: 50px;
  overflow: hidden;
  border-radius: 50%;
  background: #fbf4ed;
}
.btn--circle:hover {
  background: #0b163b;
}
.btn--circle:hover svg {
  color: #fff;
}
.btn--circle.btn--medium {
  padding: 0;
  width: 40px;
  height: 40px;
  min-width: 40px;
}
.btn--circle.btn--small {
  padding: 0;
  width: 34px;
  height: 34px;
  min-width: 34px;
}
.btn--circle.btn--top {
  width: 60px;
  height: 60px;
} /*! path: /dummy/user/src/modules/global/card-carousel/card-carousel.scss */
.section-card-carousel {
  padding: 40px 30px 55px;
}
@media (min-width: 376px) {
  .section-card-carousel {
    padding-left: 50px;
    padding-right: 50px;
  }
}
@media (min-width: 415px) {
  .section-card-carousel {
    padding-top: 70px;
  }
}
@media (min-width: 769px) {
  .section-card-carousel {
    padding: 0 30px 95px;
  }
}
@media (min-width: 1024px) {
  .section-card-carousel {
    padding: 0 76px 80px;
  }
}
.section-card-carousel .flickity-enabled {
  position: static;
}
@media (min-width: 1024px) {
  .section-card-carousel .flickity-enabled {
    margin: 0 -19px;
  }
}
.section-card-carousel .flickity-page-dots {
  position: static;
  margin-top: 20px;
}
@media (min-width: 415px) {
  .section-card-carousel .flickity-page-dots {
    margin-top: 25px;
  }
}
@media (min-width: 769px) {
  .section-card-carousel .flickity-page-dots {
    margin-top: 35px;
  }
}
@media (min-width: 1024px) {
  .section-card-carousel .flickity-page-dots {
    margin-top: 65px;
  }
}
.section-card-carousel .flickity-page-dots .dot {
  background: none;
  margin: 0 3px;
  opacity: 1;
  border: 1px solid #092dc5;
}
.section-card-carousel .flickity-page-dots .dot.is-selected {
  background: #092dc5;
}
.section-card-carousel .section__title {
  margin-bottom: 20px;
  text-align: center;
}
@media (min-width: 769px) {
  .section-card-carousel .section__title {
    margin-bottom: 40px;
  }
}
@media (min-width: 1024px) {
  .section-card-carousel .section__title {
    margin-bottom: 35px;
  }
}
.section-card-carousel .section__description {
  letter-spacing: 0.5px;
  max-width: 302px;
  margin: 0 auto;
}
@media (min-width: 415px) {
  .section-card-carousel .section__description {
    max-width: 100%;
  }
}
.section-card-carousel .section__head {
  max-width: 490px;
  margin: 0 auto 10px;
  text-align: center;
}
@media (min-width: 415px) {
  .section-card-carousel .section__head {
    margin-bottom: 60px;
  }
}
@media (min-width: 769px) {
  .section-card-carousel .section__head {
    max-width: 890px;
    margin-bottom: 35px;
  }
}
@media (min-width: 1024px) {
  .section-card-carousel .section__head {
    margin-bottom: 45px;
  }
}
.section-card-carousel .section__body {
  max-width: 318px;
  margin: 0 auto;
}
@media (min-width: 769px) {
  .section-card-carousel .section__body {
    max-width: 100%;
  }
}
.section-card-carousel .section__slide-wrapper {
  width: 100%;
}
@media (min-width: 769px) {
  .section-card-carousel .section__slide-wrapper {
    max-width: 50%;
    padding: 0 12px;
  }
}
@media (min-width: 1024px) {
  .section-card-carousel .section__slide-wrapper {
    max-width: 33.33%;
    padding: 0 42px;
  }
}
.section-card-carousel .section__slide {
  margin: 0 auto;
  padding: 15px 27px;
}
@media (min-width: 769px) {
  .section-card-carousel .section__slide {
    padding: 35px 35px 30px;
  }
}
@media (min-width: 1024px) {
  .section-card-carousel .section__slide {
    padding: 35px 30px 15px;
  }
}
.section-card-carousel .section__slide-media {
  position: relative;
  height: 0;
  padding-top: 76.22%;
  margin-bottom: 10px;
}
@media (min-width: 769px) {
  .section-card-carousel .section__slide-media {
    margin-bottom: 20px;
  }
}
.section-card-carousel .section__slide-head {
  margin-bottom: 25px;
}
@media (min-width: 1024px) {
  .section-card-carousel .section__slide-head {
    margin-bottom: 15px;
  }
}
.section-card-carousel .section__slide-entry {
  text-align: center;
}
.section-card-carousel .section__slide-entry:last-child {
  margin-bottom: 0;
} /*! path: /dummy/user/src/modules/global/checkbox/checkbox.scss */
.checkbox {
  display: block;
  min-height: 1.6rem;
}
.checkbox.spaced-top {
  padding-top: 24px;
}
.checkbox.spaced-bottom {
  padding-bottom: 24px;
}
.checkbox .checkbox__wrapper {
  display: block;
  height: 100%;
}
.checkbox .checkbox__label {
  display: block;
  height: auto;
  position: relative;
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
  padding-top: 2px;
  font-size: 14px;
  letter-spacing: 0.5px;
  line-height: 22px;
}
.checkbox .checkbox__label span {
  padding-left: 30px;
  min-height: 1rem;
  display: block;
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
}
.checkbox .checkbox__label a {
  color: #092dc5;
  text-decoration: underline;
}
.checkbox .checkbox__label.is-active .checkbox__icon {
  background: black;
}
.checkbox .checkbox__label.is-active .checkbox__icon svg {
  opacity: 1;
}
.checkbox .checkbox__label:focus .checkbox__icon,
.checkbox .checkbox__label:active .checkbox__icon,
.checkbox .checkbox__label:hover .checkbox__icon {
  border-color: #092dc5 !important;
}
.checkbox .checkbox__icon {
  width: 20px;
  height: 20px;
  position: absolute;
  border: 2px solid #c5bdbc;
  margin-right: 10px;
  top: 1px;
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
}
.checkbox .checkbox__icon svg {
  opacity: 0;
  display: block;
  margin: -2px 0 0 -2px;
  width: 20px;
  -webkit-transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.checkbox.fixed {
  position: relative;
}
.checkbox--align-t {
  -webkit-box-align: start;
  align-items: flex-start;
}
.is-error.checkbox__icon {
  border: 1px solid #da3522;
}
.checkbox--align-t .checkbox__icon {
  margin-top: 2px;
}
.checkbox__icon-el {
  cursor: pointer;
  display: block;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  height: 15px;
  margin-right: 10px;
  opacity: 0;
  position: relative;
  width: 15px;
  z-index: 1;
}
.checkbox__icon-el:checked + .checkbox__icon-tick {
  opacity: 1;
}
.checkbox__icon-tick {
  width: 10px;
  position: absolute;
  top: 1px;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  z-index: 0;
  opacity: 0;
  -webkit-transition: opacity 300ms ease-in-out;
  transition: opacity 300ms ease-in-out;
}
.is-error + .checkbox__label {
  color: #da3522;
} /*! path: /dummy/user/src/modules/global/checkbox-group/checkbox-group.scss */
.multi-option {
  position: relative;
}
.multi-option input:-webkit-autofill,
.multi-option input:-webkit-autofill:hover,
.multi-option input:-webkit-autofill:focus,
.multi-option input:-webkit-autofill:active {
  -webkit-transition-delay: 9999s;
  transition-delay: 9999s;
}
.multi-option__wrapper {
  padding: 1rem 0 1.2rem;
  height: auto;
  line-height: initial;
  position: relative;
}
.multi-option__el_list {
  display: block;
  width: 100%;
}
.multi-option__el {
  position: relative;
  height: 2.25rem;
  line-height: 2.25rem;
  -webkit-transition: all 200ms;
  transition: all 200ms;
  z-index: 2;
  width: 100%;
  margin: 0 0 0.3rem;
}
.multi-option__el:last-child {
  margin-bottom: 0;
}
.multi-option__el.is-active .multi-option__icon {
  border: 2px solid #0b163b;
}
.multi-option__el.is-active .multi-option__icon span {
  background: #0b163b;
  width: 10px;
  height: 10px;
}
.multi-option__el.is-active .multi-option__icon svg {
  opacity: 1;
}
.multi-option__title {
  display: block;
  z-index: 1;
  width: 100%;
  height: 2.25rem;
  line-height: 2.25rem;
}
.multi-option__label > span {
  display: block;
  z-index: 1;
  width: 100%;
  height: 2.25rem;
  line-height: 2.25rem;
  cursor: pointer;
  padding: 0 0 0 1.8rem;
  -webkit-transition: padding 0.3s ease;
  transition: padding 0.3s ease;
}
.multi-option__label:focus .multi-option__icon,
.multi-option__label:active .multi-option__icon,
.multi-option__label:hover .multi-option__icon {
  border-color: #092dc5 !important;
}
.multi-option__icon {
  width: 20px;
  height: 20px;
  position: absolute;
  border: 2px solid #c5bdbc;
  margin-right: 10px;
  top: 7px;
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
}
.multi-option__icon span {
  display: block;
  width: 2px;
  height: 2px;
  background: none;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
}
.multi-option__icon.multi-option__icon-checkbox span {
  display: none !important;
}
.multi-option__icon.multi-option__icon-checkbox svg {
  opacity: 0;
  display: block;
  margin: -2px 0 0 -2px;
  width: 20px;
  -webkit-transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.multi-option__input {
  display: block;
  visibility: hidden;
  width: 1px;
  height: 1px;
}
.multi-option__error {
  position: absolute;
  bottom: 0;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.8rem;
  color: #da3522;
  opacity: 0;
  -webkit-transform: translateY(-0.5em);
  transform: translateY(-0.5em);
  -webkit-transition: opacity 300ms ease, -webkit-transform 300ms ease;
  transition: opacity 300ms ease, -webkit-transform 300ms ease;
  transition: opacity 300ms ease, transform 300ms ease;
  transition: opacity 300ms ease, transform 300ms ease,
    -webkit-transform 300ms ease;
} /*! path: /dummy/user/src/modules/global/contact/contact.scss */
.contact {
  padding: 30px 0 80px;
}
@media (min-width: 415px) {
  .contact {
    padding-top: 40px;
  }
}
@media (min-width: 769px) {
  .contact {
    padding-bottom: 150px;
  }
}
.contact .container {
  max-width: 568px;
  width: calc(100% - 20px);
}
@media (min-width: 769px) {
  .contact .container {
    max-width: 100%;
    width: calc(100% - 200px);
  }
}
@media (min-width: 1024px) {
  .contact .container {
    max-width: 930px;
    width: calc(100% - 80px);
  }
}
.contact__title {
  margin-bottom: 15px;
}
.contact__title:last-child {
  margin-bottom: 0;
}
@media (min-width: 1024px) {
  .contact__title {
    margin-bottom: 0;
  }
}
.contact__form {
  margin-bottom: 80px;
}
@media (min-width: 769px) {
  .contact__form {
    margin-bottom: 150px;
  }
}
.contact__form:last-child {
  margin-bottom: 0;
}
.contact__block {
  margin-bottom: 80px;
}
@media (min-width: 769px) {
  .contact__block {
    margin-bottom: 150px;
  }
}
.contact__block:last-child {
  margin-bottom: 0;
}
@media (min-width: 415px) {
  .contact__block.contact-block {
    margin-top: 120px;
  }
}
.contact__block-head {
  margin-bottom: 20px;
}
@media (min-width: 1024px) {
  .contact__block-head {
    margin-bottom: 30px;
  }
}
.contact__block-title {
  margin-bottom: 0;
}
.contact__block-body {
  padding: 16px 16px 14px 20px;
  border-radius: 4px;
}
@media (min-width: 376px) {
  .contact__block-body {
    padding: 16px 20px 20px;
  }
}
@media (min-width: 415px) {
  .contact__block-body {
    padding-top: 20px;
  }
}
@media (min-width: 769px) {
  .contact__block-body {
    padding-bottom: 15px;
  }
}
@media (min-width: 1024px) {
  .contact__block-body {
    padding-bottom: 30px;
  }
} /*! path: /dummy/user/src/modules/global/contact-block/contact-block.scss */
.contact-block {
  max-width: 530px;
  margin: 0 auto;
}
.contact-block .contact-block__head {
  margin-bottom: 80px;
}
.contact-block .grid {
  display: block;
}
@media (min-width: 769px) {
  .contact-block .grid {
    display: -webkit-box;
    display: flex;
  }
}
.contact-block .grid__col {
  margin-bottom: 80px;
}
.contact-block .grid__col:last-child {
  margin-bottom: 0;
}
@media (min-width: 769px) {
  .contact-block .grid__col {
    max-width: 268px;
    margin-bottom: 0;
  }
}
.contact-block__body p {
  text-transform: uppercase;
}
.contact-block__body .btn--link {
  text-transform: none;
} /*! path: /dummy/user/src/modules/global/dropdown-block/dropdown-block.scss */
.dropdown-block {
  width: 100%;
}
@media (min-width: 1201px) {
  .dropdown-block {
    width: auto;
  }
}
.dropdown-block .dropdown-block__link {
  display: block;
}
.dropdown-block .dropdown-block__image {
  display: none;
  position: relative;
  height: 0;
  padding-top: 100%;
  margin-bottom: 5px;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.dropdown-block .dropdown-block__image:hover {
  opacity: 0.8;
}
@media (min-width: 1201px) {
  .dropdown-block .dropdown-block__image {
    display: block;
  }
}
.dropdown-block .dropdown-block__title {
  letter-spacing: 0.5px;
}
.dropdown-block--large .dropdown-block__image {
  margin-bottom: 10px;
}
.dropdown-block--large .dropdown-block__title {
  text-align: center;
}
.nav-mobile .dropdown-block--large .dropdown-block__title {
  text-transform: uppercase;
} /*! path: /dummy/user/src/modules/global/dropdown-menu/dropdown-menu.scss */
.dropdown-menu {
  position: relative;
}
.dropdown-menu input:-webkit-autofill,
.dropdown-menu input:-webkit-autofill:hover,
.dropdown-menu input:-webkit-autofill:focus,
.dropdown-menu input:-webkit-autofill:active {
  -webkit-transition-delay: 9999s;
  transition-delay: 9999s;
}
.dropdown-menu .dropdown-menu__wrapper {
  padding: 1rem 0 0;
  height: auto;
  line-height: initial;
  position: relative;
}
.dropdown-menu .dropdown-menu__label,
.dropdown-menu .dropdown-menu__arrow {
  position: absolute;
  top: 1rem;
  bottom: initial;
  margin: auto;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  height: 3.125rem;
  line-height: 3.125rem;
  -webkit-transition: all ease 200ms;
  transition: all ease 200ms;
  z-index: 2;
  pointer-events: none;
  padding: 0 1em;
}
.dropdown-menu .dropdown-menu__arrow {
  right: 0;
}
.dropdown-menu .dropdown-menu__arrow svg {
  display: block;
  width: 14px;
  height: 100%;
}
.dropdown-menu .dropdown-menu__value {
  z-index: 1;
  width: 100%;
  height: 3.125rem;
  line-height: 3.125rem;
  border: 2px solid #c5bdbc;
  position: absolute;
  pointer-events: none;
  top: 1em;
  padding: 0 1em;
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
}
.dropdown-menu .dropdown-menu__error {
  position: absolute;
  bottom: 0;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.8rem;
  color: #da3522;
  opacity: 0;
  -webkit-transform: translateY(-0.5em);
  transform: translateY(-0.5em);
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  z-index: -1;
  pointer-events: none;
}
.dropdown-menu .dropdown-menu__el {
  display: block;
  opacity: 0;
  width: 100%;
  height: 3.125rem;
  z-index: 1;
  cursor: pointer;
}
.dropdown-menu.is-active .dropdown-menu__label {
  -webkit-transform: translateY(-1rem);
  transform: translateY(-1rem);
  font-size: 0.8rem;
  height: 1rem;
  line-height: 1rem;
  padding: 0;
}
.dropdown-menu.is-focus .dropdown-menu__value {
  border: 2px solid #092dc5;
} /*! path: /dummy/user/src/modules/global/empty-view/empty-view.scss */
.empty-view {
  margin: 20px 0 40px;
  padding: 20px 25px;
}
@media (min-width: 769px) {
  .empty-view {
    margin-top: 40px;
    padding: 50px;
  }
}
.empty-view__title {
  margin-bottom: 25px;
}
@media (min-width: 769px) {
  .empty-view__title {
    margin-bottom: 30px;
  }
}
.empty-view__image {
  width: 100%;
  max-width: 135px;
  margin: 0 auto 25px;
}
@media (min-width: 769px) {
  .empty-view__image {
    max-width: 180px;
    margin-bottom: 35px;
  }
}
.empty-view__image::before {
  padding-top: 88.88889%;
}
@media (min-width: 769px) {
  .empty-view__image::before {
    padding-top: 61.11111%;
  }
}
.empty-view__button {
  display: inline-block;
}
@media (min-width: 769px) {
  .empty-view__button {
    min-width: 250px;
  }
} /*! path: /dummy/user/src/modules/global/featured-blog/featured-blog.scss */
.section-featured-blog {
  padding: 20px 0 35px;
}
@media (min-width: 415px) {
  .section-featured-blog {
    padding-bottom: 50px;
  }
}
@media (min-width: 769px) {
  .section-featured-blog {
    padding: 50px 40px 45px;
  }
}
@media (min-width: 1024px) {
  .section-featured-blog {
    padding-left: 100px;
    padding-right: 100px;
  }
}
@media (min-width: 769px) {
  .section-featured-blog .section__cols {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row wrap;
    margin: 0 -18px;
  }
}
@media (min-width: 1024px) {
  .section-featured-blog .section__cols {
    margin: 0 -55px;
  }
}
.section-featured-blog .section__col {
  max-width: 490px;
  margin: 0 auto;
  display: none;
}
.section-featured-blog .section__col:first-child {
  display: block;
}
@media (min-width: 769px) {
  .section-featured-blog .section__col {
    display: -webkit-box;
    display: flex;
    -webkit-box-flex: 0;
    flex: 0 0 33.33%;
    max-width: 33.33%;
    padding: 0 18px;
  }
}
@media (min-width: 1024px) {
  .section-featured-blog .section__col {
    padding: 0 55px;
  }
}
.section-featured-blog .section__title {
  margin-bottom: 20px;
  text-align: center;
}
@media (min-width: 769px) {
  .section-featured-blog .section__title {
    margin-bottom: 35px;
  }
}
.section-featured-blog .section__head {
  margin-bottom: 25px;
  text-align: center;
}
.section-featured-blog .section__body {
  max-width: 490px;
  margin: 0 auto;
}
@media (min-width: 769px) {
  .section-featured-blog .section__body {
    max-width: 100%;
  }
}
.section-featured-blog .section__block {
  width: 100%;
  text-align: center;
}
@media (min-width: 769px) {
  .section-featured-blog .section__block {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    text-align: left;
  }
}
.section-featured-blog .section__block-media {
  position: relative;
  height: 0;
  padding-top: 90.9%;
  margin-bottom: 25px;
}
@media (min-width: 376px) {
  .section-featured-blog .section__block-media {
    padding-top: 82.37%;
  }
}
@media (min-width: 415px) {
  .section-featured-blog .section__block-media {
    padding-top: 69.45%;
  }
}
@media (min-width: 769px) {
  .section-featured-blog .section__block-media {
    padding-top: 100%;
    margin-bottom: 45px;
  }
}
.section-featured-blog .section__block-content {
  padding: 0 32px;
}
@media (min-width: 769px) {
  .section-featured-blog .section__block-content {
    -webkit-box-flex: 1;
    flex: 1 1;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: start;
    align-items: flex-start;
    padding: 0;
  }
}
.section-featured-blog .section__block-title {
  margin-bottom: 5px;
}
@media (min-width: 769px) {
  .section-featured-blog .section__block-title {
    margin-bottom: 25px;
  }
}
@media (min-width: 1024px) {
  .section-featured-blog .section__block-title {
    margin-bottom: 10px;
  }
}
.section-featured-blog .section__block-entry {
  margin-bottom: 25px;
}
@media (min-width: 769px) {
  .section-featured-blog .section__block-entry {
    margin-bottom: 35px;
  }
}
@media (min-width: 1024px) {
  .section-featured-blog .section__block-entry {
    margin-bottom: 25px;
  }
}
.section-featured-blog .section__block-link {
  margin-top: auto;
}
.section-featured-blog .section__actions {
  display: none;
}
@media (min-width: 769px) {
  .section-featured-blog .section__actions {
    display: block;
    padding-top: 85px;
    text-align: center;
  }
}
@media (min-width: 1024px) {
  .section-featured-blog .section__actions {
    padding-top: 50px;
  }
}
.section-featured-blog .section__btn {
  color: #0b163b;
  border-color: currentColor;
} /*! path: /dummy/user/src/modules/global/featured-item/featured-item.scss */
.section-featured-items {
  text-align: center;
  color: #0b163b;
}
.section-featured-items .grid {
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.section-featured-items .grid__col {
  -webkit-box-flex: 0;
  flex: 0 0 100%;
  margin-bottom: 80px;
}
@media (min-width: 768px) {
  .section-featured-items .grid__col {
    -webkit-box-flex: 0;
    flex: 0 0 50%;
    max-width: calc(50% - 20px);
    margin-bottom: 0;
  }
}
@media (min-width: 1024px) {
  .section-featured-items .grid__col {
    max-width: calc(50% - 25px);
  }
}
.section-featured-items .grid__col:last-child {
  margin-bottom: 0;
}
.section-featured-items .section__image {
  position: relative;
  height: 0;
  padding-top: 117.95%;
  margin-bottom: 20px;
}
.section-featured-items .section__title {
  margin-bottom: 15px;
  letter-spacing: 0.5px;
} /*! path: /dummy/user/src/modules/global/form-newsletter/form-newsletter.scss */
.form-newsletter {
  max-width: 325px;
  margin: 0 auto 50px;
  color: #fff;
  text-align: center;
}
.form-newsletter .form__title {
  margin-bottom: 17px;
  letter-spacing: 0.5px;
}
.form-newsletter .form__body {
  position: relative;
}
.form-newsletter .form__btn {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  line-height: 1;
}
.form-newsletter .form__note {
  margin-top: 17px;
  opacity: 0.65;
  letter-spacing: 0.5px;
}
.form-newsletter .form__note a {
  text-decoration: underline;
}
.form-newsletter .form__row--error .field {
  border-color: #da3522;
}
.form-newsletter .form__message--success {
  background: #f9ece1;
  padding: 11px 10px 12px;
  color: #0b163b;
}
.form-newsletter .form__message--error {
  width: 100%;
  background: #da3522;
  margin-top: 5px;
  padding: 3px 5px;
  color: #fff;
  text-align: center;
}
.form-newsletter .field {
  width: 100%;
  border: 0;
  padding: 0;
  letter-spacing: 0.5px;
  line-height: 1;
}
.form-newsletter .field::-webkit-input-placeholder {
  color: currentColor;
}
.form-newsletter .field::-moz-placeholder {
  color: currentColor;
}
.form-newsletter .field:-ms-input-placeholder {
  color: currentColor;
}
.form-newsletter .field::-ms-input-placeholder {
  color: currentColor;
}
.form-newsletter .field::placeholder {
  color: currentColor;
} /*! path: /dummy/user/src/modules/global/gladly/gladly.scss */
#gladlyChat_container * {
  font-family: 'Sofia Pro', arial, sans-serif !important;
} /*! path: /dummy/user/src/modules/global/hello-bar/hello-bar.scss */
.hello-bar {
  overflow: hidden;
}
.hello-bar__slider {
  display: -webkit-box;
  display: flex;
}
.hello-bar__slider.flickity-enabled {
  display: block;
}
.hello-bar__slide {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  padding: 4px 20px;
  text-align: center;
}
.hello-bar__slider .hello-bar__slide {
  -webkit-box-flex: 0;
  flex: 0 0 auto;
}
.flickity-enabled .hello-bar__slide {
  -webkit-box-flex: 0;
  flex: none;
  opacity: 1;
}
.flickity-resize .hello-bar__slide {
  min-height: 100%;
}
.hello-bar__url {
  display: block;
  text-decoration: none;
} /*! path: /dummy/user/src/modules/global/help/help.scss */
.section-help {
  padding: 30px 0 80px;
}
@media (min-width: 415px) {
  .section-help {
    padding-top: 40px;
  }
}
@media (min-width: 769px) {
  .section-help {
    padding-bottom: 150px;
  }
}
.section-help .container {
  max-width: 568px;
  width: calc(100% - 20px);
}
@media (min-width: 769px) {
  .section-help .container {
    max-width: 100%;
    width: calc(100% - 200px);
  }
}
@media (min-width: 1024px) {
  .section-help .container {
    max-width: 930px;
    width: calc(100% - 80px);
  }
}
.section-help .section__head {
  max-width: 460px;
  margin: 0 auto 35px;
}
@media (min-width: 769px) {
  .section-help .section__head {
    max-width: 100%;
    margin-bottom: 75px;
  }
}
@media (min-width: 1024px) {
  .section-help .section__head {
    max-width: 100%;
    margin-bottom: 85px;
  }
}
.section-help .section__title {
  margin-bottom: 15px;
}
.section-help .section__title:last-child {
  margin-bottom: 0;
}
@media (min-width: 1024px) {
  .section-help .section__title {
    margin-bottom: 0;
  }
}
.section-help .section__block {
  margin-bottom: 80px;
}
@media (min-width: 769px) {
  .section-help .section__block {
    margin-bottom: 150px;
  }
}
.section-help .section__block:last-child {
  margin-bottom: 0;
}
@media (min-width: 415px) {
  .section-help .section__block.contact-block {
    margin-top: 120px;
  }
}
.section-help .section__block-head {
  margin-bottom: 20px;
}
@media (min-width: 1024px) {
  .section-help .section__block-head {
    margin-bottom: 30px;
  }
}
.section-help .section__block-title {
  margin-bottom: 0;
}
.section-help .section__block-body {
  padding: 16px 16px 14px 20px;
  border-radius: 4px;
}
@media (min-width: 376px) {
  .section-help .section__block-body {
    padding: 16px 20px 20px;
  }
}
@media (min-width: 415px) {
  .section-help .section__block-body {
    padding-top: 20px;
  }
}
@media (min-width: 769px) {
  .section-help .section__block-body {
    padding-bottom: 15px;
  }
}
@media (min-width: 1024px) {
  .section-help .section__block-body {
    padding-bottom: 30px;
  }
} /*! path: /dummy/user/src/modules/global/hero/hero.scss */
.hero {
  padding-bottom: 40px;
  min-height: calc(100vh - 105px);
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}
@media (min-width: 769px) {
  .hero {
    display: block;
    min-height: 0;
    padding-bottom: 0;
  }
}
.hero .hero__container {
  position: relative;
  height: 0;
  padding-top: 110%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-box-flex: 1;
  flex: 1 1;
}
@media (min-width: 415px) {
  .hero .hero__container {
    padding-top: 59.375%;
  }
}
@media (min-width: 769px) {
  .hero .hero__container {
    padding-top: 60.54%;
  }
}
@media (min-width: 1201px) {
  .hero .hero__container {
    padding-top: 43.05%;
  }
}
.hero .hero__btn {
  position: relative;
  display: block;
  text-align: center;
  padding-top: 13px;
  padding-bottom: 22px;
}
@media (min-width: 769px) {
  .hero .hero__btn {
    display: none;
  }
}
.hero .hero__btn::after {
  content: '';
  width: 10px;
  height: 10px;
  display: inline-block;
  vertical-align: middle;
  border-width: 0 0 2px 2px;
  border-style: solid;
  border-color: currentColor;
  margin: 0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-transition: -webkit-transform 0.4s;
  transition: -webkit-transform 0.4s;
  transition: transform 0.4s;
  transition: transform 0.4s, -webkit-transform 0.4s;
  transition: transform 0.4s, -webkit-transform 0.4s;
  position: absolute;
  bottom: 0;
  left: 50%;
  -webkit-transform: translateX(-50%) rotate(-45deg);
  transform: translateX(-50%) rotate(-45deg);
} /*! path: /dummy/user/src/modules/global/highlight-collage/highlight-collage.scss */
.section-highlight-collage {
  position: relative;
  padding: 30px 0 35px;
}
@media (min-width: 769px) {
  .section-highlight-collage {
    padding: 75px 0 125px;
  }
}
@media (min-width: 1024px) {
  .section-highlight-collage {
    padding-top: 80px;
  }
}
@media (min-width: 1201px) {
  .section-highlight-collage {
    padding-bottom: 0;
  }
}
.section-highlight-collage .flickity-enabled {
  position: static;
}
.section-highlight-collage .flickity-page-dots {
  position: static;
  margin-top: 40px;
}
@media (min-width: 769px) {
  .section-highlight-collage .flickity-page-dots {
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
    margin-top: 0;
  }
}
.section-highlight-collage .flickity-page-dots .dot {
  background: none;
  margin: 0 3px;
  opacity: 1;
  border: 1px solid #092dc5;
}
.section-highlight-collage .flickity-page-dots .dot.is-selected {
  background: #092dc5;
}
@media (min-width: 769px) {
  .section-highlight-collage .section__cols {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row wrap;
  }
}
.section-highlight-collage .section__col--text {
  text-align: center;
}
@media (min-width: 769px) {
  .section-highlight-collage .section__col--text {
    -webkit-box-flex: 0;
    flex: 0 0 50.97%;
    max-width: 50.97%;
    padding-right: 55px;
    padding-left: 66px;
    text-align: left;
  }
}
@media (min-width: 1201px) {
  .section-highlight-collage .section__col--text {
    -webkit-box-flex: 0;
    flex: 0 0 40.277%;
    max-width: 40.277%;
    margin-bottom: 72px;
    padding-left: 100px;
    padding-right: 88px;
  }
}
.section-highlight-collage .section__col--text .section__slide-title,
.section-highlight-collage .section__col--text .section__slide-entry {
  display: none;
}
@media (min-width: 769px) {
  .section-highlight-collage .section__col--text .section__slide-title,
  .section-highlight-collage .section__col--text .section__slide-entry {
    display: block;
  }
}
.section-highlight-collage .section__col--slider {
  max-width: 375px;
  margin: 0 auto;
}
@media (min-width: 769px) {
  .section-highlight-collage .section__col--slider {
    -webkit-box-flex: 0;
    flex: 0 0 49.02%;
    max-width: 49.02%;
    align-self: center;
  }
}
@media (min-width: 1201px) {
  .section-highlight-collage .section__col--slider {
    -webkit-box-flex: 0;
    flex: 0 0 59.723%;
    max-width: 59.723%;
  }
}
.section-highlight-collage .section__title {
  margin-bottom: 25px;
}
@media (min-width: 769px) {
  .section-highlight-collage .section__title {
    margin-bottom: 40px;
  }
}
.section-highlight-collage .section__slide {
  width: 100%;
}
.section-highlight-collage .section__slide-title {
  margin-bottom: 5px;
  letter-spacing: 0.5px;
}
.section-highlight-collage .section__slide-entry {
  margin-bottom: 20px;
  letter-spacing: 0.5px;
}
.section-highlight-collage .section__slide-entry:last-child {
  margin-bottom: 0;
}
.section-highlight-collage .section__slide-media {
  position: relative;
  height: 0;
  padding-top: 82.67%;
  margin-bottom: 60px;
}
@media (min-width: 769px) {
  .section-highlight-collage .section__slide-media {
    padding-top: 95.348%;
    margin-bottom: 0;
  }
}
.section-highlight-collage .section__slide-content {
  padding: 0 32px;
  text-align: center;
}
@media (min-width: 769px) {
  .section-highlight-collage .section__slide-content {
    padding: 0;
    display: none;
  }
} /*! path: /dummy/user/src/modules/global/hotspots/hotspots.scss */
.section-hotspots {
  overflow: hidden;
  padding-bottom: 80px;
}
@media (min-width: 769px) {
  .section-hotspots {
    padding-bottom: 100px;
  }
}
@media (min-width: 1024px) {
  .section-hotspots {
    padding-bottom: 150px;
  }
}
.section-hotspots .section__container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 43px;
}
@media (min-width: 376px) {
  .section-hotspots .section__container {
    max-width: 580px;
    padding: 0 63px;
  }
}
@media (min-width: 769px) {
  .section-hotspots .section__container {
    max-width: 1023px;
    padding: 0 125px;
  }
}
.section-hotspots .section__image {
  position: relative;
  height: 0;
  padding-top: 112.5%;
}
@media (min-width: 415px) {
  .section-hotspots .section__image {
    padding-top: 94.7%;
  }
}
@media (min-width: 769px) {
  .section-hotspots .section__image {
    padding-top: 100%;
  }
}
.hotspot {
  position: absolute;
}
@media (min-width: 769px) {
  .hotspot:hover .hotspot__container {
    opacity: 1;
    visibility: visible;
  }
}
.hotspot .hotspot__index {
  display: inline-block;
  height: 29px;
  width: 29px;
  padding-left: 3px;
  line-height: 29px;
  text-align: center;
  border-radius: 50%;
  position: relative;
  z-index: 2;
}
@media (min-width: 769px) {
  .hotspot .hotspot__index {
    height: 40px;
    width: 40px;
    line-height: 40px;
  }
}
.hotspot .hotspot__close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  z-index: 3;
}
.hotspot .hotspot__close span {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #092dc5;
  -webkit-transform: translateY(-50%) rotate(45deg);
  transform: translateY(-50%) rotate(45deg);
}
@media (min-width: 769px) {
  .hotspot .hotspot__close span {
    display: none;
  }
}
.hotspot .hotspot__close span:last-child {
  -webkit-transform: translateY(-50%) rotate(-45deg);
  transform: translateY(-50%) rotate(-45deg);
}
.hotspot .hotspot__container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}
@media (min-width: 769px) {
  .hotspot .hotspot__container {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 50vw;
  }
}
@media (min-width: 1441px) {
  .hotspot .hotspot__container {
    width: 720px;
  }
}
.hotspot .hotspot__container.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.hotspot .hotspot__container.is-inverse {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  flex-direction: row-reverse;
}
.hotspot .hotspot__image {
  position: relative;
  height: 100vh;
}
@media (min-width: 769px) {
  .hotspot .hotspot__image {
    -webkit-box-flex: 0;
    flex: 0 0 250px;
    max-width: 250px;
    height: 250px;
    padding: 6px;
    border-radius: 50%;
  }
}
.hotspot .hotspot__image::before {
  content: '';
  position: absolute;
  top: -6px;
  bottom: -6px;
  left: -6px;
  right: -6px;
  background-color: currentColor;
  border-radius: 50%;
}
@media (min-width: 769px) {
  .hotspot .hotspot__image .img {
    border-radius: 50%;
  }
}
.hotspot .hotspot__content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 25px;
  text-align: center;
  z-index: 2;
}
@media (min-width: 769px) {
  .hotspot .hotspot__content {
    position: static;
    -webkit-box-flex: 0;
    flex: 0 0 470px;
    max-width: 470px;
    border-radius: 20px;
    margin-left: -50px;
    padding: 20px 70px 20px 100px;
    text-align: center;
    z-index: auto;
  }
}
.hotspot .hotspot__title {
  font-size: 36px;
  line-height: 50px;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
}
@media (min-width: 769px) {
  .hotspot .hotspot__title {
    font-size: 30px;
    line-height: 38px;
  }
}
@media (min-width: 769px) {
  .hotspot .hotspot__container.is-inverse .hotspot__content {
    margin-left: 0;
    margin-right: -50px;
    padding-left: 70px;
    padding-right: 100px;
  }
} /*! path: /dummy/user/src/modules/global/image/image.scss */
.img,
.img__el {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}
.img {
  overflow: hidden;
}
.img.fit-cover .img__el {
  -o-object-fit: cover;
  object-fit: cover;
  font-family: 'object-fit: cover;';
}
.img.fit-contain .img__el {
  -o-object-fit: contain;
  object-fit: contain;
  font-family: 'object-fit: contain;';
}
.img.is-loaded .img__el {
  opacity: 1;
  visibility: visible;
}
.img.is-loaded .img__loader {
  opacity: 0;
  visibility: hidden;
}
.img__el {
  opacity: 0;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  -webkit-transition-property: opacity, visibility, z-index;
  transition-property: opacity, visibility, z-index;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  visibility: hidden;
  z-index: 2;
}
.img__el.is-fallback {
  opacity: 1;
  visibility: visible;
}
.img__el.fade-enter,
.img__el.fade-leave-to {
  opacity: 0 !important;
}
.img__el.fade-enter {
  z-index: 1;
}
.img__loader {
  z-index: 0;
  width: 40px;
  height: 40px;
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
}
.img__loader::before {
  content: ' ';
  width: 40px;
  height: 40px;
  display: block;
  border-radius: 50%;
  border: 5px solid #092dc5;
  border-color: #092dc5 transparent #092dc5 transparent;
  -webkit-animation: spin 1.2s linear infinite;
  animation: spin 1.2s linear infinite;
} /*! path: /dummy/user/src/modules/global/image-zoom/image-zoom.scss */
.product-gallery__zoom {
  width: 100%;
  display: block;
  overflow: hidden;
}
.product-gallery__zoom > img {
  width: 100%;
}
.product-gallery__zoom__zoomed {
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: center center no-repeat;
  background-size: 100%;
}
.product-gallery__zoom.active {
  cursor: pointer;
} /*! path: /dummy/user/src/modules/global/info-blocks/info-blocks.scss */
.section-info-blocks {
  overflow: hidden;
}
@media (min-width: 769px) {
  .section-info-blocks {
    padding: 80px 0 90px;
  }
}
@media (min-width: 1024px) {
  .section-info-blocks {
    padding-bottom: 70px;
  }
}
@media (min-width: 769px) {
  .section-info-blocks .section__cols {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row wrap;
    margin: 0 -16px;
    padding: 0 32px;
  }
}
@media (min-width: 1024px) {
  .section-info-blocks .section__cols {
    margin: 0 -26px;
    padding: 0 100px;
  }
}
@media (min-width: 769px) {
  .section-info-blocks .section__col {
    -webkit-box-flex: 0;
    flex: 0 0 50%;
    max-width: 50%;
    padding: 0 16px;
  }
}
@media (min-width: 1024px) {
  .section-info-blocks .section__col {
    padding: 0 26px;
  }
}
.section-info-blocks .section__block {
  padding: 50px 35px 55px;
}
@media (min-width: 415px) {
  .section-info-blocks .section__block {
    padding: 45px 0 150px;
  }
}
@media (min-width: 769px) {
  .section-info-blocks .section__block {
    padding: 45px 30px;
  }
}
@media (min-width: 1024px) {
  .section-info-blocks .section__block {
    padding: 35px 77px 75px;
  }
}
.section-info-blocks .section__title {
  max-width: 270px;
  margin: 0 auto 20px;
  text-align: center;
}
@media (min-width: 415px) {
  .section-info-blocks .section__title {
    max-width: 100%;
    margin-bottom: 40px;
  }
}
@media (min-width: 769px) {
  .section-info-blocks .section__title {
    margin-bottom: 30px;
  }
}
@media (min-width: 1024px) {
  .section-info-blocks .section__title {
    margin-bottom: 40px;
    padding: 0 65px;
  }
}
.section-info-blocks .section__entry {
  max-width: 292px;
  margin: 0 auto;
  padding: 0 7px;
  text-align: center;
}
@media (min-width: 376px) {
  .section-info-blocks .section__entry {
    padding: 0;
  }
}
@media (min-width: 415px) {
  .section-info-blocks .section__entry {
    max-width: 490px;
  }
}
@media (min-width: 769px) {
  .section-info-blocks .section__entry {
    max-width: 100%;
  }
}
.section-info-blocks .section__media-wrapper {
  max-width: 254px;
  margin: 0 auto 25px;
}
@media (min-width: 769px) {
  .section-info-blocks .section__media-wrapper {
    max-width: 100%;
    margin-bottom: 45px;
  }
}
.section-info-blocks .section__media {
  position: relative;
  height: 0;
  padding-top: 100%;
} /*! path: /dummy/user/src/modules/global/info-carousel/info-carousel.scss */
.section-info-carousel {
  padding: 18px 0 32px;
}
@media (min-width: 415px) {
  .section-info-carousel {
    padding: 40px 0 55px;
  }
}
@media (min-width: 769px) {
  .section-info-carousel {
    padding: 100px 0 0;
  }
}
@media (min-width: 1024px) {
  .section-info-carousel {
    padding-top: 75px;
  }
}
.section-info-carousel .flickity-enabled {
  position: static;
}
.section-info-carousel .flickity-page-dots {
  position: static;
  margin-top: 10px;
}
@media (min-width: 415px) {
  .section-info-carousel .flickity-page-dots {
    margin-top: 25px;
  }
}
@media (min-width: 769px) {
  .section-info-carousel .flickity-page-dots {
    margin-top: 45px;
  }
}
@media (min-width: 1024px) {
  .section-info-carousel .flickity-page-dots {
    margin-top: 40px;
  }
}
.section-info-carousel .flickity-page-dots .dot {
  background: none;
  margin: 0 3px;
  opacity: 1;
  border: 1px solid #092dc5;
}
.section-info-carousel .flickity-page-dots .dot.is-selected {
  background: #092dc5;
}
.section-info-carousel .section__head {
  margin-bottom: 25px;
  padding: 0 55px;
  text-align: center;
}
@media (min-width: 415px) {
  .section-info-carousel .section__head {
    margin-bottom: 40px;
  }
}
@media (min-width: 769px) {
  .section-info-carousel .section__head {
    margin-bottom: 65px;
  }
}
.section-info-carousel .section__body {
  max-width: 485px;
  margin: 0 auto;
}
@media (min-width: 769px) {
  .section-info-carousel .section__body {
    max-width: 1120px;
  }
}
.section-info-carousel .section__slide {
  width: 100%;
}
.section-info-carousel .section__slide-media {
  position: relative;
  height: 0;
  padding-top: 94.67%;
  margin-bottom: 30px;
}
@media (min-width: 376px) {
  .section-info-carousel .section__slide-media {
    padding-top: 85.74%;
  }
}
@media (min-width: 415px) {
  .section-info-carousel .section__slide-media {
    padding-top: 72.74%;
    margin-bottom: 20px;
  }
}
@media (min-width: 769px) {
  .section-info-carousel .section__slide-media {
    padding-top: 61.52%;
    margin-bottom: 70px;
  }
}
@media (min-width: 1024px) {
  .section-info-carousel .section__slide-media {
    padding-top: 56.25%;
    margin-bottom: 75px;
  }
}
.section-info-carousel .section__slide-content {
  max-width: 312px;
  margin: 0 auto;
  text-align: center;
}
@media (min-width: 415px) {
  .section-info-carousel .section__slide-content {
    max-width: 100%;
  }
}
@media (min-width: 769px) {
  .section-info-carousel .section__slide-content {
    max-width: 870px;
  }
} /*! path: /dummy/user/src/modules/global/instagram/instagram.scss */
.section-instagram {
  color: #0b163b;
}
.section-instagram .section__head {
  margin-bottom: 20px;
  text-align: center;
}
.section-instagram .section__body {
  position: relative;
}
@media (min-width: 769px) {
  .section-instagram .section__body {
    overflow: hidden;
  }
}
@media (min-width: 769px) {
  .section-instagram .section__body:hover .btn--circle {
    opacity: 1;
    visibility: visible;
  }
}
.section-instagram .section__container {
  overflow: auto;
}
@media (min-width: 769px) {
  .section-instagram .section__container {
    margin-bottom: -18px;
  }
}
.section-instagram .fs-timeline {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-flow: column wrap;
  max-height: 86vw;
}
@media (min-width: 769px) {
  .section-instagram .fs-timeline {
    max-height: 576px;
  }
}
.section-instagram .fs-wrapper .fs-timeline-entry {
  margin: 4px;
}
@media (min-width: 1024px) {
  .section-instagram .fs-wrapper .fs-timeline-entry {
    margin: 5px;
  }
}
.section-instagram .fs-wrapper .fs-entry-container {
  width: 43%;
  padding-top: 43%;
}
@media (min-width: 769px) {
  .section-instagram .fs-wrapper .fs-entry-container {
    width: 27%;
    padding-top: 27%;
  }
}
@media (min-width: 1024px) {
  .section-instagram .fs-wrapper .fs-entry-container {
    width: 20%;
    padding-top: 20%;
  }
}
.section-instagram .fs-wrapper .fs-entry-container:nth-child(3n) {
  width: 86%;
  padding-top: 86%;
}
@media (min-width: 769px) {
  .section-instagram .fs-wrapper .fs-entry-container:nth-child(3n) {
    width: 54%;
    padding-top: 54%;
  }
}
@media (min-width: 1024px) {
  .section-instagram .fs-wrapper .fs-entry-container:nth-child(3n) {
    width: 40%;
    padding-top: 40%;
  }
}
.section-instagram .fs-next-page {
  display: none;
}
.section-instagram .btn--circle {
  display: none;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: opacity 0.3s, visibility 0.3s;
  transition: opacity 0.3s, visibility 0.3s;
}
@media (min-width: 1024px) {
  .section-instagram .btn--circle {
    display: block;
  }
}
.section-instagram .position-left {
  left: 30px;
}
.section-instagram .position-right {
  right: 30px;
} /*! path: /dummy/user/src/modules/global/modal/modal.scss */
.modal__bg {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.modal__wrap {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 100vw;
  max-width: 930px;
  height: 100vh;
  max-height: 100vh;
}
@media (min-width: 415px) {
  .modal__wrap {
    height: auto;
    max-height: calc(100vh - 130px);
    width: calc(100% - 40px);
    max-width: 588px;
  }
}
@media (min-width: 769px) {
  .modal__wrap {
    max-width: 824px;
  }
}
@media (min-width: 1024px) {
  .modal__wrap {
    max-width: 930px;
  }
}
.modal__wrap.modal__wrap--small {
  max-width: 420px;
}
.modal__wrap.modal__wrap--small .single-form {
  margin: 0 20px;
  width: calc(100% - 40px);
}
.modal__wrap.modal__wrap--small .single-form > div {
  padding: 40px 0 20px;
}
.modal__wrap.modal__wrap--quick-view {
  max-width: 930px;
}
.modal__wrap.modal__wrap--quick-view .modal__inner > div {
  padding: 0;
  max-width: 100%;
}
.modal__wrap.modal__wrap--quick-view .single-form {
  margin: 0;
  width: 100%;
}
.modal__wrapper.active {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
}
.modal__container {
  background: #fff;
  z-index: 2;
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  overflow-y: auto;
}
@media (min-width: 415px) {
  .modal__container {
    height: auto;
    max-height: 100%;
  }
}
.modal__content {
  -webkit-box-flex: 1;
  flex: 1;
}
.modal__title {
  text-align: center;
  margin-bottom: 30px;
}
.modal__inner {
  margin: 0 auto;
}
.modal__inner > div,
.modal__inner [slot='default'] {
  padding: 70px 0;
  max-width: 720px;
  margin: 0 auto;
}
.modal__inner.modal__account {
  padding-top: 2rem;
}
.modal__inner.modal__account > div {
  height: calc(100vh - 2rem);
}
.modal__inner.modal__account > div [slot='footer'] {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}
@media (min-width: 415px) {
  .modal__inner.modal__account {
    padding-top: 25px;
  }
  .modal__inner.modal__account > div {
    height: auto;
  }
  .modal__inner.modal__account > div [slot='footer'] {
    position: relative;
  }
}
.modal__inner.modal__with-footer > div {
  padding: 0;
  max-width: initial;
}
.modal__inner.modal__with-footer [slot='default'] {
  padding-bottom: 28px;
}
@media (min-width: 415px) {
  .modal__inner.modal__with-footer [slot='default'] {
    padding-bottom: 35px;
  }
}
.modal--address .modal__inner {
  max-width: 345px;
  margin: 0 auto;
}
.modal--address .modal__inner [slot='default'] {
  padding: 40px 0;
}
.modal__inner .table--flex {
  overflow: auto;
  max-height: calc(100vh - 120px);
}
.modal__footer {
  position: relative;
  bottom: 0;
  width: 100%;
  max-width: initial;
  left: 0;
  height: 3.75rem;
  text-align: center;
  z-index: 2;
}
.modal__footer a {
  display: block;
  box-sizing: border-box;
  width: 200px;
  padding: 16px;
  margin: 0 auto;
  height: 60px;
}
.modal__footer a span {
  line-height: 26px;
  height: 26px;
  display: block;
  padding-left: 40px;
  text-align: right;
  position: relative;
  top: -26px;
}
.modal__footer a svg {
  display: block;
  margin-right: 0.5rem;
  line-height: 26px;
  height: 26px;
  position: relative;
  top: 0;
}
.close__modal {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  display: block;
  cursor: pointer;
  -webkit-transition: opacity cubic-bezier(0.165, 0.84, 0.44, 1) 0.25s;
  transition: opacity cubic-bezier(0.165, 0.84, 0.44, 1) 0.25s;
  z-index: 3;
}
.close__modal svg {
  width: 100%;
  height: auto;
  display: block;
}
.close__modal:hover {
  opacity: 0.8;
}
.close__modal:hover svg {
  fill: #da3522;
}
@media (min-width: 1024px) {
  .close__modal {
    top: 21px;
    right: 21px;
  }
} /*! path: /dummy/user/src/modules/global/notification-bar/notification-bar.scss */
.notification-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  background: #0b163b;
  padding: 21px 20px;
  text-align: center;
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}
.notification-bar.is-visible {
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
@media (min-width: 769px) {
  .notification-bar {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row wrap;
    -webkit-box-align: center;
    align-items: center;
  }
}
.notification-bar .notification-bar__text {
  margin-bottom: 20px;
  color: #fff;
  text-align: left;
}
@media (min-width: 769px) {
  .notification-bar .notification-bar__text {
    -webkit-box-flex: 1;
    flex: 1 1;
    margin-bottom: 0;
    margin-right: 10px;
  }
}
.notification-bar .notification-bar__text a {
  text-decoration: underline;
}
.notification-bar .notification-bar__text a:hover {
  text-decoration: none;
}
.notification-bar .notification-bar__btn {
  display: inline-block;
  min-width: 175px;
  background-color: #fff;
  color: #0b163b;
  padding: 10px 20px;
  border: 1px solid transparent;
  text-transform: uppercase;
  text-align: center;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.notification-bar .notification-bar__btn:hover {
  background-color: #0b163b;
  color: #fff;
  border-color: currentColor;
} /*! path: /dummy/user/src/modules/global/pagination/pagination.scss */
.pagination__page a,
.pagination__page span {
  width: 2em;
  height: 2em;
  border-radius: 100%;
  line-height: 2em;
  border: 2px solid currentColor;
  color: #cdcdcd;
  text-decoration: none;
}
.pagination__page span {
  color: #0b163b;
}
.pagination__arrow {
  color: #cdcdcd;
  text-decoration: none;
} /*! path: /dummy/user/src/modules/global/paragraph/paragraph.scss */
.section-paragraph {
  padding-top: 20px;
  padding-bottom: 40px;
  text-align: center;
}
@media (min-width: 415px) {
  .section-paragraph {
    padding-bottom: 35px;
  }
}
@media (min-width: 769px) {
  .section-paragraph {
    padding-top: 75px;
    padding-bottom: 100px;
  }
}
@media (min-width: 1024px) {
  .section-paragraph {
    padding-bottom: 65px;
  }
}
.section-paragraph .section__container {
  max-width: 325px;
}
@media (min-width: 415px) {
  .section-paragraph .section__container {
    max-width: 548px;
  }
}
@media (min-width: 769px) {
  .section-paragraph .section__container {
    max-width: 870px;
    padding: 0;
  }
}
@media (min-width: 1024px) {
  .section-paragraph .section__container {
    max-width: 920px;
  }
}
.section-paragraph .section__title {
  margin-bottom: 15px;
}
@media (min-width: 415px) {
  .section-paragraph .section__title {
    margin-bottom: 25px;
  }
}
@media (min-width: 769px) {
  .section-paragraph .section__title {
    margin-bottom: 30px;
  }
}
.section-paragraph .section__description {
  letter-spacing: 0.5px;
} /*! path: /dummy/user/src/modules/global/product-card/product-card.scss */
.product-card {
  width: 100%;
  overflow: hidden;
}
.product-card.product-card--wishlist {
  -webkit-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out;
}
@media (min-width: 768px) {
  .product-card {
    max-width: 50%;
    max-width: 290px;
  }
}
@media (min-width: 1024px) {
  .product-card {
    max-width: 415px;
  }
}
.product-card.product-card--in-slider {
  width: 100%;
}
@media (min-width: 768px) {
  .product-card.product-card--in-slider {
    max-width: 335px;
  }
}
.product-card .position-left,
.product-card .position-right {
  opacity: 0;
  display: none;
  pointer-events: none;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
@media (min-width: 1024px) {
  .product-card .position-left,
  .product-card .position-right {
    display: block;
  }
}
.product-card .position-left {
  left: -25px;
}
.product-card .position-right {
  right: -25px;
}
.product-card:hover .position-left,
.product-card:hover .position-right {
  opacity: 1;
  pointer-events: all;
}
.product-card:hover .position-left {
  left: -40px;
}
.product-card:hover .position-right {
  right: -40px;
}
.product-card:hover .product-card__quick-view {
  opacity: 1;
  pointer-events: all;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
.product-card:hover .product-card__carousel__card .hover-image {
  opacity: 1;
}
@media (min-width: 1024px) {
  .product-card.editorial-card {
    max-width: 330px;
  }
}
@media (min-width: 1441px) {
  .product-card.editorial-card {
    max-width: 340px;
  }
}
.product-card.editorial-card .product-card__details__title .badge {
  opacity: 1;
  margin-bottom: 20px;
  -webkit-transition: opacity 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out;
}
@media (min-width: 1024px) {
  .product-card.editorial-card .product-card__wrapper__limits.with-padding {
    padding-top: 40px;
    margin: 5px 10px 0;
  }
}
.product-card.editorial-card:hover .product-card__details__title .badge {
  opacity: 0.7;
}
.product-card__wrapper__limits.with-padding {
  padding: 0 10px 0;
}
@media (min-width: 768px) {
  .product-card__wrapper__limits.with-padding {
    padding-top: 25px;
  }
}
@media (min-width: 1024px) {
  .product-card__wrapper__limits.with-padding {
    margin: 5px 30px;
    padding: 21px 15px 15px;
  }
}
@media (min-width: 1201px) {
  .product-card__wrapper__limits.with-padding {
    padding-top: 38px;
  }
}
@media (min-width: 1024px) {
  .product-card__wrapper__limits.with-shadow {
    -webkit-transition: box-shadow 0.2s ease-in-out;
    transition: box-shadow 0.2s ease-in-out;
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0);
  }
}
@media (min-width: 1024px) {
  .product-card__wrapper__limits.with-shadow:hover {
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
  }
}
.product-card__details__colors {
  margin-right: 10px;
  padding-right: 10px;
}
.product-card__details__colors::before {
  content: '';
  top: 50%;
  right: 0;
  width: 1px;
  height: 10px;
  position: absolute;
  background: #0b163b;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.product-card__details__title {
  width: 90%;
  margin-left: auto;
  position: relative;
  margin-right: auto;
}
.product-card__details__title .badge {
  top: -25px;
  left: 0;
  right: 0;
  margin: 0 auto 5px;
  position: static;
}
@media (min-width: 768px) {
  .product-card__details__title .badge {
    margin-bottom: 0;
    position: absolute;
  }
}
.product-card__details__title .badge span {
  display: inline-block;
  padding: 5px 5px 2px 5px;
  line-height: 100% !important;
}
.product-card__details__title .badge span.medium {
  text-transform: none !important;
}
.product-card__details__title .badge span.small {
  text-transform: none !important;
}
.product-card__details__meta {
  min-height: 20px;
}
.product-card__carousel {
  margin-top: 10px;
}
.product-card__carousel__card {
  width: 100%;
  padding-top: 100%;
}
.product-card__carousel__card .hover-image {
  opacity: 0;
  -webkit-transition: opacity ease-in-out 0.2s;
  transition: opacity ease-in-out 0.2s;
}
.product-card__wishlist {
  top: 5px;
  right: 10px;
  position: absolute;
}
.product-card__wishlist svg {
  width: 21px;
  height: 20px;
  color: #092dc5;
}
.product-card__wishlist.product-card__wishlist--top {
  top: 0;
}
.product-card__footer {
  margin-top: 10px;
  text-align: center;
}
.card_slider__bullets {
  width: 100%;
  margin-top: 13px;
}
.card_slider__bullets__bullet {
  height: 2px;
  opacity: 0.5;
  margin-left: 0;
  -webkit-transition: margin-left 0.2s ease-in-out;
  transition: margin-left 0.2s ease-in-out;
}
.product-gallery.slider-pdp {
  width: 100%;
  position: relative;
  padding-bottom: 100%;
}
@media (min-width: 769px) {
  .product-gallery.slider-pdp {
    padding: 0;
  }
}
.product-gallery.slider-pdp .product-gallery__images {
  display: block;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  top: 0;
  left: 0;
  right: 0;
  padding: 0;
  bottom: -15px;
  position: absolute;
}
.product-gallery.slider-pdp .product-gallery__images::-webkit-scrollbar {
  -webkit-appearance: none;
}
.product-gallery.slider-pdp
  .product-gallery__images::-webkit-scrollbar:vertical {
  width: 2px;
}
.product-gallery.slider-pdp
  .product-gallery__images::-webkit-scrollbar:horizontal {
  height: 2px;
}
.product-gallery.slider-pdp .product-gallery__images::-webkit-scrollbar-thumb {
  opacity: 0.5;
  border: none;
  border-radius: 0;
  background-color: #0b163b;
}
.product-gallery.slider-pdp .product-gallery__images::-webkit-scrollbar-track {
  border-radius: 0;
  background-color: #ecedf0;
}
@media (min-width: 769px) {
  .product-gallery.slider-pdp .product-gallery__images {
    overflow: auto;
    position: relative;
  }
}
@media (min-width: 1024px) {
  .product-gallery.slider-pdp .product-gallery__images {
    margin-bottom: 0;
    padding-bottom: 0;
  }
}
.product-gallery.slider-pdp .product-gallery__images__single {
  vertical-align: top;
  display: inline-block;
}
@media (min-width: 769px) {
  .product-gallery.slider-pdp {
    width: 100%;
    white-space: normal;
  }
  .product-gallery.slider-pdp .product-gallery__images__single {
    display: block;
    margin-bottom: 4px;
  }
  .product-gallery.slider-pdp .product-gallery__images__single:last-of-type {
    margin-bottom: 0;
  }
}
.product-card__quick-view {
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  display: none;
  cursor: pointer;
  pointer-events: none;
  -webkit-transform: translateY(20px);
  transform: translateY(20px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  background: rgba(255, 255, 255, 0.7);
}
@media (min-width: 1024px) {
  .product-card__quick-view {
    display: block;
  }
}
.product-card__quick-view p {
  padding: 9px 5px;
}
.product-card-wishlist-title {
  padding: 0 36px 0 40px;
}
.product-card__loading {
  margin-top: 10px;
  padding-bottom: 100%;
  background-color: #f1f1f1;
}
.product-card__prevent_vertical_jumping {
  height: 15px;
} /*! path: /dummy/user/src/modules/global/product-slider/product-slider.scss */
.product-slider {
  display: block;
  color: #0b163b;
}
.product-slider__hero {
  margin-bottom: 40px;
}
@media (min-width: 768px) {
  .product-slider__hero {
    margin: 70px 0;
  }
}
@media (min-width: 769px) {
  .product-slider__hero {
    margin: 150px 0 135px;
  }
}
@media (min-width: 1024px) {
  .product-slider .product-card {
    max-width: 350px;
  }
}
@media (min-width: 1201px) {
  .product-slider .product-card {
    max-width: 350px;
  }
  .product-slider .product-card:last-of-type {
    display: block;
  }
}
@media (min-width: 1441px) {
  .product-slider .product-card {
    max-width: 415px;
  }
}
@media (min-width: 1024px) {
  .product-slider.no-margin-bottom .product-card:nth-last-of-type(1),
  .product-slider.no-margin-bottom .product-card:nth-last-of-type(2) {
    margin-bottom: 0;
  }
}
@media (min-width: 1201px) {
  .product-slider.no-margin-bottom .product-card:last-of-type {
    margin-bottom: 0;
  }
}
.product-slider__cards {
  -webkit-box-pack: justify;
  justify-content: space-between;
}
@media (min-width: 768px) {
  .product-slider__cards {
    width: 100%;
    max-width: 740px;
    justify-content: space-around;
  }
}
@media (min-width: 1024px) {
  .product-slider__cards {
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
}
@media (min-width: 1201px) {
  .product-slider__cards {
    max-width: 1100px;
  }
}
@media (min-width: 1441px) {
  .product-slider__cards {
    max-width: 1250px;
  }
}
.product-slider__cards__image-mobile,
.product-slider__cards__image-desktop {
  display: none;
}
.product-slider__grid-item {
  margin-bottom: 70px;
}
@media (min-width: 1024px) {
  .product-slider__grid-item:last-of-type {
    margin-bottom: 0;
  }
}
@media (min-width: 769px) {
  .product-slider__grid-item {
    margin-bottom: 80px;
  }
}
@media (min-width: 1024px) {
  .product-slider__grid-item {
    margin-bottom: 120px;
  }
}
@media (min-width: 1201px) {
  .product-slider__grid-item {
    margin-bottom: 80px;
  }
}
.product-slider__cards.with-images {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: start;
  align-items: flex-start;
}
@media (min-width: 1024px) {
  .product-slider__cards.with-images .product-slider__grid-item:nth-child(7) {
    display: none;
  }
  .product-slider__cards.with-images .product-slider__grid-item:nth-child(8) {
    display: none;
  }
  .product-slider__cards.with-images .product-slider__grid-item:nth-child(9) {
    display: none;
  }
  .product-slider__cards.with-images .product-slider__grid-item:nth-child(10) {
    display: none;
  }
}
@media (min-width: 1025px) {
  .product-slider__cards.with-images .product-slider__cards__image-mobile {
    -webkit-box-ordinal-group: 8;
    order: 7;
    width: 335px;
    height: 435px;
    display: block;
    margin-left: -40px;
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px);
  }
  .product-slider__cards.with-images .product-slider__cards__image-desktop {
    -webkit-box-ordinal-group: 4;
    order: 3;
    width: 720px;
    height: 412px;
    display: block;
    margin: 40px 0 150px;
  }
  .product-slider__cards.with-images .product-slider__grid-item:nth-child(3) {
    -webkit-box-ordinal-group: 2;
    order: 1;
    display: block;
  }
  .product-slider__cards.with-images .product-slider__grid-item:nth-child(4) {
    -webkit-box-ordinal-group: 3;
    order: 2;
    display: block;
  }
  .product-slider__cards.with-images .product-slider__grid-item:nth-child(5) {
    -webkit-box-ordinal-group: 5;
    order: 4;
    display: block;
  }
  .product-slider__cards.with-images .product-slider__grid-item:nth-child(6) {
    -webkit-box-ordinal-group: 6;
    order: 5;
    display: block;
  }
  .product-slider__cards.with-images .product-slider__grid-item:nth-child(7) {
    -webkit-box-ordinal-group: 7;
    order: 6;
    display: block;
  }
  .product-slider__cards.with-images .product-slider__grid-item:nth-child(8) {
    -webkit-box-ordinal-group: 9;
    order: 8;
    display: block;
  }
  .product-slider__cards.with-images .product-slider__grid-item:nth-child(9) {
    -webkit-box-ordinal-group: 10;
    order: 9;
    display: block;
  }
  .product-slider__cards.with-images .product-slider__grid-item:nth-child(10) {
    -webkit-box-ordinal-group: 11;
    order: 10;
    display: block;
  }
}
@media (min-width: 1201px) {
  .product-slider__cards.with-images .product-slider__cards__image-mobile {
    -webkit-box-ordinal-group: 2;
    order: 1;
    display: none;
  }
  .product-slider__cards.with-images .product-slider__cards__image-desktop {
    -webkit-box-ordinal-group: 6;
    order: 5;
    margin: 0;
  }
  .product-slider__cards.with-images .product-slider__grid-item:nth-child(3) {
    -webkit-box-ordinal-group: 2;
    order: 1;
  }
  .product-slider__cards.with-images .product-slider__grid-item:nth-child(4) {
    -webkit-box-ordinal-group: 3;
    order: 2;
  }
  .product-slider__cards.with-images .product-slider__grid-item:nth-child(5) {
    -webkit-box-ordinal-group: 4;
    order: 3;
  }
  .product-slider__cards.with-images .product-slider__grid-item:nth-child(6) {
    -webkit-box-ordinal-group: 5;
    order: 4;
  }
}
@media (min-width: 1441px) {
  .product-slider__cards.with-images .product-slider__cards__image-desktop {
    margin: 65px 55px 0 0;
  }
} /*! path: /dummy/user/src/modules/global/quick-view/quick-view.scss */
.quick-view-inline {
  display: block;
  max-width: 930px;
  margin: 50px auto;
  border: 1px solid #0b163b;
}
.quick-view {
  padding: 40px;
  display: block;
  max-width: 930px;
}
.quick-view__loading {
  height: 300px;
}
.quick-view__loading__text {
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.quick-view__grid__image {
  width: 450px;
}
.quick-view__grid__image__wrapper {
  height: 450px;
  margin-right: 50px;
}
.quick-view__grid__data {
  width: 350px;
}
.quick-view .product-size__guide {
  margin-top: 30px;
}
.quick-view .product-info__head__reviews {
  margin-bottom: 30px;
} /*! path: /dummy/user/src/modules/global/radio-button/radio-button.scss */
.radio-button {
  position: relative;
}
.radio-button input:-webkit-autofill,
.radio-button input:-webkit-autofill:hover,
.radio-button input:-webkit-autofill:focus,
.radio-button input:-webkit-autofill:active {
  -webkit-transition-delay: 9999s;
  transition-delay: 9999s;
}
.radio-button .radio-button__wrapper {
  padding: 1rem 0 1.2rem;
  height: auto;
  line-height: initial;
  position: relative;
}
.radio-button .radio-button__el_list {
  display: block;
  width: 100%;
}
.radio-button .radio-button__el {
  position: relative;
  height: 2.25rem;
  line-height: 2.25rem;
  -webkit-transition: all 200ms;
  transition: all 200ms;
  z-index: 2;
  width: 100%;
  margin: 0 0 0.3rem;
}
.radio-button .radio-button__el:last-child {
  margin-bottom: 0;
}
.radio-button .radio-button__el.is-active .checkbox__icon {
  border: 2px solid #0b163b;
}
.radio-button .radio-button__el.is-active .checkbox__icon span {
  background: #0b163b;
  width: 10px;
  height: 10px;
}
.radio-button .radio-button__title {
  display: block;
  z-index: 1;
  width: 100%;
  height: 2.25rem;
  line-height: 2.25rem;
}
.radio-button .radio-button__label > span {
  display: block;
  z-index: 1;
  width: 100%;
  height: 2.25rem;
  line-height: 2.25rem;
  cursor: pointer;
  padding: 0 0 0 1.8rem;
  -webkit-transition: padding 0.3s ease;
  transition: padding 0.3s ease;
}
.radio-button .radio-button__label:focus .checkbox__icon,
.radio-button .radio-button__label:active .checkbox__icon,
.radio-button .radio-button__label:hover .checkbox__icon {
  border-color: #092dc5 !important;
}
.radio-button .checkbox__icon {
  width: 20px;
  height: 20px;
  position: absolute;
  border: 2px solid #c5bdbc;
  margin-right: 10px;
  top: 7px;
  border-radius: 50%;
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
}
.radio-button .checkbox__icon span {
  display: block;
  width: 2px;
  height: 2px;
  background: none;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
}
.radio-button .radio-button__input {
  display: block;
  visibility: hidden;
  width: 1px;
  height: 1px;
}
.radio-button .radio-button__error {
  position: absolute;
  bottom: 0;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.8rem;
  color: #da3522;
  opacity: 0;
  -webkit-transform: translateY(-0.5em);
  transform: translateY(-0.5em);
  -webkit-transition: opacity 300ms ease, -webkit-transform 300ms ease;
  transition: opacity 300ms ease, -webkit-transform 300ms ease;
  transition: opacity 300ms ease, transform 300ms ease;
  transition: opacity 300ms ease, transform 300ms ease,
    -webkit-transform 300ms ease;
} /*! path: /dummy/user/src/modules/global/returns/returns.scss */
.returns {
  padding: 30px 0 80px;
}
@media (min-width: 769px) {
  .returns {
    padding-top: 20px;
    padding-bottom: 150px;
  }
}
@media (min-width: 1024px) {
  .returns {
    padding-top: 60px;
  }
}
.returns .container {
  max-width: 568px;
  width: calc(100% - 20px);
}
@media (min-width: 769px) {
  .returns .container {
    max-width: 100%;
    width: calc(100% - 200px);
  }
}
@media (min-width: 1024px) {
  .returns .container {
    max-width: 930px;
    width: calc(100% - 80px);
  }
}
.returns__title {
  margin-bottom: 15px;
}
.returns__title:last-child {
  margin-bottom: 0;
}
@media (min-width: 769px) {
  .returns__title {
    margin-bottom: 40px;
  }
}
.returns__entry {
  margin-bottom: 40px;
}
@media (min-width: 769px) {
  .returns__entry {
    margin-bottom: 75px;
  }
}
@media (min-width: 1024px) {
  .returns__entry {
    margin-bottom: 60px;
  }
}
.returns__stores {
  padding-bottom: 80px;
}
@media (min-width: 769px) {
  .returns__stores {
    padding-bottom: 150px;
  }
}
.returns__stores .container {
  max-width: 320px;
  width: calc(100% - 20px);
}
@media (min-width: 415px) {
  .returns__stores .container {
    max-width: 540px;
  }
}
@media (min-width: 769px) {
  .returns__stores .container {
    max-width: 630px;
    width: calc(100% - 200px);
  }
}
@media (min-width: 1024px) {
  .returns__stores .container {
    max-width: 777px;
    width: calc(100% - 80px);
  }
}
.returns__head {
  margin-bottom: 30px;
}
@media (min-width: 415px) {
  .returns__head {
    margin-bottom: 20px;
  }
}
.returns__image {
  max-width: 60px;
  margin: 0 auto 20px;
}
.returns__image figure {
  position: relative;
  height: 0;
  padding-top: 116.667%;
}
@media (min-width: 769px) {
  .returns__image {
    margin-bottom: 25px;
  }
}
.returns__stores__title {
  margin-bottom: 5px;
}
@media (min-width: 769px) {
  .returns__stores__title {
    margin-bottom: 10px;
  }
} /*! path: /dummy/user/src/modules/global/select-input/select-input.scss */
.select-input {
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  padding-right: 1px;
}
.select-input.select-input--small {
  display: inline-block;
}
.select-input__el-wrap {
  position: relative;
  border: 1px solid #0b163b;
}
.select-input--small .select-input__el-wrap {
  border: none;
  display: inline-block;
}
label + .select-input__el-wrap {
  margin-top: 7px;
}
.select-input--small label + .select-input__el-wrap {
  margin-top: 2px;
}
.select-input__el {
  display: block;
  width: 100%;
  height: 48px;
  z-index: 1;
  padding-left: 15px;
  padding-right: 25px;
}
.select-input--small .select-input__el {
  height: 20px;
  padding-left: 1px;
  padding-right: 23px;
}
.select-input__icon {
  display: block;
  position: absolute;
  right: 10px;
  top: 20px;
  width: 7px;
  height: 7px;
  -webkit-transform: rotate(-45deg) translateY(-50%);
  transform: rotate(-45deg) translateY(-50%);
  z-index: 0;
  border: solid #cdcdcd;
  border-width: 0 0 1px 1px;
}
.select-input--small .select-input__icon {
  width: 6px;
  height: 6px;
  top: 8px;
  right: 4px;
} /*! path: /dummy/user/src/modules/global/size-charts/size-charts.scss */
.section-size-charts {
  padding: 30px 0 80px;
}
@media (min-width: 769px) {
  .section-size-charts {
    padding-top: 20px;
  }
}
@media (min-width: 1024px) {
  .section-size-charts {
    padding-bottom: 150px;
  }
}
.section-size-charts .section__head {
  margin-bottom: 40px;
}
@media (min-width: 769px) {
  .section-size-charts .section__head {
    margin-bottom: 90px;
  }
}
.section-size-charts .section__entry {
  text-align: center;
}
.section-size-charts .section__entry h4 {
  margin-bottom: 10px;
}
.section-size-charts .section__entry table {
  position: relative;
  width: auto !important;
  margin: 0 auto 80px;
}
@media (min-width: 1024px) {
  .section-size-charts .section__entry table {
    margin-bottom: 150px;
  }
}
.section-size-charts .section__entry tr:nth-child(odd) td {
  background: #f9ece1;
}
.section-size-charts .section__entry tr:first-child td {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding-bottom: 8px;
}
.section-size-charts .section__entry tr:first-child td.is-active {
  background: #0b163b;
  color: #fff;
}
.section-size-charts .section__entry tr:last-child td.is-active {
  border-bottom: 2px solid #0b163b;
}
.section-size-charts .section__entry td {
  height: auto !important;
  width: 56px !important;
  vertical-align: middle;
  padding: 8px 0 12px;
  text-align: center !important;
  border-right: 1px solid #fff;
}
@media (min-width: 769px) {
  .section-size-charts .section__entry td {
    width: 82px !important;
  }
}
.section-size-charts .section__entry td.is-active {
  border-left: 2px solid #0b163b;
  border-right: 2px solid #0b163b;
}
.section-size-charts .section__entry td div {
  margin-bottom: 2px;
}
.section-size-charts .section__entry td div:last-child {
  margin-bottom: 0;
}
.section-size-charts .section__contact .grid {
  display: block;
}
.section-size-charts .section__contact .grid__col {
  margin-bottom: 80px;
}
@media (min-width: 1024px) {
  .section-size-charts .section__contact .grid__col {
    margin-bottom: 80px;
  }
}
.section-size-charts .section__contact .grid__col:last-child {
  margin-bottom: 0;
}
.section-size-charts .section__actions {
  margin-bottom: 80px;
}
@media (min-width: 1024px) {
  .section-size-charts .section__actions {
    margin-bottom: 150px;
  }
}
.section-size-charts .section__download-link {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  text-decoration: underline;
}
.section-size-charts .section__download-link svg {
  margin-right: 10px;
} /*! path: /dummy/user/src/modules/global/socials/socials.scss */
.socials {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  list-style: none outside none;
  margin: 0;
  font-size: 0;
}
.socials li {
  -webkit-box-flex: 0;
  flex: 0 1 auto;
  margin-right: 50px;
}
.socials li:last-child {
  margin-right: 0;
}
.socials a {
  display: inline-block;
  height: 24px;
  width: auto;
  font-size: 0;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.65);
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
}
.socials svg {
  height: 100%;
} /*! path: /dummy/user/src/modules/global/text-area/text-area.scss */
.text-input .text-input__el.text-input__text-area {
  line-height: 24px;
  height: 180px;
  background: none;
  resize: none;
  border: 2px solid #c5bdbc;
  padding: 0;
  padding-left: 5px;
} /*! path: /dummy/user/src/modules/global/text-input/text-input.scss */
.text-input {
  position: relative;
}
.text-input input:-webkit-autofill,
.text-input input:-webkit-autofill:hover,
.text-input input:-webkit-autofill:focus,
.text-input input:-webkit-autofill:active {
  -webkit-transition-delay: 9999s;
  transition-delay: 9999s;
}
.text-input input::-webkit-contacts-auto-fill-button,
.text-input input::-webkit-credentials-auto-fill-button {
  visibility: hidden;
  pointer-events: none;
  position: absolute;
  right: 0;
}
.text-input.text-input--default {
  position: relative;
}
.text-input__wrapper {
  padding: 1rem 0 1.2rem;
  height: auto;
  line-height: initial;
  position: relative;
}
.text-input__label,
.text-input__info,
.text-input__show {
  position: absolute;
  top: 19px;
  bottom: initial;
  margin: auto;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  height: 2.25rem;
  line-height: 2.25rem;
  -webkit-transition: all 200ms;
  transition: all 200ms;
  z-index: 2;
  font-size: 16px;
  letter-spacing: 0.5px;
}
.text-input__label {
  pointer-events: none;
}
.is-active .text-input__label {
  -webkit-transform: translateY(-1rem);
  transform: translateY(-1rem);
  font-size: 0.8rem;
  height: 1rem;
  line-height: 1rem;
  color: #5b667f;
}
.text-input--text-area .text-input__label {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  left: 12px;
}
.text-input--text-area.is-active .text-input__label {
  -webkit-transform: translateY(-1.3rem) translateX(-12px);
  transform: translateY(-1.3rem) translateX(-12px);
}
.text-input__info {
  height: auto;
  top: initial;
  bottom: 1.6em;
  right: 0.1rem;
  text-align: right;
}
.text-input__info .info-text {
  pointer-events: none;
  position: relative;
  bottom: 0;
  opacity: 0;
  -webkit-transform: translateY(-1.2rem);
  transform: translateY(-1.2rem);
  max-width: 240px;
  line-height: 1.57;
  background: #f9ece1;
  padding: 0.3rem;
  color: #0b163b;
  font-size: 14px;
  letter-spacing: 0.5px;
  text-align: center;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.text-input__info .info-icon {
  height: 1.5rem;
  width: 1.5rem;
  position: absolute;
  right: 0;
  bottom: 0;
}
.text-input__info:hover .info-text {
  opacity: 1;
  -webkit-transform: translateY(-1.6rem);
  transform: translateY(-1.6rem);
}
.text-input__show {
  right: 0;
  cursor: pointer;
  font-size: 14px;
  color: #092dc5;
  text-decoration: underline;
  pointer-events: none;
  -webkit-transform: translateY(-0.5em);
  transform: translateY(-0.5em);
  opacity: 0;
  -webkit-transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.text-input__show.visible {
  opacity: 1;
  pointer-events: all;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
.text-input__el {
  z-index: 1;
  width: 100%;
  position: relative;
  height: 2.25rem;
  line-height: 2.25rem;
  border: 0;
  border-bottom: 2px solid #c5bdbc;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.text-input__el:focus {
  outline: none !important;
}
.text-input--champagne .text-input__el {
  border-bottom: 2px solid #f9ece1;
}
.is-focus .text-input__el {
  border-bottom: 2px solid #092dc5;
}
.is-error .text-input__el {
  border-bottom: 2px solid #da3522;
}
.text-input--champagne .text-input__text-area {
  border: 2px solid #f9ece1;
}
.is-focus .text-input__text-area {
  border: 2px solid #092dc5;
}
.is-error .text-input__text-area {
  border: 2px solid #da3522;
}
.text-input__error {
  position: absolute;
  bottom: 0;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.8rem;
  color: #da3522;
  opacity: 0;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.is-error .text-input__error {
  opacity: 1;
  bottom: -0.3rem;
} /*! path: /dummy/user/src/modules/global/text-media/text-media.scss */
.section-text-media {
  color: #0b163b;
  text-align: center;
}
.section-text-media .section__head {
  max-width: 615px;
  margin: 0 auto 20px;
}
@media (min-width: 769px) {
  .section-text-media .section__head {
    max-width: 100%;
  }
}
@media (min-width: 1024px) {
  .section-text-media .section__head {
    margin-bottom: 40px;
  }
}
.section-text-media .section__title {
  margin-bottom: 10px;
  letter-spacing: 0.5px;
}
@media (min-width: 415px) {
  .section-text-media .section__title {
    letter-spacing: 1px;
  }
}
@media (min-width: 1024px) {
  .section-text-media .section__title {
    margin-bottom: 15px;
  }
}
.section-text-media .section__description {
  margin-bottom: 20px;
  letter-spacing: 0.5px;
}
.section-text-media .section__body {
  max-width: 768px;
  margin: 0 auto;
  position: relative;
}
.section-text-media .section__media {
  position: relative;
  height: 0;
  padding-top: 65%;
  overflow: hidden;
}
@media (min-width: 376px) {
  .section-text-media .section__media {
    padding-top: 58.45%;
  }
}
@media (min-width: 415px) {
  .section-text-media .section__media {
    padding-top: 43.95%;
  }
}
.section-text-media .section__content {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: #0b163b;
  min-width: 285px;
  padding: 15px 30px 25px;
  color: #fff;
  text-align: center;
}
@media (min-width: 415px) {
  .section-text-media .section__content {
    padding: 40px 65px 45px;
  }
}
.section-text-media--sustainability {
  padding-bottom: 55px;
}
@media (min-width: 415px) {
  .section-text-media--sustainability {
    padding-bottom: 70px;
  }
}
@media (min-width: 769px) {
  .section-text-media--sustainability {
    padding-bottom: 80px;
  }
}
@media (min-width: 1024px) {
  .section-text-media--sustainability {
    padding-bottom: 75px;
  }
}
.section-text-media--sustainability .section__container {
  width: 100%;
}
@media (min-width: 769px) {
  .section-text-media--sustainability .section__container {
    max-width: 960px;
    padding: 0 45px;
  }
}
.section-text-media--sustainability .section__body {
  max-width: 100%;
  margin-bottom: 35px;
}
@media (min-width: 415px) {
  .section-text-media--sustainability .section__body {
    margin-bottom: 50px;
  }
}
@media (min-width: 769px) {
  .section-text-media--sustainability .section__body {
    max-width: 770px;
    margin-bottom: 55px;
  }
}
.section-text-media--sustainability .section__body:last-child {
  margin-bottom: 0;
}
.section-text-media--sustainability .section__foot {
  max-width: 312px;
  margin: 0 auto;
}
@media (min-width: 415px) {
  .section-text-media--sustainability .section__foot {
    max-width: 615px;
    padding: 0 20px;
  }
}
@media (min-width: 769px) {
  .section-text-media--sustainability .section__foot {
    max-width: 100%;
    padding: 0;
  }
}
.section-text-media--sustainability .section__description {
  margin-bottom: 0;
} /*! path: /dummy/user/src/modules/global/vertical-carousel/vertical-carousel.scss */
.section-vertical-carousel .section__media {
  position: relative;
  width: 100%;
  height: 135.2vw;
}
@media (min-width: 769px) {
  .section-vertical-carousel .section__media {
    height: 119.66vw;
  }
}
@media (min-width: 1024px) {
  .section-vertical-carousel .section__media {
    height: 65.42vw;
  }
}
.section-vertical-carousel .section__box {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 200px;
  background-color: rgba(255, 255, 255, 0.8);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  text-align: center;
  -webkit-transition: opacity 0.5s, visibility 0.5s;
  transition: opacity 0.5s, visibility 0.5s;
}
.section-vertical-carousel .section__box.is-hidden {
  opacity: 0;
  visibility: hidden;
}
@media (min-width: 415px) {
  .section-vertical-carousel .section__box {
    min-height: 230px;
  }
}
@media (min-width: 1024px) {
  .section-vertical-carousel .section__box {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
}
.section-vertical-carousel .section__content {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding: 30px 25px;
  pointer-events: none;
}
.section-vertical-carousel .section__content.is-active {
  pointer-events: auto;
}
.section-vertical-carousel .section__content .btn {
  margin-top: auto;
}
.section-vertical-carousel .section__content .btn:not(.btn--link) {
  min-width: 195px;
}
.section-vertical-carousel .section__title {
  -webkit-box-flex: 1;
  flex: 1 1;
  display: -webkit-box;
  display: flex;
  max-width: 310px;
  -webkit-box-align: center;
  align-items: center;
}
@media (min-width: 415px) {
  .section-vertical-carousel .section__title {
    max-width: 100%;
  }
}
.section-vertical-carousel .section__subtitle {
  max-width: 310px;
  margin: 0 auto 15px;
}
@media (min-width: 415px) {
  .section-vertical-carousel .section__subtitle {
    max-width: 100%;
  }
} /*! path: /dummy/user/src/modules/global/video-player/video-player.scss */
.video-container {
  height: 0;
  margin: 20px auto;
  padding-bottom: 56.25%;
}
.video-container__controls {
  left: 10px;
  bottom: 10px;
  pointer-events: none;
}
.video-container__controls li {
  width: 38px;
  height: 38px;
  padding: 0 3px;
  position: relative;
  margin-right: 15px;
  border-radius: 50%;
  -webkit-transform: translateY(50px);
  transform: translateY(50px);
  -webkit-transition: -webkit-transform 300ms ease-in-out;
  transition: -webkit-transform 300ms ease-in-out;
  transition: transform 300ms ease-in-out;
  transition: transform 300ms ease-in-out, -webkit-transform 300ms ease-in-out;
}
.video-container__controls li:nth-child(1) {
  -webkit-transition-delay: 100ms;
  transition-delay: 100ms;
}
.video-container__controls li:nth-child(2) {
  -webkit-transition-delay: 200ms;
  transition-delay: 200ms;
}
.video-container__controls li:nth-child(3) {
  -webkit-transition-delay: 300ms;
  transition-delay: 300ms;
}
.video-container__controls.active {
  pointer-events: all;
}
.video-container__controls.active li {
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
.video {
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  background-color: #f1f1f1;
  -webkit-transition: background-color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out;
}
.video.no-fallback .video__el {
  display: block;
}
.video.is-loaded .video__el {
  opacity: 1;
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
  visibility: visible;
}
.video.is-loaded .video__loader {
  opacity: 0;
  visibility: hidden;
}
.video.is-loaded .img {
  display: none;
}
.video.pos-center .video__el {
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.video.pos-top .video__el {
  top: 0;
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}
.video.pos-bottom .video__el {
  bottom: 0;
  top: auto;
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}
.video__el {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  display: block;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  -webkit-transition-property: opacity, visibility;
  transition-property: opacity, visibility;
  -webkit-transition-timing-function: ease-in-out;
  transition-timing-function: ease-in-out;
  visibility: hidden;
}
.video__fallback {
  display: block;
}
@media (min-width: 769px) {
  .video__fallback {
    display: none;
  }
}
.aux_height {
  width: 100%;
  height: 1100px;
  display: block;
  background: antiquewhite;
} /*! path: /dummy/user/src/modules/global/wear-care/wear-care.scss */
.wear-care {
  margin-top: 30px;
}
@media (min-width: 1024px) {
  .wear-care {
    margin-top: 60px;
  }
}
.wear-care__head {
  margin-bottom: 15px;
}
@media (min-width: 415px) {
  .wear-care__head {
    margin-bottom: 25px;
  }
}
@media (min-width: 769px) {
  .wear-care__head {
    margin-bottom: 20px;
  }
}
.wear-care__body {
  max-width: 320px;
  margin: 0 auto;
}
@media (min-width: 415px) {
  .wear-care__body {
    max-width: 568px;
  }
}
@media (min-width: 769px) {
  .wear-care__body {
    max-width: 640px;
  }
}
@media (min-width: 1024px) {
  .wear-care__body {
    max-width: 930px;
  }
}
.wear-care__body p {
  margin-bottom: 25px;
}
.wear-care__body p:last-child {
  margin-bottom: 0;
} /*! path: /dummy/user/src/modules/global/wysiwyg/wysiwyg.scss */
.wysiwyg__container p + p {
  margin-top: 1em;
}
.wysiwyg.container.basic-page {
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
}
.wysiwyg.container.basic-page .wysiwyg__container {
  text-align: left;
  width: 100%;
}
.wysiwyg.container.basic-page .wysiwyg__container h1 {
  margin: 80px auto 1rem;
}
.wysiwyg.container.basic-page .wysiwyg__container h2 {
  margin: 70px auto 1rem;
}
@media (min-width: 769px) {
  .wysiwyg.container.basic-page .wysiwyg__container h2 {
    margin: 75px auto 10px;
  }
}
.wysiwyg.container.basic-page .wysiwyg__container h3 {
  margin: 60px auto 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
}
.wysiwyg.container.basic-page .wysiwyg__container h3.mt-m {
  margin-top: 40px;
}
.wysiwyg.container.basic-page .wysiwyg__container h3.subtitle {
  margin-top: 20px;
  margin-bottom: 40px;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
@media (min-width: 769px) {
  .wysiwyg.container.basic-page .wysiwyg__container h3.subtitle {
    letter-spacing: 3px;
    margin-bottom: 20px;
  }
}
.wysiwyg.container.basic-page .wysiwyg__container h4 {
  margin: 50px auto 1rem;
}
.wysiwyg.container.basic-page .wysiwyg__container h5 {
  margin: 40px auto 1rem;
}
.wysiwyg.container.basic-page .wysiwyg__container h6 {
  margin: 30px auto 1rem;
}
.wysiwyg.container.basic-page .wysiwyg__container ul,
.wysiwyg.container.basic-page .wysiwyg__container ol {
  padding: 0 0 0 22px;
  margin: 0 auto;
}
.wysiwyg.container.basic-page .wysiwyg__container ul.pl-l,
.wysiwyg.container.basic-page .wysiwyg__container ol.pl-l {
  padding-left: 44px;
}
.wysiwyg.container.basic-page .wysiwyg__container ul li {
  display: block;
  position: relative;
  padding: 0;
  margin: 0 0 1rem;
}
.wysiwyg.container.basic-page .wysiwyg__container ul li::before {
  position: absolute;
  content: '·';
  left: -20px;
  top: -5px;
  display: block;
}
.wysiwyg.container.basic-page .wysiwyg__container ol {
  list-style: decimal;
}
.wysiwyg.container.basic-page .wysiwyg__container ol li {
  position: relative;
  padding: 0;
  margin: 0 0 1rem;
}
.wysiwyg.container.basic-page .wysiwyg__container table {
  display: block;
}
.wysiwyg.container.basic-page .wysiwyg__container table tr {
  background: white;
  color: #0b163b;
}
.wysiwyg.container.basic-page .wysiwyg__container table tr td {
  padding: 0 20px;
  line-height: 36px;
  min-width: 160px;
  display: inline-block;
}
.wysiwyg.container.basic-page .wysiwyg__container table tr:nth-child(even) {
  background: #fff;
}
.wysiwyg.container.basic-page .wysiwyg__container table tr:nth-child(odd) {
  background: #fbf4ed;
}
.wysiwyg.container.basic-page .wysiwyg__container table tr:nth-child(1) {
  background: #0b163b;
  color: #fff;
}
@media (min-width: 768px) {
  .wysiwyg.container.basic-page .wysiwyg__container table tr td {
    min-width: 285px;
  }
}
.wysiwyg.container.basic-page .wysiwyg__container p {
  margin: 0 auto 40px;
}
.wysiwyg.container.basic-page .wysiwyg__container p.mb-l {
  margin-bottom: 75px;
}
.wysiwyg.container.basic-page .wysiwyg__container p.mb-xl {
  margin-bottom: 150px;
}
.wysiwyg.container.basic-page .wysiwyg__container p.header-note {
  text-align: left;
  margin-bottom: 20px;
}
@media (min-width: 769px) {
  .wysiwyg.container.basic-page .wysiwyg__container p.header-note {
    text-align: center;
  }
}
.wysiwyg.container.basic-page .wysiwyg__container a.cta-link {
  text-decoration: none !important;
  position: relative;
  display: inline-block;
  margin: 20px auto 20px;
  width: auto;
  text-align: center;
  text-transform: uppercase;
}
.wysiwyg.container.basic-page .wysiwyg__container a.cta-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100% - 3px);
  height: 2px;
  background-color: currentColor;
}
.wysiwyg.container.basic-page .wysiwyg__container > * {
  width: calc(100% - 44px);
  overflow-x: hidden;
  max-width: 568px;
  margin-left: auto;
  margin-right: auto;
}
@media (min-width: 769px) {
  .wysiwyg.container.basic-page .wysiwyg__container > * {
    max-width: 824px;
  }
}
@media (min-width: 1024px) {
  .wysiwyg.container.basic-page .wysiwyg__container > * {
    max-width: 930px;
  }
}
.wysiwyg.container.basic-page .wysiwyg__container .video-wrapper {
  margin: 40px auto 40px;
  width: 100%;
  max-width: 772px;
  position: relative;
}
.wysiwyg.container.basic-page .wysiwyg__container .video-wrapper .video {
  width: 100%;
  padding: 56.25% 0 0;
  height: 0;
  position: relative;
}
.wysiwyg.container.basic-page .wysiwyg__container .video-wrapper iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
@media (min-width: 1024px) {
  .wysiwyg.container.basic-page .wysiwyg__container .video-wrapper {
    margin-top: 20px;
  }
}
.wysiwyg.container.basic-page .wysiwyg__container .section-title {
  text-align: center;
  margin: 80px auto 1rem;
}
.wysiwyg.container.basic-page .wysiwyg__container .section-subtitle {
  text-align: center;
  width: 760px;
}
.wysiwyg.container.basic-page .wysiwyg__container.mt {
  margin-top: 70px;
}
@media (min-width: 769px) {
  .wysiwyg.container.basic-page .wysiwyg__container.mt {
    margin-top: 75px;
  }
} /*! path: /dummy/user/src/modules/account/account-gift-card/gift-card-balance/gift-card-balance.scss */
.gift-card-balance {
  margin-bottom: 80px;
  text-align: center;
}
@media (min-width: 769px) {
  .gift-card-balance {
    margin-bottom: 80px;
  }
}
@media (min-width: 1024px) {
  .gift-card-balance {
    margin-bottom: 150px;
  }
}
.gift-card-balance:last-child {
  margin-bottom: 0;
}
.gift-card-balance .gift-card-balance__link {
  margin-bottom: 30px;
}
.gift-card-balance .gift-card-balance__inner {
  padding: 15px 15px 50px;
  text-align: left;
} /*! path: /dummy/user/src/modules/account/account-order-details/order-details-item/order-details-item.scss */
.order-details-item {
  position: relative;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
  margin-bottom: 40px;
}
.order-details-item .order-details-item__status {
  -webkit-box-flex: 0;
  flex: 0 0 100%;
  max-width: 100%;
  margin-bottom: 10px;
  text-align: center;
}
.order-details-item .order-details-item__col {
  -webkit-box-flex: 1;
  flex: 1 1;
}
.order-details-item .order-details-item__col--sm {
  -webkit-box-flex: 0;
  flex: 0 0 150px;
  max-width: 150px;
  text-align: left;
}
.order-details-item .order-details-item__image {
  display: block;
  position: relative;
  height: 0;
  padding-top: 100%;
  margin-right: 15px;
}
.order-details-item .order-details-item__content {
  height: 100%;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: start;
  align-items: flex-start;
  text-align: left;
}
.order-details-item .order-details-item__price {
  margin-top: 15px;
}
.order-details-item .order-details-item__link {
  margin-top: auto;
}
.order-details-item .order-details-item__content p strong {
  display: block;
}
@media (min-width: 769px) {
  .order-details-item .order-details-item__content p strong {
    display: inline;
  }
} /*! path: /dummy/user/src/modules/account/order-history/order-history/order-history.scss */
.order-history {
  text-align: center;
  margin-bottom: 80px;
}
@media (min-width: 769px) {
  .order-history {
    margin-bottom: 80px;
  }
}
@media (min-width: 1024px) {
  .order-history {
    margin-bottom: 150px;
  }
}
.order-history .order-history__link {
  margin-bottom: 30px;
}
.order-history .order-history__empty {
  padding: 20px 20px 25px;
  text-align: left;
}
@media (min-width: 415px) {
  .order-history .order-history__empty {
    padding-bottom: 40px;
  }
}
@media (min-width: 769px) {
  .order-history .order-history__empty {
    padding-bottom: 30px;
  }
} /*! path: /dummy/user/src/modules/account/order-history/order-history-page/order-history-page.scss */
.order-pagination {
  max-width: 568px;
  margin: 0 auto;
}
.order-pagination ul li {
  margin-right: 30px;
}
.order-pagination ul li:last-child {
  margin-right: 0;
}
.order-pagination li.is-active a {
  color: #092dc5;
  border-color: transparent;
}
.order-pagination a {
  display: inline-block;
  padding: 0 3px;
  color: #0b163b;
  border-bottom: 2px solid currentColor;
}
.order-tabs {
  margin-bottom: 80px;
}
@media (min-width: 769px) {
  .order-tabs {
    margin-bottom: 80px;
  }
}
@media (min-width: 1024px) {
  .order-tabs {
    margin-bottom: 150px;
  }
}
.order-tabs .js-tab {
  display: none;
}
.order-tabs .js-tab.is-active {
  display: block;
} /*! path: /dummy/user/src/modules/account/order-history/order-item/order-item.scss */
.order-item {
  position: relative;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
  margin-bottom: 15px;
  padding: 15px 15px 20px;
}
.order-item .order-item__col {
  -webkit-box-flex: 1;
  flex: 1 1;
}
.order-item .order-item__col--sm {
  -webkit-box-flex: 0;
  flex: 0 0 150px;
  max-width: 150px;
  text-align: left;
}
.order-item .order-item__image {
  display: block;
  position: relative;
  height: 0;
  padding-top: 100%;
  margin-right: 15px;
}
.order-item .order-item__content {
  height: 100%;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: start;
  align-items: flex-start;
  text-align: left;
}
.order-item .order-item__link {
  margin-top: 15px;
}
@media (min-width: 769px) {
  .order-item .order-item__link {
    margin-top: auto;
  }
}
.order-item .order-item__content p strong {
  display: block;
}
@media (min-width: 769px) {
  .order-item .order-item__content p strong {
    display: inline;
  }
}
.order-item .order-item__arrow {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 15px;
}
@media (min-width: 376px) {
  .order-item .order-item__arrow {
    width: 25px;
  }
}
.order-item .order-item__arrow::after {
  content: '';
  width: 8px;
  height: 8px;
  display: inline-block;
  vertical-align: middle;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: #0b163b;
  margin: 0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-transition: -webkit-transform 0.4s;
  transition: -webkit-transform 0.4s;
  transition: transform 0.4s;
  transition: transform 0.4s, -webkit-transform 0.4s;
  transition: transform 0.4s, -webkit-transform 0.4s;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%) rotate(225deg);
  transform: translate(-50%, -50%) rotate(225deg);
  margin-left: -2px;
} /*! path: /dummy/user/src/modules/global/contact/contact-form/contact-form.scss */
.contact-form .form__head {
  margin-bottom: 30px;
}
@media (min-width: 769px) {
  .contact-form .form__head {
    margin-bottom: 25px;
  }
}
.contact-form .form__body {
  max-width: 335px;
  margin: 0 auto;
}
.contact-form .form__row {
  margin-bottom: 0;
}
.contact-form .form__row.form__row--lg {
  margin-bottom: 20px;
}
.contact-form .form__actions {
  text-align: center;
} /*! path: /dummy/user/src/modules/global/footer/footer/footer.scss */
.footer {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
  min-height: 500px;
}
.has-offset-main .footer {
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}
.template--styleguide .footer {
  display: none;
}
.footer__content {
  -webkit-box-flex: 1;
  flex: 1 1;
  padding: 20px 0 30px;
}
@media (min-width: 769px) {
  .footer__content {
    padding-top: 10px;
  }
}
@media (min-width: 1024px) {
  .footer__inner {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row wrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
}
.footer__accordions {
  max-width: 325px;
  margin: 0 auto;
}
@media (min-width: 1024px) {
  .footer__accordions {
    -webkit-box-flex: 1;
    flex: 1 1;
    margin: 0 40px 0 0;
  }
}
.footer__country-select {
  max-width: 325px;
  margin: 50px auto 0;
}
@media (min-width: 1024px) {
  .footer__country-select {
    -webkit-box-flex: 1;
    flex: 1 1;
    margin-top: 15px;
  }
}
.footer__country-select label {
  display: block;
  margin-bottom: 5px;
}
.footer__country-select select {
  width: 100%;
  background-color: #fff;
  padding: 15px 12px 12px;
}
.footer__country-select .select {
  position: relative;
}
.footer__country-select .select::after {
  content: '';
  width: 10px;
  height: 10px;
  display: inline-block;
  vertical-align: middle;
  border-width: 0 0 2px 2px;
  border-style: solid;
  border-color: currentColor;
  margin: 0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-transition: -webkit-transform 0.4s;
  transition: -webkit-transform 0.4s;
  transition: transform 0.4s;
  transition: transform 0.4s, -webkit-transform 0.4s;
  transition: transform 0.4s, -webkit-transform 0.4s;
  position: absolute;
  top: 50%;
  right: 12px;
  -webkit-transform: translateY(-50%) rotate(-45deg);
  transform: translateY(-50%) rotate(-45deg);
  margin-top: -2px;
}
.footer__aside {
  -webkit-box-flex: 0;
  flex: 0 0 100%;
  max-width: 100%;
  -webkit-box-ordinal-group: 0;
  order: -1;
  padding: 32px 25px 50px;
  background-color: #0b163b;
}
@media (min-width: 768px) {
  .footer__aside {
    -webkit-box-flex: 0;
    flex: 0 0 385px;
    max-width: 385px;
    -webkit-box-ordinal-group: 1;
    order: 0;
    margin-left: auto;
    padding-bottom: 30px;
  }
}
.footer__socials a:hover {
  color: #fff;
}
.footer__accordion a {
  display: inline-block;
  margin-bottom: 12px;
  text-decoration: underline;
}
.footer__accordion a:hover {
  text-decoration: none;
}
.footer__legal {
  margin-top: 50px;
  text-align: center;
}
.footer__legal a {
  text-decoration: underline;
}
.footer__legal a:hover {
  text-decoration: none;
}
.footer__logo {
  display: block;
  max-width: 32px;
  margin: 0 auto 25px;
  color: #0b163b;
  text-decoration: none;
}
.footer__nav ul {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
  -webkit-box-pack: center;
  justify-content: center;
}
.footer__nav li {
  position: relative;
  margin-right: 15px;
}
.footer__nav li::after {
  content: '•';
  position: absolute;
  top: 50%;
  left: 100%;
  margin-top: -2px;
  -webkit-transform: translate(50%, -50%);
  transform: translate(50%, -50%);
}
.footer__nav li:last-child {
  margin-right: 0;
}
.footer__nav li:last-child::after {
  content: none;
} /*! path: /dummy/user/src/modules/global/header/header/header.scss */ /*! Start Critical */
.header[data-critical] {
  width: 100%;
  min-height: 80px;
} /*! End Critical */
.header {
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  position: fixed;
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}
.header::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: -1;
}
.header.is--visible {
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
.header.is--hidden {
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
}
.header.is--hidden .header__account-dropdown {
  opacity: 0 !important;
  visibility: hidden !important;
}
.has-offset-main .header {
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
}
@media (min-width: 415px) {
  .has-offset-main .header {
    -webkit-transform: none;
    transform: none;
  }
}
.template--styleguide .header {
  display: none;
}
.header .container {
  padding: 20px 0;
  min-height: 75px;
}
@media (min-width: 1024px) {
  .header .container {
    min-height: 90px;
    padding: 30px 0;
  }
}
.header .header__nav,
.header .header__icons {
  -webkit-box-flex: 1;
  flex: 1;
}
.header .header__hamburger {
  display: block;
  max-width: 25px;
  color: #092dc5;
}
@media (min-width: 1024px) {
  .header .header__hamburger {
    display: none;
  }
}
.header .header__logo svg {
  max-width: 32px;
}
@media (min-width: 769px) {
  .header .header__logo svg {
    max-width: 238px;
  }
}
.header .header__icons a:hover svg {
  opacity: 0.65;
}
.header .header__icons > ul > li {
  color: #092dc5;
  margin-right: 10px;
}
@media (min-width: 376px) {
  .header .header__icons > ul > li {
    margin-right: 20px;
  }
}
@media (min-width: 1024px) {
  .header .header__icons > ul > li {
    margin-right: 40px;
  }
}
.header .header__icons > ul > li:last-child {
  margin-right: 0;
}
.header .header__icons > ul > li > a {
  display: block;
  width: 24px;
}
.header .header__search {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 0;
  padding: 0;
  position: fixed;
  overflow: hidden;
  background: #fff;
}
@media (min-width: 1024px) {
  .header .header__search {
    z-index: 0;
    position: static;
    background: none;
    margin-left: 10px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
}
.header .header__search.is-visible {
  max-width: 100%;
  padding: 50px 20px;
}
@media (min-width: 1024px) {
  .header .header__search.is-visible {
    padding: 0;
    max-width: 190px;
  }
}
.header .header__search-field {
  width: 100%;
  color: #0b163b;
  padding: 2px 5px;
  border: none;
  border-bottom: 1px solid #cdcdcd;
  text-align: center;
}
@media (min-width: 1024px) {
  .header .header__search-field {
    width: 190px;
    border-color: #c5bdbc;
    text-align: left;
  }
}
.header .header__search-field::-webkit-input-placeholder {
  color: #0b163b;
}
.header .header__search-field::-moz-placeholder {
  color: #0b163b;
}
.header .header__search-field:-ms-input-placeholder {
  color: #0b163b;
}
.header .header__search-field::-ms-input-placeholder {
  color: #0b163b;
}
.header .header__search-field::placeholder {
  color: #0b163b;
}
.header .header__search-close {
  position: absolute;
  top: 20px;
  right: 20px;
  color: #0b163b;
  width: 24px;
}
@media (min-width: 1024px) {
  .header .header__search-close {
    display: none !important;
  }
}
.header .header__account-dropdown {
  position: absolute;
  top: 50px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 185px;
  background-color: #fff;
  border: 2px solid #fbf4ed;
  padding: 10px 20px;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: opacity 0.2s, visibility 0.2s;
  transition: opacity 0.2s, visibility 0.2s;
}
@media (min-width: 1024px) {
  .header .header__account-dropdown {
    width: 205px;
  }
}
.header .header__account-dropdown.is-visible {
  opacity: 1;
  visibility: visible;
}
.header .header__account-dropdown::before {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 17px solid transparent;
  border-right: 17px solid transparent;
  border-bottom: 14px solid #fbf4ed;
}
.header .header__account-dropdown.is-customer {
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: left;
}
@media (min-width: 1024px) {
  .header .header__account-dropdown.is-customer {
    padding-left: 35px;
    padding-right: 35px;
  }
}
.header .header__account-title {
  font-size: 14px;
  line-height: 14px;
  margin-bottom: 15px;
  letter-spacing: 0.5px;
}
.header .header__account-logout {
  display: block;
  margin-top: 30px;
  text-decoration: underline;
}
.header .header__account-logout:hover {
  text-decoration: none;
}
.header .header__account-dropdown a {
  color: #0b163b;
}
.header .header__account-dropdown a:hover {
  text-decoration: underline;
}
.btn--skiplink {
  position: absolute;
  top: 0;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -100px);
  transform: translate(-50%, -100px);
  text-transform: uppercase;
  padding: 10px 30px;
  color: #f2f2f2;
  background-color: #092dc5;
  border: 3px solid #f2f2f2;
  z-index: 1000;
}
.btn--skiplink:active,
.btn--skiplink:focus {
  opacity: 1;
  pointer-events: auto;
  -webkit-transform: translate(-50%, 10px);
  transform: translate(-50%, 10px);
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
} /*! path: /dummy/user/src/modules/global/header/header-cart-icon/header-cart-icon.scss */
.header-cart-icon {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
}
.header-cart-icon:hover {
  opacity: 0.65;
}
.header-cart-icon__icon {
  display: block;
  width: 24px;
  margin-right: 5px;
} /*! path: /dummy/user/src/modules/global/icons/icon/icon.scss */
.icon {
  display: block;
}
.icon svg {
  display: block;
  height: 100%;
  width: 100%;
} /*! path: /dummy/user/src/modules/global/nav/nav/_nav.scss */
.nav {
  display: none;
}
@media (min-width: 1024px) {
  .nav {
    display: block;
  }
}
.nav > ul {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
}
.nav > ul > li {
  margin-right: 40px;
}
.nav > ul > li:last-child {
  margin-right: 0;
}
.nav > ul > li:hover > a::after {
  opacity: 1;
}
.nav > ul > li:hover > .nav__dropdown,
.nav > ul > li.focus-within > .nav__dropdown {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  -webkit-transition: opacity ease 0.5s, visibility ease 0.5s,
    -webkit-transform ease 0.5s;
  transition: opacity ease 0.5s, visibility ease 0.5s,
    -webkit-transform ease 0.5s;
  transition: transform ease 0.5s, opacity ease 0.5s, visibility ease 0.5s;
  transition: transform ease 0.5s, opacity ease 0.5s, visibility ease 0.5s,
    -webkit-transform ease 0.5s;
}
.nav > ul > li:focus-within > .nav__dropdown {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  -webkit-transition: opacity ease 0.5s, visibility ease 0.5s,
    -webkit-transform ease 0.5s;
  transition: opacity ease 0.5s, visibility ease 0.5s,
    -webkit-transform ease 0.5s;
  transition: transform ease 0.5s, opacity ease 0.5s, visibility ease 0.5s;
  transition: transform ease 0.5s, opacity ease 0.5s, visibility ease 0.5s,
    -webkit-transform ease 0.5s;
}
.nav > ul > li > a {
  position: relative;
  color: #092dc5;
}
.nav > ul > li > a::before {
  content: '';
  position: absolute;
  top: 100%;
  left: -10px;
  right: -10px;
  height: 40px;
}
.nav > ul > li > a::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: -10%;
  width: 120%;
  height: 6px;
  background-image: url("{{ 'link-border.png' | asset_url }}");
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0;
}
.nav > ul > li > .nav__dropdown {
  position: absolute;
  top: 100%;
  left: -20px;
  right: -20px;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 40px 20px 0;
  -webkit-transition: opacity ease 1s, visibility ease 1s,
    -webkit-transform ease 1s;
  transition: opacity ease 1s, visibility ease 1s, -webkit-transform ease 1s;
  transition: transform ease 1s, opacity ease 1s, visibility ease 1s;
  transition: transform ease 1s, opacity ease 1s, visibility ease 1s,
    -webkit-transform ease 1s;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
  z-index: -1;
}
@media (min-width: 1024px) {
  .nav > ul > li > .nav__dropdown {
    padding-left: 40px;
    padding-right: 40px;
  }
}
.nav > ul > li > .nav__dropdown::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 20px;
  right: 20px;
  background: #fff;
  box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.35);
  z-index: -1;
}
.nav > ul > li > .nav__dropdown > a {
  width: 100%;
  padding: 0 20px;
  text-transform: capitalize;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
}
.nav > ul > li > .nav__dropdown > ul {
  -webkit-box-flex: 1;
  flex: 1 1;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
  padding: 0 20px;
}
.nav > ul > li > .nav__dropdown > ul > li {
  -webkit-box-flex: 0;
  flex: 0 1 auto;
  min-width: 200px;
  margin-bottom: 30px;
}
.nav > ul > li > .nav__dropdown > ul > li > a {
  display: block;
  margin-bottom: 10px;
  color: #5b667f;
  pointer-events: none;
  cursor: text;
}
.nav > ul > li > .nav__dropdown > .dropdown-block {
  min-width: 240px;
  padding: 0 20px;
  margin-bottom: 30px;
}
.nav .nav__item--border {
  position: relative;
}
.nav .nav__item--border::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: -25px;
  width: 4px;
  background-color: #f9ece1;
}
.nav .nav__dropdown a {
  color: #0b163b;
}
.nav .nav__dropdown a:hover {
  color: #092dc5;
  text-decoration: underline;
}
.nav .nav__dropdown .nav__dropdown > ul {
  display: -webkit-box;
  display: flex;
  letter-spacing: 0.5px;
}
.nav .nav__dropdown .nav__dropdown li {
  min-width: 180px;
  margin-right: 20px;
  margin-bottom: 10px;
}
.nav .nav__dropdown .nav__dropdown li:last-child {
  margin-bottom: 0;
} /*! path: /dummy/user/src/modules/global/nav/nav-mobile/_nav-mobile.scss */
.nav-mobile {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  max-width: 414px;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: #fff;
  padding: 20px 35px 60px;
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}
.nav-mobile.is-visible {
  -webkit-transform: translateX(0);
  transform: translateX(0);
}
.nav-mobile.is-visible .nav__overlay {
  opacity: 1;
  visibility: visible;
}
@media (min-width: 1024px) {
  .nav-mobile {
    display: none;
  }
}
.nav-mobile > ul > li {
  margin-bottom: 32px;
}
.nav-mobile > ul > li:last-child {
  margin-bottom: 0;
}
.nav-mobile > ul > li > a {
  display: block;
  text-align: center;
  text-transform: uppercase;
}
.nav-mobile > ul > li > .nav__dropdown {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  background: #fff;
  padding: 65px 50px 70px;
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  visibility: hidden;
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}
.nav-mobile > ul > li > .nav__dropdown.is-visible {
  visibility: visible;
  -webkit-transform: translateX(0);
  transform: translateX(0);
}
.nav-mobile > ul > li > .nav__dropdown > ul {
  width: 100%;
  -webkit-box-flex: 1;
  flex: 1 1;
  -webkit-box-ordinal-group: 2;
  order: 1;
  overflow: auto;
  margin-top: 30px;
}
.nav-mobile > ul > li > .nav__dropdown > ul > li {
  margin-bottom: 25px;
}
.nav-mobile > ul > li > .nav__dropdown > ul > li > a {
  display: block;
  margin-bottom: 10px;
  color: #5b667f;
  pointer-events: none;
  cursor: text;
}
.nav-mobile .nav__dropdown--blocks {
  -webkit-box-pack: center;
  justify-content: center;
}
.nav-mobile .nav__dropdown--blocks .dropdown-block {
  margin-bottom: 32px;
}
.nav-mobile .nav__dropdown--blocks .dropdown-block:last-child {
  margin-bottom: 0;
}
.nav-mobile .nav__dropdown .nav__dropdown li {
  font-size: 18px;
  margin-bottom: 12px;
  letter-spacing: 0.5px;
}
.nav-mobile .nav__dropdown .nav__dropdown li:last-child {
  margin-bottom: 0;
}
.nav-mobile .nav__account {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 19px 20px 18px;
}
.nav-mobile .nav__account > a {
  display: inline-block;
  line-height: 26px;
}
.nav-mobile .nav__account::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f9ece1;
  z-index: -1;
}
.nav-mobile .nav__account svg {
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  margin-right: 5px;
}
.nav-mobile .nav__account span {
  display: inline-block;
  vertical-align: middle;
  text-decoration: underline;
}
.nav-mobile .nav__account-dropdown {
  position: absolute;
  bottom: 60px;
  left: 0;
  right: 0;
  background-color: #f9ece1;
  padding: 35px 15px 10px 55px;
  -webkit-transform: translateY(150%);
  transform: translateY(150%);
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
  z-index: -1;
}
.nav-mobile .nav__account-dropdown.is-visible {
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
.nav-mobile .nav__account-dropdown.is-visible .nav__account-close {
  display: block;
}
.nav-mobile .nav__account-dropdown ul {
  position: relative;
  z-index: 1;
}
.nav-mobile .nav__account-dropdown li {
  margin-bottom: 15px;
}
.nav-mobile .nav__account-dropdown li:last-child {
  margin-bottom: 0;
}
.nav-mobile .nav__account-close {
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100%;
}
.nav-mobile .nav__back {
  position: absolute;
  top: 20px;
  left: 20px;
  display: inline-block;
  width: 24px;
  color: #0b163b;
}
.nav-mobile .nav__close {
  position: absolute;
  top: 10px;
  right: 10px;
  height: 24px;
  width: 24px;
  display: inline-block;
  color: #0b163b;
}
.nav-mobile .nav__overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 100%;
  width: 100vw;
  z-index: -1;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  -webkit-transition: opacity 0.3s, visibility 0.3s;
  transition: opacity 0.3s, visibility 0.3s;
}
.nav-mobile .nav__dropdown-title {
  position: absolute;
  top: 15px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  max-width: calc(100% - 100px);
  font-size: 18px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.nav-mobile .nav__dropdown-subtitle {
  display: block;
  width: 100%;
  font-size: 18px;
  letter-spacing: 0.5px;
} /*! path: /dummy/user/src/modules/global/wishlist/wishlist-slider/wishlist-slider.scss */
.wishlist-slider {
  margin-bottom: 80px;
  padding-bottom: 10px;
  text-align: center;
  overflow: hidden;
}
@media (min-width: 769px) {
  .wishlist-slider {
    margin-bottom: 80px;
  }
}
@media (min-width: 1024px) {
  .wishlist-slider {
    margin-bottom: 150px;
  }
}
.wishlist-slider .wishlist-slider__link {
  margin-bottom: 30px;
}
.wishlist-slider .wishlist-slider__empty {
  padding: 10px;
  text-align: left;
}
@media (min-width: 415px) {
  .wishlist-slider .wishlist-slider__empty {
    padding-bottom: 25px;
  }
}
@media (min-width: 769px) {
  .wishlist-slider .wishlist-slider__empty {
    padding-bottom: 15px;
  }
}
.wishlist-slider .wishlist-slider__title + .wishlist-slider__items {
  margin-top: 40px;
}
.wishlist-slider .wishlist-slider__items {
  padding: 10px 10px 15px;
}
.wishlist-slider .wishlist-slider__item {
  width: 150px;
  margin-right: 10px;
}
.wishlist-slider .wishlist-slider__item:last-child {
  margin-right: 0;
}
.wishlist-slider .wishlist-slider__image {
  margin-bottom: 15px;
}
.wishlist-slider .wishlist-slider__item img {
  max-width: 100%;
}
.wishlist-slider .swiper-container {
  overflow: visible;
}
.wishlist-slider .swiper-container-horizontal > .swiper-scrollbar {
  bottom: auto;
  top: 100%;
  left: -10px;
  right: -10px;
  margin-top: 20px;
  width: auto;
  height: 2px;
  border-radius: 0;
}
.wishlist-slider .swiper-scrollbar-drag {
  background: rgba(11, 22, 59, 0.5);
}
.wishlist-slider .wk-wishlist-row {
  padding: 0;
  margin-top: 0;
}
.wishlist-slider .wk-button-product {
  margin: 0 auto !important;
  color: #092dc5 !important;
}
.wishlist-slider .wk-label {
  display: block !important;
}
.wishlist-slider .wk-icon svg path {
  fill: currentColor !important;
  stroke: currentColor !important;
}
`
