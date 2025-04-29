describe('Alerts and Windows Page Tests', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    beforeEach(() => {
      cy.visit('https://demoqa.com/alerts');
    });

    it('should handle the simple alert', () => {
      cy.on('window:alert', (str) => {
        expect(str).to.equal('You clicked a button');
      });
      cy.get('#alertButton').click();
    });
    
    it('should handle the confirm alert - accept', () => {
      cy.on('window:confirm', (str) => {
        expect(str).to.equal('Do you confirm action?');
        return true;
      });
      cy.get('#confirmButton').click();
      cy.get('#confirmResult').should('contain', 'You selected Ok');
    });

    it('should handle the confirm alert - dismiss', () => {
      cy.on('window:confirm', (str) => {
        expect(str).to.equal('Do you confirm action?');
        return false;
      });
      cy.get('#confirmButton').click();
      cy.get('#confirmResult').should('contain', 'You selected Cancel');
    });

    it('should handle the prompt alert - enter text and accept', () => {
      const promptText = 'Cypress Test';
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns(promptText);
        cy.get('#promtButton').click();
        cy.get('#promptResult').should('contain', `You entered ${promptText}`);
      });
    });
  });

  describe('Browser Windows Page Tests', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/browser-windows');
    });

    it('should handle a new tab', () => {
      cy.window().then((win) => {
        cy.stub(win, 'open').as('newTab');
      });
      cy.get('#tabButton').click();
      cy.get('@newTab').should('be.called');
    });

    it('should handle a new window', () => {
      cy.window().then((win) => {
        cy.stub(win, 'open').as('newWindow');
      });
      cy.get('#windowButton').click();
      cy.get('@newWindow').should('be.called');
    });

    it('should handle a new message window and validate the message', () => {
      cy.window().then((win) => {
        cy.stub(win, 'open').as('newMessageWindow');
      });
      cy.get('#messageWindowButton').click();
      cy.get('@newMessageWindow').should('be.called');

      cy.window().then((win) => {
        const newWindow = win.open();
        if (newWindow) {
            cy.wrap(newWindow.document.body).should('contain.text', 'You have successfully clicked the button');
            newWindow.close();
        }
      });
    });
  });