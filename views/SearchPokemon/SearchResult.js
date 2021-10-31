import React from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { SearchInput } from "../../components/Inputs";
import { usePokemonDetailsContext } from "../../context/pokemonDetails";
import { PokemonCard } from "../../components/PokemonCard";
import { useRouter } from "next/router";

const EmptyContent = ({ title, label, ...props }) => {
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
  const {
    pokemonDetails: { pokemon = {} },
    isPokemonDetailsLoading,
    isSearchedPokemonFound,
    isSearchResultEmpty,
    setSearchValue
  } = usePokemonDetailsContext();
  const { push } = useRouter();

  return (
    <Box h="75vh" overflow="hidden">
      <Box px="1em" borderBottom="solid 1px" borderColor="pokemon.grey.100">
        <SearchInput
          onSearch={setSearchValue}
          isSearching={isPokemonDetailsLoading}
          placeholder="Search Pokemon..."
        />
      </Box>

      <Box p="2em" bg="system.white" h="inherit">
        {isSearchedPokemonFound ? (
          <PokemonCard
            {...pokemon}
            isSearchingPokemon
            h="20em"
            justify="center"
          >
            <Button
              mt="1em"
              onClick={() => push(`/pokemon_details/${pokemon.name}`)}
            >
              View Pokemon
            </Button>
          </PokemonCard>
        ) : isSearchResultEmpty ? (
          <EmptyContent
            title={"Can not find any result"}
            label={"Pokemon doesn't exist"}
            h="20em"
          />
        ) : null}
      </Box>
    </Box>
  );
};
