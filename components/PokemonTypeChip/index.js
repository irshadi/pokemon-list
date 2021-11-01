import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const TYPE_MAP = {
  NORMAL: "pokemon.grey.500",
  FIGHTING: "pokemon.red.700",
  FLYING: "pokemon.grey.200",
  POISON: "#B34DFF",
  GROUND: "#99582c",
  ROCK: "pokemon.orange.500",
  BUG: "pokemon.green.600",
  GHOST: "pokemon.grey.700",
  STEEL: "pokemon.grey.300",
  FIRE: "pokemon.red.500",
  WATER: "pokemon.blue.500",
  GRASS: "pokemon.green.500",
  ELECTRIC: "pokemon.yellow.500",
  PSYCHIC: "#FF4DCD",
  ICE: "#4DCBFF",
  DRAGON: "#B34DFF",
  DARK: "pokemon.grey.800",
  FAIRY: "#EA4D89",
  UNKNOWN: "system.grey",
  SHADOW: "pokemon.grey.600"
};

export const PokemonTypeChips = ({ type }) => {
  return (
    <Flex
      bg={TYPE_MAP[type.toUpperCase()]}
      py=".25em"
      px=".75em"
      textAlign="center"
      justify="center"
      borderRadius="full"
      mx=".25em"
      data-cy="pokemon-type-chips"
    >
      <Text
        color="white"
        textTransform="capitalize"
        fontWeight="800"
        textShadow="lg"
      >
        {type}
      </Text>
    </Flex>
  );
};
