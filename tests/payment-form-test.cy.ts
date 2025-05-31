import {MenuPage} from '@pages/menu-page';
import {PaymentModal} from '@modal/payment-detail-modal';
import {SuccessfulModal} from '@modal/successful-modal';
import { PaymentTestData as Data } from '@tests/data/payment-test-data';

const menuPage = new MenuPage();
const paymentModal = new PaymentModal();
const successModal = new SuccessfulModal();
describe('Verify Payment Form Accepts Valid Inputs', () => {
    beforeEach(() => {
        cy.allure().step('Visit website', true);
        menuPage.visit();
    });

    it('should submit payment form with valid inputs', () => {
        cy.allure().step(`Click drink named ${Data.testingDrink}`, false);
        menuPage.clickOnDrink(Data.testingDrink);
        cy.allure().step(`Click total button`, false);
        menuPage.clickTotalButton();
        cy.allure().step(`Verify payment modal appears`, false);
        menuPage.getPaymentModal().should('be.visible');

        cy.allure().step(`Enter user name ${Data.validName}`, false);
        paymentModal.enterName(Data.validName);
        cy.allure().step(`Enter user email ${Data.validEmail}`, false);
        paymentModal.enterEmail(Data.validEmail);
        cy.allure().step(`Click submit`, false);
        paymentModal.clickSubmit();

        successModal.getSuccessMessage().should('eq', Data.successMessage);
        menuPage.getTotalButton().should('have.text', Data.emptyCartText);
    });
});
