import React from "react";
import { Box } from "@chakra-ui/react";
import { PageTitle } from "../../components/Header/PageTitle";
import { useRouter } from "next/router";
import {
  PokemonDetailsContextProvider,
  usePokemonDetailsContext
} from "../../context/pokemonDetails";
import { CatchPokemonContextProvider } from "../../context/catchPokemon";
import { ClientContentOnly } from "../../components/ClientContentOnly";
import { PokemonDetailedInformation } from "./PokemonDetailInformation";
import { generateId } from "../../helper";

const PokemonDetails = () => {
  const {
    pokemonDetails: { pokemon: { id = "", name = "" } = {} }
  } = usePokemonDetailsContext();

  const title = `#${generateId(id)} - ${name}`;
  return (
    <Box w="100%">
      <PageTitle title={title} label="" />
      <ClientContentOnly>
        <PokemonDetailedInformation />
      </ClientContentOnly>
    </Box>
  );
};

export const PokemonDetailsWrapper = ({ name }) => {
  return (
    <PokemonDetailsContextProvider pokemon={name}>
      <CatchPokemonContextProvider pokemon={name}>
        <PokemonDetails />
      </CatchPokemonContextProvider>
    </PokemonDetailsContextProvider>
  );
};
