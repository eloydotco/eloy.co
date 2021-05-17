import {
  Box,
  Button,
  HStack,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import { default as NextLink } from "next/link";
import { useRouter } from "next/router";
import React from "react";
import AvatarNavigation from "./avatar-navigation";
import Container from "./container";
import ThemeToggle from "./theme-toggle";

function NavLink(props) {
  const { href, name, ...rest } = props;
  var isActive = false;
  const { pathname } = useRouter();

  if (href !== "/") {
    const [, group] = href.split("/");

    isActive = pathname.includes(group);
  } else {
    if (href === pathname) {
      isActive = true;
    }
  }

  return (
    <NextLink href={href} passHref>
      <Button
        aria-current={isActive ? "page" : undefined}
        variant="ghost"
        size="md"
        {...rest}
        _activeLink={{
          color: useColorModeValue("blue.500", "blue.200")
        }}
        px={4}
      >
        {name}
      </Button>
    </NextLink>
  );
}

const Header = () => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      display={{ base: "none", md: "block" }}
      position="fixed"
      w="100%"
      zIndex={99}
      borderBottomWidth="2px"
      borderBottomColor={useColorModeValue("gray.100", "gray.700")}
      shadow="0 0 10px 0 rgba(0,0,0, 0.035);"
    >
      <Container>
        <VStack align="start" spacing={0}>
          <HStack justify="space-between" w="100%" h={16}>
            <AvatarNavigation />
            <HStack ml={-4} spacing={2}>
              <NavLink href="/about" name="About" />
            </HStack>
            <HStack>
              <ThemeToggle />
            </HStack>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};
export default Header;
