import { CartPage } from '@pages/cart-page';
import { MenuPage } from '@pages/menu-page';
import { PaymentModal } from '@modal/payment-detail-modal';

describe('Verify Invalid Email Formats In Payment Form', () => {
    const menuPage = new MenuPage();
    const cartPage = new CartPage();
    const paymentModal = new PaymentModal();

    beforeEach(() => {
        cy.allure().step('Visit website', true);
        menuPage.visit();
    });

    it('should reject invalid email formats and keep payment modal visible', () => {
        cy.allure().step('Click on drink: Flat White', false);
        menuPage.clickOnDrink('Flat White');

        cy.allure().step('Go to Cart Page');
        menuPage.goToCartPage();

        cy.allure().step('Click on Total button');
        cartPage.getTotalButton().click();

        cy.allure().step('Enter name: Viktoriia');
        paymentModal.enterName('Viktoriia');

        cy.allure().step('Test invalid email without "@"');
        paymentModal.enterEmail('viktoriia11gmail.com');
        paymentModal.clickSubmit();
        // Check that we're still on the payment form (form didn't submit successfully)
        cy.get('#email').should('be.visible');
        cy.get('#name').should('have.value', 'Viktoriia');

        cy.allure().step('Test invalid email without domain');
        paymentModal.enterEmail('viktoriia11@');
        paymentModal.clickSubmit();
        cy.get('#email').should('be.visible');
        cy.get('#name').should('have.value', 'Viktoriia');
    });
});