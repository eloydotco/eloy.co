import { Avatar } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const AvatarNavigation = () => {
  return (
    <Link href="/">
      <Avatar name="Eloy Castelo" size="md" src="/avatar.jpg" cursor="pointer" />
    </Link>
  );
};

export default AvatarNavigation;
