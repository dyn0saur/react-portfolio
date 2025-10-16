// src/components/ProjectsList.jsx
import React from "react";
import projects from "../data/projects";
import { deriveThumbSrc } from "./LightboxImage";

function getProjectThumb(project) {
  return project.listThumb || project.thumb || deriveThumbSrc(project.hero) || project.hero;
}

function updateHash(hash) {
  if (history?.pushState) history.pushState(null, "", hash);
  else window.location.hash = hash;
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}

export default function ProjectsList({ page = 1, pageSize = 5, onPageChange }) {
  const totalPages = Math.max(1, Math.ceil(projects.length / pageSize));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const startIndex = (currentPage - 1) * pageSize;
  const visible = projects.slice(startIndex, startIndex + pageSize);

  const go = (slug, e) => {
    e?.preventDefault?.();
    const hash = `#/projects/${slug}`;
    updateHash(hash);
  };

  const handlePageClick = (pageNumber, event) => {
    event?.preventDefault?.();
    const suffix = pageNumber > 1 ? `?page=${pageNumber}` : "";
    const targetHash = `#/projects${suffix}`;

    if (pageNumber === currentPage && window.location.hash === targetHash) return;

    if (onPageChange) onPageChange(pageNumber);
    else updateHash(targetHash);
  };

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <section className="container section projects-list-section" aria-labelledby="projects">
      <h2 id="projects">What I've done & written..</h2>
      <div className="projects-list">
        {visible.map((p) => (
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
      <nav className="projects-pagination" aria-label="Projects pagination">
        {pages.map((pageNumber) => {
          return (
            <a
              key={pageNumber}
              href={`#/projects${pageNumber > 1 ? `?page=${pageNumber}` : ""}`}
              onClick={(event) => handlePageClick(pageNumber, event)}
              aria-current={pageNumber === currentPage ? "page" : undefined}
            >
              {pageNumber}
            </a>
          );
        })}
      </nav>
    </section>
  );
}
