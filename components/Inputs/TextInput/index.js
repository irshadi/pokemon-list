import React from "react";
import Input from "../Input";
import { Text } from "@chakra-ui/react";

const TextInput = ({ label, ...props }) => {
  return (
    <Box w="100%">
      <Text>{label}</Text>
      <Input {...props} />
    </Box>
  );
};

export default TextInput;
