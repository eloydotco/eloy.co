import { Button, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import Container from "../components/container";

const Footer = () => {
  const date = new Date().getFullYear();

  function FooterLink(props) {
    const { href, name, ...rest } = props;

    return (
      <NextLink href={href} passHref>
        <Button
          variant="unstyled"
          {...rest}
          color={useColorModeValue("gray.500", "gray.600")}
          _hover={{ color: useColorModeValue("gray.600", "gray.500") }}
        >
          {name}
        </Button>
      </NextLink>
    );
  }

  return (
    <Container>
      <HStack
        justify="center"
        w="100%"
        display={{ base: "none", md: "flex" }}
        py={4}
      >
        <Text fontSize="sm" color={useColorModeValue("gray.500", "gray.600")}>
          Made with 💛 by Eloy Castelo © {date}
        </Text>
      </HStack>
    </Container>
  );
};
export default Footer;
