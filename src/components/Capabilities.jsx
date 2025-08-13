import React, { useEffect } from "react";
import capabilities from "../data/capabilities";
import CapabilityCard from "./CapabilityCard";

export default function Capabilities() {
  // 해시 진입 시에도 맨 위에 붙이기
  useEffect(() => {
    if (window.location.hash === "#core") {
      setTimeout(() => {
        const el = document.getElementById("core");
        if (!el) return;
        const y = el.getBoundingClientRect().top + window.scrollY; // 요소의 절대 Y
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 0);
    }
  }, []);

  const list = Array.isArray(capabilities)
    ? capabilities.filter((p) => p && typeof p === "object")
    : [];

  return (
    <section className="container section section--core" aria-labelledby="core">
      <h2 id="core">What I bring to the table..</h2>
      <div className="grid">
        {list.map((p, i) => (
          <CapabilityCard key={p.title ? `${p.title}-${i}` : i} project={p} />
        ))}
      </div>
    </section>
  );
}
