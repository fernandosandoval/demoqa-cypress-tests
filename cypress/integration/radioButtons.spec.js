describe('Radio Buttons Page Tests', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    beforeEach(() => {
      cy.visit('https://demoqa.com/radio-button');
    });

    it('should select and verify the "Yes" radio button', () => {
      cy.get('#yesRadio').check({ force: true });
      cy.get('.mt-3').should('contain', 'You have selected Yes');
    });

    it('should select and verify the "Impressive" radio button', () => {
      cy.get('#impressiveRadio').check({ force: true });
      cy.get('.mt-3').should('contain', 'You have selected Impressive');
    });

    it('should verify that the "No" radio button is disabled', () => {
      cy.get('#noRadio').should('be.disabled');
    });
  });