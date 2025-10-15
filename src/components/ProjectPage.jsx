// src/components/ProjectPage.jsx
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import projects from "../data/projects";
import Template from "../projects/Template";
import LightboxImage from "./LightboxImage";

const projectIndex = projects.reduce((acc, project) => {
  acc[project.slug] = project;
  return acc;
}, {});

const DEFAULT_IMAGE_STYLE = {
  margin: "16px auto",
  maxHeight: "calc(100vh * 0.715)",
};
const DEFAULT_IMAGE_ROW_GAP = 16;
const DEFAULT_IMAGE_ROW_STYLE = {
  margin: "16px auto",
  display: "flex",
  gap: `${DEFAULT_IMAGE_ROW_GAP}px`,
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "flex-end",
};

function parseGapValue(rawGap) {
  if (typeof rawGap === "number") return rawGap;
  if (typeof rawGap === "string") {
    const match = rawGap.trim().match(/^([0-9.]+)/);
    if (match) return parseFloat(match[1]);
  }
  return DEFAULT_IMAGE_ROW_GAP;
}

function ImageRow({ images, style, rowId }) {
  const containerRef = useRef(null);
  const [metrics, setMetrics] = useState(() => Array(images.length).fill(null));
  const [containerWidth, setContainerWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 0,
  );

  useEffect(() => {
    setMetrics((prev) => {
      if (prev.length === images.length) return prev;
      const next = Array(images.length).fill(null);
      const lengthToCopy = Math.min(prev.length, next.length);
      for (let index = 0; index < lengthToCopy; index += 1) {
        next[index] = prev[index];
      }
      return next;
    });
  }, [images.length]);

  const measureDimensions = useCallback(() => {
    if (typeof window !== "undefined") {
      setViewportHeight(window.innerHeight);
    }
    if (containerRef.current) {
      const parent = containerRef.current.parentElement;
      const width = parent ? parent.clientWidth : containerRef.current.clientWidth;
      setContainerWidth(width);
    }
  }, []);

  useEffect(() => {
    measureDimensions();
  }, [measureDimensions]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const handleResize = () => measureDimensions();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [measureDimensions]);

  useEffect(() => {
    if (typeof ResizeObserver === "undefined") return undefined;
    const element = containerRef.current;
    if (!element) return undefined;
    const observer = new ResizeObserver(() => measureDimensions());
    observer.observe(element);
    return () => observer.disconnect();
  }, [measureDimensions, images.length]);

  const updateMetric = useCallback((index, metric) => {
    setMetrics((prev) => {
      const next = prev.length === images.length ? prev.slice() : Array(images.length).fill(null);
      next[index] = metric;
      return next;
    });
  }, [images.length]);

  const gapValue = useMemo(() => {
    if (style && Object.prototype.hasOwnProperty.call(style, "gap")) {
      return parseGapValue(style.gap);
    }
    return DEFAULT_IMAGE_ROW_GAP;
  }, [style]);

  const totalGap = useMemo(
    () => gapValue * Math.max(images.length - 1, 0),
    [gapValue, images.length],
  );

  const availableWidth = useMemo(() => {
    if (containerWidth <= 0) return null;
    return Math.max(containerWidth - totalGap, 0);
  }, [containerWidth, totalGap]);

  const heightLimit = useMemo(
    () => (viewportHeight ? viewportHeight * 0.715 : Infinity),
    [viewportHeight],
  );

  const scaledDimensions = useMemo(() => {
    if (!metrics.some((metric) => metric)) return [];

    const processed = metrics.map((metric) => {
      if (!metric || !metric.width || !metric.height) return null;
      const aspect = metric.width / metric.height;
      const isVertical = metric.height > metric.width;
      const clampedHeight = isVertical && metric.height > heightLimit && isFinite(heightLimit)
        ? heightLimit
        : metric.height;
      const clampedWidth = aspect * clampedHeight;
      return {
        aspect,
        clampedHeight,
        clampedWidth,
      };
    });

    const minHeight = processed.reduce((currentMin, entry) => {
      if (!entry || entry.clampedHeight <= 0) return currentMin;
      if (currentMin === null) return entry.clampedHeight;
      return Math.min(currentMin, entry.clampedHeight);
    }, null);

    if (!minHeight || minHeight <= 0) return processed.map((entry) => {
      if (!entry) return null;
      return {
        width: entry.clampedWidth,
        height: entry.clampedHeight,
      };
    });

    const aspectSum = processed.reduce(
      (sum, entry) => sum + (entry ? entry.aspect : 0),
      0,
    );

    let targetHeight = minHeight;
    if (
      availableWidth !== null &&
      availableWidth > 0 &&
      aspectSum > 0
    ) {
      const widthAtMinHeight = targetHeight * aspectSum;
      if (widthAtMinHeight > availableWidth) {
        targetHeight = availableWidth / aspectSum;
      }
    }

    return processed.map((entry) => {
      if (!entry) return null;
      const height = Math.min(targetHeight, entry.clampedHeight);
      return {
        width: entry.aspect * height,
        height,
      };
    });
  }, [availableWidth, heightLimit, metrics]);

  const rowContentWidth = useMemo(() => {
    if (!scaledDimensions.length) return 0;
    const contentWidth = scaledDimensions.reduce(
      (sum, dim) => sum + (dim ? dim.width : 0),
      0,
    );
    return contentWidth + totalGap;
  }, [scaledDimensions, totalGap]);

  const rowStyle = useMemo(() => {
    const contentWidth = rowContentWidth || 0;
    const containerLimit = containerWidth || 0;
    let widthValue = "100%";
    if (contentWidth > 0 && containerLimit > 0) {
      widthValue = contentWidth <= containerLimit ? `${contentWidth}px` : "100%";
    } else if (contentWidth > 0 && containerLimit === 0) {
      widthValue = `${contentWidth}px`;
    }
    return {
      ...DEFAULT_IMAGE_ROW_STYLE,
      width: widthValue,
      margin: "16px auto",
      maxWidth: "100%",
      ...(style || {}),
    };
  }, [containerWidth, rowContentWidth, style]);

  return (
    <div ref={containerRef} className="project-image-row" style={rowStyle}>
      {images.map((image, idx) => {
        const metric = metrics[idx];
        const finalDimensions = scaledDimensions[idx];

        const imageStyle = { margin: 0, ...(image.style || {}) };
        if (finalDimensions && metric) {
          imageStyle.width = `${finalDimensions.width}px`;
          imageStyle.height = `${finalDimensions.height}px`;
          imageStyle.maxWidth = "none";
        }

        const handleLoad = (event) => {
          if (typeof image.onLoad === "function") {
            image.onLoad(event);
          }
          const { naturalWidth, naturalHeight } = event.target;
          if (!naturalWidth || !naturalHeight) return;
          updateMetric(idx, {
            width: naturalWidth,
            height: naturalHeight,
          });
          measureDimensions();
        };

        return (
          <LightboxImage
            key={`${rowId || "image-row"}-${idx}`}
            src={image.src}
            alt={image.alt || ""}
            thumb={image.thumb}
            className="project-image-row__item"
            style={imageStyle}
            onLoad={handleLoad}
          />
        );
      })}
    </div>
  );
}

function renderBlock(block, index) {
  if (!block) return null;
  const key = `${block.type || "block"}-${index}`;

  switch (block.type) {
  case "paragraph":
    return <p key={key}>{block.text}</p>;
  case "image":
    return (
      <LightboxImage
        key={key}
        src={block.src}
        alt={block.alt || ""}
        thumb={block.thumb || block.src}
        style={block.style || DEFAULT_IMAGE_STYLE}
        caption={block.caption}
      />
    );
  case "imageRow": {
    const images = Array.isArray(block.images) ? block.images : [];
    if (!images.length) return null;
    return (
      <ImageRow
        key={key}
        rowId={key}
        images={images}
        style={block.style}
      />
    );
  }
  case "list":
    return (
      <ul key={key}>
        {(block.items || []).map((item, idx) => (
          <li key={`${key}-item-${idx}`}>{item}</li>
        ))}
      </ul>
    );
  case "heading":
    return <h2 key={key}>{block.text}</h2>;
  case "custom":
    return typeof block.render === "function" ? block.render({ key }) : null;
  default:
    return null;
  }
}

export default function ProjectPage({ slug }) {
  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 로드 시 스크롤 맨 위로 이동
  }, []);
  
  const project = projectIndex[slug];
  if (!project) {
    return (
      <section className="container section">
        <p>Project not found.</p>
        <p><a href="#/">← Back to home</a></p>
      </section>
    );
  }

  return (
    <Template
      title={project.title}
      hero={project.hero}
      heroThumb={project.heroThumb || project.heroSmall || project.thumb}
    >
      {(project.content || []).map((block, index) => renderBlock(block, index))}
    </Template>
  );
}
