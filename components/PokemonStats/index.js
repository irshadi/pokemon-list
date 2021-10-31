import React from "react";
import { Flex, Text, Progress } from "@chakra-ui/react";

const STAT_MAP = {
  HP: {
    color: "blue",
    label: "HP"
  },
  ATTACK: { color: "red", label: "Attack" },
  DEFENSE: { color: "green", label: "Defense" },
  "SPECIAL-ATTACK": { color: "red", label: "Sp. Attack" },
  "SPECIAL-DEFENSE": { color: "green", label: "Sp. Defense" },
  SPEED: { color: "blue", label: "Speed" }
};

export const PokemonStats = ({ stat, value }) => {
  const { label, color } = STAT_MAP[stat.toUpperCase()];
  return (
    <Flex w="100%" justify="space-between" textAlign="start" align="center">
      <Text w={["35%", "30%"]} fontWeight="500" textTransform="uppercase">
        {label}
      </Text>
      <Text w={"10%"} fontWeight="800">
        {value}
      </Text>
      <Progress
        w={["55%", "60%"]}
        colorScheme={color}
        value={value}
        rounded="full"
        size="xs"
      />
    </Flex>
  );
};
