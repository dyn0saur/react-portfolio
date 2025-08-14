// src/projects/Template.jsx
import React from "react";
import LightboxImage from "../components/LightboxImage";

export default function Template({ title, hero, heroSmall, children }) {
  return (
    <article className="container section project-detail">
      {hero && (
        <div className="project-hero">
          <LightboxImage src={hero} thumb={heroSmall} alt={title} style={{margin:'0 0 24px'}} />
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
