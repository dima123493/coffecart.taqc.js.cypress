export class LuckyDayPopup {
    private readonly POPUP_SELECTOR = 'div.promo';
    private readonly POPUP_TITLE = 'div.promo span';
    private readonly YES_BUTTON = 'button:contains("Yes, of course!")';
    private readonly NO_BUTTON = 'button:contains("Nah, I\'ll skip")';

    waitForPopupVisible(): void {
        cy.get(this.POPUP_SELECTOR).should('be.visible');
    }

    waitForPopupHidden(): void {
        cy.get(this.POPUP_SELECTOR).should('not.exist');
    }

    verifyPopupContent(): void {
        cy.get(this.POPUP_SELECTOR).should('be.visible');
        cy.get(this.POPUP_TITLE).should('contain', 'It\'s your lucky day! Get an extra cup of Mocha for $4.');
        cy.get(this.YES_BUTTON).should('be.visible');
        cy.get(this.NO_BUTTON).should('be.visible');
    }
}
