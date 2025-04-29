const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    specPattern: 'cypress/integration/**/*.spec.js',
    supportFile: 'cypress/support/index.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'spec',
    reporterOptions: {
      mochaFile: 'cypress/reports/junit-[hash].xml'
    },
    video: false,
    screenshotOnRunFailure: false
  }
});