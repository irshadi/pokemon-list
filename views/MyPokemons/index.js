import React from "react";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import { ListOfMyPokemons } from "./ListOfMyPokemon";
import { PageTitle } from "../../components/Header/PageTitle";
import { ClientContentOnly } from "../../components/ClientContentOnly";
import { useUserPokemonContext } from "../../context/userPokemon";
import { DeletePokemonModal } from "../Fragments/DeletePokemonModal";

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
        h="25%"
        hasBorder
      >
        <Button
          mt={[".5em", "2.5em", ".75em", "1em"]}
          colorScheme="red"
          onClick={onToggleReleasePokemonModal}
          isDisabled={!pokemons.length}
          data-cy="release-all-pokemon-button"
        >
          Release All Pokemon
        </Button>
      </PageTitle>
      <ClientContentOnly bg="system.white" h="75%" overflowY="auto">
        <ListOfMyPokemons />
      </ClientContentOnly>
    </Box>
  );
};
