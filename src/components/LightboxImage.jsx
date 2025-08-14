import React, { useState } from 'react';

export default function LightboxImage({ src, thumb, alt = '', className = '', style = {}, ...props }) {
  const [open, setOpen] = useState(false);
  const displaySrc = thumb || src;
  return (
    <>
      <img
        src={displaySrc}
        alt={alt}
        className={className}
        style={{ cursor: 'zoom-in', maxWidth: '100%', ...style }}
        loading="lazy"
        onClick={() => setOpen(true)}
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
          <img src={src} alt={alt} className="lightbox-img" />
        </div>
      )}
    </>
  );
}
