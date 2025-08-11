import React from 'react';

*/**
 * Contact section component. This component provides a basic contact
 * form. To enable submissions on a static hosting platform like GitHub
 * Pages you can integrate with a service such as Formspree or
 * EmailJS – set the action attribute of the form to your endpoint.
 */
  

  return (
    <section id="contact">
      <h2>연락처</h2>
   <form action="https://formspree.io/f/your-form-id" method="POST">
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
