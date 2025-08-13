import React from 'react';

export default function CapabilityCard({ project = null }) {
  if (!project || typeof project !== 'object') return null;

  const {
    title = 'Untitled',
    description = '',
    imageClass = '',   // CSS로 관리하는 썸네일 클래스
    image = '',        // (호환용) 개별 이미지 경로를 쓰는 경우
    url = '',          // (선택) 외부 링크가 있는 경우
    tech = [],
  } = project;

  return (
    <article className="card card-col-4 cap-card">
      {/* CSS 기반 썸네일 */}
      {imageClass && <div className={`cap-thumb ${imageClass}`} aria-hidden="true" />}

      {/* 과거 방식(이미지 경로 직접)도 지원 */}
      {!imageClass && image && (
        <img className="cap-img" src={image} alt={title} />
      )}

      <h3 className="capability-title">{title}</h3>
      {description && <p className="cap-desc">{description}</p>}

      {Array.isArray(tech) && tech.length > 0 && (
        <div className="cap-tags">
          {tech.map((t, i) => (
            <span key={`${t}-${i}`} className="badge badge-tech">{t}</span>
          ))}
        </div>
      )}

      {url && (
        <p className="cap-link">
          <a href={url} target="_blank" rel="noreferrer">View</a>
        </p>
      )}
    </article>
  );
}
