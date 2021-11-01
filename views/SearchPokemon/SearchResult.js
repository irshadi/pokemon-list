import React from "react";
import { Box, Flex, Text, Button, Icon } from "@chakra-ui/react";
import { usePokemonDetailsContext } from "../../context/pokemonDetails";
import { PokemonCard } from "../../components/PokemonCard";
import { useRouter } from "next/router";
import { IoIosHelpCircle } from "react-icons/io";
import { useUserPokemonContext } from "../../context/userPokemon";

export const EmptyContent = ({
  title,
  label,
  icon = IoIosHelpCircle,
  iconColor,
  ...props
}) => {
  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="center"
      flexDir="column"
      bg="white"
      borderRadius=".25em"
      boxShadow="lg"
      {...props}
    >
      <Icon
        as={IoIosHelpCircle}
        color={iconColor || "pokemon.grey.700"}
        fontSize="5em"
        mb={[".5em"]}
      />
      <Text fontSize="lg" fontWeight="600" color="system.grey">
        {title}
      </Text>
      <Text fontWeight="500" color="pokemon.grey.700" mt="1em">
        {label}
      </Text>
    </Flex>
  );
};

export const SearchResult = () => {
  const { checkPokemon } = useUserPokemonContext();
  const {
    pokemonDetails: { pokemon = {} },
    isSearchedPokemonFound,
    isSearchResultEmpty
  } = usePokemonDetailsContext();
  const { push } = useRouter();

  return (
    <Box p={["1em", "1em", ".5em", "2em"]} h="100%">
      {isSearchedPokemonFound ? (
        <PokemonCard
          {...pokemon}
          isSearchingPokemon
          h="100%"
          justify="center"
          isCatched={checkPokemon(pokemon.name)}
        >
          <Button
            mt="1em"
            onClick={() => push(`/pokemon_details/${pokemon.name}`)}
            data-cy="pokemon-search-view-pokemon-button"
          >
            View Pokemon
          </Button>
        </PokemonCard>
      ) : isSearchResultEmpty ? (
        <EmptyContent
          title={"Can not find any result"}
          label={"Pokemon doesn't exist"}
          h="100%"
          data-cy="pokemon-search-result-empty"
        />
      ) : null}
    </Box>
  );
};
