import {CartPage} from '@pages/cart-page';
import {MenuPage} from '@pages/menu-page';
import {ItemsInCartData as Data} from '@tests/data/increase-items-in-cart-data.cy';

describe.only('Increase Items in Cart', () => {
    const menuPage = new MenuPage();
    const cartPage = new CartPage();

    beforeEach(() => {
        cy.allure().step('Visit website', true);
        menuPage.visit();
    });

    it('Verify that user can increase the number of items in the Cart', () => {
        cy.allure().step(`Click drink named ${Data.testingDrink}`, false);
        menuPage.clickOnDrink(Data.testingDrink);

        cy.allure().step('Go to cart page', false);
        menuPage.goToCartPage();

        cy.allure().step('Verify initial cart state', false);
        cartPage.getTotalPrice().should('have.text', Data.totalPriceBefore);
        cartPage.getTotalButton().should('have.text', Data.totalButtonBefore);
        cartPage.getCartData().should('have.text', Data.cartDataBefore);
        cartPage.getCartAmount().should('have.text', Data.cartAmountBefore);

        cy.allure().step('Click plus button to increase quantity', false);
        cartPage.clickPlusButton();

        cy.allure().step('Verify updated cart state', false);
        cartPage.getTotalPrice().should('have.text', Data.totalPriceAfter);
        cartPage.getTotalButton().should('have.text', Data.totalButtonAfter);
        cartPage.getCartData().should('have.text', Data.cartDataAfter);
        cartPage.getCartAmount().should('have.text', Data.cartAmountAfter);
    });
});