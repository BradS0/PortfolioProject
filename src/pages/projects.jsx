import { React } from 'react';
import PageLayout from '../components/common/layouts/page';
import ProjectsView from '../components/views/projects-view/projects-view';

function Projects() {
  return (
    <PageLayout title="Projects & Works">
      <ProjectsView />
    </PageLayout>
  );
}

export default Projects;
