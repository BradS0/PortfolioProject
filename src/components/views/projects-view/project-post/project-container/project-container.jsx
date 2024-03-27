import {
  Container, Image, Text, Button, Flex,
} from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import { GoMarkGithub } from 'react-icons/go';

function ProjectContainer({ projectData, projectImage }) {
  return (
    <Container
      minWidth="100%"
      border="2px solid #9CCE7185"
      borderRadius="5px"
      shadow="base"
      textAlign="center"
      padding="0"
      mb="1rem"
    >
      <Container
        minWidth="100%"
        // bg="red"
        display="flex"
        paddingX="0"
        flexDirection="row"
        justifyContent="center"
      >
        <Container
          // bg="blue"
          textAlign="center"
          paddingY="0"
          paddingX="0"
          minWidth="20%"
          m="0.25rem"
          borderRadius="5rem"
        >
          <Image
            src={projectImage}
            alt="Project Image"
            padding="0"
            borderRadius="2rem"
            margin="0"
            width="100%"
            height="100%"
          />
        </Container>
        <Container
          // bg="green"
          display="flex"
          paddingY="0"
          paddingLeft="0"
          minWidth="70%"
          m="0"
          flexDirection="column"

        >
          <Container
            m="0"
            p="0"
            ml="2rem"
            minW="80%"
            borderBottom="1px solid #9CCE7185"

          >
            <Text
              align="left"
              fontFamily="Quicksand"
              fontSize="1.2rem"
              fontWeight="semibold"
              paddingY="0.1rem"
            >
              {projectData.name}
            </Text>
          </Container>
          <Container
            m="0"
            pl="2rem"
            minW="100%"

          >
            <Text
              align="left"
              fontFamily="Quicksand"
              fontSize="0.9rem"
              paddingY="0.1rem"
            >
              {projectData.description}
            </Text>
          </Container>
          <Flex
            pl="2rem"
            pb="0.5rem"
            m="0"
          >
            <NextLink href={projectData.html_url}>
              <Button
                size="sm"
                variant="ghost"
                bg="#9CCE7150"
                // border="1px solid #9CCE7185"
                leftIcon={<GoMarkGithub />}
                marginRight="0.5rem"
                marginTop="0.2rem"
                fontFamily="Quicksand"
              >
                Source
              </Button>
            </NextLink>
          </Flex>

        </Container>
      </Container>
    </Container>
  );
}

export default ProjectContainer;
