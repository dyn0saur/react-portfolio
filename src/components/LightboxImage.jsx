import React, { forwardRef, useMemo, useState } from "react";
import ProgressiveImage from "./ProgressiveImage";
import { deriveThumbSrc } from "../utils/imagePaths";

const LightboxImage = forwardRef(function LightboxImage(
  {
    src,
    thumb,
    placeholder,
    alt = "",
    className = "",
    style = {},
    onClick,
    onLoad,
    onError,
    ...restProps
  },
  ref,
) {
  const [open, setOpen] = useState(false);
  const [fallback, setFallback] = useState(false);

  const placeholderSrc = useMemo(() => {
    if (fallback) return null;
    return placeholder || thumb || deriveThumbSrc(src);
  }, [fallback, placeholder, src, thumb]);

  const handleClick = (event) => {
    if (typeof onClick === "function") {
      onClick(event);
      if (event?.defaultPrevented) return;
    }
    setOpen(true);
  };

  const handleError = (event) => {
    setFallback(true);
    if (typeof onError === "function") onError(event);
  };

  return (
    <>
      <ProgressiveImage
        ref={ref}
        src={src}
        placeholder={placeholderSrc}
        alt={alt}
        className={["lightbox-image-display", className].filter(Boolean).join(" ")}
        style={{ cursor: "zoom-in", ...style }}
        onClick={handleClick}
        onLoad={onLoad}
        onError={handleError}
        {...restProps}
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
