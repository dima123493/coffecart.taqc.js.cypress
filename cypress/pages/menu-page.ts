import 'cypress-xpath';

export class MenuPage {
    private readonly TOTAL_BUTTON = '#app > div:nth-child(3) > div.pay-container > button';
    private readonly PAYMENT_MODAL = '#app > div:nth-child(3) > div.modal > div';

    private readonly getDrinkButtonXpath = (drinkName: string): string =>
        `//h4[normalize-space(text())='${drinkName}']/following-sibling::*[1]`;

    visit(): void {
        cy.visit('/');
    }

    clickOnDrink(drinkName: string): void {
        cy.xpath(this.getDrinkButtonXpath(drinkName)).should('be.visible').click()
    }

    clickTotalButton(): void {
        cy.get(this.TOTAL_BUTTON)
            .should('be.enabled')
            .click();
    }

    verifyPaymentModalAppears(){
        return cy.get(this.PAYMENT_MODAL).should('be.visible');
    }

    verifyTotalButtonText(expectedText: string): void {
        cy.get(this.TOTAL_BUTTON)
            .should('have.text', expectedText);
    }
}
