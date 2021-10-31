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

  const isSearchResultEmpty = isEmpty(pokemonDetails) && Boolean(searchValue);
  const isSearchEmpty = isEmpty(pokemonDetails) && Boolean(!searchValue);

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

    isSearchEmpty,
    isSearchResultEmpty
  };
};
