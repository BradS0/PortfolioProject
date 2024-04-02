import { Container } from '@chakra-ui/react';
import React from 'react';
import ProjectPost from './project-post/project-post';

function ProjectsView() {
  return (
    <Container
      maxWidth="100%"
      px={['5rem', '5rem', '12rem', '12rem']}
      py="1.25rem"
      m="0"
    >
      <ProjectPost />
    </Container>
  );
}

export default ProjectsView;
