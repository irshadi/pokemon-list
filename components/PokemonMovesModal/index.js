import React from "react";
import { ModalFooter, ModalBody } from "@chakra-ui/react";
import { Modal } from "../Modal";

export const PokemonMovesModal = ({ ...props }) => {
  return (
    <Modal {...props} title="Pokemon Move(s)">
      <ModalBody></ModalBody>
      <ModalFooter></ModalFooter>
    </Modal>
  );
};
