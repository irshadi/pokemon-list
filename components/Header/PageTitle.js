import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export const PageTitle = ({ title, label, children }) => {
  return (
    <Box
      w="100%"
      textAlign="start"
      p="1em"
      borderBottom="solid 1px"
      borderColor="pokemon.grey.100"
    >
      <Heading textTransform="capitalize" w="100%" color="system.grey">
        {title}
      </Heading>
      <Text mt=".5em" fontSize="md" color="system.grey">
        {label}
      </Text>
      {children}
    </Box>
  );
};
