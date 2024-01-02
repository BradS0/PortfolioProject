import { Container, Text } from '@chakra-ui/react';
import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import AvatarBox from './avatar-box/avatar-box';
import BioBox from './bio-box/bio-box';
import HobbyBox from './hobby-box/hobby-box';
import WorkBox from './work-box/work-box';

function HomeView() {
  return (
    <Container
      maxWidth="100%"
      px={['5rem', '5rem', '12rem', '12rem']}
      py="1.25rem"
      m="0"
    >
      <Container
        minWidth="100%"
        border="1px solid #C6C6C6"
        borderRadius="5px"
        shadow="base"
        textAlign="center"
      >
        <Text
          fontFamily="Quicksand"
          py="0.5rem"
        >
          Hey! I'm a software developer based in the UK!
        </Text>
      </Container>
      <AvatarBox />
      <WorkBox />
      <BioBox />
      <HobbyBox />
      <Container
        display="flex"
        flex-direction="row"
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
          2022 Bradley Onyett. All rights reserved.
          {' '}

        </Text>
      </Container>
    </Container>
  );
}

export default HomeView;
