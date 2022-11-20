import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Button, Container, Text, useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';

function WorkBox() {
  return (
    <Container
      mx="0"
      my="1rem"
      minWidth="100%"
      border="1px solid #9CCE7185"
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
        maxWidth="4rem"
      >
        Work
      </Text>
      <Text
        paddingTop="0.5rem"
        textAlign="justify"
        fontFamily="Quicksand"
        fontSize="0.9rem"
      >
        Bradley is a Software Developer based in Portsmouth,
        with a passion for digital services and design.
        Currently, he is working under the role of Software
        Developer for Transalis Ltd, but still participates
        in projects outside of his day-to-day work to pursue his
        interests and develop his skills! Since graduating
        from Portsmouth University, he has delved more into the
        world of frontend development and API design!
      </Text>
      <Container
        m="0"
        p="0"
        minWidth="100%"
        textAlign="center"
      >
        <Link href="/project" passHref>
          <Button
            width="auto"
            bg={useColorModeValue('secondaryColourLightMode', 'secondaryColourDarkMode')}
            my="0.5rem"
            rightIcon={<ArrowForwardIcon />}
          >
            <Text
              fontFamily="Quicksand"
              fontSize="0.8rem"
            >
              Portfolio Work
            </Text>
          </Button>
        </Link>
      </Container>
    </Container>
  );
}

export default WorkBox;
