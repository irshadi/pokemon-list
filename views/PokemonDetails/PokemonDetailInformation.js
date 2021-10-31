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
import { generateId } from "../../helper";

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
    id,
    name,
    types,
    stats,
    sprites: { front_default: image }
  } = pokemon;

  const imgSize = {
    h: ["8.5em", "8.5em", "8.5em", "12.5em"],
    w: ["8.5em", "8.5em", "8.5em", "12.5em"],
    p: [".5em", "1em"],
    mb: ["-4.5em", "-6em", "-4.75em", "-7.5em"]
  };

  return (
    <Box w="100%" h="100%" p="1em">
      <PokemonMovesModal isOpen={isMoveModalOpen} onClose={onCloseMoveModal} />
      <CatchPokemonModal />
      <Flex
        w="100%"
        h="inherit"
        justify="center"
        flexDir="column"
        align="center"
      >
        <Image
          src={image}
          fallback={<SkeletonCircle {...imgSize} />}
          bg="pokemon.grey.100"
          borderRadius="full"
          objectFit="cover"
          objectPosition="center"
          border="solid 5px"
          borderColor="white"
          zIndex={2}
          {...imgSize}
        />
        <Box
          w="100%"
          textAlign="center"
          bg="white"
          borderRadius="md"
          boxShadow="md"
          pt={["5em", "5.5em", "5em", "8.5em"]}
        >
          <Text
            fontSize={["md", "lg", "lg", "xl"]}
            fontWeight="800"
            textTransform="capitalize"
            color="pokemon.grey.300"
          >
            {generateId(id)}
          </Text>
          <Text
            fontSize={["lg", "xl", "xl", "2xl"]}
            fontWeight="800"
            textTransform="capitalize"
            color="system.grey"
          >
            {name}
          </Text>
          <Flex w="100%" justify="center" p={[".25em", ".5em", ".25em", "1em"]}>
            {types.map(({ type: { name: typeName } }, index) => (
              <PokemonTypeChips key={`${index}-${typeName}`} type={typeName} />
            ))}
          </Flex>

          <Box
            p={["1em", "1em", ".5em", "1em"]}
            px={["1.5em", "2em", "2em", "3em"]}
          >
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

          <Flex justify="center" py={["1em", "1em", ".75em", "1em"]}>
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
