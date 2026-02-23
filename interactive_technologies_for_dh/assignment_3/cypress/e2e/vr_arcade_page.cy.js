describe("vr arcade page tests", () => {
  let url =
    "https://hedonisticopportunist.github.io/back_to_the_arcades/vr/index.html";
  it("contains the necessary header", () => {
    // ARRANGE
    cy.visit(url);
    // ACT - ASSERT
    cy.get("h1").should("contain", "VR Arcade Experience ᯅ 🥽🕹📹 🕶");
  });

  it("contains the necessary description", () => {
    let descriptions = [
      "Ready to take the plunge into retro-tinged nostalgia? 🎰",
      "Then, hold onto your coins, your purse and grab your wits, our VR environment will let you do just that, without even leaving the comfort of your home!",
      "(The VR experience opens in a new browser tab!)",
    ];
    // ARRANGE
    cy.visit(url);
    // ACT - ASSERT
    for (let i = 0; i < descriptions.length; i++) {
      cy.contains("p", descriptions[i]).should("exist");
    }
  });
  it("the VR arcade button leads to the right page", () => {
    // ARRANGE
    cy.visit(url);
    // ACT - ASSERT
    cy.get("a")
      .contains("Enter Full VR Arcade 🥽")
      .should("have.attr", "href", "../arcade/index.html");
  });
});
