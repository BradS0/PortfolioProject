'use client';

import { Container, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaRegCopyright } from 'react-icons/fa';
import AvatarBox from './avatar-box/avatar-box';
import BioBox from './bio-box/bio-box';
import HobbyBox from './hobby-box/hobby-box';
import WorkBox from './work-box/work-box';
import AnimatedSection from '../../common/AnimatedSection';

const words = "I'm a software developer based in the UK!";

export function HomeView() {
  return (
    <Container
      maxWidth="100%"
      px={['5rem', '5rem', '12rem', '12rem']}
      py="1.25rem"
      m="0"
    >
      {/* Intro Section */}
      <Container
        minWidth="100%"
        border="1px solid #9CCE7185"
        borderRadius="5px"
        shadow="base"
        textAlign="center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      >
        <Text>{words}</Text>
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
