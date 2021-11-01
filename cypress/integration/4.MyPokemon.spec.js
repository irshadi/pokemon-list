describe("My Pokemon Page", () => {
  it("Should be able to render my pokemon page", () => {
    cy.visit("/my_pokemons");
    cy.url().should("equal", `${Cypress.config().baseUrl}/my_pokemons`);
    cy.get('div[data-cy="page-title-wrapper"]').should("exist").as("pageTitle");

    // Should render page title
    cy.get("@pageTitle").within(() => {
      cy.get('h2[data-cy="page-title-heading"]').contains("My Pokemon");
      cy.get('p[data-cy="page-title-label"]').contains(
        "This page contain all of your catched pokemons."
      );
    });

    cy.get('button[data-cy="release-all-pokemon-button"]').should(
      "be.disabled"
    );
  });

  it("Should be able to navigate to pokemon details", () => {
    cy.visit("/pokemon_details");
    cy.searchPokemon("slowpoke", { select: true });
    cy.huntPokemon();
    cy.tryCatchPokemon("slowpoke");
    cy.savePokemon("Liberty");

    cy.visit("/my_pokemons");
    cy.wait(2000);

    cy.get('div[data-cy="my-pokemons-lists"]').within(() => {
      cy.get('div[data-cy="pokemon-card-wrapper"]')
        .should("have.length", 1)
        .as("slowpoke");

      // Click select more
      cy.get("@slowpoke").within(() => {
        cy.get('button[data-cy="pokemon-card-more-button"]').click();
        cy.get('button[data-cy="pokemon-information-button"]')
          .should("be.enabled")
          .click();
      });
    });

    cy.wait(1000);
    cy.url().should(
      "equal",
      `${Cypress.config().baseUrl}/pokemon_details/slowpoke`
    );
  });

  it("Should be able to release pokemon", () => {
    cy.visit("/pokemon_details");
    cy.searchPokemon("magikarp", { select: true });
    cy.huntPokemon();
    cy.tryCatchPokemon("magikarp");
    cy.savePokemon("Port Moresby");

    cy.visit("/my_pokemons");
    cy.wait(2000);

    cy.get('div[data-cy="my-pokemons-lists"]').within(() => {
      cy.get('div[data-cy="pokemon-card-wrapper"]')
        .should("have.length", 1)
        .as("magikarp");

      // Click select more
      cy.get("@magikarp").within(() => {
        cy.get('button[data-cy="pokemon-card-more-button"]').click();
        cy.get('button[data-cy="pokemon-release-button"]')
          .should("be.enabled")
          .click();
      });
    });

    // Delete modal show
    cy.get('section[data-cy="pokemon-card-modal"]')
      .should("exist")
      .within(() => {
        cy.contains("Are you sure you want to release Useless");
        cy.get('button[data-cy="release-pokemon-cancel-button"]').should(
          "be.enabled"
        );
        cy.get('button[data-cy="release-pokemon-release-button"]')
          .should("be.enabled")
          .click();
      });

    cy.toastCalled("Port Moresby released.");
  });

  it("Should be able to release all pokemon", () => {
    cy.visit("/pokemon_details");
    cy.searchPokemon("bulbasaur", { select: true });
    cy.huntPokemon();
    cy.tryCatchPokemon("bulbasaur");
    cy.savePokemon("Monaco");

    cy.visit("/pokemon_details");
    cy.searchPokemon("squirtle", { select: true });
    cy.huntPokemon();
    cy.tryCatchPokemon("squirtle");
    cy.savePokemon("Toronto");

    cy.visit("/pokemon_details");
    cy.searchPokemon("charmander", { select: true });
    cy.huntPokemon();
    cy.tryCatchPokemon("charmander");
    cy.savePokemon("Vladivostok");

    cy.visit("/my_pokemons");
    cy.wait(2000);

    cy.get('div[data-cy="my-pokemons-lists"]').within(() => {
      cy.get('div[data-cy="pokemon-card-wrapper"]').should("have.length", 3);
    });

    cy.get('button[data-cy="release-all-pokemon-button"]')
      .should("be.enabled")
      .click();

    cy.toastCalled("You released all of your pokemons.");
  });
});
