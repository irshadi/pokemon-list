import React from "react";

export const useUserPokemon = () => {
  const [pokemons, setPokemons] = React.useState([]);

  const getInitialPokemon = React.useCallback(() => {
    const pokemons = JSON.parse(localStorage.getItem("MY_POKEMON"));

    console.log(pokemons);
  }, []);

  React.useEffect(() => {
    getInitialPokemon();
  }, [getInitialPokemon]);

  return {
    pokemons
  };
};
