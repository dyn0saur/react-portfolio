import React from "react";
import Capabilities from "../components/Capabilities";

export default function Core(){
  return (
    <div className="App core-page">
      <div className="core-page__content">
        <Capabilities />
        <div className="container core-page__nav">
          <nav className="page-links" aria-label="Navigate to other sections">
            <a href="#/">Intro</a>
            <a href="#/projects">Works</a>
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
    </div>
  );
}
