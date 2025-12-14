// src/components/ProjectsList.jsx
import React, { useState } from "react";
import projects from "../data/projects";
import { deriveThumbSrc } from "./LightboxImage";

function getProjectThumb(project) {
  return project.listThumb || project.thumb || deriveThumbSrc(project.hero) || project.hero;
}

function getProjectThumbPlaceholder(project) {
  // 저해상도 썸네일 경로 생성 (이미 .thumb 확장자가 있으면 그대로 사용, 없으면 추가)
  const fullThumb = getProjectThumb(project);
  if (!fullThumb) return null;
  
  // 이미 .thumb가 포함되어 있으면 그대로 사용
  if (fullThumb.includes('.thumb.')) return fullThumb;
  
  // .thumb 확장자 추가
  return deriveThumbSrc(fullThumb) || fullThumb;
}

function ProjectThumbnail({ project }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const fullImageSrc = getProjectThumb(project);
  const placeholderSrc = getProjectThumbPlaceholder(project);
  const displayPlaceholder = placeholderSrc && placeholderSrc !== fullImageSrc;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = (event) => {
    if (event.currentTarget.src !== project.hero) {
      event.currentTarget.src = project.hero;
    }
  };

  return (
    <div className="project-thumb-wrapper">
      {displayPlaceholder && (
        <img
          src={placeholderSrc}
          alt=""
          className="project-thumb-placeholder"
          aria-hidden="true"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      )}
      <img
        src={fullImageSrc}
        alt={project.title}
        className={`project-thumb-full ${imageLoaded ? 'loaded' : ''}`}
        loading="lazy"
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </div>
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
