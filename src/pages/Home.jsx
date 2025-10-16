// src/pages/Home.jsx
import React from "react";

export default function Home(){
  return (
    <div className="App landing-page">
      <section className="container section landing-content">
        <div className="landing-copy">
          <p className="landing-intro">
            <span>
              As a Computational Builder,
            </span>
            <span>I build before it’s built.</span>
          </p>
          <p className="landing-name">
            Welcome, I'm <strong>Geonju Kim.</strong>
          </p>
        </div>
        <nav className="page-links" aria-label="Navigate to site sections">
          <a href="#/core">Expertises</a>
          <a href="#/projects">Works</a>
          <a
            href="https://docs.google.com/document/d/1EsvKRr3TMLbSUXY82zXz7-LRdAI9_UsiyEUioZhTVUU/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
      </section>
    </div>
  );
}
