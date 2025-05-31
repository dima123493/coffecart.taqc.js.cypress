export class SuccessfulModal {
    private readonly SUCCESS_MESSAGE = '.snackbar.success';

    getSuccessMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.SUCCESS_MESSAGE)
            .should('be.visible')
            .invoke('text');
    }
}
