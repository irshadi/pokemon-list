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
  const { data: pokemonDetails = {}, loading: isPokemonDetailsLoading } =
    useQuery(SELECTED_POKEMON_QUERY, {
      variables: {
        name: pokemonName
      }
    });

  return {
    pokemonDetails,
    isPokemonDetailsLoading
  };
};
