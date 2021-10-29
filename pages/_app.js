import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { UserPokemonContextProvider } from "../context/userPokemon";

const MyApp = ({ Component, pageProps }) => {
  return (
    <UserPokemonContextProvider>
      <ApolloProvider client={client}>
        <ChakraProvider resetCSS={true} theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </UserPokemonContextProvider>
  );
};

export default MyApp;
