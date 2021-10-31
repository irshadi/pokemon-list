import React from "react";
import {
  Box,
  Text,
  Flex,
  Image,
  Heading,
  Button,
  Skeleton,
  SkeletonCircle,
  SkeletonText
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { generateId } from "../../helper";

export const PokedexItem = ({ id, name, image, artwork, isLoading }) => {
  const { push } = useRouter();

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
      >
        <Image
          src={image}
          fallback={<SkeletonCircle {...imgStyle} />}
          bg="pokemon.grey.100"
          objectPosition="center"
          objectFit="contain"
          rounded="full"
          {...imgStyle}
        />

        <Flex w="80%" align="center">
          <Box w="100%" px="1.5em" textAlign="start">
            <Text fontSize="1em" fontWeight="800" color="system.light-grey">
              {generateId(id)}
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
