import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Head from "next/head";
import favicon from "../public/favicon.ico";

import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { UserPokemonContextProvider } from "../context/userPokemon";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Head>
        <link rel="icon" type="image/x-icon" href={favicon.src} />
      </Head>
      <UserPokemonContextProvider>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </UserPokemonContextProvider>
    </ChakraProvider>
  );
};

export default MyApp;
