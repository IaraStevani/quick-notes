const { defineConfig } = require("cypress");

module.exports = defineConfig({  
  e2e: {
    baseUrl: 'https://quick-notes.club/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
