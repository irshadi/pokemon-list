import React from "react";
import { Flex, Image } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex h="4.5em" boxShadow="md" w="100%" justify="start" align="center">
      <Image
        src="/img/logo.png"
        h="70%"
        p=".5em"
        ml="1em"
        objectFit="contain"
      />
    </Flex>
  );
};
