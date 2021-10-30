import React from "react";
import { useQuery, gql } from "@apollo/client";

const POKEDEX_ACTION = {
  SET_POKEDEX_OFFSET: "SET_POKEDEX_OFFSET",
  SET_PAGE: "SET_PAGE"
};

const pokedexReducer = (state, { type, ...action }) => {
  switch (type) {
    case POKEDEX_ACTION.SET_POKEDEX_OFFSET:
      const { pokedexOffset } = action;
      return {
        ...state,
        pokedexOffset
      };

    case POKEDEX_ACTION.SET_PAGE:
      const { page } = action;
      return {
        ...state,
        page
      };

    default:
      throw new Error(`usePokedex Error: ${type}`);
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
        id
        url
        name
        image
        artwork
      }
    }
  }
`;

const PAGE_LIMIT = 10;
export const usePokedex = () => {
  const [{ page, pokedexOffset }, dispatch] = React.useReducer(pokedexReducer, {
    page: 0,
    pokedexOffset: {
      previous: 0,
      next: false
    }
  });

  const {
    data: pokedexData = { pokemons: {} },
    loading: isPokedexLoading,
    called: isPokedexCalled,
    fetchMore
  } = useQuery(POKEDEX_QUERY, {
    variables: {
      limit: PAGE_LIMIT,
      offset: pokedexOffset.previous
    }
  });

  const {
    pokemons: { count }
  } = pokedexData;

  const totalPage = Math.ceil(count / 10);

  const setPage = page => {
    dispatch({ type: POKEDEX_ACTION.SET_PAGE, page });
  };

  // Handle pokedex pagination
  const handleClickNextPage = () => {
    if (page === totalPage) {
      return;
    }

    setPage(page + 1);
    fetchMore({
      variables: {
        limit: PAGE_LIMIT,
        offset: pokedexData.pokemons.nextOffset
      }
    });
  };

  const handleClickPreviousPage = () => {
    if (!page) {
      return;
    }

    setPage(page - 1);
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
    isPokedexCalled,

    page,
    totalPage,

    handleClickPreviousPage,
    handleClickNextPage
  };
};
