import React from 'react';
import {
  Container,
  Text,
  Box,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import Image from 'next/image';
import navImage from '../../../../../public/WebsiteLogo.jpg';

import 'typeface-roboto';

function NavLogo() {
  return (
  // If you want a logo here in the future see {craftz.dog LogoBox component}

    <Container display="flex" justifyContent="flex-start" maxWidth="14rem" paddingRight="0" paddingY="0" m="0">
      <Box p="0" m="0" height="3rem" width="3rem" borderRadius="4rem" overflow="hidden">
        <Link href="/">
          <Image
            src={navImage}
            objectFit="cover"
          />
        </Link>
      </Box>

      <Text
        color={useColorModeValue('gray.800', 'white')}
        fontFamily="Quicksand     "
        fontWeight="bold"
        paddingLeft="1rem"
        paddingTop="0.8rem"
        paddingRight="0"
        width="8.25rem"
        height="auto"
      >
        Bradley Onyett
      </Text>
    </Container>
  );
}

export default NavLogo;
