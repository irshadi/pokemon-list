import React from "react";
import {
  Box,
  Text,
  Flex,
  Image,
  Heading,
  Button,
  Skeleton,
  SkeletonCircle
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { generateId } from "../../helper";
import { useUserPokemonContext } from "../../context/userPokemon";

export const PokedexItem = ({ id, name, image, artwork, isLoading }) => {
  const { push } = useRouter();
  const { pokemons } = useUserPokemonContext();

  const countOwnedPokemon = () => {
    const owned = pokemons.reduce((acc, { name: _name }) => {
      if (_name === name) {
        acc += 1;
      }
      return acc;
    }, 0);

    return `You owned ${owned} ${name}`;
  };

  const handleClickPokemon = () =>
    push(
      {
        pathname: `/pokemon_details/${name}`,
        asPath: "pokemon_details"
      },
      `/pokemon_details/${name}`
    );

  const imgStyle = {
    p: [],
    w: ["4em", "5em"],
    h: ["4em", "5em"]
  };

  return (
    <Skeleton isLoaded={!isLoading}>
      <Button
        w="100%"
        onClick={handleClickPokemon}
        display="flex"
        h={["5em", "5.5em", "6.5em"]}
        borderRadius=".25em"
        overflow="hidden"
        align="center"
        boxShadow="md"
        p={[".5em", "1em"]}
        px={["1.5em"]}
        variant="transparent"
        bg="white"
        _hover={{ bg: "pokemon.red.200" }}
        data-cy="pokedex-pokemon-button"
      >
        <Image
          src={image}
          fallback={<SkeletonCircle {...imgStyle} />}
          bg="pokemon.grey.100"
          objectPosition="center"
          objectFit="contain"
          rounded="full"
          data-cy="pokedex-item-pokemon-image"
          {...imgStyle}
        />

        <Flex w="80%" align="center">
          <Box w="100%" px="1.5em" textAlign="start">
            <Text
              fontSize=".75em"
              fontWeight="800"
              color="system.light-grey"
              data-cy="pokedex-item-pokemon-id"
            >
              {generateId(id)}
            </Text>

            <Heading
              textTransform="capitalize"
              fontSize="1.25em"
              color="system.grey"
              data-cy="pokedex-item-pokemon-name"
            >
              {name}
            </Heading>
            <Text fontSize="xs" fontWeight="600" fontColor="system.grey">
              {countOwnedPokemon()}
            </Text>
          </Box>
          <Image
            src={artwork}
            opacity="0.15"
            w={["5em", "8em", "10em"]}
            h={["5em", "8em", "10em"]}
            objectPosition="left"
            objectFit="cover"
            pos="relative"
            top="0"
            right={["-2", "-10"]}
          />
        </Flex>
      </Button>
    </Skeleton>
  );
};
