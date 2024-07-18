const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "y5nty9",
  viewportWidth: 375,
  viewportHeight: 667,
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    baseUrl: "https://demo.realworld.io/#",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    env: {
      login_url: "/login",
      register_url: "/register",
    },
  },
});
