// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("searchPokemon", (pokemonName, { select = false }) => {
  cy.get('input[data-cy="search-pokemon-input"]')
    .as("searchInput")
    .type(pokemonName);

  cy.wait(2000);

  if (select) {
    cy.get('button[data-cy="pokemon-search-view-pokemon-button"]').click();
    cy.wait(2000);

    cy.url().should(
      "equal",
      `${Cypress.config().baseUrl}/pokemon_details/${pokemonName}`
    );
  }
});

Cypress.Commands.add("huntPokemon", () => {
  cy.get('div[data-cy="pokemon-details-wrapper"]').within(() => {
    cy.get('button[data-cy="pokemon-details-catch-pokemon-button"]').click();
  });
});

Cypress.Commands.add("tryCatchPokemon", pokemonName => {
  cy.wait(5000);
  cy.get('div[data-cy="catch-pokemon-message"]').then($message => {
    const isCatchPokemonSuccess = $message
      .children()
      .last()
      .hasClass("chakra-text css-7fdrge");

    if (!isCatchPokemonSuccess) {
      cy.log(`Capture ${pokemonName} failed, retrying...`);
      // Click return
      cy.get('button[data-cy="return-button"]').click();

      // Click Hunt Pokemon
      cy.get('button[data-cy="pokemon-details-catch-pokemon-button"]')
        .should("be.enabled")
        .click();

      cy.tryCatchPokemon(pokemonName);
    } else {
      cy.log(`${pokemonName} captured`);
      return;
    }
  });
});

Cypress.Commands.add("savePokemon", nickname => {
  cy.get('section[data-cy="catch-pokemon-modal"]')
    .as("catchPokemonModal")
    .within(() => {
      cy.get('button[data-cy="save-pokemon-button"]').click();
      cy.get('input[data-cy="pokemon-nickname-input"]').type(nickname);
      cy.get('button[data-cy="save-pokemon-button"]').click();
    });

  // Toast fired
  cy.get('li[class="chakra-toast"]').contains(
    `Successfully catched and saved ${nickname}.`
  );
});

Cypress.Commands.add("toastCalled", message => {
  // Toast fired
  cy.get('li[class="chakra-toast"]').contains(message);
});
