import React from 'react';

/**
 * Contact section component. This component provides a basic contact
 * form. The form does not actually send data anywhere by default –
 * to enable submissions on a static hosting platform like GitHub
 * Pages you can integrate with a service such as Formspree or
 * EmailJS as described in the documentation. The onSubmit handler
 * here simply prevents the default submission behaviour.
 */
function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('폼을 제출하려면 백엔드 서비스가 필요합니다. Formspree 또는 EmailJS를 통합하세요.');
  };

  return (
    <section id="contact">
      <h2>연락처</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">이름</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">이메일</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">메시지</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">보내기</button>
      </form>
    </section>
  );
}

export default Contact;