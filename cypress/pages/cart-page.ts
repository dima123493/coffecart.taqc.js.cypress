export class CartPage {
    getTotalPrice() {
        return cy.xpath("//div[@class='unit-controller']/../following-sibling::*[1]");
    }

    getTotalButton() {
        return cy.xpath("//button[contains(text(), 'Total')]");
    }

    getCartData() {
        return cy.xpath("//*[@id=\"app\"]/div[2]/div/ul/li[2]/div[2]/span");
    }

    getCartAmount() {
        return cy.xpath("//*[@id=\"app\"]/ul/li[2]/a");
    }

    clickPlusButton() {
        cy.xpath("//*[@id=\"app\"]/div[2]/div/ul/li[2]/div[2]/div/button[1]").click();
    }
}