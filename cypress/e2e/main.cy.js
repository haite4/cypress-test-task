const mainPage = require("../pages/mainPage");

const navElements = ["app.login", "app.home", "app.register"];

describe("Verify all elements on the main page works correctly", () => {
  beforeEach("navigate to the main page", () => {
    mainPage.visitMainPage();
  });

  it("Verify elements on the header displayed correctly", () => {
    mainPage.bannerHeader
      .should("be.visible")
      .should("contain.text", "conduit")
      .should("contain.text", "A place to share your knowledge.");
  });

  it("Verify that elements on the navbar visible", () => {
    mainPage.navbarLogo.should("be.visible");
    for (let i = 0; i < navElements.length; i++) {
      mainPage.getNavbarLinks(navElements[i]).should("be.visible");
    }
  });

  it("Verify that sidebar and tag displayes", () => {
    mainPage.sideBarBlock.should("be.visible");
    mainPage.eachTags.should("be.visible");
  });

  it("Verify the visibility of the  pagination elements", () => {
    mainPage.pageItem.first().scrollIntoView({timeout:3000});
    mainPage.pageItem.should("be.visible");
  });
  
  it("Verify Correct Pagination Navigation", () => {
    mainPage.pageItem.first().scrollIntoView({ force: true });
    mainPage.pageItem.then((pages) => {
      const pageCount = pages.length;

      for (let i = 0; i < pageCount; i++) {
        mainPage.pageItem.eq(i).scrollIntoView({ force: true });

        mainPage.pageItem
          .eq(i)
          .should("be.visible")
          .invoke("text")
          .then((text) => {
            const cleanedText = text.trim().replace(/\s+/g, " ");
            expect(cleanedText).to.equal((i + 1).toString());
          });

        mainPage.pageItem.eq(i).click({ force: true });
      }
    });
  });
});
