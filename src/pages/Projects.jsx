import React from "react";
import ProjectsList from "../components/ProjectsList";

function updateHash(hash) {
  if (history?.pushState) history.pushState(null, "", hash);
  else window.location.hash = hash;
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}

export default function Projects({ page = 1 }){
  const handlePageChange = (nextPage) => {
    const suffix = nextPage > 1 ? `?page=${nextPage}` : "";
    updateHash(`#/projects${suffix}`);
  };

  return (
    <div className="App projects-page">
      <ProjectsList page={page} onPageChange={handlePageChange} />
      <div className="container projects-page__nav">
        <nav className="page-links" aria-label="Navigate to other sections">
          <a href="#/">Intro</a>
          <a href="#/core">Expertises</a>
          <a
            href="https://docs.google.com/document/d/1EsvKRr3TMLbSUXY82zXz7-LRdAI9_UsiyEUioZhTVUU/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
      </div>
    </div>
  );
}
