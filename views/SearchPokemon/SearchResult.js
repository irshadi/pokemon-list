import React from "react";
import { Box, Flex, Text, Button, Icon } from "@chakra-ui/react";
import { SearchInput } from "../../components/Inputs";
import { usePokemonDetailsContext } from "../../context/pokemonDetails";
import { PokemonCard } from "../../components/PokemonCard";
import { useRouter } from "next/router";
import { IoIosHelpCircle } from "react-icons/io";
import { useUserPokemonContext } from "../../context/userPokemon";

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
      <Icon
        as={IoIosHelpCircle}
        color="pokemon.grey.700"
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
    isPokemonDetailsLoading,
    isSearchedPokemonFound,
    isSearchResultEmpty,
    setSearchValue
  } = usePokemonDetailsContext();
  const { push } = useRouter();

  return (
    <Box>
      <Box
        borderBottom="solid 1px"
        borderColor="pokemon.grey.100"
        bg="white"
        pt="1em"
        px="1em"
      >
        <SearchInput
          onSearch={setSearchValue}
          isSearching={isPokemonDetailsLoading}
          placeholder="Search Pokemon..."
        />
      </Box>

      <Box p={["1em", "1em", ".5em", "2em"]} h="inherit">
        {isSearchedPokemonFound ? (
          <PokemonCard
            {...pokemon}
            isSearchingPokemon
            h="20em"
            justify="center"
            isCatched={checkPokemon(pokemon.name)}
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
