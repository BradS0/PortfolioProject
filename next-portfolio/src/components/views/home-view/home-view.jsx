import { Container, Text } from '@chakra-ui/react';
import React from 'react';
import AvatarBox from './avatar-box/avatar-box';
import BioBox from './bio-box/bio-box';
import HobbyBox from './hobby-box/hobby-box';
import WorkBox from './work-box/work-box';

function HomeView() {
  return (
    <Container
      minWidth="100%"
      px="6rem"
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
    </Container>
  );
}

export default HomeView;
