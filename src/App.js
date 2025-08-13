import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Capabilities from './components/Capabilities';
import Contact from './components/Contact';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToCore from './components/ScrollToCore';

export default function App(){
  return (
    <ErrorBoundary>
      <div className="App">
        <section className="container">
          <Intro />
          <Contact stacked tight />
          <ScrollToCore />
          <Capabilities />
        </section>
      </div>
    </ErrorBoundary>
  );
}
