import React from 'react';
export default function Intro(){
  return (
    <section id="intro" className="container section">
      <div className="grid" style={{alignItems:'center', minHeight:'40vh'}}>
        <div style={{gridColumn:'span 12'}}>
          <h1>I'm <span className="badge">Geonju Kim</span></h1>  
          <p>I am a <u>façade engineer</u> specializing in <u>computational design</u>, with a focus on realizing architectural intent into <u>buildable solutions</u>.</p>
          <p>Leveraging proficiency in Rhino, Grasshopper, and BIM workflows, I integrate parametric modeling with precise detailing to deliver projects from schematic design through construction documentation, including fabrication shop drawings and on-site coordination.</p>
          <p>My expertise lies in developing rational, fabrication-ready solutions for complex geometries, balancing aesthetics, performance, and structural integrity, while applying Value Engineering principles to optimize cost-effectiveness without compromising design intent.</p>
        </div>
      </div>
    </section>
  );
}
