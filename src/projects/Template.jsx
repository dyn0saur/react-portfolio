// src/projects/Template.jsx
import React from "react";

export default function Template({ title, hero, children }) {
  return (
    <article className="container section project-detail">
      {hero && (
        <div className="project-hero">
          <img src={hero} alt={title} />
        </div>
      )}
      <h1><span className="badge">{title}</span></h1>
      <div className="project-content">
        {children}
      </div>
      <p style={{ marginTop: 24 }}>
        <a href="#/">← Back to home</a>
      </p>
    </article>
  );
}
