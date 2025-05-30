import {MenuPage} from '@pages/menu-page';
import {PaymentModal} from '@modal/payment-detail-modal';
import {SuccessfulModal} from '@modal/successful-modal';
import { PaymentTestData as Data } from '@tests/data/payment-test-data';

const menuPage = new MenuPage();
const paymentModal = new PaymentModal();
const successModal = new SuccessfulModal();

describe('Verify Payment Form Accepts Valid Inputs', () => {
    beforeEach(() => {
        menuPage.visit();
    });

    it('should submit payment form with valid inputs', () => {
        menuPage.clickOnDrink(Data.testingDrink);
        menuPage.clickTotalButton();
        menuPage.verifyPaymentModalAppears();

        paymentModal.enterName(Data.validName);
        paymentModal.enterEmail(Data.validEmail);
        paymentModal.clickSubmit();

        successModal.getSuccessMessage().should('eq', Data.successMessage);
        menuPage.verifyTotalButtonText(Data.emptyCartText);
    });
});
