import React from "react";
import isEmpty from "lodash/isEmpty";
import { useQuery, gql } from "@apollo/client";

const SELECTED_POKEMON_QUERY = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      stats {
        stat {
          name
        }
        base_stat
      }
      abilities {
        ability {
          name
        }
      }
      moves {
        move {
          name
        }
        version_group_details {
          level_learned_at
        }
      }
      types {
        type {
          name
        }
      }
      message
      status
    }
  }
`;

export const usePokemonDetails = pokemonName => {
  const hasName = Boolean(pokemonName);
  const [searchValue, setSearchValue] = React.useState("");
  const {
    data: pokemonDetails = {},
    loading: isPokemonDetailsLoading,
    refetch
  } = useQuery(SELECTED_POKEMON_QUERY, {
    variables: {
      name: pokemonName
    },
    skip: hasName ? !pokemonName : !searchValue
  });
  console.log(isPokemonDetailsLoading, "<<<");

  const isSearchResultEmpty =
    !isPokemonDetailsLoading && isEmpty(pokemonDetails) && Boolean(searchValue);
  const isSearchedPokemonFound =
    !isEmpty(pokemonDetails) &&
    Boolean(searchValue) &&
    !isPokemonDetailsLoading;

  // Trigger Effect for searching pokemon
  React.useEffect(() => {
    if (hasName) {
      return;
    }
    refetch({ name: searchValue });
  }, [searchValue]);

  return {
    pokemonDetails,
    isPokemonDetailsLoading,
    refetch,

    setSearchValue,

    isSearchedPokemonFound,
    isSearchResultEmpty
  };
};
