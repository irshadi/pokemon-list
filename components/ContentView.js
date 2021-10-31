import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { NavigationBar } from "./Navigation";
import { Header } from "./Header";

export const ContentView = ({ children }) => {
  return (
    <Box h="100vh" maxH="100vh" w="100vw" overflow="hidden" bgColor="white">
      <Header h={["3.75em", "4.5em"]} w={["100vw", "85vw", "65vw", "35em"]} />
      <Flex
        pt={["3.75em", "4.5em"]}
        pb={["5em", "6.5em"]}
        borderLeft="solid 1px"
        borderRight="solid 1px"
        borderColor="pokemon.grey.100"
        w={["100vw", "85vw", "65vw", "35em"]}
        h="100%"
        flexDir="column"
        align="center"
        marginRight="auto"
        marginLeft="auto"
      >
        {children}
      </Flex>
      <NavigationBar h={["5em", "6.5em"]} />
    </Box>
  );
};
