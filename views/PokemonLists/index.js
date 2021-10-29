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
        // bg="red"
        p="1em"
      >
        <Heading w="100%">Pokédex</Heading>
        <SearchInput placeholder="Search Pokemon..." />

        <Text>
          The Pokédex contains detailed information and stats for every Pokemon.
        </Text>
      </Box>
      {/* <Text>Pokemon Lists</Text> */}
      <Box>
        <Button onClick={handleClickPreviousPage}>Prev</Button>
        <Button onClick={handleClickNextPage}>Next</Button>
      </Box>
      <ClientContentOnly>
        <PokedexContent />
      </ClientContentOnly>
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
