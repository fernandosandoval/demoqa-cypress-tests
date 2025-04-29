describe('Widgets Page Tests', () => {
    // Accordian
    describe('Accordian Tests', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      beforeEach(() => {
        cy.visit('https://demoqa.com/accordian');
      });

      it('should verify accordian sections are collapsible and expandable', () => {
        cy.get('#section1Heading').click();
        cy.get('#section1Content').should('be.visible');
        cy.get('#section2Heading').click();
        cy.get('#section2Content').should('be.visible');
        cy.get('#section1Content').should('not.be.visible');
      });
    });

    // DatePicker
    describe('Datepicker Tests', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      beforeEach(() => {
        cy.visit('https://demoqa.com/date-picker');
      });

      it('should select a date', () => {
        cy.get('#datePickerMonthYearInput').click();
        cy.get('.react-datepicker__month-select').select('January');
        cy.get('.react-datepicker__year-select').select('2000');
        cy.get('.react-datepicker__day--001:not(.react-datepicker__day--outside-month)').click();
        cy.get('#datePickerMonthYearInput').should('have.value', '01/01/2000');
      });
    });

    // Slider
    describe('Slider Tests', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      beforeEach(() => {
        cy.visit('https://demoqa.com/slider');
      });

      it('should move the slider and verify the value', () => {
        const targetValue = 25;
        cy.get('input[type="range"]').invoke('val', targetValue).trigger('change');
        cy.get('#sliderValue').should('have.value', targetValue);
      });
    });
  });