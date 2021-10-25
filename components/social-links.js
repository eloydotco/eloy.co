import { Button, Link, Stack } from "@chakra-ui/react";
import { GithubLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

const SocialLinks = () => {
  return (
    <Stack direction={["column", "row"]} align="stretch" spacing={[0, 4]}>
      <Link href="https://twitter.com/thoughts_by_eco" isExternal>
        <Button
          colorScheme="blue"
          rounded="xl"
          size="lg"
          leftIcon={<TwitterLogo size="24" weight="light" />}
          mt={4}
        >
          Twitter
        </Button>
      </Link>
      <Link href="https://www.linkedin.com/in/eloy-castelo/" isExternal>
        <Button
          colorScheme="blue"
          rounded="xl"
          size="lg"
          leftIcon={<LinkedinLogo size="24" weight="light" />}
          mt={4}
        >
          Linkedin
        </Button>
      </Link>
      <Link href="https://github.com/codes-by-eco/" isExternal>
        <Button
          colorScheme="blue"
          rounded="xl"
          size="lg"
          leftIcon={<GithubLogo size="24" weight="light" />}
          mt={4}
        >
          Github
        </Button>
      </Link>
    </Stack>
  );
};

export default SocialLinks;
