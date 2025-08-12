import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Capabilities from './components/Capabilities';
import Contact from './components/Contact';
import ErrorBoundary from './components/ErrorBoundary';

export default function App(){
  return (
    <ErrorBoundary>
      <div className="App">
        <Intro />
        <Capabilities />
        <Contact />
      </div>
    </ErrorBoundary>
  );
}
