// src/components/Contact.jsx
import React from "react";

const LINKS = [
  { label: "contact@geonjukim.com", href: "mailto:contact@geonjukim.com" },
  { label: "Resume", href: "...", external: true },
];

// 사용: <Contact stacked tight />  // 줄바꿈 + 위쪽 간격 타이트
export default function Contact({
  items = LINKS,
  className = "",
  stacked = false, // 줄바꿈 여부
  tight = false,   // 위쪽 간격 축소 여부
}) {
  const cls = [
    "inline-links",
    stacked ? "inline-links--stacked" : "",
    tight ? "inline-links--tight" : "",
    className,
  ].join(" ");

  return (
    <p className={cls} aria-label="quick links">
      {items.map((c) => (
        <a
          key={c.href}
          href={c.href}
          className="inline-link-item"
          {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {c.label}
        </a>
      ))}
    </p>
  );
}
