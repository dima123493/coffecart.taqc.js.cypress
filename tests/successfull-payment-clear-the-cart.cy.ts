import { MenuPage } from "@pages/menu-page";
import { CartPage } from "@pages/cart-page";
import { PaymentModal } from "@modal/payment-detail-modal";
import { SuccessfulModal } from "@modal/successful-modal";
import { ClearTheCartTestData as Data } from "./data/successful-payment-clear-the-cart-data";

describe('Verify successful payment clear the cart', () => {
    let menuPage : MenuPage;
    let cartPage : CartPage;
    let paymentModal : PaymentModal;
    let successfulModal : SuccessfulModal;

    beforeEach(() => {
        menuPage = new MenuPage;
        cartPage = new CartPage;
        paymentModal = new PaymentModal;
        successfulModal = new SuccessfulModal;
        cy.allure().step(`Navigate to coffee-cart.app`, false);
        menuPage.visit();
    });

    afterEach(()=>{
        menuPage.getPaymentModal().should('be.hidden');
        menuPage.getCartNavLink().should('have.text', Data.navLinkToCartText);
        menuPage.getTotalButton().should('have.text', Data.buttonTitle);
        menuPage.getSuccessfulPopup().should('be.visible');
        successfulModal.getSuccessMessage().should('eq', Data.successfulMessage)
    });

    it('After successful payment the cart should be empty (one item in the cart)', () => {
        cy.allure().step(`Click on ${Data.drinks[0]} element`, false);
        menuPage.clickOnDrink(Data.drinks[0]);
        cy.allure().step(`Click on the Cart page link`, false);
        menuPage.goToCartPage();
        cy.allure().step(`Click on "Total" button above the cart grid`, false);
        cartPage.clickTotalButton();
        cy.allure().step(`Click on "Name" input and enter name`, false);
        paymentModal.enterName(Data.validNames[0])
        cy.allure().step(`Click on "Email" input and enter valid existing email`, false);
        paymentModal.enterEmail(Data.validEmails[0])
        cy.allure().step(`Click on "Submit" button`, false);
        paymentModal.clickSubmit();
    });

    it('After successful payment the cart should be empty (three items in the cart)', () => {
        cy.allure().step(`Click on ${Data.drinks[1]} element`, false);
        menuPage.clickOnDrink(Data.drinks[1]);
        cy.allure().step(`Click on ${Data.drinks[2]} element`, false);
        menuPage.clickOnDrink(Data.drinks[2]);
        cy.allure().step(`Click on ${Data.drinks[3]} element`, false);
        menuPage.clickOnDrink(Data.drinks[3]);
        cy.allure().step(`Click on the Cart page link`, false);
        menuPage.goToCartPage();
        cy.allure().step(`Click on "Total" button above the cart grid`, false);
        cartPage.clickTotalButton();
        cy.allure().step(`Click on "Name" input and enter name`, false);
        paymentModal.enterName(Data.validNames[1])
        cy.allure().step(`Click on "Email" input and enter valid existing email`, false);
        paymentModal.enterEmail(Data.validEmails[1])
        cy.allure().step(`Click on "Submit" button`, false);
        paymentModal.clickSubmit();
    });
});
