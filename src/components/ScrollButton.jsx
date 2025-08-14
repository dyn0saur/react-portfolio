// src/components/ScrollButton.jsx
import React from "react";

export default function ScrollButton({ targetId, align = "start", offset = 0, className = "" }) {
  if (!targetId) return null;

  const onClick = (e) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const base = align === "center" && !isMobile
      ? y - (window.innerHeight / 2 - el.offsetHeight / 2)
      : y;
    window.scrollTo({ top: base + offset, behavior: "smooth" });

    if (history.replaceState) history.replaceState(null, "", `#${targetId}`);
    else window.location.hash = `#${targetId}`;
  };

  return (
    <div className={`scroll-down-wrap ${className}`}>
      <a href={`#${targetId}`} onClick={onClick} className="scroll-down" aria-label={`Scroll to ${targetId}`}>
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </a>
    </div>
  );
}
