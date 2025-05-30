
// @ts-ignore
import {CartPage} from '@pages/cart-page';
// @ts-ignore
import {MenuPage} from '@pages/menu-page';



describe('Increase Items in Cart', () => {
    const menuPage = new MenuPage();
    const cartPage = new CartPage();

    beforeEach(() => {
            cy.visit('/');
    });

    it('Verify that user can increase the number of items in the Cart', () => {
        menuPage.goToMenuPage();
        menuPage.clickOnDrinkElement('Espresso Macchiato');
        menuPage.goToCartPage();

        cartPage.getTotalPrice().should('have.text', '$12.00');
        cartPage.getTotalButton().should('have.text', 'Total: $12.00');
        cartPage.getCartData().should('have.text', '$12.00 x 1');
        cartPage.getCartAmount().should('have.text', 'cart (1)');

        cartPage.clickPlusButton();

        cartPage.getTotalPrice().should('have.text', '$24.00');
        cartPage.getTotalButton().should('have.text', 'Total: $24.00');
        cartPage.getCartData().should('have.text', '$12.00 x 2');
        cartPage.getCartAmount().should('have.text', 'cart (2)');
    });
});