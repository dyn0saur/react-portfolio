export default function Contact(){
  return (
    <section id="contact" style={{background:'#f9fafb', padding:'var(--s6) 0'}}>
      <div className="container" style={{maxWidth:'720px'}}>
        <h2 className="h2">연락처</h2>
        <form action="https://formspree.io/f/xxxxx" method="POST"
              style={{display:'grid', gap:'var(--s3)'}}>
          <label htmlFor="name">이름</label>
          <input id="name" name="name" type="text" required
                 style={{padding:'12px 14px', borderRadius:'10px', border:'1px solid #e5e7eb'}} />
          <label htmlFor="email">이메일</label>
          <input id="email" name="_replyto" type="email" required
                 style={{padding:'12px 14px', borderRadius:'10px', border:'1px solid #e5e7eb'}} />
          <label htmlFor="message">메시지</label>
          <textarea id="message" name="message" required rows={6}
                    style={{padding:'12px 14px', borderRadius:'10px', border:'1px solid #e5e7eb'}} />
          <button type="submit"
                  style={{padding:'12px 18px', borderRadius:'12px', background:'var(--primary)', color:'#fff', border:'none'}}>
            보내기
          </button>
        </form>
      </div>
    </section>
  );
}