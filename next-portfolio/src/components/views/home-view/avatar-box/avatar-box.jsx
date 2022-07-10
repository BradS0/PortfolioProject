import {
  Box, chakra, Container, Heading, Text, useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});
const avatarImage = '/leegriggs.jpg';

function AvatarBox() {
  return (
    <Container
      mx="0"
      my="1rem"
      minWidth="100%"
      display="flex"
      px="1rem"
      flexDirection="row"
    >
      <Box flexGrow={1}>
        <Heading
          as="h2"
          variant="page-title"
          fontFamily="Quicksand"
        >
          Bradley Onyett
        </Heading>
        <Text
          fontFamily="Quicksand"
        >
          Software Developer
        </Text>
      </Box>
      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
        <Box
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          w="100px"
          h="100px"
          display="inline-block"
          borderRadius="full"
          overflow="hidden"
        >
          <ProfileImage
            src={avatarImage}
            alt="Profile image"
            borderRadius="full"
            width="100%"
            height="100%"
          />
        </Box>
      </Box>
    </Container>
  );
}

export default AvatarBox;
