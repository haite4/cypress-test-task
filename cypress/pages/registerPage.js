class registerPage {
  get signUpTitle() {
    return cy.get(".text-xs-center");
  }
  get userNameInput() {
    return cy.get(".form-control").eq(0);
  }

  get emailInput() {
    return cy.get(".form-control").eq(1);
  }

  get passwordInput() {
    return cy.get(".form-control").eq(2);
  }

  get submitButton() {
    return cy.get(".btn");
  }

  get registerErrorMessages() {
    return cy.get("ul.error-messages");
  }

  get linkToSignIn() {
    return cy.get(`a[ui-sref="app.login"]`);
  }

  visitRegisterPage() {
    cy.visit(Cypress.env("register_url"));
  }

  registerNewUser(username, email, password) {
    this.userNameInput.type(username);
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.submitButton.click();
  }

  clearRegisterInputField() {
    this.userNameInput.should("not.be.disabled").should("be.visible").clear();
    this.emailInput.should("not.be.disabled").should("be.visible").clear();
    this.passwordInput.should("not.be.disabled").should("be.visible").clear();
  }
}

module.exports = new registerPage();
