import React, { forwardRef, useMemo, useState } from "react";

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

const LightboxImage = forwardRef(function LightboxImage({ src, thumb, alt = "", className = "", style = {}, ...props }, ref) {
  const [open, setOpen] = useState(false);
  const [fallback, setFallback] = useState(false);
  const displaySrc = useMemo(() => {
    if (fallback) return src;
    return thumb || deriveThumbSrc(src) || src;
  }, [fallback, src, thumb]);

  const composedStyle = useMemo(() => {
    const hasExplicitWidth = style && (style.width || style.minWidth || style.maxWidth);
    const hasExplicitHeight = style && (style.height || style.minHeight);
    const disableAutoMaxWidth = Boolean(hasExplicitWidth);
    return {
      cursor: "zoom-in",
      maxWidth: disableAutoMaxWidth ? "none" : "100%",
      ...style,
    };
  }, [style]);

  return (
    <>
      <img
        src={displaySrc}
        alt={alt}
        className={className}
        style={composedStyle}
        loading="lazy"
        onClick={() => setOpen(true)}
        onError={() => setFallback(true)}
        ref={ref}
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
});

export default LightboxImage;
