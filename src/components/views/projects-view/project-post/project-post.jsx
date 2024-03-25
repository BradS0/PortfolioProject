import { Container, Image, Text } from '@chakra-ui/react';
import React from 'react';
import ProjectContainer from './project-container/project-container';
import projectsJSON from './projects.json';

// Add image source link to JSON, map JSON to projectContainer Object: fieldNames.map((fieldName) => <projectContainer blablablah />)

function ProjectPost() {
  const projects = projectsJSON;
  return (
    <>
      {projects.map((project) => (
        <ProjectContainer projectData={project} />
      ))}
    </>
  );
}

export default ProjectPost;
