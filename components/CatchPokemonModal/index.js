import React from "react";
import {
  ModalFooter,
  ModalBody,
  Button,
  Image,
  Flex,
  Box,
  Heading,
  Text
} from "@chakra-ui/react";
import { Modal } from "../Modal";
import {
  CATCH_POKEMON_PHASE,
  useCatchPokemon
} from "../../hooks/useCatchPokemon";
import { useCatchPokemonContext } from "../../context/catchPokemon";
import { usePokemonDetailsContext } from "../../context/pokemonDetails";
import { SavePokemon } from "./SavePokemon";
import { HuntPokemon } from "./HuntPokemon";

export const CatchPokemonModal = ({ ...props }) => {
  const {
    pokemonDetails: {
      pokemon: { name }
    }
  } = usePokemonDetailsContext();
  const {
    phase,
    huntPokemon,

    isCatchPokemonModalOpen,
    onCloseCatchPokemonModal
  } = useCatchPokemonContext();

  const generateCatchPokemonModalSection = () => {
    switch (phase) {
      case CATCH_POKEMON_PHASE.SAVE_POKEMON:
        return SavePokemon;

      default:
        return HuntPokemon;
    }
  };

  const CatchPokemonContent = generateCatchPokemonModalSection();

  // Trigger hunt pokemon on modal open
  // React.useEffect(() => {
  //   if (!isCatchPokemonModalOpen) {
  //     return;
  //   }
  //   huntPokemon();
  // }, [isCatchPokemonModalOpen]);

  return (
    <Modal
      {...props}
      isOpen={isCatchPokemonModalOpen}
      onClose={onCloseCatchPokemonModal}
      title={`Hunting for ${name}`}
      closeOnOverlayClick={false}
    >
      <CatchPokemonContent />
    </Modal>
  );
};
