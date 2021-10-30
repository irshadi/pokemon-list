import React from "react";
import { Box, Text, Heading, Flex, Button } from "@chakra-ui/react";
import { ClientContentOnly } from "../../components/ClientContentOnly";
import { PokedexContent } from "./PokedexContent";
import {
  PokedexContextProvider,
  usePokedexContext
} from "../../context/pokedex";

const PokemonLists = () => {
  const {
    pokedexData: { prevOffset },
    handleClickPreviousPage,
    handleClickNextPage,
    totalPage,
    page: currentPage,
    isPokedexCalled
  } = usePokedexContext();
  return (
    <Box w="100%" h="100%">
      <Box
        w="100%"
        textAlign="start"
        p="1em"
        borderBottom="solid 1px"
        borderColor="pokemon.grey.100"
      >
        <Heading w="100%" color="system.grey">
          Pokédex
        </Heading>
        <Text mt=".5em" fontSize="md" color="system.grey">
          The Pokédex contains list for every Pokemon in every generation.
        </Text>
      </Box>
      <ClientContentOnly>
        <PokedexContent />
      </ClientContentOnly>
      <Flex p="1em" align="center">
        <Flex w="50%">
          {isPokedexCalled && (
            <Text fontSize="md" color="system.grey" fontWeight="600">
              Page {currentPage + 1} out of {totalPage}
            </Text>
          )}
        </Flex>
        <Flex w="50%" justify="flex-end">
          <Button
            onClick={handleClickPreviousPage}
            mr=".5em"
            isDisabled={!currentPage}
          >
            Prev
          </Button>
          <Button
            onClick={handleClickNextPage}
            isDisabled={currentPage === totalPage}
          >
            Next
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export const PokemonListsWrapper = () => {
  return (
    <PokedexContextProvider>
      <PokemonLists />
    </PokedexContextProvider>
  );
};
