export class CartPage {
    private totalPriceLocator = "//div[@class='unit-controller']/../following-sibling::*[1]";
    private totalButtonLocator = "//button[contains(text(), 'Total')]";
    private cartDataLocator = "//*[@id='app']/div[2]/div/ul/li[2]/div[2]/span";
    private cartAmountLocator = "//*[@id='app']/ul/li[2]/a";
    private plusButtonLocator = "//*[@id='app']/div[2]/div/ul/li[2]/div[2]/div/button[1]";
    private minusButtonLocator = "//*[@id='app']/div[2]/div/ul/li[2]/div[2]/div/button[2]";
    private noCoffeeGoAddSome = "//*[@id='app']/div[2]/p";
    private totalPriceOfItem = "//*[@id='app']/div[2]/div/ul/li[2]/div[3]";

    getTotalPrice(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.xpath(this.totalPriceLocator);
    }

    getTotalButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.xpath(this.totalButtonLocator);
    }

    getCartData(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.xpath(this.cartDataLocator);
    }

    getCartAmount(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.xpath(this.cartAmountLocator);
    }

    clickPlusButton(): void {
        cy.xpath(this.plusButtonLocator).click();
    }

    clickTotalButton(): void{
        cy.xpath(this.totalButtonLocator).click();

    getTotalPriceOfItem(){
        return cy.xpath(this.totalPriceOfItem);
    }

    clickMinusButton(){
        cy.xpath(this.minusButtonLocator).click();
    }

    cartStatus(){
        return cy.xpath(this.noCoffeeGoAddSome)
    }
}