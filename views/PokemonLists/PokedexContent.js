import React from "react";

import { usePokedexContext } from "../../context/pokedex";
import { Box, Grid } from "@chakra-ui/react";
import { PokedexItem } from "../../components/PokedexItem";

export const PokedexContent = () => {
  const { pokedexData, isPokedexLoading } = usePokedexContext();
  if (isPokedexLoading) return "Loading";

  return (
    <Box w="100%" h="60vh" overflowY="scroll" bg="system.white">
      <Grid templateColumns="repeat(1fr)" gap={3} p="1em">
        {pokedexData.pokemons.results.map(props => (
          <PokedexItem key={props.id} {...props} />
        ))}
      </Grid>
    </Box>
  );
};
