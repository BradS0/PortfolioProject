'use client';

import { Container } from '@chakra-ui/react';
import React from 'react';
import ProjectPost from './project-post/project-post';
import AnimatedSection from '../../common/AnimatedSection';
import ProjectContainer from './project-post/project-container/project-container';

function ProjectsView() {
  const websiteData = {
    name: 'Solent Classical Acupuncture Website',
    description: 'A website created and hosted for a client setting up an independent acupuncture clinic.',
    html_url: 'https://www.solentclassicalacupuncture.co.uk/',
  };
  const projectImage = '/solentWebsite.webp';
  return (
    <Container
      maxWidth="100%"
      px={['5rem', '5rem', '12rem', '12rem']}
      py="1.25rem"
      m="0"
    >
      {/* Project Post Section */}
      <AnimatedSection>
        <ProjectContainer projectData={websiteData} projectImage={projectImage} />
        <ProjectPost />
      </AnimatedSection>
    </Container>
  );
}

export default ProjectsView;
