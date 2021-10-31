import React from "react";
import { useUserPokemon } from "../hooks/useUserPokemon";

const UserPokemonContext = React.createContext({});

export const UserPokemonContextProvider = ({ children }) => {
  const value = useUserPokemon();
  return (
    <UserPokemonContext.Provider value={value}>
      {children}
    </UserPokemonContext.Provider>
  );
};

export const useUserPokemonContext = () => {
  return React.useContext(UserPokemonContext);
};
