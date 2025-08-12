import React from 'react';

function resolveImageSrc(image) {
  if (!image) return null;
  if (/^https?:\/\//i.test(image)) return image;
  if (image.startsWith('/')) return `${process.env.PUBLIC_URL}${image}`;
  return `${process.env.PUBLIC_URL}/${image}`;
}

export default function ProjectCard({ project = null }) {
  if (!project || typeof project !== 'object') return null;

  const {
    title = 'Untitled',
    description = '',
    image = '',
    url = '',
    tech = []
  } = project ?? {};

  const imgSrc = resolveImageSrc(image);

  return (
    <article className="card" style={{ gridColumn: 'span 4' }}>
      {imgSrc && <img src={imgSrc} alt={title} style={{width:'100%',borderRadius:'12px',marginBottom:'12px'}} />}
      <h3 style={{ fontSize: 18, margin: '8px 0' }}>{title}</h3>
      {description && <p style={{ opacity:.85 }}>{description}</p>}
      {Array.isArray(tech) && tech.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {tech.map((t, i) => <span key={`${t}-${i}`} className="badge">{t}</span>)}
        </div>
      )}
      {url && <p style={{marginTop:12}}><a href={url} target="_blank" rel="noreferrer">View</a></p>}
    </article>
  );
}
