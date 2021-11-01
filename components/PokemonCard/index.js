import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure
} from "@chakra-ui/react";
import { PokemonTypeChips } from "../PokemonTypeChip";
import { generateId } from "../../helper";
import { CgPokemon } from "react-icons/cg";
import { IoIosRemoveCircle, IoIosInformationCircle } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useRouter } from "next/router";
import { DeletePokemonModal } from "../../views/Fragments/DeletePokemonModal";

const ActionMenuPokemonCard = ({ onClickInfo, onClickDelete, ...props }) => {
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
        data-cy="pokemon-card-more-button"
      >
        More
      </MenuButton>
      <MenuList>
        <MenuItem
          icon={<IoIosInformationCircle />}
          color="pokemon.grey.800"
          onClick={onClickInfo}
          data-cy="pokemon-information-button"
        >
          Information
        </MenuItem>
        <MenuItem
          icon={<IoIosRemoveCircle />}
          color="pokemon.red.700"
          onClick={onClickDelete}
          data-cy="pokemon-release-button"
        >
          Release
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export const PokemonCard = ({
  index,
  id,
  name,
  nickName,
  sprites: { front_default: img },
  types,
  isCatched = true,
  isSearchingPokemon = false,
  children,
  ...styleProps
}) => {
  const {
    isOpen: isReleasePokemonModalOpen,
    onClose: onCloseReleasePokemonModal,
    onToggle: onToggleReleasePokemonModal
  } = useDisclosure();
  const { push } = useRouter();

  return (
    <Flex
      bg="white"
      borderRadius=".25em"
      boxShadow="md"
      py="1em"
      flexDir="column"
      align="center"
      pos="relative"
      data-cy="pokemon-card-wrapper"
      {...styleProps}
    >
      <DeletePokemonModal
        isOpen={isReleasePokemonModalOpen}
        onClose={onCloseReleasePokemonModal}
        index={index}
        name={name}
        nickName={nickName}
        data-cy="pokemon-card-modal"
      />
      <Image
        src={img}
        w={["5.5em", "5.5em", "5em", "7.5em"]}
        h={["5.5em", "5.5em", "5em", "7.5em"]}
        bg="system.white"
        rounded="full"
        data-cy="pokemon-card-image"
      />

      <Box align="center" mt=".5em" w="100%">
        <Flex align="center" w="100%" justify="center">
          <Icon
            as={CgPokemon}
            color={isCatched ? "pokemon.red.500" : "pokemon.grey.200"}
            mr=".15em"
          />
          <Text
            fontStyle="italic"
            fontWeight="700"
            fontSize="md"
            color="pokemon.grey.800"
            ml=".15em"
            data-cy="pokemon-card-pokemon-id"
          >
            {generateId(id)}
          </Text>
        </Flex>
        <Text
          textTransform="capitalize"
          fontWeight="700"
          fontSize="xl"
          color="system.grey"
          data-cy="pokemon-card-pokemon-name"
        >
          {name}
        </Text>
      </Box>

      {!isSearchingPokemon && (
        <Text
          w="100%"
          textAlign="center"
          fontStyle="italic"
          fontWeight="500"
          fontSize="lg"
          color="pokemon.grey.800"
          data-cy="pokemon-card-pokemon-nickname"
        >
          {nickName}
        </Text>
      )}
      <Flex pt="1em">
        {types.map(({ type: { name: typeName } }, index) => (
          <PokemonTypeChips key={`${index}-${typeName}`} type={typeName} />
        ))}
      </Flex>
      {!isSearchingPokemon && (
        <ActionMenuPokemonCard
          onClickInfo={() => push(`/pokemon_details/${name}`)}
          onClickDelete={onToggleReleasePokemonModal}
        />
      )}
      {children}
    </Flex>
  );
};
