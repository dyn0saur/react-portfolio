import React from "react";

const links = [
  { key: "intro", label: "Intro", href: "#/" },
  { key: "core", label: "Capabilities", href: "#/core" },
  { key: "projects", label: "Works", href: "#/projects" },
  {
    key: "resume",
    label: "Resume",
    href: "https://docs.google.com/document/d/1EsvKRr3TMLbSUXY82zXz7-LRdAI9_UsiyEUioZhTVUU/edit?usp=sharing",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

export default function PageLinksNav({ active, className = "", ariaLabel = "Navigate to other sections" }) {
  const classNames = ["page-links"];
  if (className) classNames.push(className);

  return (
    <nav className={classNames.join(" ")} aria-label={ariaLabel}>
      {links.map((link) => (
        <a
          key={link.key}
          href={link.href}
          aria-current={active === link.key ? "page" : undefined}
          target={link.target}
          rel={link.rel}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
