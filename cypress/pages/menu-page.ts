export class MenuPage {
    clickOnDrinkElement(drinkName: string) {
        cy.xpath(`//*[@id='app']/div[2]/ul/li/h4[normalize-space(text())='${drinkName}']/following-sibling::*`).click();
    }

    goToCartPage() {
        cy.xpath("//a[@aria-label='Cart page']").click();
    }

    goToMenuPage() {
        cy.visit('https://coffee-cart.app/');
    }
}