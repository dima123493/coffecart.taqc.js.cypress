import 'cypress-xpath';

export class MenuPage {
    private readonly TOTAL_BUTTON = '#app > div:nth-child(3) > div.pay-container > button';
    private readonly PAYMENT_MODAL = '#app > div:nth-child(3) > div.modal > div';

    visit(): void {
        cy.visit('/');
    }

    clickOnDrink(drinkName: string): void {
        const xpath = `//*[@id='app']/div[2]/ul/li/h4[normalize-space(text())='${drinkName}']/following-sibling::*[1]`;
        cy.xpath(xpath).should('be.visible').click();
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
