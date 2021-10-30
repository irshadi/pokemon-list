import React from "react";
import { Box } from "@chakra-ui/react";
import { PageTitle } from "../../components/Header/PageTitle";
import { useRouter } from "next/router";
import {
  PokemonDetailsContextProvider,
  usePokemonDetailsContext
} from "../../context/pokemonDetails";
import { ClientContentOnly } from "../../components/ClientContentOnly";
import { PokemonDetailedInformation } from "./PokemonDetailInformation";

const PokemonDetails = () => {
  const { name } = usePokemonDetailsContext();
  return (
    <Box w="100%">
      <PageTitle title={name} label="" />

      <ClientContentOnly>
        <PokemonDetailedInformation />
      </ClientContentOnly>
    </Box>
  );
};

export const PokemonDetailsWrapper = ({ name }) => {
  return (
    <PokemonDetailsContextProvider pokemon={name}>
      <PokemonDetails />
    </PokemonDetailsContextProvider>
  );
};
