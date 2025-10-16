// src/projects/Template.jsx
import React, { useCallback } from "react";
import LightboxImage from "../components/LightboxImage";
import PageLinksNav from "../components/PageLinksNav";

export default function Template({ title, category, date, hero, heroThumb, children }) {
  const handleBackClick = useCallback((event) => {
    if (typeof window === "undefined") return;
    if (window.history.length > 1) {
      event.preventDefault();
      window.history.back();
    }
  }, []);

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
      <PageLinksNav active="projects" ariaLabel="Navigate to other sections" className="project-detail__page-links" />
      <p style={{ marginTop: 24 }}>
        <a href="#/projects" onClick={handleBackClick}>Back</a>
      </p>
    </article>
  );
}
