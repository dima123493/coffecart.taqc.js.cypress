export class CartPage {
    private totalPriceLocator = "//div[@class='unit-controller']/../following-sibling::*[1]";
    private totalButtonLocator = "//button[contains(text(), 'Total')]";
    private cartDataLocator = "//*[@id='app']/div[2]/div/ul/li[2]/div[2]/span";
    private cartAmountLocator = "//*[@id='app']/ul/li[2]/a";
    private plusButtonLocator = "//*[@id=\"app\"]/div[2]/div[1]/ul/li/div[2]/button[1]";
    private minusButtonLocator = "//*[@id=\"app\"]/div[2]/div[1]/ul/li/div[2]/button[2]";
    private noCoffeeGoAddSome = "//*[@id='app']/div[2]/p";
    private totalPriceOfItem = "//*[@id='app']/div[2]/div/ul/li[2]/div[3]";

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

    getTotalPriceOfItem(){
        return cy.xpath(this.totalPriceOfItem);
    }

    clickPlusButton() {
        cy.xpath(this.plusButtonLocator).click();
    }

    clickMinusButton(){
        cy.xpath(this.minusButtonLocator).click();
    }

    cartStatus(){
        return cy.xpath(this.noCoffeeGoAddSome)
    }

    mouseOverTotalButton() {
        cy.xpath(this.totalButtonLocator).trigger('mouseover');
    }
}
