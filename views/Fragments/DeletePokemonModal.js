import React from "react";
import { ModalBody, ModalFooter, Button, Text } from "@chakra-ui/react";
import { Modal } from "../../components/Modal";

import { useUserPokemonContext } from "../../context/userPokemon";

export const DeletePokemonModal = ({
  isDeletingAll = false,
  name,
  nickName,
  index,
  ...props
}) => {
  const { handleDeletePokemon, clearAllPokemon } = useUserPokemonContext();
  return (
    <Modal {...props} title="Release Pokemon">
      <ModalBody>
        <Text color="system.grey" fontWeight="500" fontSize="lg">
          Are you sure you want to release
          {isDeletingAll ? " all of your catched pokemon" : ` ${nickName}`} ?
        </Text>
        {!isDeletingAll && (
          <Text color="system.grey" fontSize="md">
            Known pokemon type as {name}.
          </Text>
        )}
        <Text color="system.light-grey" fontSize="sm" pt="2.5em">
          *This action is irreversible.
        </Text>
      </ModalBody>
      <ModalFooter>
        <Button
          variant="transparent"
          colorScheme="grey"
          onClick={props.onClose}
          data-cy="release-pokemon-cancel-button"
        >
          Cancel
        </Button>
        <Button
          colorScheme="red"
          onClick={
            isDeletingAll ? clearAllPokemon : () => handleDeletePokemon(index)
          }
          data-cy="release-pokemon-release-button"
        >
          Release
        </Button>
      </ModalFooter>
    </Modal>
  );
};
