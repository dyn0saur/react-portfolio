// src/components/ProjectPage.jsx
import React from "react";
import SmartplanAI from "../projects/SmartplanAI";
import OneBluePlanet from "../projects/OneBluePlanet";

const map = {
  "smartplan-ai": SmartplanAI,
  "one-blue-planet": OneBluePlanet,
};

export default function ProjectPage({ slug }) {
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
