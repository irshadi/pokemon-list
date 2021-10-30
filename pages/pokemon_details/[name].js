import React from "react";
import { PageWrapper } from "../../components/Page";

const PokemonDetailsByName = () => (
  <PageWrapper
    page={({ ...props }) => {
      return <div>PokemonDetailsByName {JSON.stringify(props)}</div>;
    }}
  />
);

export default PokemonDetailsByName;
