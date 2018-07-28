import React from 'react';

export default function () {
  return (
    <div className="Contact">
      <section>
        E-mail me at <a href="mailto:steven.charles.huang@gmail.com">steven.charles.huang@gmail.com</a>
      </section>
      <p>- or -</p>
        Leave a note
      <section className="contact-form">
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>Name: <br />
            <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Email: <br />
            <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Message: <br />
            <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </section>
    </div>
  );
}
