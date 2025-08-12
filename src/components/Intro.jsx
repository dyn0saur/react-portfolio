export default function Intro(){
  return (
    <section id="intro" className="container">
      <div className="grid" style={{alignItems:'center', minHeight:'50vh'}}>
        <div style={{gridColumn:'span 5'}}>
          <img src="/images/profile.jpg" alt="프로필"
               style={{width:'100%', borderRadius:'24px', display:'block'}}/>
        </div>
        <div style={{gridColumn:'span 7'}}>
          <h1 className="h1">Computational Design <span className="badge">Facade</span></h1>
          <p className="lead">파라메트릭과 자동화를 통해 파사드 설계·제작 파이프라인을 최적화합니다.</p>
        </div>
      </div>
    </section>
  );
}
