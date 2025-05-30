describe('My First Test', () => {
  it('visits the app', () => {
    cy.allure().feature('Example Feature');
    cy.allure().story('Visit Example Page');

    cy.allure().step('Visit https://example.cypress.io', true);
    cy.visit('https://example.cypress.io');

    cy.allure().step('Click on type link', true);
    cy.contains('type').click();

    cy.allure().step('Verify URL contains /commands/actions', true);
    cy.url().should('include', '/commands/actions');

    cy.allure().step('Type text in the input field', true);
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com');
  });
});
