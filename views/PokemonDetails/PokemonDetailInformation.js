import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  useDisclosure,
  SkeletonCircle,
  Spinner
} from "@chakra-ui/react";
import { usePokemonDetailsContext } from "../../context/pokemonDetails";
import { PokemonTypeChips } from "../../components/PokemonTypeChip";
import { PokemonStats } from "../../components/PokemonStats";
import { PokemonMovesModal } from "../../components/PokemonMovesModal";
import { CatchPokemonModal } from "../../components/CatchPokemonModal";
import { useCatchPokemonContext } from "../../context/catchPokemon";
import { isEmpty } from "lodash";

export const PokemonDetailedInformation = () => {
  const {
    pokemonDetails: { pokemon },
    isPokemonDetailsLoading
  } = usePokemonDetailsContext();
  const { onToggleCatchPokemonModal } = useCatchPokemonContext();

  const {
    isOpen: isMoveModalOpen,
    onToggle: onToggleMoveModal,
    onClose: onCloseMoveModal
  } = useDisclosure();

  if (isPokemonDetailsLoading) {
    return (
      <Flex w="inherit" p="1em" justify="center" align="center">
        <Spinner
          thickness="4px"
          emptyColor="system.white"
          color="pokemon.grey.500"
          size="xl"
        />
      </Flex>
    );
  }

  if (isEmpty(pokemon)) {
    return null;
  }

  const {
    name,
    types,
    stats,
    sprites: { front_default: image }
  } = pokemon;

  return (
    <Box w="100%" p="1em" bg="system.white">
      <PokemonMovesModal isOpen={isMoveModalOpen} onClose={onCloseMoveModal} />
      <CatchPokemonModal />
      <Flex w="100%" justify="center" flexDir="column" align="center">
        <Image
          src={image}
          fallback={
            <SkeletonCircle h="12.5em" w="12.5em" p="1em" mb="-7.5em" />
          }
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

          <Flex justify="center" py="1em">
            <Button
              onClick={onToggleMoveModal}
              bgColor="pokemon.red.500"
              _hover={{
                bgColor: "pokemon.red.300"
              }}
              mr=".25em"
            >
              See Move List
            </Button>
            <Button
              onClick={onToggleCatchPokemonModal}
              bgColor="pokemon.blue.500"
              textTransform="capitalize"
              ml=".25em"
            >
              Hunt {name}
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
