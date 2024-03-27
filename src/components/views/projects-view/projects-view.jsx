import { Container } from '@chakra-ui/react';
import React from 'react';
import ProjectPost from './project-post/project-post';

function ProjectsView() {
  return (
    <Container
      maxWidth="100%"
      px="20rem"
      py="1.25rem"
      m="0"
    >
      <ProjectPost />
    </Container>
  );
}

export default ProjectsView;
