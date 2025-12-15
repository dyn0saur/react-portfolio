// src/utils/imagePaths.js
export function deriveThumbSrc(source) {
  if (!source || typeof source !== "string") return null;
  const [pathWithQuery, hash] = source.split("#");
  const [path, query] = pathWithQuery.split("?");
  const dotIndex = path.lastIndexOf(".");
  if (dotIndex === -1) return null;
  const base = path.slice(0, dotIndex);
  const ext = path.slice(dotIndex);

  let thumbPath = `${base}.thumb${ext}`;
  if (query) thumbPath += `?${query}`;
  if (hash) thumbPath += `#${hash}`;
  return thumbPath;
}
