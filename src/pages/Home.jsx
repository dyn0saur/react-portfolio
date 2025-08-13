// src/pages/Home.jsx
import React from "react";
import Intro from "../components/Intro";
import Contact from "../components/Contact";
import Capabilities from "../components/Capabilities";
import ProjectsList from "../components/ProjectsList";
import ScrollButton from "../components/ScrollButton";

export default function Home(){
  return (
    <div className="App">
      <section className="container">
        <Intro />
        <Contact stacked tight />
        <ScrollButton targetId="core-panel" align="center" offset={70} />
        <div className="panel-fullvh">
          <Capabilities />
          <ScrollButton targetId="projects" align="start" />
        </div>
        <ProjectsList />
      </section>
    </div>
  );
}
