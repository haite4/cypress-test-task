const loginPage = require("../pages/loginPage");
const profileUserName = require("../pages/profilePage");
import valid_login_cred from "../fixtures/valid_login_cred.json";
import { faker } from "@faker-js/faker";

describe("Verify Login functionality", () => {
  const email = faker.internet.email();
  const password = faker.internet.password();

  beforeEach("Navigate to the login page", () => {
    loginPage.visitLoginPage();
  });
  it("Verify the register page", () => {
    loginPage.signInTitle.should("be.visible");
    loginPage.emailInput.should("be.visible");
    loginPage.passwordInput.should("be.visible");
    loginPage.singInButton.should("be.visible");
    loginPage.linkToSignUp.should("contain", "Need an account?");
  });
  it("Veriy the login with valid credentials", () => {
    valid_login_cred.forEach((cred) => {
      loginPage.login(cred.email, cred.password);
      profileUserName.profileUserName.should("contain.text", cred.username);
    });
  });
  it("Veriy the login with invalid credentials", () => {
    for (let i = 0; i < 6; i++) {
      loginPage.login(email, password);
      loginPage.clearLoginInputField();
      loginPage.loginErrorMessages.should("be.visible");
    }
  });
});
