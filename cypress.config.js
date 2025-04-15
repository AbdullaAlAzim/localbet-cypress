const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    reportFilename: "test-report",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true
  },
  e2e: {
    specPattern: "cypress/e2e/test/**/*.cy.{js,tsx,ts,tsx}",
    screenshotsOnRunFailure: true,
    baseUrl: "https://dev-user.localbet.xyz/",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      on("after:screenshot", (details) => {
        console.log(details);
      });
    },
    watchForFileChanges: false,
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
  screenshotsFolder: "cypress/screenshots",
  env: {
    baseUrl: "https://dev-user.localbet.xyz/",
  },
});