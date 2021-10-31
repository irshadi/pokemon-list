import { useRouter } from "next/router";
import React from "react";
import { useCatchPokemon } from "../hooks/useCatchPokemon";

const CatchPokemonContext = React.createContext({});

export const CatchPokemonContextProvider = ({ children }) => {
  const {
    query: { name: pokemon }
  } = useRouter();
  const value = useCatchPokemon(
    pokemon.charAt(0).toUpperCase() + pokemon.slice(1)
  );

  return (
    <CatchPokemonContext.Provider value={value}>
      {children}
    </CatchPokemonContext.Provider>
  );
};

export const useCatchPokemonContext = () => {
  return React.useContext(CatchPokemonContext);
};
