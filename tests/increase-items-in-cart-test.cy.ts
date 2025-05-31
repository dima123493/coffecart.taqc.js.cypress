import {CartPage} from '@pages/cart-page';
import {MenuPage} from '@pages/menu-page';
import {ItemsInCartData as Data} from '@tests/data/increase-items-in-cart-data.cy';

describe('Increase Items in Cart', () => {
    const menuPage = new MenuPage();
    const cartPage = new CartPage();

    beforeEach(() => {
        menuPage.visit();
    });

    it('Verify that user can increase the number of items in the Cart', () => {
        menuPage.goToMenuPage();
        menuPage.clickOnDrink(Data.testingDrink);
        menuPage.goToCartPage();

        cartPage.getTotalPrice().should('have.text', Data.totalPriceBefore);
        cartPage.getTotalButton().should('have.text', Data.totalButtonBefore);
        cartPage.getCartData().should('have.text', Data.cartDataBefore);
        cartPage.getCartAmount().should('have.text', Data.cartAmountBefore);

        cartPage.clickPlusButton();

        cartPage.getTotalPrice().should('have.text', Data.totalPriceAfter);
        cartPage.getTotalButton().should('have.text', Data.totalButtonAfter);
        cartPage.getCartData().should('have.text', Data.cartDataAfter);
        cartPage.getCartAmount().should('have.text', Data.cartAmountAfter);
    });
});