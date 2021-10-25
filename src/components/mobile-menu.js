import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { Menu } from 'heroicons-react';
import React from 'react';
import MobileMenuItem from './mobile-menu-item';

const MobileMenu = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box>
      <VStack
        as="button"
        spacing={0}
        rounded="md"
        px={6}
        color={useColorModeValue('blue.600', 'blue.200')}
        onClick={onOpen}
      >
        {<Menu size="32" />}
      </VStack>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay>
          <DrawerContent borderTopRadius="6px">
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody pb={2}>
              <VStack>
                <MobileMenuItem href="/" title="Home" />
                <MobileMenuItem href="/about" title="About" />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default MobileMenu;
