describe("games page tests", () => {
  let url =
    "https://hedonisticopportunist.github.io/back_to_the_arcades/game/index.html";
  it("contains the necessary header", () => {
    // ARRANGE
    cy.visit(url);
    // ACT - ASSERT
    cy.get("h1").should("contain", "Play Some Games! 👾⋆˚☆˖°👾");
  });

  it("contains the necessary description", () => {
    let descriptions = [
      "Welcome to our collection of feline‑centred mini games! 🐈",
      "Come and play with us — not forever and forever, but for as long as it stays entertaining",
      "The games open in a new window, and you'll have to hit the return button for the ones hosted on external sites to come back here. Don’t worry, we’ll be waiting for you.",
    ];
    // ARRANGE
    cy.visit(url);
    // ACT - ASSERT
    for (let i = 0; i < descriptions.length; i++) {
      cy.contains("p", descriptions[i]).should("exist");
    }
  });

  it("the first game button leads to the right page", () => {
    // ARRANGE
    cy.visit(url);
    // ACT - ASSERT
    cy.get("a")
      .contains("Our Mini Arcade Game 𖠌")
      .should("have.attr", "href", "../mini_game/index.html");
  });

  it("the second game button leads to the right page", () => {
    // ARRANGE
    cy.visit(url);
    // ACT - ASSERT
    cy.get("a")
      .contains("Hungry Space Cat on itch.io 𖠌")
      .should(
        "have.attr",
        "href",
        "https://hedonisticopportunist.itch.io/hungry-space-cat",
      );
  });

  it("the third game button leads to the right page", () => {
    // ARRANGE
    cy.visit(url);
    // ACT - ASSERT
    cy.get("a")
      .contains("More Space Cat Games on GitHub 𖠌")
      .should("have.attr", "href", "https://space-cats.vercel.app/games");
  });
});
