export class PaymentModal {
    private readonly NAME_INPUT = '#name';
    private readonly EMAIL_INPUT = '#email';
    private readonly SUBMIT_BUTTON = '#submit-payment';
    private readonly CHECKBOX = '#promotion';
    private readonly CLOSE_BTN = 'button.close';

    enterName(name: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.NAME_INPUT)
            .should('be.visible')
            .clear()
            .type(name);
    }

    enterEmail(email: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.EMAIL_INPUT)
            .should('be.visible')
            .clear()
            .type(email);
    }

    clickSubmit(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.SUBMIT_BUTTON)
            .should('be.enabled')
            .click();
    }

    setCheckbox(checked: boolean): Cypress.Chainable<JQuery<HTMLInputElement>> {
        const box = cy.get<HTMLInputElement>(this.CHECKBOX);

        if (checked) {
            return box.check({ force: true });
        }

        return box.uncheck({ force: true });
    }

    clickClose(){
        return cy.get(this.CLOSE_BTN).click();
    }

    nameValue(){
        return cy.get(this.NAME_INPUT).invoke('val');
    }

    emailValue(){
        return cy.get(this.EMAIL_INPUT).invoke('val');
    }

    checkboxChecked(){
        return cy.get(this.CHECKBOX).invoke('prop', 'checked');
    }
}
