const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    defaultCommandTimeout: 30000,
    chromeWebSecurity: false,
    viewportHeight: 880,
    viewportWidth: 1280,
    waitForAnimations: true,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
    },

       //chromeWebSecurity: 'false'
  },
});
