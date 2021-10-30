import React from "react";
import { PageWrapper } from "../../components/Page";
import { PokemonDetailsWrapper } from "../../views/PokemonDetails";

const PokemonDetailsByName = () => (
  <PageWrapper page={PokemonDetailsWrapper} needQuery />
);

export default PokemonDetailsByName;
