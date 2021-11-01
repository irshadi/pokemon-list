import React from "react";
import { ContentView } from "../components/ContentView";
import { EmptyContent } from "../views/SearchPokemon/SearchResult";
import { IoIosCloseCircle } from "react-icons/io";

const FourOFourPage = () => {
  return (
    <ContentView>
      <EmptyContent
        px="2em"
        textAlign="center"
        title="404 Page not found"
        label="Can not find the page you're looking for"
        icon={IoIosCloseCircle}
        iconColor="pokemon.red.500"
      />
    </ContentView>
  );
};

export default FourOFourPage;
