import React from "react";
import { Flex } from "@chakra-ui/react";
import {
  MdOutlineCatchingPokemon,
  MdOutlineChromeReaderMode,
  MdOutlineDashboard
} from "react-icons/md";
import { NavigationButton } from "./NavigationButton";
import { useRouter } from "next/router";

export const NavigationBar = ({ ...props }) => {
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
      borderTop="solid 1px"
      borderColor="pokemon.grey.100"
      bg="system.white"
      pos="absolute"
      bottom="0"
      w="100%"
      justify="center"
      py=".25em"
      data-cy="navigation-bar"
      {...props}
    >
      <Flex
        bg="white"
        rounded="full"
        boxShadow="lg"
        w={["92.5%", "67.5%", "60%", "35%"]}
        justify="center"
        px={[".75em"]}
        zIndex={5}
      >
        {navigationMenu.map((props, index) => (
          <NavigationButton
            key={index}
            isSelected={
              index === navigationMenu.length - 1
                ? currentPath.includes(props.url)
                : currentPath === props.url
            }
            {...props}
          />
        ))}
      </Flex>
    </Flex>
  );
};
