import React from "react";
import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import Head from "next/head";

export const PageTitle = ({
  title,
  label,
  children,
  hasBorder,
  isHorizontal = true,
  ...props
}) => {
  const hasChildren = React.isValidElement(children);
  return (
    <Flex
      data-cy="page-title-wrapper"
      w="100%"
      textAlign="start"
      p="1em"
      py=".5em"
      lineHeight={1}
      borderBottom={hasBorder ? "solid 1px" : "none"}
      borderColor="pokemon.grey.100"
      h="17.5%"
      {...props}
    >
      <Head>
        <title>{title}</title>
      </Head>
      <Box w={hasChildren && isHorizontal ? "60%" : "100%"}>
        <Heading
          data-cy="page-title-heading"
          textTransform="capitalize"
          w="100%"
          color="system.grey"
          fontSize={["lg", "lg", "lg", "xl"]}
        >
          {title}
        </Heading>
        <Text
          data-cy="page-title-label"
          mt=".5em"
          fontSize="md"
          color="system.grey"
          fontSize={["sm", "sm", "sm", "md"]}
        >
          {label}
        </Text>
      </Box>
      {children}
    </Flex>
  );
};
