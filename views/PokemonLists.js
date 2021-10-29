import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import SearchInput from "../components/Inputs/SearchInput";

export const PokemonLists = () => {
  const handleSearchPokemon = React.useCallback(() => {}, []);

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
    </Box>
  );
};
