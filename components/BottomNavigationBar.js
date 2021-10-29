import React from "react";
import _Link from "next/link";
import { Flex, Box, Link, Icon, Text } from "@chakra-ui/react";
import {
  MdOutlineCatchingPokemon,
  MdOutlineChromeReaderMode,
  MdOutlineDashboard
} from "react-icons/md";

const NavigationButton = ({ url, label, Icon: MenuIcon }) => {
  return (
    <Link as={_Link} href={url}>
      <Flex
        flexDir="column"
        align="center"
        justify="center"
        px={["3.5", "2em"]}
        cursor="pointer"
        textAlign="center"
      >
        <Icon as={MenuIcon} color="white" w={[5, 8]} h={[5, 8]} />
        <Text
          mt=".75em"
          fontWeight="bold"
          color="white"
          fontSize={["xs", "md"]}
          lineHeight={[1, 1.5]}
        >
          {label}
        </Text>
      </Flex>
    </Link>
  );
};

export const BottomNavigationBar = () => {
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
      <Flex bg="orange.500" justify="center" borderRadius="md">
        {navigationMenu.map((props, index) => (
          <NavigationButton key={index} {...props} />
        ))}
      </Flex>
    </Flex>
  );
};
