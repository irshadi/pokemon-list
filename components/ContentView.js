import React from "react";
import { Box } from "@chakra-ui/react";
import { BottomNavigationBar } from "./BottomNavigationBar";

export const ContentView = ({ children }) => {
  return (
    <Box minH="100vh" maxH="100vh" minW="100vw" maxW="100vw">
      {children}
      <BottomNavigationBar />
    </Box>
  );
};
