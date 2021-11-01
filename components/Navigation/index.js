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
      bg="transparent"
      pos="absolute"
      bottom="0"
      w="100%"
      justify="center"
      pb=".5em"
      px=".75em"
      data-cy="navigation-bar"
      {...props}
    >
      <Flex
        bg="white"
        boxShadow="1px 5px 20px -2px rgba(0,0,0,0.75)"
        w={["97.5vw", "80vw", "60vw", "32.5em"]}
        justify="center"
        borderRadius="full"
        px={[".75em"]}
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
