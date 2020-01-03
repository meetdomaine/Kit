import nanoajax from 'nanoajax'

class Cart {
  get () {
    return new Promise(resolve => {
      nanoajax.ajax({
        url: '/cart.js',
        method: 'get'
      }, (code, responseText, request) => {
        const cart = JSON.parse(responseText)
        resolve(cart)
      })
    })
  }

  generateShopifyCartUpdateBody ({ id, quantity }) {
    return `updates[${id}]=${quantity}`
  }

  update (data) {
    return new Promise((resolve, reject) => {
      nanoajax.ajax({
        url: '/cart/update.js',
        method: 'post',
        body: this.generateShopifyCartUpdateBody(data)
      }, (code, responseText, request) => {
        const cart = JSON.parse(responseText)
        if (Number(code) !== 200) {
          cart.errors = [cart.description]
        }
        resolve(cart)
      })
    })
  }

  generateShopifyCartAddBody ({ id, quantity }) {
    return `quantity=${quantity}&id=${id}`
  }

  /**
   * Adds a product to the Shopify cart
   *
   * @param {Object} data {id: <id>, quantity: <Number>}
   */
  add (data) {
    return new Promise(resolve => {
      nanoajax.ajax({
        url: '/cart/add.js',
        method: 'post',
        body: this.generateShopifyCartAddBody(data)
      }, (code, responseText, request) => {
        const cart = JSON.parse(responseText)
        resolve(cart)
      })
    })
  }
}

window.CartModule = new Cart()

export default new Cart()
