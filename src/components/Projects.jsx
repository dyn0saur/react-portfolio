export default function ProjectCard({ project }){
  const { title, description, image, url, tech=[] } = project;
  return (
    <article className="card" style={{gridColumn:'span 4'}}>
      <a href={url} target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
        {image && <img src={image} alt={title}
          style={{width:'100%', borderRadius:'12px', marginBottom:'12px'}} loading="lazy" />}
        <h3 style={{fontSize:'18px', margin:'8px 0', color:'var(--primary)'}}>{title}</h3>
        <p style={{color:'var(--muted)', marginBottom:'12px'}}>{description}</p>
        <div style={{display:'flex', flexWrap:'wrap', gap:'8px'}}>
          {tech.map(t => <span key={t} className="badge">{t}</span>)}
        </div>
      </a>
    </article>
  );
}
