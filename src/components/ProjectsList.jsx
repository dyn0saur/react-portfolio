// src/components/ProjectsList.jsx
import React, { useEffect } from "react";
import projects from "../data/projects";
import { deriveThumbSrc } from "./LightboxImage";

function getProjectThumb(project) {
  return project.listThumb || project.thumb || deriveThumbSrc(project.hero) || project.hero;
}

export default function ProjectsList() {
  useEffect(() => {
    if (window.location.hash === "#projects") {
      setTimeout(() => {
        const el = document.getElementById("projects");
        if (!el) return;
        const y = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 0);
    }
  }, []);

  const go = (slug, e) => {
    e?.preventDefault?.();
    const hash = `#/projects/${slug}`;
    if (history.pushState) history.pushState(null, "", hash);
    else window.location.hash = hash;
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };

  return (
    <section className="container section" aria-labelledby="projects">
      <h2 id="projects">What I've done & written..</h2>
      <div className="projects-list">
        {projects.map((p) => (
          <article className="project-row" key={p.slug}>
            <a href={`#/projects/${p.slug}`} onClick={(e) => go(p.slug, e)} className="project-thumb">
              <img
                src={getProjectThumb(p)}
                alt={p.title}
                loading="lazy"
                onError={(event) => {
                  if (event.currentTarget.src !== p.hero) {
                    event.currentTarget.src = p.hero;
                  }
                }}
              />
            </a>
            <div className="project-body">
              <h3 className="project-title">
                <a href={`#/projects/${p.slug}`} onClick={(e) => go(p.slug, e)}>{p.title}</a>
              </h3>
              {(p.category || p.date) && (
                <dl className="project-meta" aria-label="project details">
                  {p.category && (
                    <>
                      <dt className="project-meta__label">Category</dt>
                      <dd className="project-meta__value">{p.category}</dd>
                    </>
                  )}
                  {p.date && (
                    <>
                      <dt className="project-meta__label">Date</dt>
                      <dd className="project-meta__value">{p.date}</dd>
                    </>
                  )}
                </dl>
              )}
              <p className="project-excerpt">{p.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
