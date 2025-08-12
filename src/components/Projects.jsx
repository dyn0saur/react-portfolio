import React from 'react';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects(){
  const list = Array.isArray(projects) ? projects.filter(p => p && typeof p === 'object') : [];
  console.log('projects length:', list.length, list);
  return (
    <section id="projects" className="container">
      <h2>Projects</h2>
      <div className="grid">
        {list.map((p, i) => (
          <ProjectCard key={p.title ? `${p.title}-${i}` : i} project={p} />
        ))}
      </div>
    </section>
  );
}
