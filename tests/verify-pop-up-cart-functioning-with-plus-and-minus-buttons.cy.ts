import {MenuPage} from '@pages/menu-page';
import {CartPage} from '@pages/cart-page';
import {PopUpCartData as Data} from '@tests/data/pop-up-cart-data.cy';

describe('[TC7] Verification of pop-up cart functioning (buttons +/-)', () => {
    const menuPage = new MenuPage();
    const cartPage = new CartPage();

    beforeEach(() => {
        cy.allure().step('Visit website', true);
        menuPage.visit();
    });

    it('Verify Pop-up Cart Functioning With Plus And Minus Buttons', () => {
        cy.allure().step('On menu page', false);
        cy.url().should('include', 'coffee-cart.app');

        cy.allure().step(`Add drink: ${Data.DRINK}`, false);
        menuPage.clickOnDrink(Data.DRINK);
        menuPage.getTotalButton().should('be.visible').and('contain', Data.TOTAL_1);

        cy.allure().step('Mouse over Total Button', false);
        cartPage.mouseOverTotalButton();

        cy.allure().step('Click plus button, check total', false);
        cartPage.clickPlusButton();
        cartPage.getTotalButton().should('have.text', Data.TOTAL_2);

        cy.allure().step('Click minus button, check total', false);
        cartPage.clickMinusButton();
        cartPage.getTotalButton().should('have.text', Data.TOTAL_1);

        cy.allure().step('Click minus button, item disappears, total 0', false);
        cartPage.clickMinusButton();
        cartPage.getTotalButton().should('have.text', Data.TOTAL_0);
    });
});
