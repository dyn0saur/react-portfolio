// src/Router.jsx
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Core from "./pages/Core";
import Philosophy from "./pages/Philosophy";
import Projects from "./pages/Projects";
import ProjectPage from "./components/ProjectPage";

function parsePage(search) {
  const params = new URLSearchParams(search || "");
  const raw = params.get("page");
  const page = raw ? Number.parseInt(raw, 10) : 1;
  return Number.isFinite(page) && page > 0 ? page : 1;
}

export function parseHash() {
  const hash = window.location.hash || "";
  const withoutHash = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!withoutHash || withoutHash === "/") return { route: "home" };

  const [pathPart, search = ""] = withoutHash.split("?");
  const path = pathPart.replace(/^\/+/, "");
  if (!path) return { route: "home" };

  const segments = path.split("/").filter(Boolean);
  if (!segments.length) return { route: "home" };

  if (segments[0] === "projects") {
    if (segments.length === 1) {
      return { route: "projects", page: parsePage(search) };
    }
    return { route: "project", slug: segments.slice(1).join("/") };
  }

  if (segments[0] === "project" && segments[1]) {
    return { route: "project", slug: segments.slice(1).join("/") };
  }

  if (segments[0] === "philosophy") {
    return { route: "philosophy" };
  }

  if (segments[0] === "core") {
    return { route: "core" };
  }

  if (segments[0] === "home") {
    return { route: "home" };
  }

  return { route: "home" };
}

export default function Router(){
  const [state, setState] = useState(parseHash());

  useEffect(() => {
    const onChange = () => setState(parseHash());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  if (state.route === "project") return <ProjectPage slug={state.slug} />;
  if (state.route === "philosophy") return <Philosophy />;
  if (state.route === "core") return <Core />;
  if (state.route === "projects") return <Projects page={state.page} />;
  return <Home />;
}
