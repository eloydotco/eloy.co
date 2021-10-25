import InterestTag from '@/components/interest-tag';
import PageTransition from '@/components/page-transitions';
import Section from '@/components/section';
import interests from '@/data/interests.json';
import { Heading, Text, VStack, Wrap } from '@chakra-ui/react';
import React from 'react';

const About = () => (
  <PageTransition>
    <VStack spacing={8}>
      <Section>
        <VStack align="start">
          <Heading as="h1">About</Heading>
          <Text>
            After school, I studied Engineering of Telecomunication Technologies in Vigo, Spain. It
            was at that time, where I found my passion for software engineering, new technologies
            and being an entrepreneur. In my free time, I always liked to help others, follow my
            curiosity and learn new things.
            <br />
            Born, raised and currently living in Galicia, Spain.
          </Text>
        </VStack>
      </Section>
      <Section>
        <VStack align="stretch" spacing={4}>
          <Heading as="h3" size="lg">
            Work
          </Heading>
          <Text>
            Head over to my
            <a href="https://www.linkedin.com/in/eloy-castelo/"> LinkedIn</a>, if you want to
            connect with me professionally.
          </Text>
        </VStack>
      </Section>
      <Section>
        <VStack align="stretch" spacing={4}>
          <Heading as="h3">😁</Heading>
          <Wrap>
            {interests.like.map((el) => (
              <InterestTag name={el} key={el} like />
            ))}
          </Wrap>
        </VStack>
      </Section>
      <Section>
        <VStack align="stretch" spacing={4}>
          <Heading as="h3">😒</Heading>
          <Wrap>
            {interests.dislike.map((el) => (
              <InterestTag name={el} key={el} />
            ))}
          </Wrap>
        </VStack>
      </Section>
    </VStack>
  </PageTransition>
);

export default About;
