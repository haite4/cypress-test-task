class mainPage {
  get bannerHeader() {
    return cy.get(".banner");
  }

  get navbarLogo() {
    return cy.get(".navbar-brand");
  }

  get sideBarBlock() {
    return cy.get(".sidebar");
  }

  get eachTags() {
    return cy.get("div.tag-list > a");
  }

  get navbarLinksTags() {
    return cy.get("a.nav-link");
  }

  get pageItem() {
    return cy.get(".page-item");
  }

  visitMainPage() {
    cy.visit("/");
  }

  getNavbarLinks(uiSref) {
    return cy.get(`.nav-link[ui-sref="${uiSref}"]`);
  }
}

module.exports = new mainPage();
