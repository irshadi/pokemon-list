import React from "react";
import { useQuery, gql } from "@apollo/client";

const POKEDEX_ACTION = {
  SET_POKEDEX_OFFSET: "SET_POKEDEX_OFFSET",
  SET_SEARCH_VALUE: "SET_SEARCH_VALUE",

  SET_TOTAL_PAGE: "SET_TOTAL_PAGE"
};

const pokedexReducer = (state, { type, ...action }) => {
  switch (type) {
    case POKEDEX_ACTION.SET_POKEDEX_OFFSET:
      const { pokedexOffset } = action;
      return {
        ...state,
        pokedexOffset
      };

    default:
      return state;
  }
};

const POKEDEX_QUERY = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      nextOffset
      prevOffset
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

const PAGE_LIMIT = 10;
export const usePokedex = () => {
  const [{ searchValue, pokedexOffset }, dispatch] = React.useReducer(
    pokedexReducer,
    {
      searchValue: "",
      pokedexOffset: {
        previous: 0,
        next: false
      }
    }
  );

  /**
   * 
  Math.ceil(total_items/limit);
  50 items / 10 per page = 5 pages
  55 items / 10 per page = 6 pages
   */

  const {
    data: pokedexData,
    loading: isPokedexLoading,
    fetchMore
  } = useQuery(POKEDEX_QUERY, {
    variables: {
      limit: PAGE_LIMIT,
      offset: pokedexOffset.previous
    },

    onCompleted: data => {
      const {
        pokemons: { count, prevOffset }
      } = data;
      console.log(count, data, "COMPLETE");
      const totalPage = Math.ceil(count / 10);

      const currentPage = Math.ceil(prevOffset / 10) + 1;
      console.log({ totalPage, currentPage });
      return data;
    }
  });

  // Handle pokedex pagination
  const handleClickNextPage = () => {
    fetchMore({
      variables: {
        limit: PAGE_LIMIT,
        offset: pokedexData.pokemons.nextOffset
      }
    });
  };

  const handleClickPreviousPage = () => {
    fetchMore({
      variables: {
        limit: PAGE_LIMIT,
        offset: pokedexData.pokemons.prevOffset ?? 0
      }
    });
  };

  return {
    pokedexData,
    isPokedexLoading,

    // totalPage,
    handleClickPreviousPage,
    handleClickNextPage
    // page
  };
};
