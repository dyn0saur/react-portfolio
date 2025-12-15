// src/data/projects.js
import projectSlugs from "./projects/list";
import { deriveThumbSrc } from "../utils/imagePaths";

let context;
try {
  context = require.context("./projects/entries", false, /\.js$/);
} catch (error) {
  if (
    typeof globalThis !== "undefined" &&
    typeof globalThis.__PROJECTS_REQUIRE_CONTEXT__ === "function"
  ) {
    context = globalThis.__PROJECTS_REQUIRE_CONTEXT__(
      __dirname,
      "./projects/entries",
      false,
      /\.js$/,
    );
  } else {
    throw error;
  }
}

function withPlaceholderField(value, fallbackSource) {
  if (value) return value;
  return deriveThumbSrc(fallbackSource);
}

function enhanceImageBlock(block) {
  if (!block || typeof block !== "object") return block;
  if (block.type === "image" && block.src) {
    const placeholder = block.placeholder || deriveThumbSrc(block.src);
    if (placeholder && block.placeholder !== placeholder) {
      return { ...block, placeholder };
    }
    return block;
  }
  if (block.type === "imageRow" && Array.isArray(block.images)) {
    const enhancedImages = block.images.map((image) => {
      if (!image || typeof image !== "object" || !image.src) return image;
      const placeholder = image.placeholder || deriveThumbSrc(image.src);
      if (!placeholder || image.placeholder === placeholder) return image;
      return { ...image, placeholder };
    });
    return enhancedImages.some((img, idx) => img !== block.images[idx])
      ? { ...block, images: enhancedImages }
      : block;
  }
  return block;
}

function enhanceProject(project) {
  if (!project) return project;
  const next = { ...project };
  if (project.hero) {
    next.heroThumb = withPlaceholderField(project.heroThumb, project.hero);
  }
  if (project.thumb) {
    next.thumbPlaceholder = withPlaceholderField(project.thumbPlaceholder, project.thumb);
  }
  if (project.listThumb) {
    next.listThumbPlaceholder = withPlaceholderField(project.listThumbPlaceholder, project.listThumb);
  }
  if (Array.isArray(project.content)) {
    const enhancedContent = project.content.map((block) => enhanceImageBlock(block));
    next.content = enhancedContent.some((entry, idx) => entry !== project.content[idx])
      ? enhancedContent
      : project.content;
  }
  return next;
}

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
  return enhanceProject(registry[slug]);
});

const extraSlugs = Object.keys(registry).filter((slug) => !projectSlugs.includes(slug));
if (extraSlugs.length) {
  throw new Error(`Project modules missing from list: ${extraSlugs.join(", ")}`);
}

export default projects;
