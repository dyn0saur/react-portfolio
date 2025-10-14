import React, { useMemo, useState } from "react";

export function deriveThumbSrc(source) {
  if (!source) return null;
  const [pathWithQuery, hash] = source.split("#");
  const [path, query] = pathWithQuery.split("?");
  const dot = path.lastIndexOf(".");
  if (dot === -1) return null;
  const base = path.slice(0, dot);
  const ext = path.slice(dot);
  let thumb = `${base}.thumb${ext}`;
  if (query) thumb += `?${query}`;
  if (hash) thumb += `#${hash}`;
  return thumb;
}

export default function LightboxImage({ src, thumb, alt = "", className = "", style = {}, ...props }) {
  const [open, setOpen] = useState(false);
  const [fallback, setFallback] = useState(false);
  const displaySrc = useMemo(() => {
    if (fallback) return src;
    return thumb || deriveThumbSrc(src) || src;
  }, [fallback, src, thumb]);

  return (
    <>
      <img
        src={displaySrc}
        alt={alt}
        className={className}
        style={{ cursor: "zoom-in", maxWidth: "100%", ...style }}
        loading="lazy"
        onClick={() => setOpen(true)}
        onError={() => setFallback(true)}
        {...props}
      />
      {open && (
        <div className="lightbox" onClick={() => setOpen(false)}>
          <button
            type="button"
            className="lightbox-close"
            aria-label="Close"
            onClick={() => setOpen(false)}
          >×</button>
          <img
            src={src}
            alt={alt}
            className="lightbox-img"
            onClick={() => setOpen(false)}
          />
        </div>
      )}
    </>
  );
}
