// src/data/projects.js
import projectSlugs from "./projects/list";

const context = require.context("./projects/entries", false, /\.js$/);

const registry = context.keys().reduce((acc, key) => {
  const mod = context(key);
  const project = mod?.default ?? mod;
  if (!project || typeof project !== "object") {
    throw new Error(`Project module "${key}" does not export a project object.`);
  }
  if (!project.slug) {
    throw new Error(`Project module "${key}" is missing a "slug" property.`);
  }
  if (acc[project.slug]) {
    throw new Error(`Duplicate project slug "${project.slug}" encountered in "${key}".`);
  }
  acc[project.slug] = project;
  return acc;
}, {});

const projects = projectSlugs.map((slug) => {
  if (!registry[slug]) {
    throw new Error(`Project "${slug}" is listed but no matching module exists under src/data/projects/entries.`);
  }
  return registry[slug];
});

const extraSlugs = Object.keys(registry).filter((slug) => !projectSlugs.includes(slug));
if (extraSlugs.length) {
  throw new Error(`Project modules missing from list: ${extraSlugs.join(", ")}`);
}

export default projects;
