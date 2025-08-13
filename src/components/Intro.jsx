import React from 'react';
export default function Intro(){
  return (
    <section id="intro" className="container section">
      <div className="grid" style={{alignItems:'center', minHeight:'40vh'}}>
        <div style={{gridColumn:'span 12'}}>
          <h2>May I ask… <br />
          Who are <span className="badge">you?</span>
          </h2>
          <p className="intro-text">
            I mean… who are <u>you</u> ?<br />
            Are you the person I’m looking for—<br />
            someone who appreciates how <u>computational methods</u> transform design concepts into <u>reality</u> ?<br />
            someone who values carrying <u>conceptual thinking</u> through to <u>practical execution</u> ?<br />
            someone who embraces the balance between <u>aesthetics</u> with <u>performance</u> ?<br /><br />
            Then…<br /><br />
            Pleasure to meet you,
            <h1>I'm <span className="badge">Geonju Kim</span></h1>
          </p>
        </div>
      </div>
    </section>
  );
}
