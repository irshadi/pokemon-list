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

export const CatchPokemonModal = ({ ...props }) => {
  const {
    pokemonDetails: {
      pokemon: { name }
    }
  } = usePokemonDetailsContext();
  const {
    phase,
    huntPokemon,
    message,
    errorMessage,

    isCatchPokemonModalOpen,
    onToggleCatchPokemonModal,
    onCloseCatchPokemonModal
  } = useCatchPokemonContext();

  const hasError = Boolean(errorMessage);

  // Trigger hunt pokemon on modal open
  React.useEffect(() => {
    if (!isCatchPokemonModalOpen) {
      return;
    }
    huntPokemon();
  }, [isCatchPokemonModalOpen]);

  return (
    <Modal
      {...props}
      isOpen={isCatchPokemonModalOpen}
      onClose={onCloseCatchPokemonModal}
      title={`Hunting for ${name}`}
      closeOnOverlayClick={false}
    >
      <ModalBody>
        <Flex w="inherit" justify="center">
          <Image
            src="/img/trainer.gif"
            p="1em"
            w={"5em"}
            h={"5em"}
            rounded="full"
            bg="system.white"
          />
        </Flex>
        <Box w="inherit" mt="1em">
          <Heading textTransform="capitalize" fontSize="md" textAlign="center">
            {phase.replace("_", " ")}
          </Heading>
          <Box
            w="inherit"
            bg="system.white"
            p="1em"
            borderRadius=".25em"
            mt="1em"
          >
            {message.map((m, index) => (
              <Text
                key={`${m}-${index}`}
                color={
                  phase === CATCH_POKEMON_PHASE.SAVE_POKEMON &&
                  index === message.length - 1
                    ? "pokemon.green.500"
                    : "system.grey"
                }
                fontWeight={
                  phase === CATCH_POKEMON_PHASE.SAVE_POKEMON &&
                  index === message.length - 1
                    ? "600"
                    : "normal"
                }
              >
                {m}
              </Text>
            ))}
            {hasError && (
              <Text color="pokemon.red.500" fontWeight="600">
                {errorMessage}
              </Text>
            )}
          </Box>
        </Box>
      </ModalBody>
      <ModalFooter></ModalFooter>
    </Modal>
  );
};
