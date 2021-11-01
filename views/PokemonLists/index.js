import React from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { ClientContentOnly } from "../../components/ClientContentOnly";
import { PokedexContent } from "./PokedexContent";
import {
  PokedexContextProvider,
  usePokedexContext
} from "../../context/pokedex";
import { PageTitle } from "../../components/Header/PageTitle";

export const PokemonLists = () => {
  const {
    handleClickPreviousPage,
    handleClickNextPage,
    totalPage,
    page: currentPage,
    isPokedexCalled
  } = usePokedexContext();

  return (
    <Box w="100%" h="100%">
      <PageTitle
        title="Pokédex"
        label="The Pokédex contains list for every Pokemon in every generation."
        hasBorder
      />

      <ClientContentOnly h="70%" overflowY="scroll">
        <PokedexContent />
      </ClientContentOnly>

      <Flex
        p="1em"
        align="center"
        h="12.5%"
        borderTop="solid 1px"
        borderColor="pokemon.grey.100"
      >
        <Flex w="50%">
          {Boolean(totalPage) && (
            <Text
              fontSize="md"
              color="system.grey"
              fontWeight="600"
              data-cy="page-information"
            >
              Page {currentPage + 1} out of {totalPage}
            </Text>
          )}
        </Flex>
        <Flex w="50%" justify="flex-end">
          <Button
            onClick={handleClickPreviousPage}
            mr=".5em"
            isDisabled={!currentPage}
            data-cy="previous-page-button"
          >
            Prev
          </Button>
          <Button
            data-cy="next-page-button"
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
