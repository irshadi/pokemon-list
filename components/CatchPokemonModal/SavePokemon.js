import React from "react";
import { ModalBody, ModalFooter, Button } from "@chakra-ui/react";
import { TextInput } from "../Inputs";
import { useCatchPokemonContext } from "../../context/catchPokemon";
import { useUserPokemonContext } from "../../context/userPokemon";
import { usePokemonDetailsContext } from "../../context/pokemonDetails";

export const SavePokemon = () => {
  const [nickName, _setNickName] = React.useState("");
  const {
    pokemonDetails: { pokemon }
  } = usePokemonDetailsContext();
  const { onCloseCatchPokemonModal } = useCatchPokemonContext();
  const { handleSavePokemon } = useUserPokemonContext();

  return (
    <React.Fragment>
      <ModalBody>
        <TextInput
          label="Give a nickname for your pokemon"
          value={nickName}
          onChange={e => _setNickName(e.target.value)}
          placeholder={"Nickname"}
          isRequired={!nickName}
          data-cy="pokemon-nickname-input"
        />
      </ModalBody>
      <ModalFooter>
        <Button
          onClick={onCloseCatchPokemonModal}
          variant="outline"
          colorScheme="red"
          mr=".25em"
          data-cy="cancel-button"
        >
          Cancel
        </Button>
        <Button
          ml=".25em"
          isDisabled={!nickName}
          onClick={() => {
            handleSavePokemon(
              { ...pokemon, nickName },
              onCloseCatchPokemonModal
            );
          }}
          data-cy="save-pokemon-button"
        >
          Save
        </Button>
      </ModalFooter>
    </React.Fragment>
  );
};
