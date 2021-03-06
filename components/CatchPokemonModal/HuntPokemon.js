import React from "react";
import {
  Flex,
  Image,
  Box,
  Heading,
  Text,
  ModalBody,
  ModalFooter,
  Button
} from "@chakra-ui/react";
import { useCatchPokemonContext } from "../../context/catchPokemon";
import { CATCH_POKEMON_PHASE } from "../../hooks/useCatchPokemon";
import { usePokemonDetailsContext } from "../../context/pokemonDetails";

export const HuntPokemon = () => {
  const {
    pokemonDetails: { pokemon: { name: pokemon } = {} }
  } = usePokemonDetailsContext();
  const {
    phase,
    message,
    errorMessage,
    onCloseCatchPokemonModal,
    handleContinueToSavePokemon
  } = useCatchPokemonContext();
  const hasError = Boolean(errorMessage);
  const isPokemonCatched = phase === CATCH_POKEMON_PHASE.SUCCESS_CATCH_POKEMON;

  const HUNT_POKEMON_PHASE_COPY = {
    [CATCH_POKEMON_PHASE.LOOKING_FOR_POKEMON]: `Looking for ${pokemon}`,
    [CATCH_POKEMON_PHASE.FIND_POKEMON]: `A wild ${pokemon} has appeared`,
    [CATCH_POKEMON_PHASE.FAILED_TO_FIND_POKEMON]: `${pokemon} is nowhere to be found`,

    [CATCH_POKEMON_PHASE.CATCH_POKEMON]: `Attempting to catch ${pokemon}!`,
    [CATCH_POKEMON_PHASE.SUCCESS_CATCH_POKEMON]: `${pokemon} catched!`,
    [CATCH_POKEMON_PHASE.FAILED_TO_CATCH_POKEMON]: `Failed to catch ${pokemon}`
  };

  return (
    <React.Fragment>
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
          <Heading
            textTransform="capitalize"
            fontSize="md"
            textAlign="center"
            data-cy="catch-pokemon-phase-title"
          >
            {HUNT_POKEMON_PHASE_COPY[phase]}
          </Heading>
          <Box
            w="inherit"
            bg="system.white"
            p="1em"
            borderRadius=".25em"
            mt="1em"
            data-cy="catch-pokemon-message"
          >
            {message.map((m, index) => (
              <Text
                key={`${m}-${index}`}
                color={
                  isPokemonCatched && index === message.length - 1
                    ? "pokemon.green.500"
                    : "system.grey"
                }
                fontWeight={
                  isPokemonCatched && index === message.length - 1
                    ? "600"
                    : "normal"
                }
              >
                {m}
              </Text>
            ))}
            {hasError && (
              <Text
                color="pokemon.red.500"
                fontWeight="600"
                data-cy="catch-pokemon-error-message"
              >
                {errorMessage}
              </Text>
            )}
          </Box>
        </Box>
      </ModalBody>
      <ModalFooter>
        <Flex justify="center" w="100%">
          {hasError && (
            <Button onClick={onCloseCatchPokemonModal} data-cy="return-button">
              Return
            </Button>
          )}
          {isPokemonCatched && (
            <Button
              onClick={handleContinueToSavePokemon}
              data-cy="save-pokemon-button"
            >
              Save Pokemon
            </Button>
          )}
        </Flex>
      </ModalFooter>
    </React.Fragment>
  );
};
