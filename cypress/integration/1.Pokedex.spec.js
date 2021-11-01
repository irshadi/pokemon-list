describe("Pokedex Page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.url().should("equal", `${Cypress.config().baseUrl}/`);
    cy.wait(1000);
  });

  it("Should be able to render pokedex page", () => {
    cy.get('div[data-cy="page-title-wrapper"]').should("exist").as("pageTitle");

    // Should render page title
    cy.get("@pageTitle").within(() => {
      cy.get('h2[data-cy="page-title-heading"]').contains("Pokédex");
      cy.get('p[data-cy="page-title-label"]').contains(
        "The Pokédex contains list for every Pokemon in every generation."
      );
    });

    // Check Pokedex Entries
    cy.get('div[data-cy="pokedex-scrollable-area"]')
      .should("exist")
      .within(() => {
        cy.get('button[data-cy="pokedex-pokemon-button"]')
          .should("have.length", 10)
          .as("pokedexPokemonList");

        cy.get("@pokedexPokemonList").eq(0).as("pokemonListBulbasaur");

        // Test Render pokemon list 001
        // it happens to be "bulbasaur"
        cy.get("@pokemonListBulbasaur").within(() => {
          cy.get('img[data-cy="pokedex-item-pokemon-image"]').should("exist");
          cy.get('p[data-cy="pokedex-item-pokemon-id"]')
            .should("exist")
            .contains("#001");
          cy.get('h2[data-cy="pokedex-item-pokemon-name"]')
            .should("exist")
            .contains("bulbasaur");
        });
      });

    // Check Pagination Section
    cy.get('p[data-cy="page-information"]')
      .should("exist")
      .within(() => {
        cy.contains("Page 1 out of 112");
      });

    cy.get('button[data-cy="previous-page-button"]')
      .should("exist")
      .should("be.disabled");

    cy.get('button[data-cy="next-page-button"]')
      .should("exist")
      .should("be.enabled");
  });

  it("Should be able to navigate between pokedex paged pagination", () => {
    cy.get('p[data-cy="page-information"]').as("pageInformation");
    cy.get('button[data-cy="previous-page-button"]').as("prevPageButton");
    cy.get('button[data-cy="next-page-button"]').as("nextPageButton");

    cy.get("@pageInformation").within(() => {
      cy.contains("Page 1 out of 112");
    });

    // User click next page
    cy.get("@nextPageButton").click();
    cy.wait(1000);

    // Page information is updated
    cy.get("@pageInformation").within(() => {
      cy.contains("Page 2 out of 112");
    });
    cy.get("@prevPageButton").should("be.enabled");

    // Pokedex Item is Updated
    cy.get('div[data-cy="pokedex-scrollable-area"]').within(() => {
      cy.get('button[data-cy="pokedex-pokemon-button"]')
        .eq(0)
        .as("pokemonListMetapod");

      // it happens to be "metapod"
      cy.get("@pokemonListMetapod").within(() => {
        cy.get('img[data-cy="pokedex-item-pokemon-image"]').should("exist");
        cy.get('p[data-cy="pokedex-item-pokemon-id"]')
          .should("exist")
          .contains("#011");
        cy.get('h2[data-cy="pokedex-item-pokemon-name"]')
          .should("exist")
          .contains("metapod");
      });
    });

    // User click previous page
    cy.get("@prevPageButton").click();
    cy.wait(1000);
    cy.get("@pageInformation").within(() => {
      cy.contains("Page 1 out of 112");
    });
  });

  it("Should be able to navigate to pokemon details", () => {
    // Pokedex Item is Updated
    cy.get('div[data-cy="pokedex-scrollable-area"]').within(() => {
      cy.get('button[data-cy="pokedex-pokemon-button"]')
        .eq(0)
        .as("pokemonListBulbasaur");

      // Click Bulbasaur
      cy.get("@pokemonListBulbasaur").click().wait(2500);

      // Expect to change page
      cy.url().should(
        "equal",
        `${Cypress.config().baseUrl}/pokemon_details/bulbasaur`
      );
    });
  });
});
