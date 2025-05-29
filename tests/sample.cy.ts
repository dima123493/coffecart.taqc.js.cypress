describe('My First Test', () => {
  it('visits the app', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
  })
})