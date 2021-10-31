import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export const PageTitle = ({ title, label, children, hasBorder, ...props }) => {
  return (
    <Box
      w="100%"
      textAlign="start"
      p="1em"
      borderBottom={hasBorder ? "solid 1px" : "none"}
      borderColor="pokemon.grey.100"
      h="17.5%"
      {...props}
    >
      <Heading
        textTransform="capitalize"
        w="100%"
        color="system.grey"
        fontSize={["xl", "3xl"]}
      >
        {title}
      </Heading>
      <Text
        mt={[".25em", ".5em"]}
        fontSize="md"
        color="system.grey"
        fontSize={["sm", "lg"]}
      >
        {label}
      </Text>
      {children}
    </Box>
  );
};
