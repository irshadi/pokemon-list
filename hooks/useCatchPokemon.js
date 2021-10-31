import React from "react";
import { useDisclosure } from "@chakra-ui/react";

export const CATCH_POKEMON_PHASE = {
  LOOKING_FOR_POKEMON: "LOOKING_FOR_POKEMON",
  FIND_POKEMON: "FIND_POKEMON",
  FAILED_TO_FIND_POKEMON: "FAILED_TO_FIND_POKEMON",
  CATCH_POKEMON: "CATCH_POKEMON",
  SUCCESS_CATCH_POKEMON: "SUCCESS_CATCH_POKEMON",
  FAILED_TO_CATCH_POKEMON: "FAILED_TO_CATCH_POKEMON",
  SAVE_POKEMON: "SAVE_POKEMON"
};

export const useCatchPokemon = name => {
  const [phase, _setPhase] = React.useState(
    CATCH_POKEMON_PHASE.LOOKING_FOR_POKEMON
  );
  const [message, _setMessage] = React.useState([]);
  const [errorMessage, _setErrorMessage] = React.useState("");

  const {
    isOpen: isCatchPokemonModalOpen,
    onToggle: onToggleCatchPokemonModal,
    onClose
  } = useDisclosure();

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
          copyMessage.push(`A wild ${name} has appeared!`);
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

      setTimeout(() => {
        _setPhase(CATCH_POKEMON_PHASE.CATCH_POKEMON);
        _setMessage(message => {
          const copyMessage = [...message];
          copyMessage.push(`Trainer use pokeball.`);
          return copyMessage;
        });
      }, 2000);

      setTimeout(() => {
        if (probability < 0.5) {
          _setPhase(CATCH_POKEMON_PHASE.FAILED_TO_CATCH_POKEMON);
          reject(`${name} has flee...`);
          return;
        }

        _setPhase(CATCH_POKEMON_PHASE.SUCCESS_CATCH_POKEMON);
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

  const handleContinueToSavePokemon = () =>
    _setPhase(CATCH_POKEMON_PHASE.SAVE_POKEMON);

  const onCloseCatchPokemonModal = () => {
    onClose();
    resetCatchPokemon();
  };

  return {
    phase,
    message,
    errorMessage,

    huntPokemon,

    handleContinueToSavePokemon,

    isCatchPokemonModalOpen,
    onToggleCatchPokemonModal,
    onCloseCatchPokemonModal
  };
};
