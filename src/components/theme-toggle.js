import {
  IconButton,
  ScaleFade,
  Tooltip,
  useColorMode,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { MoonOutline, SunOutline } from 'heroicons-react';
import React from 'react';
import useSound from 'use-sound';

const ThemeToggle = ({ mobile }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [play] = useSound('/lightswitch.mp3', {
    volume: 0.05,
    sprite: {
      on: [0, 300],
      off: [500, 300],
    },
  });

  const handleClick = () => {
    toggleColorMode();
    colorMode === 'dark' ? play({ id: 'on' }) : play({ id: 'off' });
  };

  return (
    <Tooltip
      label={colorMode === 'dark' ? 'Light mode' : 'Dark mode'}
      aria-label={colorMode === 'dark' ? 'Use light mode' : 'Use dark mode'}
    >
      {mobile ? (
        <VStack
          as="button"
          spacing={0}
          rounded="md"
          px={6}
          color={useColorModeValue('blue.600', 'blue.200')}
          onClick={handleClick}
        >
          {colorMode === 'dark' ? (
            <ScaleFade in>
              <SunOutline size="32" />
            </ScaleFade>
          ) : (
            <ScaleFade in>
              <MoonOutline size="32" />
            </ScaleFade>
          )}
        </VStack>
      ) : (
        <IconButton
          isRound
          aria-label="Switch theme"
          icon={
            colorMode === 'dark' ? (
              <ScaleFade in>
                <SunOutline size="20" />
              </ScaleFade>
            ) : (
              <ScaleFade in>
                <MoonOutline size="20" />
              </ScaleFade>
            )
          }
          onClick={handleClick}
        />
      )}
    </Tooltip>
  );
};
export default ThemeToggle;
