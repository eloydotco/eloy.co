import { SlideFade } from '@chakra-ui/react';
import React from 'react';

const PageTransition = ({ children }) => {
  return <SlideFade in>{children}</SlideFade>;
};

export default PageTransition;
