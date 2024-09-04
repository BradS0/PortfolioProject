import React from 'react';
import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import NavBar from '../nav-bar/nav-bar';
import { motion, useScroll, useSpring } from 'framer-motion';

function MainLayout({ children }) {
  const MotionContainer = motion(Container);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Box as="main" display="inline-flex" height="100%" width="100%">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A web portfolio" />
        <meta name="author" content="Bradley Onyett" />
        <title>Bradley Onyett - Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet" />
      </Head>

      <MotionContainer display="flex" flexDirection="column" p="0" m="0" maxW="100%" minH="100vh" overflow="auto">
        <NavBar />

        {children}

      </MotionContainer>
    </Box>
  );
}

export default MainLayout;
