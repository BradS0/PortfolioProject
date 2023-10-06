import { Container, Text } from '@chakra-ui/react';
import React from 'react';
<<<<<<< Updated upstream
=======
import ProjectPostBox from './project-post-box/project-post-box';
>>>>>>> Stashed changes

function ProjectsView() {
  return (
    <Container
      maxWidth="100%"
      px="12rem"
      py="1.25rem"
      m="0"
    >
<<<<<<< Updated upstream
      <Container
        minWidth="100%"
        border="1px solid #9CCE7185"
        borderRadius="5px"
        shadow="base"
        textAlign="center"
      >
        <Container
          minWidth="100%"
          bg="red"
          display="flex"
          flexDirection="row"
          justifyContent="center"
        >
          <Container
            bg="blue"
            textAlign="center"
            paddingY="0"
            paddingRight="0"
            minWidth="20%"
            my="0"
          >
            PICTURE
          </Container>
          <Container
            bg="green"
            paddingY="0"
            paddingLeft="0"
            minWidth="70%"
            m="0"
          >
            CONTENT
          </Container>
        </Container>

      </Container>
=======
      <ProjectPostBox />
>>>>>>> Stashed changes
    </Container>
  );
}

export default ProjectsView;
