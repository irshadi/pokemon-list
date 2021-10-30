import React from "react";
import {
  ModalFooter,
  ModalBody,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Button
} from "@chakra-ui/react";
import { Modal } from "../Modal";
import { usePokemonDetailsContext } from "../../context/pokemonDetails";

export const PokemonMovesModal = ({ ...props }) => {
  const {
    pokemonDetails: {
      pokemon: { moves }
    }
  } = usePokemonDetailsContext();
  const { onClose } = props;

  const field = ["No", "Move", "Learned at Level"];
  return (
    <Modal {...props} title="Pokemon Move(s)" scrollBehavior="inside">
      <ModalBody>
        <Table>
          <Thead>
            <Tr>
              {field.map((props, index) => (
                <Th key={`${props}-${index}`}>{props}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {moves.map(
              (
                {
                  move: { name },
                  version_group_details: [{ level_learned_at: level }]
                },
                index
              ) => (
                <Tr key={name}>
                  <Td>{index + 1}</Td>
                  <Td textTransform="capitalize">{name.replace("-", " ")}</Td>
                  <Td>{level}</Td>
                </Tr>
              )
            )}
            <Tr></Tr>
          </Tbody>
        </Table>
      </ModalBody>
      <ModalFooter>
        <Button variant="transparent" onClick={onClose}>
          Back
        </Button>
      </ModalFooter>
    </Modal>
  );
};
