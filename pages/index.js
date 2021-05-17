import Section from "@/components/section";
import { Box, Button, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { TwitterLogo } from "phosphor-react";
import React from "react";
import PageTransition from "../components/page-transitions";

const Home = () => (
  <Box>
    <PageTransition>
      <VStack spacing={12}>
        <Section>
          <VStack spacing={4} align="start" fontSize="2xl">
            <Heading size="xl">Hey, I'm Eloy 👋</Heading>
            <VStack>
              <Text>
                I'm an almost-successful entrepreneur. Passionate of new
                technologies and software engineering. Learning about stoicism,
                minimalism, finance, data science and more...
              </Text>
            </VStack>
            <Link href="https://twitter.com/_ecastelo" isExternal>
              <Button
                colorScheme="blue"
                rounded="xl"
                size="lg"
                leftIcon={<TwitterLogo weight="fill" />}
                mt={4}
              >
                Follow me on Twitter
              </Button>
            </Link>
          </VStack>
        </Section>
      </VStack>
    </PageTransition>
  </Box>
);

export function getStaticProps() {
  const projects = [];

  return {
    props: {
      projects
    },
    revalidate: 600
  };
}

export default Home;
