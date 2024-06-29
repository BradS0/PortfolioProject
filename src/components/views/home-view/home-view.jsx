'use client';

import { Container, Text } from '@chakra-ui/react';
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
import { FaRegCopyright } from 'react-icons/fa';
import AvatarBox from './avatar-box/avatar-box';
import BioBox from './bio-box/bio-box';
import HobbyBox from './hobby-box/hobby-box';
import WorkBox from './work-box/work-box';
import Typewriter from '../../common/typewriter/typewriter';

const words = "I'm a software developer based in the UK!";

export function HomeView() {
  const MotionContainer = motion(Container);
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });
  // const MotionText = motion(Text);
  // useGSAP(() => {
  //   const words = gsap.utils.toArray(AnimatedIntro);
  //   const t1 = gsap.timeline({ delay: 0.5 });
  //   const timePerCharacter = 0.2;
  //   words.forEach((e1) => {
  //     t1.from(e1, { text: '', duration: e1.innerHTML.length * timePerCharacter, ease: 'none' });
  //   });
  // }, { scope: AnimatedIntro });

  return (
    <>
      {/* <motion.div
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{ scaleX }}
        minWidth="100%"
        position="sticky"
        top="50"
        left="0"
        right="0"
        zIndex="20"
        height="10rem"
        bg="red"
        transformOrigin="0%"
      /> */}
      <MotionContainer
        maxWidth="100%"
        px={['5rem', '5rem', '12rem', '12rem']}
        py="1.25rem"
        m="0"
      >
        <MotionContainer
          minWidth="100%"
          border="1px solid #9CCE7185"
          borderRadius="5px"
          shadow="base"
          textAlign="center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          { /* Typewriter code */}
          {/* <Typewriter text={words} /> */}
          <Text>
            {words}
          </Text>
        </MotionContainer>
        <AvatarBox />
        <WorkBox />
        <BioBox />
        <HobbyBox />
        <Container
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          pt="3rem"
        >
          <FaRegCopyright size="0.7rem" color="#C6C6C6" />
          <Text
            paddingLeft="0.25rem"
            fontSize="0.7rem"
            textColor="#C6C6C6"
          >
            {' '}
            2024 Bradley Onyett. All rights reserved.
            {' '}
          </Text>
        </Container>
      </MotionContainer>
    </>
  );
}

export default HomeView;
