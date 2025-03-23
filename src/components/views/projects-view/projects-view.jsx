'use client';

import { Container } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import ProjectPost from './project-post/project-post';
import AnimatedSection from '../../common/AnimatedSection';

function ProjectsView() {
  return (
    <Container
      maxWidth="100%"
      px={['5rem', '5rem', '12rem', '12rem']}
      py="1.25rem"
      m="0"
    >
      {/* Project Post Section */}
      <AnimatedSection>
        <ProjectPost />
      </AnimatedSection>
    </Container>
  );
}

export default ProjectsView;
