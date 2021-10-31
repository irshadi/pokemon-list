import React from "react";
import { Box } from "@chakra-ui/react";
import { ListOfMyPokemons } from "./ListOfMyPokemon";
import { PageTitle } from "../../components/Header/PageTitle";
import { ClientContentOnly } from "../../components/ClientContentOnly";

export const MyPokemons = () => {
  return (
    <Box w="100%">
      <PageTitle title="My Pokemon" label="" />
      <ClientContentOnly>
        <ListOfMyPokemons />
      </ClientContentOnly>
    </Box>
  );
};
