import React from "react";
import { Box, Text, Flex, Image, Heading } from "@chakra-ui/react";

export const PokedexItem = ({ id, url, name, image, artwork }) => {
  const generateId = () => {
    if (+id < 1000) {
      return ("00" + id).slice(-3);
    }

    return id;
  };
  return (
    <Flex
      h="6.5em"
      bg="white"
      borderRadius=".25em"
      overflow="hidden"
      align="center"
      boxShadow="md"
      p="1em"
      px="1.5em"
    >
      <Image
        src={image}
        w="20%"
        boxSize="5em"
        bg="pokemon.grey.100"
        objectFit="cover"
        rounded="full"
      />

      <Box w="80%" justify="space-between" px="1.5em">
        <Heading textTransform="capitalize" fontSize="1.5em">
          {name}
        </Heading>
        <Text fontSize="1em" fontWeight="600">
          #{generateId()}
        </Text>
      </Box>
    </Flex>
  );
};
