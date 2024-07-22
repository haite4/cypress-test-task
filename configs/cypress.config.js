const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "y5nty9",
  e2e: {
    baseUrl: "https://demo.realworld.io/#",
    setupNodeEvents(on, config) {},
  },
  env: {
    login_url: "/login",
    register_url: "/register",
  },
});
