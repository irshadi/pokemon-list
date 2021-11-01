import React from "react";
import { Box } from "@chakra-ui/react";
import { PageTitle } from "../../components/Header/PageTitle";
import { ClientContentOnly } from "../../components/ClientContentOnly";
import { SearchResult } from "./SearchResult";
import {
  PokemonDetailsContextProvider,
  usePokemonDetailsContext
} from "../../context/pokemonDetails";
import { SearchInput } from "../../components/Inputs";

export const SearchPokemon = () => {
  const { setSearchValue, isPokemonDetailsLoading } =
    usePokemonDetailsContext();
  return (
    <Box w="100%" h="100%">
      <PageTitle
        title="Search Pokemon"
        label="The Pokedex contains detailed stats for every create from the Pokemon games. You can search by pokemon name."
        isHorizontal={false}
        flexDir="column"
        justify="center"
        h="32.5%"
        hasBorder
      >
        <SearchInput
          onSearch={setSearchValue}
          isSearching={isPokemonDetailsLoading}
          placeholder="Search Pokemon..."
          data-cy="search-pokemon-input"
        />
      </PageTitle>

      <ClientContentOnly h="67.5%" bg="system.white">
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
