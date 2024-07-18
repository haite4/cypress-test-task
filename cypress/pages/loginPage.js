class loginPage {
  get signInTitle() {
    return cy.get("h1.text-xs-center.ng-binding");
  }

  get emailInput() {
    return cy.get("input[placeholder='Email']");
  }

  get passwordInput() {
    return cy.get("input[placeholder='Password']");
  }

  get singInButton() {
    return cy.get(".btn");
  }

  get linkToSignUp() {
    return cy.get(`a[ui-sref="app.register"]`);
  }

  get loginErrorMessages() {
    return cy.get("ul.error-messages");
  }

  visitLoginPage() {
    cy.visit(Cypress.env("login_url"));
  }

  login(email, password) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.singInButton.click();
  }

  clearLoginInputField() {
    this.emailInput.should("not.be.disabled").should("be.visible").clear();
    this.passwordInput.should("not.be.disabled").should("be.visible").clear();
  }
}

module.exports = new loginPage();
