import React from "react";
import { Flex } from "@chakra-ui/react";
import {
  MdOutlineCatchingPokemon,
  MdOutlineChromeReaderMode,
  MdOutlineDashboard
} from "react-icons/md";
import { NavigationButton } from "./NavigationButton";
import { useRouter } from "next/router";

export const NavigationBar = () => {
  const { asPath: currentPath } = useRouter();
  const navigationMenu = [
    {
      label: "My Pokemons",
      url: "/my_pokemons",
      Icon: MdOutlineCatchingPokemon
    },
    {
      label: "Pokemon Lists",
      url: "/",
      Icon: MdOutlineDashboard
    },
    {
      label: "Pokemon Details",
      url: "/pokemon_details",
      Icon: MdOutlineChromeReaderMode
    }
  ];

  return (
    <Flex
      pos="absolute"
      bottom="0"
      h="6.5em"
      w="100%"
      justify="center"
      p=".75em"
    >
      <Flex
        bg="white"
        boxShadow="xl"
        w={["97.5vw", "80vw", "60vw", "32.5em"]}
        justify="center"
        borderRadius="full"
      >
        {navigationMenu.map((props, index) => (
          <NavigationButton
            key={index}
            isSelected={currentPath === props.url}
            {...props}
          />
        ))}
      </Flex>
    </Flex>
  );
};
