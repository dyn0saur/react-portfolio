// src/App.js
import React from "react";
import "./App.css";
import "./projects.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Router from "./Router";

export default function App(){
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  );
}
