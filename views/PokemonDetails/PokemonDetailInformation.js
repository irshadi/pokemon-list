import React from "react";
import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react";
import { usePokemonDetailsContext } from "../../context/pokemonDetails";

export const PokemonDetailedInformation = () => {
  const {
    pokemonDetails: { pokemon },
    isPokemonDetailsLoading,
    artwork
  } = usePokemonDetailsContext();

  if (isPokemonDetailsLoading) {
    return "Loading";
  }
  const { name, types } = pokemon;
  console.log(pokemon, "<<<");
  return (
    <Box w="100%" p="1em" bg="system.white">
      <Flex
        w="100%%"
        bg="white"
        justify="center"
        borderRadius="md"
        boxShadow="md"
        flexDir="column"
        align="center"
      >
        <Image src={artwork} h="7.5em" w="7.5em" />
        <Box>
          <Text>{name} zdf</Text>
          {JSON.stringify(types)}
        </Box>
      </Flex>
    </Box>
  );
};
