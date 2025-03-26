import React from 'react';
import {
  Text,
  Box,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import Image from 'next/image';
import navImage from '../../../../../public/WebsiteLogo.webp';

import 'typeface-roboto';

function NavLogo() {
  const textColor = useColorModeValue('gray.800', 'white');
  return (
    <Link ml="0.5rem" href="/" display="flex" alignItems="center" _hover={{ textDecoration: 'none' }}>
      <Box
        position="relative"
        height="3rem"
        width="3rem"
        borderRadius="full"
        overflow="hidden"
        mr={3}
        flexShrink={0}
      >
        <Image
          src={navImage}
          layout="fill"
          objectFit="cover"
          alt="Logo"
        />
      </Box>

      <Text
        color={textColor}
        fontFamily="Quicksand"
        fontWeight="bold"
        lineHeight="normal"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
      >
        Bradley Onyett
      </Text>
    </Link>
  );
}

export default NavLogo;
