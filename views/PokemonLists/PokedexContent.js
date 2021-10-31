import React from "react";

import { usePokedexContext } from "../../context/pokedex";
import { Box, Grid } from "@chakra-ui/react";
import { PokedexItem } from "../../components/PokedexItem";

export const PokedexContent = () => {
  const {
    pokedexData: {
      pokemons: { results }
    },
    isPokedexLoading
  } = usePokedexContext();
  const loadingPlaceholder = Array.from({ length: 10 });
  const pokedexData = isPokedexLoading ? loadingPlaceholder : results;

  return (
    <Box w="100%" h="60vh" overflowY="scroll" bg="system.white">
      <Grid templateColumns="repeat(1fr)" gap={3} p="1em">
        {pokedexData.map(props => (
          <PokedexItem {...props} />
        ))}
      </Grid>
    </Box>
  );
};
