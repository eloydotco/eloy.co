import Container from "@/components/container";
import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container>
      <Center>
        <NextSeo
          title="404 – Eloy Castelo"
          canonical="https://eloy.xyz/404"
          openGraph={{
            url: "https://eloy.xyz/404",
            title: "404 – Eloy Castelo"
          }}
        />
        <VStack>
          <Heading size="3xl">404</Heading>
          <Text mb={8}>Page not found</Text>
          <Link href="/">Return home</Link>
        </VStack>
      </Center>
    </Container>
  );
}
