import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  useDisclosure,
  SkeletonCircle,
  Center,
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
      <Flex
        w="100%"
        h="100%"
        p="1em"
        justify="center"
        align="center"
        data-cy="pokemon-details-loading"
      >
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
    h: ["5.5em", "5.5em", "5.5em", "8.5em"],
    w: ["5.5em", "5.5em", "5.5em", "8.5em"]
  };

  return (
    <Box w="100%" h="100%" p=".5em 1em">
      <PokemonMovesModal
        isOpen={isMoveModalOpen}
        onClose={onCloseMoveModal}
        data-cy="pokemon-move-list-modal"
      />
      <CatchPokemonModal data-cy="catch-pokemon-modal" />

      <Box
        w="100%"
        h="100%"
        data-cy="pokemon-details-wrapper"
        bg="white"
        borderRadius=".25em"
        boxShadow="sm"
        p={["1em", "1em", ".5em", "1em"]}
        px={["1.5em", "2em", "2em", "3em"]}
      >
        <Flex w="100%" align="center">
          <Flex w="40%">
            <Image
              src={image}
              fallback={<SkeletonCircle {...imgSize} />}
              bg="pokemon.grey.100"
              borderRadius="full"
              objectFit="cover"
              objectPosition="center"
              border="solid 5px"
              borderColor="white"
              zIndex={5}
              data-cy="pokemon-details-pokemon-image"
              {...imgSize}
            />
          </Flex>
          <Flex
            w="60%"
            px="1em"
            h="100%"
            justify="center"
            align="flex-start"
            flexDir="column"
          >
            <Text
              ml=".75em"
              fontSize={["md", "lg", "lg", "xl"]}
              fontWeight="800"
              textTransform="capitalize"
              color="pokemon.grey.300"
              data-cy="pokemon-details-pokemon-id"
            >
              {generateId(id)}
            </Text>
            <Text
              ml=".75em"
              fontSize={["lg", "xl", "xl", "2xl"]}
              fontWeight="800"
              textTransform="capitalize"
              color="system.grey"
              data-cy="pokemon-details-pokemon-name"
            >
              {name}
            </Text>
            <Flex w="100%" py={[".5em", ".25em", ".25em", "1em"]}>
              {types.map(({ type: { name: typeName } }, index) => (
                <PokemonTypeChips
                  key={`${index}-${typeName}`}
                  type={typeName}
                />
              ))}
            </Flex>
          </Flex>
        </Flex>

        <Box data-cy="pokemon-details-pokemon-stats" mt="1em">
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

        <Flex justify="center" mt="1.5em" py={["1em", "1em", ".75em", "1em"]}>
          <Button
            onClick={onToggleMoveModal}
            bgColor="pokemon.red.500"
            _hover={{
              bgColor: "pokemon.red.300"
            }}
            mr=".25em"
            data-cy="pokemon-details-move-list-button"
          >
            See Move List
          </Button>
          <Button
            onClick={onToggleCatchPokemonModal}
            bgColor="pokemon.blue.500"
            textTransform="capitalize"
            ml=".25em"
            data-cy="pokemon-details-catch-pokemon-button"
          >
            Hunt {name}
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
