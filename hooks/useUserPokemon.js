import React from "react";
import { useToast } from "@chakra-ui/toast";
import { POKEMON_STORAGE_CONFIG } from "../constants/storage";

export const useUserPokemon = () => {
  const [pokemons, setPokemons] = React.useState([]);
  const toast = useToast();

  const syncToLocalStorage = data => {
    localStorage.setItem(
      POKEMON_STORAGE_CONFIG.MY_POKEMON,
      JSON.stringify(data)
    );
  };

  const clearAllPokemon = () => {
    setPokemons([]);
    localStorage.setItem(POKEMON_STORAGE_CONFIG.MY_POKEMON, JSON.stringify([]));
  };

  const handleSavePokemon = savedPokemon => {
    //  Handle duplicate by nickname
    const { nickName } = savedPokemon;
    const foundIndex = pokemons.findIndex(
      ({ nickName: _nickName }) =>
        nickName.toLowerCase() === _nickName.toLowerCase()
    );
    const isDuplicate = foundIndex !== -1;

    if (isDuplicate) {
      toast({
        title: "Nickname already exist",
        position: "top-right",
        description: `Pokemon with nickname: ${nickName} is already exist. Please give another nickname.`,
        status: "error",
        duration: 3000,
        isClosable: true
      });
      return;
    }

    const copyPokemons = [...pokemons, savedPokemon];
    setPokemons(copyPokemons);
    syncToLocalStorage(copyPokemons);
    toast({
      title: "Pokemon Saved",
      position: "top-right",
      description: `Successfully catched and saved ${nickName}.`,
      status: "success",
      duration: 3000,
      isClosable: true
    });
  };

  const handleDeletePokemon = index => {
    const copyPokemons = [...pokemons];
    const { nickName } = copyPokemons[index];

    copyPokemons.splice(index, 1);
    setPokemons(copyPokemons);
    syncToLocalStorage(copyPokemons);

    toast({
      title: "Pokemon Released",
      position: "top-right",
      description: `${nickName} released.`,
      status: "success",
      duration: 3000,
      isClosable: true
    });
  };

  const checkPokemon = pokemon => {
    const foundIndex = pokemons.findIndex(
      ({ name: _pokemon }) => _pokemon === pokemon
    );
    return foundIndex !== -1;
  };

  const getInitialPokemon = React.useCallback(() => {
    const pokemons = JSON.parse(
      localStorage.getItem(POKEMON_STORAGE_CONFIG.MY_POKEMON)
    );

    setPokemons(pokemons);
  }, [setPokemons]);

  React.useEffect(() => {
    getInitialPokemon();
  }, [getInitialPokemon]);

  return {
    pokemons,
    handleSavePokemon,
    handleDeletePokemon,
    clearAllPokemon,
    checkPokemon
  };
};
