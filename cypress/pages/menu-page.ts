export class MenuPage {
    private readonly DRINK_TITLE = 'h4';
    private readonly TOTAL_BUTTON = '#app > div:nth-child(3) > div.pay-container > button';
    private readonly PAYMENT_MODAL = '#app > div:nth-child(3) > div.modal > div';

    visit(): void {
        cy.visit('/');
    }

    clickOnDrink(drinkName: string): void {
        cy.contains(this.DRINK_TITLE, drinkName)
            .should('be.visible')
            .click();
    }

    clickTotalButton(): void {
        cy.get(this.TOTAL_BUTTON)
            .should('be.enabled')
            .click();
    }

    verifyPaymentModalAppears(): Cypress.Chainable {
        return cy.get(this.PAYMENT_MODAL).should('be.visible');
    }

    verifyTotalButtonText(expectedText: string): void {
        cy.get(this.TOTAL_BUTTON)
            .should('have.text', expectedText);
    }
}
