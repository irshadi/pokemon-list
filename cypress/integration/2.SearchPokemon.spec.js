describe("Pokemon Details Page - Search Pokemon", () => {
  beforeEach(() => {
    cy.visit("/pokemon_details");
    cy.url().should("equal", `${Cypress.config().baseUrl}/pokemon_details`);
  });

  it("Should be able to render search pokemon page", () => {
    cy.get('div[data-cy="page-title-wrapper"]').should("exist").as("pageTitle");

    // Should render page title
    cy.get("@pageTitle").within(() => {
      cy.get('h2[data-cy="page-title-heading"]').contains("Search Pokemon");
      cy.get('p[data-cy="page-title-label"]').contains(
        "The Pokedex contains detailed stats for every create from the Pokemon games. You can search by pokemon name."
      );
    });

    // Search input should be visible
    cy.get('input[data-cy="search-pokemon-input"]')
      .should("have.attr", "placeholder", "Search Pokemon...")
      .should("not.have.value");
  });

  it("Should be able to search pokemon", () => {
    cy.get('input[data-cy="search-pokemon-input"]').type("mew");

    cy.wait(2000);

    // Result found
    cy.get('[data-cy="pokemon-card-wrapper"]').within(() => {
      cy.get('p[data-cy="pokemon-card-pokemon-id"]').contains("#151");
      cy.get('p[data-cy="pokemon-card-pokemon-name"]').contains("mew");
      cy.get('div[data-cy="pokemon-type-chips"]')
        .should("be.visible")
        .contains("psychic");
    });
  });

  it("Should be able to return message if searched pokemon is not found", () => {
    cy.get('input[data-cy="search-pokemon-input"]')
      .as("searchInput")
      .type("kombi");

    cy.wait(2000);

    // No result found
    cy.get('div[data-cy="pokemon-search-result-empty"]').within(() => {
      cy.contains("Can not find any result");
      cy.contains("Pokemon doesn't exist");
    });

    // Click clear search input
    cy.get("@searchInput")
      .parent()
      .find('button[data-cy="clear-search-input-button"]')
      .should("be.enabled")
      .click();

    cy.get("@searchInput").should("not.have.value");
  });
});
