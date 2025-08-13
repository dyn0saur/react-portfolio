import React from "react";

export default function ScrollToCore({ targetId = "core", className = "" }) {
  const onClick = (e) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: y, behavior: "smooth" });

    if (history.replaceState) history.replaceState(null, "", `#${targetId}`);
    else window.location.hash = `#${targetId}`;
  };

  return (
    <div className={`scroll-down-wrap ${className}`}>
      <a href={`#${targetId}`} onClick={onClick} className="scroll-down" aria-label="Scroll to core">
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </a>
    </div>
  );
}
