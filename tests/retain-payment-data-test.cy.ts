import { MenuPage }     from '@pages/menu-page';
import { CartPage }     from '@pages/cart-page';
import { PaymentModal } from '@modal/payment-detail-modal';

describe('[RET-01] Payment Modal retain / reset', () => {
    const NAME  = 'TestUser';
    const EMAIL = 'testuser@gmail.com';
    const DRINK = 'Espresso';

    const menuPage    = new MenuPage();
    const cartPage    = new CartPage();
    const paymentModal = new PaymentModal();

    beforeEach(() => {
        cy.allure().step('Open website', true);
        menuPage.visit();
    });

    it('Keeps data after closing on Menu page but clears it on Cart page', () => {

        cy.allure().step(`Add drink: ${DRINK}`, false);
        menuPage.clickOnDrink(DRINK);

        cy.allure().step('Open Payment Modal on the Menu page', false);
        menuPage.clickTotalButton();

        paymentModal.enterName(NAME);
        paymentModal.enterEmail(EMAIL);
        paymentModal.setCheckbox(true);
        paymentModal.clickClose();

        menuPage.clickTotalButton();
        paymentModal.nameValue().should('eq', NAME);
        paymentModal.emailValue().should('eq', EMAIL);
        paymentModal.checkboxChecked().should('eq', true);
        paymentModal.clickClose();

        cy.allure().step('Navigate to Cart page', false);
        menuPage.goToCartPage();

        cartPage.clickTotalButton();

        paymentModal.nameValue().should('eq', '');
        paymentModal.emailValue().should('eq', '');
        paymentModal.checkboxChecked().should('eq', false);
    });
});
