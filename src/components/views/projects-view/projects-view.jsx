'use client';

import { Container } from '@chakra-ui/react';
import React from 'react';
import ProjectPost from './project-post/project-post';
import AnimatedSection from '../../common/AnimatedSection';
import ProjectContainer from './project-post/project-container/project-container';

function ProjectsView() {
  const solentClassicalWebsiteData = {
    name: 'Solent Classical Acupuncture Website',
    description: 'A website designed, created and hosted for a client setting up an independent acupuncture clinic.',
    html_url: 'https://www.solentclassicalacupuncture.co.uk/',
  };
  const HNWHPWebsite = {
    name: 'High Net Worth Health and Performance Ltd Website',
    description: 'A website designed, created and hosted for a client.',
    html_url: 'https://www.highnetworthhealth.com/',
  };
  const solentImage = '/solentWebsite.webp';
  const HNWHPImage = '/HNWHPImage.webp';
  return (
    <Container
      maxWidth="100%"
      px={['2rem', '2rem', '12rem', '12rem']}
      py="1.25rem"
      m="0"
    >
      {/* Project Post Section */}
      <AnimatedSection>
        <ProjectContainer projectData={HNWHPWebsite} projectImage={HNWHPImage} />
        <ProjectContainer projectData={solentClassicalWebsiteData} projectImage={solentImage} />
        <ProjectPost />
      </AnimatedSection>
    </Container>
  );
}

export default ProjectsView;
