import React, { forwardRef, useMemo, useState, useEffect, useRef } from "react";

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
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(null);
  const combinedRef = useRef(null);
  
  // ref 병합
  useEffect(() => {
    if (typeof ref === 'function') {
      ref(combinedRef.current);
    } else if (ref) {
      ref.current = combinedRef.current;
    }
  }, [ref]);
  
  const fullImageSrc = src;
  const placeholderSrc = useMemo(() => {
    if (fallback) return null;
    return thumb || deriveThumbSrc(src);
  }, [fallback, src, thumb]);
  
  const displayPlaceholder = placeholderSrc && placeholderSrc !== fullImageSrc;

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

  // 이미지가 이미 로드되어 있는지 확인 (캐시된 경우)
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    
    // 이미지가 완전히 로드되어 있으면 즉시 블러 제거
    if (img.complete && img.naturalWidth > 0) {
      setImageLoaded(true);
    }
  }, [fullImageSrc]);

  const handleImageLoad = (event) => {
    setImageLoaded(true);
    // 외부에서 전달된 onLoad 핸들러도 호출
    if (props.onLoad) {
      props.onLoad(event);
    }
  };

  const handleImageError = (event) => {
    setFallback(true);
    setImageLoaded(true);
    // 외부에서 전달된 onError 핸들러도 호출
    if (props.onError) {
      props.onError(event);
    }
  };

  // onLoad와 onError를 props에서 제외
  const { onLoad, onError, ...restProps } = props;

  return (
    <>
      <div className="lightbox-image-wrapper">
        {displayPlaceholder && (
          <img
            src={placeholderSrc}
            alt=""
            className="lightbox-image-placeholder"
            aria-hidden="true"
            style={composedStyle}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
        <img
          ref={(node) => {
            imgRef.current = node;
            combinedRef.current = node;
          }}
          src={fullImageSrc}
          alt={alt}
          className={`lightbox-image-full ${imageLoaded ? 'loaded' : ''} ${className}`}
          style={composedStyle}
          loading="lazy"
          onClick={() => setOpen(true)}
          onLoad={handleImageLoad}
          onError={handleImageError}
          {...restProps}
        />
      </div>
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
