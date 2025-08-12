import React from 'react';
export default function Intro(){
  return (
    <section id="intro" className="container">
      <div className="grid" style={{alignItems:'center', minHeight:'40vh'}}>
        <div style={{gridColumn:'span 12'}}>
          <h1>About <span className="badge">Me</span></h1>
          <p>I'm Geonju Kim</p>
          <p>Think Parametric, Man.</p>
        </div>
      </div>
    </section>
  );
}
