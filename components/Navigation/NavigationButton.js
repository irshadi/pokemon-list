import React from "react";
import _Link from "next/link";
import { Link, Icon, Text, Flex } from "@chakra-ui/react";

export const NavigationButton = ({
  url,
  label,
  Icon: MenuIcon,
  isSelected
}) => {
  return (
    <Link as={_Link} href={url} data-cy="navigation-bar-link">
      <Flex
        h="inherit"
        variant="transparent"
        opacity={isSelected ? 1 : 0.5}
        flexDir="column"
        align="center"
        rounded="full"
        justify="center"
        px={["3.5", "2em"]}
        cursor="pointer"
        textAlign="center"
        _hover={{
          opacity: 0.75
        }}
      >
        <Icon
          as={MenuIcon}
          color={isSelected ? "pokemon.red.500" : "pokemon.grey.700"}
          w={[8]}
          h={[8]}
        />
        <Text
          mt={[".35em", ".5em", "0"]}
          fontWeight="bold"
          color={isSelected ? "pokemon.red.500" : "pokemon.grey.700"}
          textShadow="base"
          fontSize={[".7em", "s"]}
          lineHeight={[1, 1.5]}
        >
          {label}
        </Text>
      </Flex>
    </Link>
  );
};
