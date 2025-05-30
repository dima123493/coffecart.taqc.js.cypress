export class MenuPage {
    private cartIcon = "//a[@aria-label='Cart page']";
    private drinkLocator = (drinkName: string) =>
        `//*[@id='app']/div[2]/ul/li/h4[normalize-space(text())='${drinkName}']/following-sibling::*`;

    clickOnDrinkElement(drinkName: string) {
        cy.xpath(this.drinkLocator(drinkName)).click();
    }

    goToCartPage() {
        cy.xpath(this.cartIcon).click();
    }

    goToMenuPage() {
        cy.visit('https://coffee-cart.app/');
    }
}