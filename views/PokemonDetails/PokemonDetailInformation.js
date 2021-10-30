import React from "react";
import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react";
import { usePokemonDetailsContext } from "../../context/pokemonDetails";
import { CheckType, PokemonTypeChips } from "../../components/PokemonTypeChip";
import { PokemonStats } from "../../components/PokemonStats";

export const PokemonDetailedInformation = () => {
  const {
    pokemonDetails: { pokemon },
    isPokemonDetailsLoading,
    artwork
  } = usePokemonDetailsContext();

  if (isPokemonDetailsLoading) {
    return "Loading";
  }
  const { name, types, stats } = pokemon;
  console.log(pokemon, "<<<");
  return (
    <Box w="100%" p="1em" bg="system.white">
      <Flex w="100%%" justify="center" flexDir="column" align="center">
        <Image
          src={artwork}
          h="12.5em"
          w="12.5em"
          bg="pokemon.grey.100"
          borderRadius="full"
          objectFit="cover"
          objectPosition="center"
          p="1em"
          border="solid 5px"
          borderColor="white"
          mb="-7.5em"
          zIndex={2}
        />
        <Box
          w="100%"
          textAlign="center"
          bg="white"
          borderRadius="md"
          boxShadow="md"
          pt="8.5em"
        >
          <Text
            fontSize="2xl"
            fontWeight="800"
            textTransform="capitalize"
            color="system.grey"
          >
            {name}
          </Text>
          <Flex w="100%" justify="center" p="1em">
            {types.map(({ type: { name: typeName } }, index) => (
              <PokemonTypeChips key={`${index}-${typeName}`} type={typeName} />
            ))}
          </Flex>

          <Box p="1em" px="3em">
            {stats.map(({ stat: { name }, base_stat: statValue }, index) => {
              return (
                <PokemonStats
                  key={`${name}-${index}`}
                  stat={name}
                  value={statValue}
                />
              );
            })}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
