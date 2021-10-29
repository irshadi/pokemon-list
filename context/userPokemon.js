import React from "react";
import { useUserPokemon } from "../hooks/useUserPokemon";

const UserPokemonContext = React.createContext({});

export const UserPokemonContextProvider = ({ children }) => {
  // const a = localStorage.getItem("HAHA");
  // console.log(a);

  const value = useUserPokemon();
  return (
    <UserPokemonContext.Provider value={value}>
      {children}
    </UserPokemonContext.Provider>
  );
};

export const usePokedexContext = () => {
  return React.useContext(UserPokemonContext);
};
