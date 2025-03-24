import {
  Box, Container, Heading, Link, Text, Image,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { FaEnvelopeOpen, FaLinkedin } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';

// const ProfileImage = chakra(Image, {
//   shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
// });
const avatarImage = '/WebsiteLogo.webp';

function AvatarBox() {
  const MotionContainer = motion(Container);
  const containerAnim = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.7,
        staggerDirection: -1,
      },
    },
  };
  const itemAnim = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };
  return (
    <MotionContainer
      mx="0"
      my="3rem"
      minWidth="100%"
      display="flex"
      px="1rem"
      flexDirection="row"
      variants={containerAnim}
      initial="hidden"
      animate="show"
    // initial={{ opacity: 0, scale: 0.5 }}
    // animate={{ opacity: 1, scale: 1 }}
    // transition={{ ease: 'linear', duration: 2, x: { duration: 1 } }}
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
          variants={itemAnim}
        >
          Software Developer
        </Text>
        <MotionContainer
          m="0"
          px="0"
          pt="0.3rem"
          display="flex"
          flexDirection="row"
          alignItems="center"
          variants={itemAnim}
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
        </MotionContainer>
        <MotionContainer
          m="0"
          px="0"
          pt="0.3rem"
          display="flex"
          flexDirection="row"
          alignItems="center"
          variants={itemAnim}
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
        </MotionContainer>
        <MotionContainer
          m="0"
          px="0"
          pt="0.3rem"
          display="flex"
          flexDirection="row"
          alignItems="center"
          variants={itemAnim}
        >
          <FaEnvelopeOpen />
          <Link href="mailto:bradsodev@gmail.com">
            <Text
              pl="0.5rem"
              fontFamily="Quicksand"
              fontSize="0.8rem"
            >
              bradsodev@gmail.com
            </Text>
          </Link>
        </MotionContainer>
      </Box>
      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
        <Box
          borderColor="#9CCE7185"
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
    </MotionContainer>
  );
}

export default AvatarBox;
