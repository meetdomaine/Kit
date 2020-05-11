const singleViewportSize = Cypress.env('cypress.viewportWidth')
  ? Cypress.env('cypress.viewportWidth')
  : Cypress.env('cypress.lastSizeOnly')
  ? Cypress.env('cypress.sizes').slice(0).pop()
  : false

describe('Visual Regressions', () => {
  beforeEach(() => {
    cy.loginToShopify()
    cy.hideCookieBar()
  })

  Object.keys(Cypress.env('cypress.pages')).forEach((key) => {
    it(`Capture screen: ${key}`, () => {
      if (!singleViewportSize) {
        Cypress.env('cypress.sizes').forEach((size) => {
          cy.viewport(size, Cypress.env('cypress.viewportHeight'))
          cy.visit(Cypress.env('cypress.pages')[key])
          cy.scrollUpDown()
          cy.screenshot(`${key}: ${size}`, {
            capture: 'fullPage',
            disableTimersAndAnimations: false
          })
          return true
        })
      } else {
        cy.viewport(singleViewportSize, Cypress.env('cypress.viewportHeight'))
        cy.visit(Cypress.env('cypress.pages')[key])
        cy.scrollUpDown()
        cy.screenshot({
          capture: 'fullPage',
          disableTimersAndAnimations: false
        })
      }
    })
    return true
  })
})
