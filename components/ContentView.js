import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { NavigationBar } from "./Navigation";
import { Header } from "./Header";

export const ContentView = ({ children }) => {
  return (
    <Box h="100vh" w="100vw" overflow="hidden" bgColor="white">
      <Flex
        borderLeft="solid 1px"
        borderRight="solid 1px"
        borderColor="system.white"
        w={["100vw", "85vw", "65vw", "35em"]}
        flexDir="column"
        align="center"
        marginRight="auto"
        marginLeft="auto"
        pb="6.5em"
      >
        <Header />
        {children}
      </Flex>
      <NavigationBar />
    </Box>
  );
};
