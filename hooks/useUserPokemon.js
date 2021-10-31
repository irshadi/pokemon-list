import React from "react";
import { POKEMON_STORAGE_CONFIG } from "../constants/storage";

export const useUserPokemon = () => {
  const [pokemons, setPokemons] = React.useState([]);

  const syncToLocalStorage = data => {
    localStorage.setItem(
      POKEMON_STORAGE_CONFIG.MY_POKEMON,
      JSON.stringify(data)
    );
  };
  const handleClickSavePokemon = savedPokemon => {
    // TODOS: Handle duplicate by nickname

    const copyPokemons = [...pokemons, savedPokemon];
    setPokemons(copyPokemons);
    syncToLocalStorage(copyPokemons);
  };

  const getInitialPokemon = React.useCallback(() => {
    const pokemons = JSON.parse(
      localStorage.getItem(POKEMON_STORAGE_CONFIG.MY_POKEMON)
    );

    console.log(pokemons);
  }, []);

  React.useEffect(() => {
    getInitialPokemon();
  }, [getInitialPokemon]);

  return {
    pokemons,
    handleClickSavePokemon
  };
};
