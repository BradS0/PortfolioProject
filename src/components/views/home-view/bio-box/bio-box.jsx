import { Container, Text } from '@chakra-ui/react';
import React from 'react';

function BioBox() {
  return (
    <Container
      minWidth="100%"
      border="1px solid #9CCE7185"
      borderRadius="5px"
      shadow="base"
    >
      <Container
        m="0"
        p="0"
      >
        <Text
          fontFamily="Quicksand"
          fontSize="1.5rem"
          paddingTop="0.5rem"
          fontWeight="bold"
          borderBottom="1px solid #C6C6C6"
          maxWidth="2.5rem"
        >
          Bio
        </Text>
      </Container>
      <Container
        minWidth="100%"
        m="0"
        p="0"
        display="flex"
        pt="0.5rem"
      >
        <Text
          m="0"
          px="0.3rem"
          fontWeight="bold"
          fontFamily="Quicksand"
        >
          1999:
        </Text>
        <Text
          m="0"
          px="0.2rem"
          fontFamily="Quicksand"
          fontSize="0.9rem"
          paddingTop="0.1rem"
        >
          Born in London!
        </Text>
      </Container>
      <Container
        minWidth="100%"
        m="0"
        p="0"
        display="flex"
        pt="0.3rem"
      >
        <Text
          m="0"
          px="0.3rem"
          fontWeight="bold"
          fontFamily="Quicksand"
        >
          2021:
        </Text>
        <Text
          m="0"
          px="0.2rem"
          fontFamily="Quicksand"
          fontSize="0.9rem"
          paddingTop="0.1rem"
        >
          Graduated with a Master's Degree in Computer Science from the University of Portsmouth
        </Text>
      </Container>
      <Container
        minWidth="100%"
        m="0"
        px="0"
        pt='0.3rem'
        display="flex"
      >
        <Text
          m="0"
          px="0.3rem"
          fontWeight="bold"
          fontFamily="Quicksand"
        >
          2021:
        </Text>
        <Text
          m="0"
          px="0.2rem"
          fontFamily="Quicksand"
          fontSize="0.9rem"
          paddingTop="0.1rem"
        >
          Begin working with Transalis as a Junior Software Developer
        </Text>
      </Container>
      <Container
        minWidth="100%"
        m="0"
        p="0"
        display="flex"
        py="0.3rem"
      >
        <Text
          m="0"
          px="0.3rem"
          fontWeight="bold"
          fontFamily="Quicksand"
        >
          2022:
        </Text>
        <Text
          m="0"
          px="0.2rem"
          fontFamily="Quicksand"
          fontSize="0.9rem"
          paddingTop="0.1rem"
        >
          Promoted from Junior Software Developer role at Transalis Ltd
        </Text>
      </Container>
    </Container>
  );
}

export default BioBox;
