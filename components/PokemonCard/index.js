import React from "react";
import { Box, Flex, Text, Image, Heading, Icon } from "@chakra-ui/react";
import { PokemonTypeChips } from "../PokemonTypeChip";
import { generateId } from "../../helper";
import { CgPokemon } from "react-icons/cg";

export const PokemonCard = ({
  index,
  id,
  name,
  nickName,
  sprites: { front_default: img },
  types,
  isCatched = true
}) => {
  const hasIndex = Boolean(index + 1);
  return (
    <Flex
      w="100%"
      h="7.5em"
      bg="white"
      px="1em"
      borderRadius=".25em"
      boxShadow="md"
    >
      <Flex w="50%" align="center">
        <Heading color="system.grey" mr=".25em">
          {index + 1}.
        </Heading>
        <Image src={img} w="5em" h="5em" bg="system.white" rounded="full" />
        <Box ml="1em">
          <Flex align="center">
            <Text
              textTransform="capitalize"
              fontWeight="700"
              fontSize="xl"
              color="system.grey"
              mr=".5em"
            >
              {name}
            </Text>
            <Icon
              as={CgPokemon}
              color={isCatched ? "pokemon.red.500" : "system.white"}
            />
          </Flex>
          <Flex w="100%" align="center">
            <Text
              fontWeight="500"
              fontSize="lg"
              color="pokemon.grey.800"
              mr=".25em"
            >
              Nickname:
            </Text>
            <Text
              fontStyle="italic"
              fontWeight="500"
              fontSize="lg"
              color="pokemon.grey.800"
            >
              {nickName}
            </Text>
          </Flex>
          <Flex pt=".5em" ml="-.5em">
            {types.map(({ type: { name: typeName } }, index) => (
              <PokemonTypeChips key={`${index}-${typeName}`} type={typeName} />
            ))}
          </Flex>
        </Box>
      </Flex>
      <Box w="50%">
        <Flex w="100%" justify="flex-end">
          <Text
            fontStyle="italic"
            fontWeight="800"
            fontSize="2xl"
            color="pokemon.grey.200"
          >
            #{generateId(id)}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};
