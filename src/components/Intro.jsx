import React from 'react';

export default function Intro(){
  return (
    <section id="intro" className="container section">
      <div className="grid" style={{ alignItems:'center', minHeight:'40vh' }}>
        <div style={{ gridColumn:'span 12' }}>
          <h2>
            May I ask… <br />
            <span className="badge">Who are you?</span>
          </h2>

          <p className="intro-text">
            I mean… who are <u>you</u> ?<br />
            Are you the person I’m looking for—<br />
            someone who values..
          </p>

          {/* 원하는 3줄을 리스트로 */}
          <ul className="intro-list">
            <li>
              how <u>computational methods</u> transform design concepts into <u>reality</u> ?
            </li>
            <li>
              carrying <u>conceptual thinking</u> through to <u>real-world execution</u> ?
            </li>
            <li>
              the balance between <u>aesthetics</u> and <u>practicality</u> ?
            </li>
          </ul>

          <p className="intro-text">Then…</p>
          <p className="intro-text">Pleasure to meet you,</p>

          <h1>I'm <span className="badge">Geonju Kim</span></h1>
        </div>
      </div>
    </section>
  );
}
