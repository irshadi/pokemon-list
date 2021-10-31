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
    <Box w="100%" bg="system.white">
      <Grid templateColumns="repeat(1fr)" gap={3} p={[".5em", "1em"]}>
        {pokedexData.map((props, index) => (
          <PokedexItem key={`${props?.id}-${index}`} {...props} />
        ))}
      </Grid>
    </Box>
  );
};
