import React from "react";
import { Box, Text, Heading, Button } from "@chakra-ui/react";
import SearchInput from "../../components/Inputs/SearchInput";
import { ClientContentOnly } from "../../components/ClientContentOnly";
import { PokedexContent } from "./PokedexContent";
import {
  PokedexContextProvider,
  usePokedexContext
} from "../../context/pokedex";

const PokemonLists = () => {
  const { handleClickPreviousPage, handleClickNextPage } = usePokedexContext();
  return (
    <Box w="100%" h="100%">
      <Box
        w="100%"
        textAlign="start"
        p="1em"
        borderBottom="solid 1px"
        borderColor="pokemon.grey.100"
      >
        <Heading w="100%">Pokédex</Heading>
        <SearchInput placeholder="Search Pokemon..." />

        <Text>
          The Pokédex contains detailed information and stats for every Pokemon.
        </Text>
      </Box>
      <ClientContentOnly>
        <PokedexContent />
      </ClientContentOnly>
      <Box py="1em">
        <Button onClick={handleClickPreviousPage}>Prev</Button>
        <Button onClick={handleClickNextPage}>Next</Button>
      </Box>
    </Box>
  );
};

export const PokemonListsWrapper = () => {
  return (
    <PokedexContextProvider>
      <PokemonLists />
    </PokedexContextProvider>
  );
};
