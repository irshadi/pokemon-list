import React from "react";
import { usePokedex } from "../hooks/usePokedex";

const PokedexContext = React.createContext({});

export const PokedexContextProvider = ({ children }) => {
  const value = usePokedex();
  return (
    <PokedexContext.Provider value={value}>{children}</PokedexContext.Provider>
  );
};

export const usePokedexContext = () => {
  return React.useContext(PokedexContext);
};
