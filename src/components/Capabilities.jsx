// src/components/Capabilities.jsx
import React, { useEffect } from "react";
import capabilities from "../data/capabilities";
import CapabilityCard from "./CapabilityCard";

export default function Capabilities() {
  useEffect(() => {
    if (window.location.hash === "#core") {
      setTimeout(() => {
        const el = document.getElementById("core-panel"); // ← 섹션을 타깃
        if (!el) return;
        const y = el.getBoundingClientRect().top + window.scrollY;
        const base = y - (window.innerHeight / 2 - el.offsetHeight / 2);
        const OFFSET = -40; // 원하는 값으로 조절
        window.scrollTo({ top: base + OFFSET, behavior: "smooth" });
      }, 0);
    }
  }, []);

  const list = Array.isArray(capabilities)
    ? capabilities.filter((p) => p && typeof p === "object")
    : [];

  return (
    <section id="core-panel" className="container section" aria-labelledby="core">
      <h2 id="core">What I bring to the table..</h2>
      <div className="grid">
        {list.map((p, i) => (
          <CapabilityCard key={p.title ? `${p.title}-${i}` : i} project={p} />
        ))}
      </div>
    </section>
  );
}
