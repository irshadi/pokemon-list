// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

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
