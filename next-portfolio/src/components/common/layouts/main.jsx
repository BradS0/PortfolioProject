import Head from 'next/head';
import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import NavBar from '../nav-bar/nav-bar';

function MainLayout({ children }) {
  return (
    <Box as="main" display="inline-flex" height="100%" width="100%">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A web portfolio" />
        <meta name="author" content="Bradley Onyett" />
        <title>Bradley Onyett - Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet" />
      </Head>

      <Container display="flex" flexDirection="column" p="0" m="0" maxW="100%" minH="100vh" overflow="auto">
        <NavBar />

        {children}

      </Container>
    </Box>
  );
}

export default MainLayout;
