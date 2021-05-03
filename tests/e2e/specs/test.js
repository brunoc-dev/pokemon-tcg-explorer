// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h2', 'Pokémon Trading Card Game')
    cy.get('[data-test="card"]')
  })
})
