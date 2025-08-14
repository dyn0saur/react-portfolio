// src/components/ProjectsList.jsx
import React, { useEffect } from "react";
import projects from "../data/projects";

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
      <h2 id="projects">What I have done..</h2>
      <div className="projects-list">
        {projects.map((p) => (
          <article className="project-row" key={p.slug}>
            <a href={`#/projects/${p.slug}`} onClick={(e) => go(p.slug, e)} className="project-thumb">
              <img src={p.thumb || p.hero} alt={p.title} loading="lazy" />
            </a>
            <div className="project-body">
              <h3 className="project-title">
                <a href={`#/projects/${p.slug}`} onClick={(e) => go(p.slug, e)}>{p.title}</a>
              </h3>
              <p className="project-excerpt">{p.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
