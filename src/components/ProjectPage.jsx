// src/components/ProjectPage.jsx
import React, { useEffect } from "react";
import projects from "../data/projects";
import Template from "../projects/Template";
import LightboxImage from "./LightboxImage";

const projectIndex = projects.reduce((acc, project) => {
  acc[project.slug] = project;
  return acc;
}, {});

const DEFAULT_IMAGE_STYLE = { margin: "16px 0" };

function renderBlock(block, index) {
  if (!block) return null;
  const key = `${block.type || "block"}-${index}`;

  switch (block.type) {
  case "paragraph":
    return <p key={key}>{block.text}</p>;
  case "image":
    return (
      <LightboxImage
        key={key}
        src={block.src}
        alt={block.alt || ""}
        thumb={block.thumb || block.src}
        style={block.style || DEFAULT_IMAGE_STYLE}
        caption={block.caption}
      />
    );
  case "list":
    return (
      <ul key={key}>
        {(block.items || []).map((item, idx) => (
          <li key={`${key}-item-${idx}`}>{item}</li>
        ))}
      </ul>
    );
  case "heading":
    return <h2 key={key}>{block.text}</h2>;
  case "custom":
    return typeof block.render === "function" ? block.render({ key }) : null;
  default:
    return null;
  }
}

export default function ProjectPage({ slug }) {
  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 로드 시 스크롤 맨 위로 이동
  }, []);
  
  const project = projectIndex[slug];
  if (!project) {
    return (
      <section className="container section">
        <p>Project not found.</p>
        <p><a href="#/">← Back to home</a></p>
      </section>
    );
  }

  return (
    <Template
      title={project.title}
      hero={project.hero}
      heroThumb={project.heroThumb || project.heroSmall || project.thumb}
    >
      {(project.content || []).map((block, index) => renderBlock(block, index))}
    </Template>
  );
}
