import React from "react";

const links = [
  { key: "intro", label: "Intro", href: "#/" },
  { key: "philosophy", label: "Philosophy", href: "#/philosophy" },
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

export default function PageLinksNav({
  active,
  className = "",
  ariaLabel = "Navigate to other sections",
  offset = 0,
}) {
  const classNames = ["page-links"];
  if (className) classNames.push(className);
  const offsetStyle =
    offset !== 0
      ? {
          "--page-links-offset": typeof offset === "number" ? `${offset}px` : offset,
        }
      : undefined;

  return (
    <nav className={classNames.join(" ")} aria-label={ariaLabel} style={offsetStyle}>
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
