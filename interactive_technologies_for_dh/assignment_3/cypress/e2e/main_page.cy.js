describe("main page tests", () => {
  const url = "https://hedonisticopportunist.github.io/back_to_the_arcades/";

  it("contains the necessary header", () => {
    // ARRANGE
    cy.visit(url);

    // ACT - ASSERT
    cy.get("h1").should("contain", "Welcome ... 🕹️👻👾👻");
  });

  it("contains the necessary description", () => {
    const descriptions = [
      "Welcome to the digital exhibition celebrating the history and culture of arcade gaming, where disco may be dead, but the thrills are not lurking in the dark, but in the games we have to offer!",
      "Step into a neon-lit world full of retro fun, and don't be afraid of any nostalgic ghosts!👻",
      "Here you’ll find no gremlins, but a treasure trove of interactive retro-inspired mini-games, a VR experience that lets you go back in time, and an interactive video!",
    ];

    // ARRANGE
    cy.visit(url);

    // ACT - ASSERT
    descriptions.forEach((text) => {
      cy.contains("p", text).should("exist");
    });
  });

  it("the header contains the right text", () => {
    // ARRANGE
    cy.visit(url);
    // ACT - ASSERT
    cy.get("h1").should("contain", "Back to the Arcades 🕹️👾");
  });

  it("contains the right navigation links in the header", () => {
    const navLinks = [
      { text: "Home", href: "/back_to_the_arcades/index.html" },
      { text: "VR Arcade", href: "/back_to_the_arcades/vr/index.html" },
      { text: "Mini‑Games", href: "/back_to_the_arcades/game/index.html" },
      {
        text: "Interactive Experience",
        href: "/back_to_the_arcades/video/index.html",
      },
    ];

    // ARRANGE
    cy.visit(url);

    // ACT - ASSERT
    navLinks.forEach((link) => {
      cy.get("nav")
        .contains("a", link.text)
        .should("have.attr", "href", link.href);
    });
  });
  it("contains the right image", () => {
    // ARRANGE
    cy.visit(url);
    // ACT - ASSERT
    cy.get("img").should(
      "have.attr",
      "src",
      "/back_to_the_arcades/resources/arcade_cat.png",
    );
  });
  it("the footer contains the right text", () => {
    // ARRANGE
    cy.visit(url);
    // ACT - ASSERT
    cy.get("footer").should("contain", "🪙 Insert coin to continue...");
  });
});
