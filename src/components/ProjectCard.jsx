import React from 'react';

/**
 * A simple card component for displaying individual project
 * information. Receives a project object via props and renders
 * its contents accordingly. The card layout can be styled via
 * external CSS or a utility framework like Tailwind. For now we
 * rely on simple markup.
 */
function ProjectCard({ project }) {
  const { title, description, image, url } = project;
  return (
    <div className="project-card" style={{ marginBottom: '2rem' }}>
      {image && (
        <img
          src={image}
          alt={`${title} thumbnail`}
          style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
        />
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      {url && (
        <a href={url} target="_blank" rel="noopener noreferrer">
          자세히 보기
        </a>
      )}
    </div>
  );
}

export default ProjectCard;