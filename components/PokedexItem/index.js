import React from "react";
import { Box, Text, Flex, Image, Heading, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const PokedexItem = ({ id, url, name, image, artwork }) => {
  const { push } = useRouter();

  const generateId = () => {
    if (+id < 1000) {
      return ("00" + id).slice(-3);
    }

    return id;
  };

  const handleClickPokemon = () =>
    push(
      {
        pathname: `/pokemon_details/${name}`,
        asPath: "pokemon_details",
        query: {
          image,
          artwork
        }
      },
      `/pokemon_details/${name}`
    );

  return (
    <Button
      onClick={handleClickPokemon}
      display="flex"
      h="6.5em"
      borderRadius=".25em"
      overflow="hidden"
      align="center"
      boxShadow="md"
      p="1em"
      px="1.5em"
      variant="transparent"
      bg="white"
      _hover={{ bg: "pokemon.red.200" }}
    >
      <Image
        src={image}
        w="20%"
        boxSize="5em"
        w="4em"
        h="5em"
        bg="pokemon.grey.100"
        objectPosition="center"
        objectFit="contain"
        rounded="full"
      />

      <Flex w="80%" align="center">
        <Box w="100%" px="1.5em" textAlign="start">
          <Text fontSize="1em" fontWeight="800" color="system.light-grey">
            #{generateId()}
          </Text>
          <Heading
            textTransform="capitalize"
            fontSize="1.5em"
            color="system.grey"
          >
            {name}
          </Heading>
        </Box>
        <Image
          src={artwork}
          opacity="0.1"
          w="10em"
          h="10em"
          objectPosition="left"
          objectFit="cover"
          pos="relative"
          top="0"
          right="-10"
        />
      </Flex>
    </Button>
  );
};
