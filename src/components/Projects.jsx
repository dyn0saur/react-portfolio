import React from 'react';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

/**
 * Projects section component. This component iterates over a
 * collection of project data and renders a card for each entry.
 * Project data is imported from a separate module to make it easy
 * to update without modifying the component code.
 */
function Projects() {
  return (
    <section id="projects">
      <h2>프로젝트</h2>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </section>
  );
}

export default Projects;