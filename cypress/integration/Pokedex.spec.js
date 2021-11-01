describe("Pokedex Page", () => {
  it("Should be able to render pokedex page", () => {
    cy.visit("/");
    cy.url().should("equal", "http://localhost:3001/");
  });

  // it("Should be able to navigate between pokedex paged pagination");
  // it("Should be able to navigate to pokemon details");
});
