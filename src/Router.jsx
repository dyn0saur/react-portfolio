// src/Router.jsx
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import ProjectPage from "./components/ProjectPage";

export function parseHash() {
  const h = window.location.hash || "";
  const m = h.match(/^#\/(?:projects\/([\w-]+))?$/);
  if (m && m[1]) return { route: "project", slug: m[1] };
  return { route: "home" };
}

export default function Router(){
  const [state, setState] = useState(parseHash());
  useEffect(() => {
    const onChange = () => setState(parseHash());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return state.route === "project" ? <ProjectPage slug={state.slug} /> : <Home />;
}
