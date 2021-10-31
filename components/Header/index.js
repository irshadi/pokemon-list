import React from "react";
import { Flex, Image } from "@chakra-ui/react";

export const Header = ({ ...props }) => {
  return (
    <Flex
      boxShadow="md"
      w="100%"
      justify="start"
      align="center"
      pos="absolute"
      top="0"
      left="0"
      right="0"
      marginX="auto"
      {...props}
    >
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
