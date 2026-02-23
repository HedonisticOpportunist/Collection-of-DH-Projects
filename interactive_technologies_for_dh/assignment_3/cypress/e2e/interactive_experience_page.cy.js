describe("interactive experience page tests", () => {
  let url =
    "https://hedonisticopportunist.github.io/back_to_the_arcades/video/index.html";
  it("contains the necessary header", () => {
    // ARRANGE
    cy.visit(url);
    // ACT - ASSERT
    cy.get("h1").should("contain", "Interactive Experience 🎧");
  });

  it("contains the necessary description", () => {
    let descriptions = [
      "Okay, it’s not exactly a video — more like a fun little arcade‑themed slideshow. 🙈",
      "Click the button to watch it!",
      "The interactive experience opens in a new window, and you'll have to hit the back button to return here for the ones hosted on external sites. Don’t worry, we’re not going anywhere.",
    ];
    // ARRANGE
    cy.visit(url);
    // ACT - ASSERT
    for (let i = 0; i < descriptions.length; i++) {
      cy.contains("p", descriptions[i]).should("exist");
    }
  });
  it("the interactive experience button leads to the right page", () => {
    // ARRANGE
    cy.visit(url);
    // ACT - ASSERT
    cy.get("a")
      .contains("Enter Interactive Experience 🥠")
      .should("have.attr", "href", "https://app.lumi.education/run/FTp-I4");
  });
});
