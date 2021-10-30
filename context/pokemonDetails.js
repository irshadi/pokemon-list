import React from "react";
import { usePokemonDetails } from "../hooks/usePokemonDetails";

const PokemonDetailsContext = React.createContext({});

export const PokemonDetailsContextProvider = ({
  children,
  pokemon,
  ...query
}) => {
  const value = usePokemonDetails(pokemon);
  return (
    <PokemonDetailsContext.Provider value={{ ...value, ...query }}>
      {children}
    </PokemonDetailsContext.Provider>
  );
};

export const usePokemonDetailsContext = () => {
  return React.useContext(PokemonDetailsContext);
};
