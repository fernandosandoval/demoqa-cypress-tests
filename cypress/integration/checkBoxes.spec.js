describe('Check Boxes Page Tests', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    beforeEach(() => {
      cy.visit('https://demoqa.com/checkbox');
    });

    it('should select the "Home" checkbox and verify its children are also selected', () => {
      cy.get('button[title="Expand all"]').click();
      cy.get('#tree-node-home').check({ force: true });
      cy.get('#tree-node-home').should('be.checked');
      cy.get('#tree-node-desktop').check({ force: true }); 
      cy.get('#tree-node-notes').check({ force: true });
      cy.get('#tree-node-commands').check({ force: true });
      cy.get('.text-success').should('contain', 'desktop');
      cy.get('.text-success').should('contain', 'notes');
      cy.get('.text-success').should('contain', 'commands');
    });

    it('should select specific checkboxes and verify them', () => {
      cy.get('button[title="Expand all"]').click();
      cy.get('#tree-node-notes').check({ force: true });
      cy.get('#tree-node-react').check({ force: true });
      cy.get('.text-success').should('include.text', 'react');
    });

    it('should uncheck a selected checkbox and verify', () => {
      cy.get('button[title="Expand all"]').click();
      cy.get('#tree-node-home').check({ force: true });
      cy.get('#tree-node-home').should('be.checked');
      cy.get('#tree-node-home').uncheck({ force: true });
      cy.get('#tree-node-home').should('not.be.checked');
      cy.get('.text-success').should('not.exist');
    });

    it('should expand all and check all boxes', () => {
      cy.get('button[title="Expand all"]').click();
      cy.get('.rct-checkbox').click({ multiple: true });
      cy.get('.rct-icon-check').should('exist');
      cy.get('#result').should('contain', 'You have selected');
    });
  });