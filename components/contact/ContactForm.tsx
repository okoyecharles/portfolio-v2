import axios from "axios";
import React, { useState } from "react";
import { emailVerificationKey, formSubmissionKey } from "../../config/apiKeys";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="form__container">
      <form className="contactForm" action="">
        <div>
          <label htmlFor="contactForm__name">Name *</label>
          <br />
          <input
            type="text"
            id="contactForm__name"
            className="contactForm__name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="contactForm__email">Email *</label>
          <br />
          <input
            type="email"
            id="contactForm__email"
            className="contactForm__email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="contactForm__message">Message *</label>
          <br />
          <textarea
            id="contactForm__message"
            className="contactForm__message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
