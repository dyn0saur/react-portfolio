import React from "react";
import ProjectsList from "../components/ProjectsList";
import PageLinksNav from "../components/PageLinksNav";

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
        <PageLinksNav active="projects" ariaLabel="Navigate to other sections" />
      </div>
    </div>
  );
}
