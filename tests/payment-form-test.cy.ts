import {MenuPage} from '@pages/menu-page';
import {PaymentModal} from '@modal/payment_detail_modal';
import {SuccessfulModal} from '@modal/successful_modal';

const menuPage = new MenuPage();
const paymentModal = new PaymentModal();
const successModal = new SuccessfulModal();

describe('Verify Payment Form Accepts Valid Inputs', () => {
    const VALID_NAME = 'Andrii';
    const VALID_EMAIL = 'andrii11@gmail.com';
    const TESTING_DRINK_NAME = 'Flat White';
    const SUCCESS_MESSAGE = 'Thanks for your purchase. Please check your email for payment.';
    const EMPTY_CART_VALUES = 'Total: $0.00';

    beforeEach(() => {
        menuPage.visit();
    });

    it('should submit payment form with valid inputs', () => {
        menuPage.clickOnDrink(TESTING_DRINK_NAME);
        menuPage.clickTotalButton();
        menuPage.verifyPaymentModalAppears();

        paymentModal.enterName(VALID_NAME);
        paymentModal.enterEmail(VALID_EMAIL);
        paymentModal.clickSubmit();

        successModal.getSuccessMessage().should('eq', SUCCESS_MESSAGE);
        menuPage.verifyTotalButtonText(EMPTY_CART_VALUES);
    });
});
