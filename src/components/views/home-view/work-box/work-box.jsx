import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Button, Container, Text, useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../common/AnimatedSection';

function WorkBox() {
  const MotionButton = motion(Button);
  return (
    <Container
      mx="0"
      my="1.5rem"
      minWidth="100%"
      border="1px solid #9CCE7185"
      borderRadius="5px"
      shadow="base"
      display="flex"
      px="1rem"
      flexDirection="column"
    >
      <AnimatedSection>
        <Text
          fontFamily="Quicksand"
          fontSize="1.5rem"
          paddingTop="0.5rem"
          fontWeight="bold"
          borderBottom="1px solid #C6C6C6"
          maxWidth="4rem"
        >
          Work
        </Text>
      </AnimatedSection>
      <AnimatedSection>
        <Text
          paddingTop="0.5rem"
          textAlign="justify"
          fontFamily="Quicksand"
          fontSize="0.9rem"
        >
          I'm a Software Developer based in Portsmouth,
          with a passion for digital services and design.
          Currently, I'm working under the role of Software
          Developer for Transalis Ltd, but still I participate
          in projects outside of day-to-day work to pursue my
          interests and develop my skills! Since graduating
          from Portsmouth University, I have delved more into the
          world of frontend development and API design! More recently,
          I have found myself doing more freelance web development work,
          designing and creating websites for clients and
          helping them achieve their creative vision.
        </Text>
      </AnimatedSection>
      <Container
        m="0"
        p="0"
        minWidth="100%"
        textAlign="center"
      >
        <Link href="/projects" passHref>
          <MotionButton
            width="auto"
            bg={useColorModeValue('secondaryColourLightMode', 'secondaryColourDarkMode')}
            my="0.5rem"
            rightIcon={<ArrowForwardIcon />}
            transition="all 0.3s ease-in-out"
            whileHover={{ scale: 1.05 }}
          >
            <Text
              fontFamily="Quicksand"
              fontSize="0.8rem"
            >
              Portfolio Work
            </Text>
          </MotionButton>
        </Link>
      </Container>
    </Container>
  );
}

export default WorkBox;
