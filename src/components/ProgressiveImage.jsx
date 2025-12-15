// src/components/ProgressiveImage.jsx
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";

const marginKeys = new Set([
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "marginInline",
  "marginInlineStart",
  "marginInlineEnd",
  "marginBlock",
  "marginBlockStart",
  "marginBlockEnd",
]);

function splitStyles(style) {
  if (!style) return [{}, undefined];
  const wrapperStyle = {};
  const imageStyle = {};

  Object.entries(style).forEach(([key, value]) => {
    if (marginKeys.has(key)) wrapperStyle[key] = value;
    else imageStyle[key] = value;
  });

  return [wrapperStyle, imageStyle];
}

const ProgressiveImage = forwardRef(function ProgressiveImage(
  {
    src,
    placeholder,
    alt = "",
    className = "",
    imageClassName = "",
    placeholderClassName = "",
    style,
    wrapperStyle,
    imageStyle,
    placeholderStyle,
    onLoad,
    onError,
    ...imgProps
  },
  forwardedRef,
) {
  const imgRef = useRef(null);
  useImperativeHandle(forwardedRef, () => imgRef.current, []);

  const [loaded, setLoaded] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [placeholderVisible, setPlaceholderVisible] = useState(
    Boolean(placeholder && placeholder !== src),
  );

  useEffect(() => {
    setPlaceholderVisible(Boolean(placeholder && placeholder !== src));
  }, [placeholder, src]);

  useEffect(() => {
    const node = imgRef.current;
    if (!node) return;

    if (node.complete && node.naturalWidth > 0) {
      setLoaded(true);
      setShouldAnimate(false);
    } else {
      setLoaded(false);
      setShouldAnimate(true);
    }
  }, [src]);

  const [derivedWrapperStyle, derivedImageStyle] = useMemo(
    () => splitStyles(style),
    [style],
  );

  const wrapperClassName = [
    "progressive-image",
    loaded ? "progressive-image--loaded" : "",
    shouldAnimate ? "" : "progressive-image--instant",
    className,
  ].filter(Boolean).join(" ");

  const { loading = "lazy", ...restImgProps } = imgProps;

  const handleLoad = (event) => {
    setLoaded(true);
    if (typeof onLoad === "function") onLoad(event);
  };

  const handleError = (event) => {
    setLoaded(true);
    if (typeof onError === "function") onError(event);
  };

  const handlePlaceholderError = () => {
    setPlaceholderVisible(false);
  };

  return (
    <div
      className={wrapperClassName}
      style={{ ...derivedWrapperStyle, ...(wrapperStyle || {}) }}
    >
      {placeholderVisible && (
        <img
          src={placeholder}
          alt=""
          aria-hidden="true"
          className={["progressive-image__placeholder", placeholderClassName].filter(Boolean).join(" ")}
          style={{ ...(placeholderStyle || {}), ...(derivedImageStyle || {}) }}
          onError={handlePlaceholderError}
        />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={["progressive-image__img", imageClassName].filter(Boolean).join(" ")}
        style={{ ...(derivedImageStyle || {}), ...(imageStyle || {}) }}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        {...restImgProps}
      />
    </div>
  );
});

export default ProgressiveImage;
