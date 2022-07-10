import { Container, Text } from '@chakra-ui/react';
import React from 'react';

function HobbyBox() {
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
        maxWidth="12rem"
      >
        What I get up to!
      </Text>
    </Container>
  );
}

export default HobbyBox;
