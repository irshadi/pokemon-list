import React from "react";
import { Box } from "@chakra-ui/react";
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
      {children}
      <NavigationBar />
    </Box>
  );
};
