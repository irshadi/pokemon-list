import React from "react";
import { ContentView } from "../components/ContentView";
import { EmptyContent } from "../views/SearchPokemon/SearchResult";
import { IoIosCloseCircle } from "react-icons/io";

const ErrorPage = () => {
  return (
    <ContentView>
      <EmptyContent
        px="2em"
        textAlign="center"
        title="An error has occured."
        label="Oops... Something has happened, pleeease try again later"
        icon={IoIosCloseCircle}
        iconColor="pokemon.red.500"
      />
    </ContentView>
  );
};

export default ErrorPage;
