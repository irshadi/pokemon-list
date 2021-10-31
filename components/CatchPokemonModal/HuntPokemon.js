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

export const HuntPokemon = () => {
  const {
    phase,
    message,
    errorMessage,
    onCloseCatchPokemonModal,
    handleContinueToSavePokemon
  } = useCatchPokemonContext();
  const hasError = Boolean(errorMessage);
  const isPokemonCatched = phase === CATCH_POKEMON_PHASE.SUCCESS_CATCH_POKEMON;

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
              <Text color="pokemon.red.500" fontWeight="600">
                {errorMessage}
              </Text>
            )}
          </Box>
        </Box>
      </ModalBody>
      <ModalFooter>
        <Flex justify="center" w="100%">
          {hasError && (
            <Button onClick={onCloseCatchPokemonModal}>Return</Button>
          )}
          {isPokemonCatched && (
            <Button onClick={handleContinueToSavePokemon}>Save Pokemon</Button>
          )}
        </Flex>
      </ModalFooter>
    </React.Fragment>
  );
};
