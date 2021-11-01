import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

export const PageTitle = ({ title, label, children, hasBorder, ...props }) => {
  return (
    <Flex
      data-cy="page-title-wrapper"
      w="100%"
      textAlign="start"
      p="1em"
      borderBottom={hasBorder ? "solid 1px" : "none"}
      borderColor="pokemon.grey.100"
      h="17.5%"
      flexDir="column"
      align="start"
      justify="center"
      {...props}
    >
      <Heading
        data-cy="page-title-heading"
        textTransform="capitalize"
        w="100%"
        color="system.grey"
        fontSize={["xl", "xl", "xl", "3xl"]}
      >
        {title}
      </Heading>
      <Text
        data-cy="page-title-label"
        mt={[".25em", ".5em"]}
        fontSize="md"
        color="system.grey"
        fontSize={["sm", "md", "md", "lg"]}
      >
        {label}
      </Text>
      {children}
    </Flex>
  );
};
