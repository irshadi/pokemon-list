import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { NavigationBar } from "./Navigation";

export const ContentView = ({ children }) => {
  return (
    <Box
      minH="100vh"
      maxH="100vh"
      minW="100vw"
      maxW="100vw"
      overflow="auto"
      bgColor="system.white"
    >
      <Flex
        w={["100vw", "85vw", "65vw", "35em"]}
        // bg="red"
        flexDir="column"
        align="center"
        // justify="center"
        marginRight="auto"
        marginLeft="auto"
        minH="inherit"
      >
        {children}
      </Flex>
      <NavigationBar />
    </Box>
  );
};
