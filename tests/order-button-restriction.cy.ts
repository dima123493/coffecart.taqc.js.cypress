import {CartPage} from '@pages/cart-page';
import {MenuPage} from '@pages/menu-page';
import {OrderButtonRestrictionData as Data} from '@tests/data/order-button-restriction-data.cy';

describe('Increase Items in Cart', () => {
    const menuPage = new MenuPage();
    const cartPage = new CartPage();

    beforeEach(() => {
        cy.allure().step('Visit website', true);
        menuPage.visit();
    });

    it('Verify order button restriction with empty cart', () => {

        cy.allure().step('Go to cart page', false);
        menuPage.goToCartPage();

        cy.allure().step('Verify empty cart text', false);
        cartPage.getEmptyText().should('have.text', Data.emptyText)

        cy.allure().step('Verify total button invisible', false);
        cartPage.getTotalPrice().should('not.exist');

    });
});
