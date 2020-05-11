/**
 * This exposes the percySnapshot task
 * so we can use it in the tests
 */
require('@percy/cypress')

Cypress.on('uncaught:exception', () => {
  return false
})

Cypress.Commands.add('loginToShopify', (name, options) => {
  cy.visit(`/?preview_theme_id=${Cypress.env('theme')}`)
  cy.get(Cypress.env('cypress.passwordSelector')).then(($button) => {
    if ($button.length > 0) {
      cy.get(Cypress.env('cypress.passwordSelector'))
        .type(Cypress.env('cypress.password'))
        .type('{enter}')
    }
  })
})

Cypress.Commands.add('hideCookieBar', (name, options) => {
  cy.get('.js-accept-cookies').click()
})

Cypress.Commands.add('scrollUpDown', (name, options) => {
  cy.window().scrollTo('bottom', { duration: 8000, easing: 'linear' })
  // We do this again incase the dom has changed due to load
  cy.window().scrollTo('bottom', { duration: 3000, easing: 'linear' })
  cy.wait(2000)
  cy.window().scrollTo('top', { duration: 3000 })
})

Cypress.Commands.add('scrollToBottom', (name, options) => {
  cy.window().scrollTo('bottom', { duration: 8000, easing: 'linear' })
  // We do this again incase the dom has changed due to load
  cy.window().scrollTo('bottom', { duration: 3000, easing: 'linear' })
  cy.wait(2000)
  // cy.window().scrollTo('top', { duration: 10000 })
})

Cypress.Commands.add(
  'sendAllSizesToPercy',
  (
    name,
    options = {
      widths: Cypress.env('cypress.sizes'),
      'enable-javascript': true
    }
  ) => {
    cy.percySnapshot(name, options)
  }
)
