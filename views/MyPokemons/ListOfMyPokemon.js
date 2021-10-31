import React from "react";
import { Grid } from "@chakra-ui/react";
import { useUserPokemonContext } from "../../context/userPokemon";
import { PokemonCard } from "../../components/PokemonCard";

export const ListOfMyPokemons = () => {
  const { pokemons } = useUserPokemonContext();

  return (
    <Grid
      p="1em"
      gap={4}
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)"
      ]}
    >
      {pokemons.map((props, index) => {
        return (
          <PokemonCard
            key={`${props.nickName}-${index}`}
            {...props}
            index={index}
          />
        );
      })}
    </Grid>
  );
};
