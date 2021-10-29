import React from "react";
import { useQuery, gql } from "@apollo/client";

const POKDEX_ACTION = {
  SET_PAGE: "SET_PAGE",
  SET_SEARCH_VALUE: "SET_SEARCH_VALUE",

  SET_TOTAL_PAGE: "SET_TOTAL_PAGE"
};

const pokedexReducer = (state, { type, ...action }) => {
  switch (type) {
    case POKDEX_ACTION.SET_PAGE:
      const { page } = action;
      return {
        ...state,
        page
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

export const usePokedex = () => {
  const [{ searchValue, page }, dispatch] = React.useReducer(pokedexReducer, {
    searchValue: "",
    page: 0,
    totalPage: null
  });

  /**
   * 
  Math.ceil(total_items/limit);
  50 items / 10 per page = 5 pages
  55 items / 10 per page = 6 pages
   */

  // Handle pokedex pagination
  const setPage = page => dispatch({ type: POKDEX_ACTION.SET_PAGE, page });

  const { data: pokedexData, loading: isPokedexLoading } = useQuery(
    POKEDEX_QUERY,
    {
      variables: {
        limit: 10,
        offset: 11
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
    }
  );

  return {
    pokedexData,
    isPokedexLoading,

    // totalPage,
    page,
    setPage
  };
};
