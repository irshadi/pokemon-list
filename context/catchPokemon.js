import React from "react";
import { useCatchPokemon } from "../hooks/useCatchPokemon";

const CatchPokemonContext = React.createContext({});

export const CatchPokemonContextProvider = ({ children }) => {
  const value = useCatchPokemon();
  return (
    <CatchPokemonContext.Provider value={value}>
      {children}
    </CatchPokemonContext.Provider>
  );
};

export const useCatchPokemonContext = () => {
  return React.useContext(CatchPokemonContext);
};
