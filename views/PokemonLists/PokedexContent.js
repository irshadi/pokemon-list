import React from "react";
import { usePokedexContext } from "../../context/pokedex";

export const PokedexContent = ({ page }) => {
  console.log("POKE", { page });
  const { pokedexData, isPokedexLoading } = usePokedexContext();
  if (isPokedexLoading) return "Loading";

  return JSON.stringify(pokedexData);
};
