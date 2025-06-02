import {MenuPage} from '@pages/menu-page';
import {CoffeeTypes} from '@tests/data/drinks-test-data.cy';

describe('Lucky Day Popup Tests', () => {
    const menuPage = new MenuPage();

    beforeEach(() => {
        cy.allure().step('Visit website', true);
        menuPage.visit();
    });

    it('Should show and hide lucky day popup correctly', () => {
        [CoffeeTypes.ESPRESSO, CoffeeTypes.ESPRESSO_MACCHIATO, CoffeeTypes.CAPPUCCINO].forEach(drink => {
            cy.allure().step(`Add ${drink} to cart`, true)
                .parameter('drink', drink);
            menuPage.clickOnDrink(drink);
        });
        menuPage.getCartCount().should('equal', 3);

        cy.allure().step('Verify popup appears after 3 drinks');
        menuPage.luckyDayPopup.waitForPopupVisible();
        menuPage.luckyDayPopup.verifyPopupContent();

        cy.allure().step(`Add ${CoffeeTypes.MOCHA} to cart`, true);
        menuPage.clickOnDrink(CoffeeTypes.MOCHA);

        cy.allure().step('Verify popup disappears after adding 4th item');
        menuPage.luckyDayPopup.waitForPopupHidden();

        [CoffeeTypes.FLAT_WHITE, CoffeeTypes.AMERICANO].forEach(drink => {
            cy.allure().step(`Add ${drink} to cart`, true)
                .parameter('drink', drink);
            menuPage.clickOnDrink(drink);
        });

        cy.allure().step('Verify popup reappears after meeting conditions again');
        menuPage.luckyDayPopup.waitForPopupVisible();
        menuPage.luckyDayPopup.verifyPopupContent();

        cy.allure().step('Verify total items in cart equals 6');
        menuPage.getCartCount().should('equal', 6);
    });
});

