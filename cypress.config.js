const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    defaultCommandTimeout: 30000,
    chromeWebSecurity: false,
    viewportHeight: 880,
    viewportWidth: 1280,
    waitForAnimations: true,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
  },
    env: {
      allureReuseAfterSpec: true,
    }


  },
});
