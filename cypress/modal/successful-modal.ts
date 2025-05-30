export class SuccessfulModal {
    private readonly SUCCESS_MESSAGE = 'div.snackbar.success';

    getSuccessMessage(): Cypress.Chainable {
        return cy.get(this.SUCCESS_MESSAGE)
            .should('be.visible')
            .invoke('text');
    }
}
