const cart = require('./data.json')

const stringify = obj => JSON.stringify(obj)

/**
 * Returns a data mock that represents the
 * data that you would get if you were calling
 * this method in a Shopify environment.
 */
const getCart = () => {
  return stringify(cart)
}

/**
 * Interprets the req body (sent as encoded form data)
 * and updates the line items based on the quantity
 * sent in the request.
 *
 * @param {Object} req Express Request
 */
const updateCart = req => {
  const {updates = {}} = req.body

  const id = Object.keys(updates)[0]
  const quantity = updates[Object.keys(updates)[0]]

  const items = cart.items
    .map(item => {
      if ('' + item.id !== '' + id) {
        return item
      }

      item.quantity = Number(quantity)
      item.line_price = item.price * Number(quantity)
      item.original_line_price = item.price * Number(quantity)
      return item
    })
    .filter(item => item.quantity)

  const itemCount = cart.items.reduce((num, item) => {
    num += item.quantity
    return num
  }, 0)

  const totalCost = cart.items.reduce((num, item) => {
    num += item.line_price
    return num
  }, 0)

  cart['items'] = items
  cart['item_count'] = itemCount
  cart['total_price'] = totalCost
  cart['original_total_price'] = totalCost

  return stringify(cart)
}

const addToCart = req => {
  const {quantity, id} = req.body
  // let existing = false

  const items = cart.items
    .map(item => {
      if ('' + item.id !== '' + id) {
        return item
      }
      existing = true

      item.quantity = Number(quantity)
      item.line_price = item.price * Number(quantity)
      item.original_line_price = item.price * Number(quantity)
      return item
    })
    .filter(item => item.quantity)

  // if (!existing) {
  //   items.push({})
  // }

  const itemCount = cart.items.reduce((num, item) => {
    num += item.quantity
    return num
  }, 0)

  const totalCost = cart.items.reduce((num, item) => {
    num += item.line_price
    return num
  }, 0)

  cart['items'] = items
  cart['item_count'] = itemCount
  cart['total_price'] = totalCost
  cart['original_total_price'] = totalCost

  return stringify(cart)
}

module.exports = {
  getCart,
  updateCart,
  addToCart
}
