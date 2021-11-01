import React from "react";
import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import { ListOfMyPokemons } from "./ListOfMyPokemon";
import { PageTitle } from "../../components/Header/PageTitle";
import { ClientContentOnly } from "../../components/ClientContentOnly";
import { DeletePokemonModal } from "../Fragments/DeletePokemonModal";
import { useUserPokemonContext } from "../../context/userPokemon";

export const MyPokemons = () => {
  const {
    isOpen: isReleasePokemonModalOpen,
    onClose: onCloseReleasePokemonModal,
    onToggle: onToggleReleasePokemonModal
  } = useDisclosure();
  const { pokemons } = useUserPokemonContext();

  return (
    <Box w="100%" h="100%">
      <DeletePokemonModal
        isDeletingAll
        isOpen={isReleasePokemonModalOpen}
        onClose={onCloseReleasePokemonModal}
        data-cy="pokemon-card-modal"
      />
      <PageTitle
        title="My Pokemon"
        label="This page contain all of your catched pokemons."
        hasBorder
      >
        <Flex w="40%" h="100%" justify="flex-end">
          <Button
            colorScheme="red"
            mt=".5em"
            onClick={onToggleReleasePokemonModal}
            isDisabled={!pokemons.length}
            data-cy="release-all-pokemon-button"
            isTruncated
          >
            Release All
          </Button>
        </Flex>
      </PageTitle>

      <ClientContentOnly bg="system.white" h="82.5%" overflowY="auto">
        <ListOfMyPokemons
          onToggleReleasePokemonModal={onToggleReleasePokemonModal}
        />
      </ClientContentOnly>
    </Box>
  );
};
