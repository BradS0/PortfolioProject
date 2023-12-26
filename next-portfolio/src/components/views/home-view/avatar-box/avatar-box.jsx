import {
  Box, chakra, Container, Heading, Link, Text, Image,
} from '@chakra-ui/react';
import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';

// const ProfileImage = chakra(Image, {
//   shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
// });
const avatarImage = '/leegriggs.jpg';

function AvatarBox() {
  return (
    <Container
      mx="0"
      my="3rem"
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
        <Container
          m="0"
          px="0"
          pt="0.3rem"
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <FaLinkedin />
          <Link href="https://uk.linkedin.com/in/bradley-onyett-07a102229">
            <Text
              pl="0.5rem"
              fontFamily="Quicksand"
              fontSize="0.8rem"
            >
              Bradley Onyett
            </Text>
          </Link>
        </Container>
        <Container
          m="0"
          px="0"
          pt="0.3rem"
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <GoMarkGithub />
          <Link href="https://github.com/BradS0">
            <Text
              pl="0.5rem"
              fontFamily="Quicksand"
              fontSize="0.8rem"
            >
              BradS0
            </Text>
          </Link>
        </Container>
        <Container
          m="0"
          px="0"
          pt="0.3rem"
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <FaInstagram />
          <Link href="https://www.instagram.com/bradleyonyett_">
            <Text
              pl="0.5rem"
              fontFamily="Quicksand"
              fontSize="0.8rem"
            >
              @bradleyonyett_
            </Text>
          </Link>
        </Container>
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
          <Image
            src={avatarImage}
            alt="Profile image"
            borderRadius="full"
            // width="100%"
            // height="100%"
          />
        </Box>
      </Box>
    </Container>
  );
}

export default AvatarBox;
