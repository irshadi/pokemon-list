import React from "react";
import { Box } from "@chakra-ui/react";
import { PageTitle } from "../../components/Header/PageTitle";
import { ClientContentOnly } from "../../components/ClientContentOnly";
import { SearchResult } from "./SearchResult";
import { PokemonDetailsContextProvider } from "../../context/pokemonDetails";

export const SearchPokemon = () => {
  return (
    <Box>
      <PageTitle
        title="Search Pokemon"
        label="The Pokedex contains detailed stats for every create from the Pokemon games. You can search by pokemon name."
      />

      <ClientContentOnly>
        <SearchResult />
      </ClientContentOnly>
    </Box>
  );
};

export const SearchPokemonWrapper = () => {
  return (
    <PokemonDetailsContextProvider>
      <SearchPokemon />
    </PokemonDetailsContextProvider>
  );
};