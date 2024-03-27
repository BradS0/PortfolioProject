import { Container, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ProjectContainer from './project-container/project-container';
import projectsJSON from './projects.json';

// Add image source link to JSON, map JSON to projectContainer Object: fieldNames.map((fieldName) => <projectContainer blablablah />)

function ProjectPost() {
  const [projects, setProjects] = useState([]);
  const projectImages = ["/Chimpanzee.jpg", "/CareOnTheGo.jpg"];

  useEffect(() => {
    async function fetchGitData() {
      const gitURL = 'https://api.github.com/users/BradS0/repos?sort=pushed&per_page=100';

      try {
        const response = await fetch(gitURL);
        const data = await response.json();
        setProjects(data); // Set the fetched data into state
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
      }
    }

    fetchGitData();
  }, []);

  return (
    <>
      {projects.map((project, projectImage) => (
        <ProjectContainer projectData={project} projectImage={projectImage}/>
      ))}
    </>
  );
}

export default ProjectPost;
