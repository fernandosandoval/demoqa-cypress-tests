describe('Form Submissions Page Tests', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    beforeEach(() => {
      cy.visit('https://demoqa.com/automation-practice-form');
    });

    it('should fill and submit the form successfully', () => {
      cy.get('#firstName').type('John');
      cy.get('#lastName').type('Doe');
      cy.get('#userEmail').type('john.doe@example.com');
      cy.get('#gender-radio-1').check({ force: true });
      cy.get('#userNumber').type('1234567890');
      cy.get('#dateOfBirthInput').click();
      cy.get('.react-datepicker__month-select').select('January');
      cy.get('.react-datepicker__year-select').select('2000');
      cy.get('.react-datepicker__day--001:not(.react-datepicker__day--outside-month)').click();
      cy.get('#subjectsInput').type('Computer Science{enter}');
      cy.get('#hobbies-checkbox-1').check({ force: true });
      cy.get('#uploadPicture').selectFile('cypress/fixtures/example.json'); // Ensure this file exists
      cy.get('#currentAddress').type('123 Main Street');
      cy.get('#state').click().find('#react-select-3-option-0').click();
      cy.get('#city').click().find('#react-select-4-option-0').click();
      cy.get('#submit').click();

      cy.get('.modal-title').should('contain', 'Thanks for submitting the form');
    });

    it('should validate form fields', () => {
      cy.get('#submit').click(); 
      cy.get('form').submit(); 
      cy.get('#firstName').should('have.css', 'border-color', 'rgb(220, 53, 69)'); 
      cy.get('#lastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.get('#userNumber').should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.get('#gender-radio-1').should('have.css', 'border-color', 'rgb(0, 0, 0)');
    });
  });    