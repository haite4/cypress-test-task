class profilePage {
  get profileUserName() {
    return cy.get("a.nav-link.ng-binding");
  }
}

module.exports = new profilePage();
