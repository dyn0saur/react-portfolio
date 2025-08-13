// src/components/ProjectPage.jsx
import React, { useEffect } from "react";
import Thesis from "../projects/Thesis";
import Jungle from "../projects/Jungle";

const map = {
  "thesis": Thesis,
  "jungle": Jungle,
};

export default function ProjectPage({ slug }) {
  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 로드 시 스크롤 맨 위로 이동
  }, []);
  
  const Project = map[slug];
  if (!Project) {
    return (
      <section className="container section">
        <p>Project not found.</p>
        <p><a href="#/">← Back to home</a></p>
      </section>
    );
  }
  return <Project />;
}
