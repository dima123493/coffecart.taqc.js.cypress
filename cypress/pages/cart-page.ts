export class CartPage {
    private totalPriceLocator = "//div[@class='unit-controller']/../following-sibling::*[1]";
    private totalButtonLocator = "//button[contains(text(), 'Total')]";
    private cartDataLocator = "//*[@id='app']/div[2]/div/ul/li[2]/div[2]/span";
    private cartAmountLocator = "//*[@id='app']/ul/li[2]/a";
    private plusButtonLocator = "//*[@id='app']/div[2]/div/ul/li[2]/div[2]/div/button[1]";
    private emptyTextLocator = "//*[contains(text(),\"No coffee, go add some.\")]";

    getTotalPrice() {
        return cy.xpath(this.totalPriceLocator);
    }

    getTotalButton() {
        return cy.xpath(this.totalButtonLocator);
    }

    getCartData() {
        return cy.xpath(this.cartDataLocator);
    }

    getCartAmount() {
        return cy.xpath(this.cartAmountLocator);
    }

    clickPlusButton() {
        cy.xpath(this.plusButtonLocator).click();
    }

    getEmptyText() {
        return cy.xpath(this.emptyTextLocator);
    }
}