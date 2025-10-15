// src/projects/Template.jsx
import React from "react";
import LightboxImage from "../components/LightboxImage";

export default function Template({ title, category, date, hero, heroThumb, children }) {
  return (
    <article className="container section project-detail">
      {hero && (
        <div className="project-hero">
          <LightboxImage src={hero} thumb={heroThumb} alt={title} style={{ margin: "0 0 24px" }} />
        </div>
      )}
      <h1><span className="badge">{title}</span></h1>
      {(category || date) && (
        <dl className="project-meta project-meta--detail" aria-label="project details">
          {category && (
            <>
              <dt className="project-meta__label">Category</dt>
              <dd className="project-meta__value">{category}</dd>
            </>
          )}
          {date && (
            <>
              <dt className="project-meta__label">Date</dt>
              <dd className="project-meta__value">{date}</dd>
            </>
          )}
        </dl>
      )}
      <div className="project-content">
        {children}
      </div>
      <p style={{ marginTop: 24 }}>
        <a href="#/">← Back to home</a>
      </p>
    </article>
  );
}
