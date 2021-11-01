import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { NavigationBar } from "./Navigation";
import { Header } from "./Header";

export const ContentView = ({ children }) => {
  return (
    <Box h="100vh" w="100%" overflow="auto" bgColor="white">
      <Header
        h={["2.75em", "2.75em", "2.75em", "4.5em"]}
        w={["100vw", "85vw", "65vw", "35em"]}
      />
      <Flex
        mt={["2.75em", "2.75em", "2.75em", "4.5em"]}
        pb="5em"
        borderLeft="solid 1px"
        borderRight="solid 1px"
        borderColor="pokemon.grey.100"
        w={["100vw", "85vw", "65vw", "35em"]}
        h={[
          "calc(100% - 2.75em)",
          "calc(100% - 2.75em)",
          "calc(100% - 2.75em)",
          "calc(100% - 4.5em)"
        ]}
        flexDir="column"
        align="center"
        marginRight="auto"
        marginLeft="auto"
      >
        {children}
      </Flex>
      <NavigationBar h="5em" w={["100vw", "85vw", "65vw", "35em"]} />
    </Box>
  );
};
