import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { ListOfMyPokemons } from "./ListOfMyPokemon";
import { PageTitle } from "../../components/Header/PageTitle";
import { ClientContentOnly } from "../../components/ClientContentOnly";
import { useUserPokemonContext } from "../../context/userPokemon";

export const MyPokemons = () => {
  const { pokemons, clearAllPokemon } = useUserPokemonContext();
  return (
    <Box w="100%" h="100%">
      <PageTitle
        title="My Pokemon"
        label="This page contain all of your catched pokemons."
        h="25%"
        hasBorder
      >
        <Button
          mt={[".5em", "2.5em", ".75em", "1em"]}
          colorScheme="red"
          onClick={clearAllPokemon}
          isDisabled={!pokemons.length}
        >
          Release All Pokemon
        </Button>
      </PageTitle>
      <ClientContentOnly bg="system.white" h="75%" overflowY="auto">
        <ListOfMyPokemons />
      </ClientContentOnly>
    </Box>
  );
};
