import 'cypress-xpath';

export class MenuPage {
    private readonly TOTAL_BUTTON = '//*[@class="pay"]';
    private readonly PAYMENT_MODAL = '//*[@class=\'modal\']/div';

    private readonly getDrinkButtonXpath = (drinkName: string): string =>
        `//h4[normalize-space(text())='${drinkName}']/following-sibling::*[1]`;

    visit(): void {
        cy.visit('/');
    }

    clickOnDrink(drinkName: string): void {
        cy.xpath(this.getDrinkButtonXpath(drinkName)).should('be.visible').click()
    }

    clickTotalButton(): void {
        cy.xpath(this.TOTAL_BUTTON)
            .should('be.enabled')
            .click();
    }

    verifyPaymentModalAppears(){
        return cy.xpath(this.PAYMENT_MODAL).should('be.visible');
    }

    verifyTotalButtonText(expectedText: string): void {
        cy.xpath(this.TOTAL_BUTTON)
            .should('have.text', expectedText);
    }
}
