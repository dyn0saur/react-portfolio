// src/components/ProjectsList.jsx
import React, { useEffect, useState } from "react";
import projects from "../data/projects";
import ProgressiveImage from "./ProgressiveImage";
import { deriveThumbSrc } from "../utils/imagePaths";

function getProjectThumb(project) {
  return project.listThumb || project.thumb || project.hero;
}

function getProjectThumbPlaceholder(project) {
  if (project.listThumb && project.listThumbPlaceholder) return project.listThumbPlaceholder;
  if (project.thumb && project.thumbPlaceholder) return project.thumbPlaceholder;
  if (project.heroThumb) return project.heroThumb;
  const thumbSource = getProjectThumb(project);
  return deriveThumbSrc(thumbSource);
}

function ProjectThumbnail({ project }) {
  const src = getProjectThumb(project);
  const placeholder = getProjectThumbPlaceholder(project);
  const fallbackSrc = project.hero;
  const [resolvedSrc, setResolvedSrc] = useState(src);

  useEffect(() => {
    setResolvedSrc(src);
  }, [src]);

  const handleError = () => {
    if (!fallbackSrc || resolvedSrc === fallbackSrc) return;
    setResolvedSrc(fallbackSrc);
  };

  return (
    <ProgressiveImage
      src={resolvedSrc}
      placeholder={placeholder}
      alt={project.title}
      className="project-thumb-media"
      wrapperStyle={{ width: "100%", height: "100%" }}
      imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
      onError={handleError}
    />
  );
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
      <h2 id="projects">Works</h2>
      <div className="projects-list">
        {visible.map((p) => (
          <article className="project-row" key={p.slug}>
            <a href={`#/projects/${p.slug}`} onClick={(e) => go(p.slug, e)} className="project-thumb">
              <ProjectThumbnail project={p} />
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
