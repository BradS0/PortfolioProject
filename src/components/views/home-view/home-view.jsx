import { Container, Text } from '@chakra-ui/react';
import React from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
import { FaRegCopyright } from 'react-icons/fa';
import AvatarBox from './avatar-box/avatar-box';
import BioBox from './bio-box/bio-box';
import HobbyBox from './hobby-box/hobby-box';
import WorkBox from './work-box/work-box';

// const words = "I'm a software developer based in the UK";

export function HomeView() {
  // useGSAP(() => {
  //   const words = gsap.utils.toArray(AnimatedIntro);
  //   const t1 = gsap.timeline({ delay: 0.5 });
  //   const timePerCharacter = 0.2;
  //   words.forEach((e1) => {
  //     t1.from(e1, { text: '', duration: e1.innerHTML.length * timePerCharacter, ease: 'none' });
  //   });
  // }, { scope: AnimatedIntro });

  return (
    <Container
      maxWidth="100%"
      px={['5rem', '5rem', '12rem', '12rem']}
      py="1.25rem"
      m="0"
    >
      <Container
        minWidth="100%"
        border="1px solid #9CCE7185"
        borderRadius="5px"
        shadow="base"
        textAlign="center"
      >
        <Text
          fontFamily="Quicksand"
          py="0.5rem"
        >
          Hey! I'm a software developer based in the UK
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
          2024 Bradley Onyett. All rights reserved.
          {' '}

        </Text>
      </Container>
    </Container>
  );
}

export default HomeView;
