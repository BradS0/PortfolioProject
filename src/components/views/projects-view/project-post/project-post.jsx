import React, { useEffect, useState } from 'react';
import ProjectContainer from './project-container/project-container';

function ProjectPost() {
  const [projects, setProjects] = useState([]);
  // TODO: Add these images to the correlating repos, pull them from git instead!
  const projectImages = ['/2DFFT.webp', '/JavaBeans.webp', '/CareOnTheGo.webp'];

  useEffect(() => {
    async function fetchGitData() {
      const gitURL = 'https://api.github.com/users/BradS0/repos?sort=pushed&per_page=100';

      try {
        const response = await fetch(gitURL);
        const data = await response.json();
        console.log(data);
        setProjects(data);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
      }
    }

    fetchGitData();
  }, []);

  return (
    <>
      {projects.map((project, index) => (
        <ProjectContainer projectData={project} projectImage={projectImages[index]} />
      ))}
    </>
  );
}

export default ProjectPost;
