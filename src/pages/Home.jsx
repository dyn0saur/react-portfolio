// src/pages/Home.jsx
import React from "react";
import PageLinksNav from "../components/PageLinksNav";

export default function Home(){
  return (
    <div className="App landing-page">
      <section className="container section landing-content">
        <div className="landing-copy">
          <p className="landing-intro">
            <span>
              As a <strong class="landing-role">Computational Builder</strong>,
            </span>
            <span>I build before it’s built.</span>
          </p>
          <p className="landing-name">
            Welcome, I'm <strong>Geonju Kim.</strong>
          </p>
        </div>
        <PageLinksNav active="intro" ariaLabel="Navigate to site sections" />
      </section>
    </div>
  );
}
