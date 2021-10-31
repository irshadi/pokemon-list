import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useUserPokemonContext } from "../../context/userPokemon";
import { PokemonCard } from "../../components/PokemonCard";

export const ListOfMyPokemons = () => {
  const { pokemons } = useUserPokemonContext();

  return (
    <Box p="1em" bg="system.white">
      {pokemons.map((props, index) => {
        return (
          <PokemonCard
            key={`${props.nickName}-${index}`}
            {...props}
            index={index}
          />
        );
      })}
    </Box>
  );
};
