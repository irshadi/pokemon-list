import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { usePokemonDetailsContext } from "../context/pokemonDetails";

export const CATCH_POKEMON_PHASE = {
  LOOKING_FOR_POKEMON: "LOOKING_FOR_POKEMON",
  FIND_POKEMON: "FIND_POKEMON",
  FAILED_TO_FIND_POKEMON: "FAILED_TO_FIND_POKEMON",
  CATCH_POKEMON: "CATCH_POKEMON",
  SAVE_POKEMON: "SAVE_POKEMON",
  FAILED_TO_CATCH_POKEMON: "FAILED_TO_CATCH_POKEMON"
};

export const useCatchPokemon = () => {
  const [phase, _setPhase] = React.useState(
    CATCH_POKEMON_PHASE.LOOKING_FOR_POKEMON
  );
  const [nickName, setNickName] = React.useState("");
  const [message, _setMessage] = React.useState([]);
  const [errorMessage, _setErrorMessage] = React.useState("");

  const {
    isOpen: isCatchPokemonModalOpen,
    onToggle: onToggleCatchPokemonModal,
    onClose
  } = useDisclosure();
  const {
    pokemonDetails: {
      pokemon: { name }
    }
  } = usePokemonDetailsContext();

  const _findPokemon = probability =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        _setPhase(CATCH_POKEMON_PHASE.FIND_POKEMON);
        if (probability < 0.3) {
          _setPhase(CATCH_POKEMON_PHASE.FAILED_TO_FIND_POKEMON);
          reject(`Couldn't find ${name} in this moment.`);
          return;
        }

        _setMessage(message => {
          const copyMessage = [...message];
          copyMessage.push(`${name} found !`);
          return copyMessage;
        });
        resolve();
        return;
      }, 2000)
    );

  const _catchPokemon = probability =>
    new Promise((resolve, reject) => {
      if (probability < 0.3) {
        return;
      }
      _setMessage(message => {
        const copyMessage = [...message];
        copyMessage.push(`Attempting to catch ${name}.`);
        return copyMessage;
      });

      setTimeout(() => {
        _setPhase(CATCH_POKEMON_PHASE.CATCH_POKEMON);

        if (probability < 0.5) {
          _setPhase(CATCH_POKEMON_PHASE.FAILED_TO_CATCH_POKEMON);
          reject(`${name} has flee...`);
          return;
        }

        _setPhase(CATCH_POKEMON_PHASE.SAVE_POKEMON);
        _setMessage(message => {
          const copyMessage = [...message];
          message.push(`${name} catched successfully !`);
          return copyMessage;
        });
        resolve();
        return;
      }, 4000);
    });

  const huntPokemon = async () => {
    const probability = Math.random();

    try {
      _setMessage(message => {
        const copyMessage = [...message];
        message.push(`Looking for ${name}...`);
        return copyMessage;
      });
      await Promise.all([
        _findPokemon(probability),
        _catchPokemon(probability)
      ]);
    } catch (error) {
      _setErrorMessage(error);
    }
  };

  const resetCatchPokemon = () => {
    _setPhase(CATCH_POKEMON_PHASE.LOOKING_FOR_POKEMON);
    _setMessage([]);
    _setErrorMessage("");
  };

  const savePokemon = () => {};

  const onCloseCatchPokemonModal = () => {
    onClose();
    resetCatchPokemon();
  };

  return {
    phase,
    message,
    errorMessage,

    huntPokemon,

    isCatchPokemonModalOpen,
    onToggleCatchPokemonModal,
    onCloseCatchPokemonModal
  };
};
