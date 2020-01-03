const cart = require('./../apis/cart.js/data.json')
const productBase = require('./product.js')
const orderBase = require('./order.js')

const deepClone = obj => {
  return JSON.parse(JSON.stringify(obj))
}

const products = []

for (let i = 0; i < 50; i++) {
  const product = deepClone(productBase)
  product.id = `product-${i}`
  if (i === 0) {
    product.title = 'Lemtosh Dust'
    product.tags = [
      'material-dust'
    ]
  }
  products.push(product)
}

module.exports = {
  title: 'Barrel | Base Modules',
  shop: {
    name: 'Barrel Base Modules'
  },
  form: {
    'form.posted_successfully?': true
  },
  checkout: false,
  linklists: {
    'plp-sidebar': {
      links: [
        {
          title: 'Product',
          url: '/collections/product-a',
          object: {
            handle: 'all'
          },
          links: [
            {
              title: 'Product A',
              url: '/collections/product-a',
              object: {
                handle: 'all'
              }
            },
            {
              title: 'Product B',
              url: '/collections/product-b',
              object: {
                handle: 'all'
              }
            }
          ]
        },
        {
          title: 'Collection',
          url: '/collections/collection-a',
          object: {
            handle: 'all'
          },
          links: [
            {
              title: 'Collection A',
              url: '/collections/collection-a',
              object: {
                handle: 'all'
              }
            },
            {
              title: 'Collection B',
              url: '/collections/collection-b',
              object: {
                handle: 'all'
              }
            }
          ]
        }
      ]
    },
    "main-menu": {
      "handle": "main-menu",
      "title": "Header Menu",
      "links": [
        {
          "url": "/collections",
          "title": "Collections",
          "links": [
            {
              "url": "/collections/all",
              "title": "All products",
              "links": [
                {
                  "url": "/collections/all",
                  "title": "All products"
                },
                {
                  "url": "/collections/games",
                  "title": "Games"
                }
              ]
            },
            {
              "url": "/collections/all",
              "title": "All products",
              "links": [
                {
                  "url": "/collections/all",
                  "title": "All products"
                },
                {
                  "url": "/collections/games",
                  "title": "Games"
                }
              ]
            },
            {
              "url": "/collections/all",
              "title": "All products",
              "links": [
                {
                  "url": "/collections/all",
                  "title": "All products"
                },
                {
                  "url": "/collections/games",
                  "title": "Games"
                }
              ]
            },
            {
              "url": "/collections/games",
              "title": "Games",
              "object": {
                "image": "https://cdn.shopify.com/s/files/1/0705/9579/collections/FullSizeRender-1-MOB_500x.jpg"
              }
            }
          ]
        },
        {
          "url": "/products",
          "title": "Products"
        },
        {
          "url": "/accessories",
          "title": "Accessories"
        }
      ]
    },
    "secondary-menu": {
      "handle": "main-menu",
      "title": "Header Menu",
      "links": [
        {
          "url": "/collections",
          "title": "Collections",
          "links": [
            {
              "url": "/collections/all",
              "title": "All products",
              "links": [
                {
                  "url": "/collections/all",
                  "title": "All products"
                },
                {
                  "url": "/collections/games",
                  "title": "Games"
                }
              ]
            },
            {
              "url": "/collections/all",
              "title": "All products",
              "links": [
                {
                  "url": "/collections/all",
                  "title": "All products"
                },
                {
                  "url": "/collections/games",
                  "title": "Games"
                }
              ]
            },
            {
              "url": "/collections/all",
              "title": "All products",
              "links": [
                {
                  "url": "/collections/all",
                  "title": "All products"
                },
                {
                  "url": "/collections/games",
                  "title": "Games"
                }
              ]
            },
            {
              "url": "/collections/games",
              "title": "Games",
              "object": {
                "image": "https://cdn.shopify.com/s/files/1/0705/9579/collections/FullSizeRender-1-MOB_500x.jpg"
              }
            }
          ]
        },
        {
          "url": "/products",
          "title": "Products"
        },
        {
          "url": "/accessories",
          "title": "Accessories"
        }
      ]
    },
    "social-menu": {
      "handle": "social-menu",
      "title": "Social Menu",
      "links": [
        {
          "url": "#",
          "title": "Instagram"
        },
        {
          "url": "#",
          "title": "Facebook"
        },
        {
          "url": "#",
          "title": "YouTube"
        }
      ]
    },
    "footer": {
      "handle": "main-menu",
      "title": "Header Menu",
      "links": [
        {
          "url": "/collections",
          "title": "Collections"
        },
        {
          "url": "/products",
          "title": "Products"
        },
        {
          "url": "/accessories",
          "title": "Accessories"
        },
        {
          "url": "/collections",
          "title": "Collections"
        },
        {
          "url": "/products",
          "title": "Products"
        },
        {
          "url": "/accessories",
          "title": "Accessories"
        },
        {
          "url": "/collections",
          "title": "Collections"
        },
        {
          "url": "/products",
          "title": "Products"
        }
      ]
    }
  },
  cart: cart,
  search: {
    results: [
      products[0],
      products[1],
      products[2]
    ]
  },
  collection: {
    handle: 'All',
    title: 'Default Collection',
    description: 'This is a description',
    url: 'collections/All',
    image: 'https://cdn.shopify.com/s/files/1/2403/8187/collections/PLP_Originals_Optical_1440x.jpg?v=1528847057',
    products: products
  },
  paginate: {
    pages: 1
  },
  'current_page': 1,
  customer: {
    orders: [deepClone(orderBase)],
    default_address: {
      first_name: 'Barrel',
      last_name: 'O\'laughs',
      company: 'Barrel',
      address1: '197 Grand St',
      address2: 'Suite 7S',
      city: 'New York',
      province: 'NY',
      zip: 11249,
      country: 'United States',
      phone: '123 456 7890'
    },
    addresses: [{
      first_name: 'Barrel',
      last_name: 'O\'laughs',
      company: 'Barrel',
      address1: '197 Grand St',
      address2: 'Suite 7S',
      city: 'New York',
      province: 'NY',
      zip: 11249,
      country: 'United States',
      phone: '123 456 7890'
    }]
  },
  order: deepClone(orderBase),
  newsletter: {
    provider: 'klaviyo',
    mailchimp_url: 'https://drjart.us7.list-manage.com/subscribe/post-json?u=1c45fceca4996e6cafb8f60d2&amp;id=c646eeb648',
    klaviyo_url: 'https://manage.kmail-lists.com/ajax/subscriptions/subscribe',
    klaviyo_group: 'PP8Dfr',
    form_placeholder: 'Newsletter sign up',
    form_error_message: 'An error occurred. Please check the email address and try again.',
    form_success_message: 'You have been subscribed to the mailing list.',
    form_btn_text: 'Sign up'
  }
}
