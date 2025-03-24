'use client';

import {
  chakra, Container, Heading, Text,
} from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import {
  isValidMotionProp, motion, useAnimation, useInView,
} from 'framer-motion';
import { FaRegCopyright } from 'react-icons/fa';
import AvatarBox from './avatar-box/avatar-box';
import BioBox from './bio-box/bio-box';
import HobbyBox from './hobby-box/hobby-box';
import WorkBox from './work-box/work-box';
import AnimatedSection from '../../common/AnimatedSection';

const words = "I'm a software developer based in the UK!";

export function HomeView() {
  const MotionContainer = chakra(motion.div, {
    shouldForwardProp: isValidMotionProp,
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Container
      maxWidth="100%"
      px={['3rem', '3rem', '12rem', '12rem']}
      py="1.25rem"
      m="0"
    >
      {/* Intro Section */}
      <Container
        minWidth="100%"
        minHeight="1.5rem"
        border="1px solid #9CCE7185"
        borderRadius="5px"
        shadow="base"
        textAlign="center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      >
        <Text
          ref={ref}
          fontSize="1.2rem"
          py="0.25rem"
        >
          {words.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              {letter}
            </motion.span>
          ))}
        </Text>
      </Container>

      {/* Avatar Section */}
      <AnimatedSection>
        <AvatarBox />
      </AnimatedSection>

      {/* Work Section */}
      <AnimatedSection>
        <WorkBox />
      </AnimatedSection>

      {/* Bio Section */}
      <AnimatedSection>
        <BioBox />
      </AnimatedSection>

      {/* Hobby Section */}
      <AnimatedSection>
        <HobbyBox />
      </AnimatedSection>

      {/* Footer */}
      <Container
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        pt="1.5rem"
      >
        <FaRegCopyright size="0.7rem" color="#C6C6C6" />
        <Text paddingLeft="0.25rem" fontSize="0.7rem" textColor="#C6C6C6">
          {' '}
          {new Date().getFullYear()}
          {' '}
          Bradley Onyett. All rights reserved.
        </Text>
      </Container>
    </Container>
  );
}

export default HomeView;
