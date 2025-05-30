export class PaymentModal {
    private readonly NAME_INPUT = '#name';
    private readonly EMAIL_INPUT = '#email';
    private readonly SUBMIT_BUTTON = '#submit-payment';

    enterName(name: string): Cypress.Chainable {
        return cy.get(this.NAME_INPUT)
            .should('be.visible')
            .clear()
            .type(name);
    }

    enterEmail(email: string): Cypress.Chainable {
        return cy.get(this.EMAIL_INPUT)
            .should('be.visible')
            .clear()
            .type(email);
    }

    clickSubmit(): Cypress.Chainable {
        return cy.get(this.SUBMIT_BUTTON)
            .should('be.enabled')
            .click();
    }
}
