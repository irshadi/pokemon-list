import React from "react";
import { PageWrapper } from "../../components/Page";
import { PokemonDetails } from "../../views/PokemonDetails";

const PokemonDetailsByName = () => (
  <PageWrapper page={PokemonDetails} needQuery />
);

export default PokemonDetailsByName;
