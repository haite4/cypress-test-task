const registerPage = require("../pages/registerPage");
const profileUserName = require("../pages/profilePage");
import invalid_register_creds from "../fixtures/invalid_register_creds.json";
import { faker } from "@faker-js/faker";

describe("Verify register functionality", () => {
  const username = faker.internet.userName();
  const email = faker.internet.email();
  const password = faker.internet.password();

  beforeEach("Navigate to the register page ", () => {
    registerPage.visitRegisterPage();
  });
  
  it("Verify the register page", () => {
    registerPage.signUpTitle.should("be.visible");
    registerPage.userNameInput.should("be.visible");
    registerPage.emailInput.should("be.visible");
    registerPage.passwordInput.should("be.visible");
    registerPage.submitButton.should("be.visible");
    registerPage.linkToSignIn.should("contain", "Have an account?");
  });

  it("Verify the registration with valid credentials", () => {
    registerPage.registerNewUser(username, email, password);
    profileUserName.profileUserName.should("contain.text", username);
  });

  it("Verify the registration with invalid credentials", () => {
    invalid_register_creds.forEach((creds) => {
      registerPage.registerNewUser(creds.username, creds.email, creds.password);
      registerPage.clearRegisterInputField();
      registerPage.registerErrorMessages.should("be.visible");
    });
  });
});
