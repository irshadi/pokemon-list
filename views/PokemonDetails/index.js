import React from "react";
import { Box } from "@chakra-ui/react";
import { PageTitle } from "../../components/Header/PageTitle";
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

  const title = !id && !name ? "Loading..." : `${generateId(id)} - ${name}`;
  return (
    <Box w="100%" h="inherit">
      <PageTitle title={title} h="10%" hasBorder />
      <ClientContentOnly h="90%" bg="system.white">
        <CatchPokemonContextProvider pokemon={name}>
          <PokemonDetailedInformation />
        </CatchPokemonContextProvider>
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
