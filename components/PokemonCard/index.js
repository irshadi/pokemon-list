import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  Button,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react";
import { PokemonTypeChips } from "../PokemonTypeChip";
import { generateId } from "../../helper";
import { CgPokemon } from "react-icons/cg";
import { IoIosRemoveCircle, IoIosInformationCircle } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useRouter } from "next/router";

const ActionMenuPokemonCard = ({ selectedPokemon, ...props }) => {
  const { push } = useRouter();
  return (
    <Menu {...props}>
      <MenuButton
        mt="1em"
        as={Button}
        aria-label="More"
        variant="outline"
        border="solid 1px"
        borderColor="pokemon.grey.500"
        colorScheme="grey"
        icon={<BsThreeDotsVertical />}
        variant="transparent"
      >
        More
      </MenuButton>
      <MenuList>
        <MenuItem
          icon={<IoIosInformationCircle />}
          color="pokemon.grey.800"
          onClick={() => push(`/pokemon_details/${selectedPokemon}`)}
        >
          Information
        </MenuItem>
        <MenuItem icon={<IoIosRemoveCircle />} color="pokemon.red.700">
          Release
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export const PokemonCard = ({
  id,
  name,
  nickName,
  sprites: { front_default: img },
  types,
  isCatched = true
}) => {
  const hasNickname = Boolean(nickName);
  return (
    <Flex
      bg="white"
      borderRadius=".25em"
      boxShadow="md"
      py="1em"
      flexDir="column"
      align="center"
      pos="relative"
    >
      <Image src={img} w="5em" h="5em" bg="system.white" rounded="full" />

      <Box align="center" mt=".5em" w="100%">
        <Flex align="center" w="100%" justify="center">
          <Icon
            as={CgPokemon}
            color={isCatched ? "pokemon.red.500" : "system.white"}
            mr=".15em"
          />
          <Text
            fontStyle="italic"
            fontWeight="700"
            fontSize="md"
            color="pokemon.grey.800"
            ml=".15em"
          >
            #{generateId(id)}
          </Text>
        </Flex>
        <Text
          textTransform="capitalize"
          fontWeight="700"
          fontSize="xl"
          color="system.grey"
        >
          {name}
        </Text>
      </Box>
      {hasNickname && (
        <Text
          w="100%"
          textAlign="center"
          fontStyle="italic"
          fontWeight="500"
          fontSize="lg"
          color="pokemon.grey.800"
        >
          {nickName}
        </Text>
      )}
      <Flex pt="1em">
        {types.map(({ type: { name: typeName } }, index) => (
          <PokemonTypeChips key={`${index}-${typeName}`} type={typeName} />
        ))}
      </Flex>
      {hasNickname && <ActionMenuPokemonCard selectedPokemon={name} />}
    </Flex>
  );
};
