/*
Netlify Contact Form Code Sourced From:
https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
*/

import React from 'react';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        email: "",
        message: ""
      };
    }

    handleSubmit = (e) => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
      const { name, email, message } = this.state;
      return (
        <div className="Contact fade-in one">
          <section>
            E-mail me at <a href="mailto:steven.charles.huang@gmail.com">steven.charles.huang@gmail.com</a>
          </section>
          <p>- or -</p>
          Leave a note
          <section className="contact-form">
            <form name="contact" onSubmit={this.handleSubmit} data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
              <p>
                <label>
                  Your Name:
                  <br />
                  <input type="text" name="name" value={name} onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Your Email:
                  <br />
                  <input type="email" name="email" value={email} onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Message:
                  <br />
                  <textarea name="message" value={message} onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          </section>
          <section>
              Find me on
              <a href="https://www.hackerrank.com/stevencharles" target="_blank" rel="noopener noreferrer">
                HackerRank
              </a>
                or check out my
              <a href="https://repl.it/@stevencharleshu/" target="_blank" rel="noopener noreferrer">
                Repls
              </a>
              !
          </section>

        </div>
      );
    }
  }
