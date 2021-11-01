describe("Pokemon Details Page - Details", () => {
  beforeEach(() => {
    cy.visit("/pokemon_details");
    cy.url().should("equal", `${Cypress.config().baseUrl}/pokemon_details`);
  });

  it("Should be able to render pokemon details page", () => {
    cy.searchPokemon("lotad", { select: true });

    cy.get('div[data-cy="page-title-wrapper"]').should("exist").as("pageTitle");

    // Should render page title
    cy.get("@pageTitle").within(() => {
      cy.get('h2[data-cy="page-title-heading"]').contains("#270 - lotad");
    });

    cy.get('div[data-cy="pokemon-details-wrapper"]')
      .should("exist")
      .as("pokemonDetailsWrapper")
      .within(() => {
        // Check pokemon and ID
        cy.get('p[data-cy="pokemon-details-pokemon-id"]').contains("#270");
        cy.get('p[data-cy="pokemon-details-pokemon-name"]').contains("lotad");

        // Check pokemon type
        cy.get("div[data-cy='pokemon-type-chips']")
          .as("pokemonTypes")
          .should("have.length", 2);

        cy.get("@pokemonTypes").first().contains("water");
        cy.get("@pokemonTypes").last().contains("grass");

        // Check pokemon stats
        cy.get('div[data-cy="pokemon-details-pokemon-stats"]')
          .children()
          .as("pokemonStats")
          .should("have.length", 6);

        cy.get("@pokemonStats")
          .first()
          .within(() => {
            cy.contains("HP");
            cy.contains("40");
            cy.get('div[role="progressbar"]').should(
              "have.attr",
              "aria-valuenow",
              "40"
            );
          });

        cy.get("@pokemonStats")
          .eq(1)
          .within(() => {
            cy.contains("Attack");
            cy.contains("30");
            cy.get('div[role="progressbar"]').should(
              "have.attr",
              "aria-valuenow",
              "30"
            );
          });

        cy.get("@pokemonStats")
          .eq(2)
          .within(() => {
            cy.contains("Defense");
            cy.contains("30");
            cy.get('div[role="progressbar"]').should(
              "have.attr",
              "aria-valuenow",
              "30"
            );
          });

        cy.get("@pokemonStats")
          .eq(3)
          .within(() => {
            cy.contains("Sp. Attack");
            cy.contains("40");
            cy.get('div[role="progressbar"]').should(
              "have.attr",
              "aria-valuenow",
              "40"
            );
          });

        cy.get("@pokemonStats")
          .eq(4)
          .within(() => {
            cy.contains("Sp. Defense");
            cy.contains("50");
            cy.get('div[role="progressbar"]').should(
              "have.attr",
              "aria-valuenow",
              "50"
            );
          });

        cy.get("@pokemonStats")
          .last()
          .within(() => {
            cy.contains("Speed");
            cy.contains("30");
            cy.get('div[role="progressbar"]').should(
              "have.attr",
              "aria-valuenow",
              "30"
            );
          });
      });
  });

  it("Should be able to open move modal", () => {
    cy.searchPokemon("lotad", { select: true });

    cy.get('div[data-cy="pokemon-details-wrapper"]').within(() => {
      cy.get('button[data-cy="pokemon-details-move-list-button"]')
        .should("be.enabled")
        .click();
    });

    // Modal should open
    cy.get('section[data-cy="pokemon-move-list-modal"]')
      .should("exist")
      .within(() => {
        cy.get("header").contains("Pokemon Moves");
        cy.get("button").should("be.enabled").contains("Back").click();
      });
  });

  it("Should be able to capture and save pokemon", () => {
    cy.searchPokemon("bulbasaur", { select: true });

    cy.get('div[data-cy="pokemon-details-wrapper"]').within(() => {
      cy.get('button[data-cy="pokemon-details-catch-pokemon-button"]')
        .should("be.enabled")
        .click();
    });

    cy.get('section[data-cy="catch-pokemon-modal"]')
      .as("catchPokemonModal")
      .should("be.visible")
      .within(() => {
        cy.get("header").contains("Hunting for bulbasaur");

        cy.get('h2[data-cy="catch-pokemon-phase-title"]').contains(
          "Looking for bulbasaur"
        );
        cy.get('div[data-cy="catch-pokemon-message"]')
          .first()
          .contains("Looking for Bulbasaur...");
      });

    cy.tryCatchPokemon("bulbasaur");
    cy.get("@catchPokemonModal").within(() => {
      cy.get('h2[data-cy="catch-pokemon-phase-title"]').contains(
        "bulbasaur catched"
      );

      cy.get('button[data-cy="save-pokemon-button"]')
        .should("be.visible")
        .click();

      cy.get('button[data-cy="cancel-button"]').should("be.enabled");
      cy.get('button[data-cy="save-pokemon-button"]').should("be.disabled");

      cy.get('input[data-cy="pokemon-nickname-input"]')
        .should("not.have.value")
        .type("Monaco");

      cy.get('button[data-cy="save-pokemon-button"]')
        .should("be.enabled")
        .click();
    });

    // Toast fired
    cy.toastCalled("Successfully catched and saved Monaco.");
  });

  it("Should be able to show error on saving pokemon with existing nickname", () => {
    // Catch first pokemon
    cy.searchPokemon("bulbasaur", { select: true });

    cy.get('div[data-cy="pokemon-details-wrapper"]').within(() => {
      cy.get('button[data-cy="pokemon-details-catch-pokemon-button"]').click();
    });

    cy.tryCatchPokemon("bulbasaur");

    cy.get('section[data-cy="catch-pokemon-modal"]')
      .as("catchPokemonModal")
      .within(() => {
        cy.get('button[data-cy="save-pokemon-button"]').click();
        cy.get('input[data-cy="pokemon-nickname-input"]').type("Monaco");
        cy.get('button[data-cy="save-pokemon-button"]').click();
      });

    // Toast fired
    cy.get('li[class="chakra-toast"]').contains(
      "Successfully catched and saved Monaco."
    );

    // Catch second pokemon
    cy.visit("/pokemon_details");

    cy.searchPokemon("charmander", { select: true });

    cy.get('div[data-cy="pokemon-details-wrapper"]').within(() => {
      cy.get('button[data-cy="pokemon-details-catch-pokemon-button"]').click();
    });

    cy.tryCatchPokemon("charmander");

    cy.get("@catchPokemonModal").within(() => {
      cy.get('button[data-cy="save-pokemon-button"]').click();
      cy.get('input[data-cy="pokemon-nickname-input"]').type("Monaco");
      cy.get('button[data-cy="save-pokemon-button"]').click();
    });

    // Toast Error
    cy.toastCalled(
      "Pokemon with nickname: Monaco is already exist. Please give another nickname."
    );
  });
});
