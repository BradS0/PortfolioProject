import { Container, Text } from '@chakra-ui/react';
import React from 'react';

function HobbyBox() {
  const textStyle = { fontSize: '0.9rem', fontFamily: 'Quicksand' };
  return (
    <Container
      mx="0"
      my="1rem"
      minWidth="100%"
      border="1px solid #C6C6C6"
      borderRadius="5px"
      shadow="base"
      display="flex"
      px="1rem"
      flexDirection="column"
    >
      <Text
        fontFamily="Quicksand"
        fontSize="1.5rem"
        paddingTop="0.5rem"
        fontWeight="bold"
        borderBottom="1px solid #C6C6C6"
        maxWidth="21rem"
      >
        What I spend my time doing?
      </Text>

      <Container
        m="0"
        paddingY="0.5rem"
        paddingX="0rem"
        minWidth="100%"
        display="flex"
        flexDirection="column"
      >
        <Text style={textStyle}> Listening to a lot of music </Text>
        <Text style={textStyle} fontWeight="bold"> Learning music production </Text>
        <Text style={textStyle}> Programming </Text>
      </Container>
    </Container>
  );
}

export default HobbyBox;
