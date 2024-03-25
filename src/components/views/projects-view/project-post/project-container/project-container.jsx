import { Container, Image, Text } from '@chakra-ui/react';
import React from 'react';

function ProjectContainer(project) {
  console.log(project);
  const { projectData } = project;
  return (
    <Container
      minWidth="100%"
      border="2px solid #9CCE7185"
      borderRadius="5px"
      shadow="base"
      textAlign="center"
      padding="0"
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
          bg="blue"
          textAlign="center"
          paddingY="0"
          paddingX="0"
          minWidth="20%"
          my="0"
        >
          <Image
            src={projectData.projectImage}
            alt="Project Image"
            padding="0"
            margin="0"
            width="100%"
            height="100%"
          />
        </Container>
        <Container
          // bg="green"
          paddingY="0"
          paddingLeft="0"
          minWidth="70%"
          m="0"
        >
          <Text
            m="0"
            px="0.2rem"
            fontFamily="Quicksand"
            fontSize="0.9rem"
            paddingTop="0.1rem"
          >
            {projectData.projectText}
          </Text>
        </Container>
      </Container>
    </Container>
  );
}

export default ProjectContainer;
