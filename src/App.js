import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Contact from './components/Contact';

/**
 * The main application component. This simple functional component
 * stitches together the primary sections of the portfolio: an
 * introduction, a project listing and a contact form. Each section
 * is encapsulated in its own component to encourage clear separation
 * of concerns and ease of future maintenance or expansion.
 */
function App() {
  return (
    <div className="App">
      <Intro />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;