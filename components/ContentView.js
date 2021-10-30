import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { NavigationBar } from "./Navigation";

export const ContentView = ({ children }) => {
  return (
    <Box h="100vh" w="100vw" overflow="hidden" bgColor="white">
      <Flex
        w={["100vw", "85vw", "65vw", "35em"]}
        flexDir="column"
        align="center"
        marginRight="auto"
        marginLeft="auto"
        pb="6.5em"
      >
        {children}
      </Flex>
      <NavigationBar />
    </Box>
  );
};
