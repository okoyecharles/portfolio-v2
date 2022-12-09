import axios from "axios";
import React, { useState } from "react";
import { emailVerificationKey, formSubmissionKey } from "../../config/apiKeys";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [errorTimeoutID, setErrorTimeoutID] = useState<
    NodeJS.Timeout | undefined
  >(undefined);
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  const clearErrors = () => {
    setNameError(false);
    setEmailError(false);
    setMessageError(false);
  }

  const raiseError = async (error: string | null) => {
    // Disable all previous errors
    clearErrors();

    // Clear previous timeouts
    if (typeof errorTimeoutID === "number") {
      clearTimeout(errorTimeoutID);
    }

    // Stop if no error was specified
    if (error === null) return;

    // Set error for 5 seconds
    setError(error);
    const timeOutID = setTimeout(() => {
      setError(null);
    }, 3000);
    setErrorTimeoutID(timeOutID);
  };

  const verifyEmail = async (email: string) => {
    const response = axios.get(
      `https://api.apilayer.com/email_verification/${email}`,
      {
        headers: { apikey: emailVerificationKey }
      }
    );
    const { data, status } = await response;
    if (status === 429) return { error: "expired" };
    return data;
  };

  const submitData = async (formData: any) => {
    const { data } = await axios.post(
      `https://getform.io/f/${formSubmissionKey}`,
      formData,
      { headers: { Accept: "application/json" } }
    );
    return data;
  };

  const handleSubmission = async (submitEvent: any) => {
    submitEvent.preventDefault();

    if (name.trim().length < 1) {
      raiseError("Name cannot be blank");
      setNameError(true);
      return;
    }

    if (email.trim().length < 1) {
      raiseError("Email cannot be blank");
      setEmailError(true);
      return;
    }

    if (message.trim().length < 1) {
      raiseError("Message cannot be blank");
      setMessageError(true);
      return;
    }

    if (message.length < 5) {
      raiseError("The message is too short");
      setMessageError(true);
      return;
    }

    // Veriy email using regex
    const EMAIL_REGEX =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!EMAIL_REGEX.test(email)) {
      raiseError("Please enter a valid email address");
      setEmailError(true);
      return;
    }

    // Verify email using API Layer email-auth
    const emailVerification = await verifyEmail(email);
    if (emailVerification.error) {
      raiseError("Sorry... Something went wrong!");
      return;
    }
    if (emailVerification.can_connect_smtp === false) {
      raiseError("The email you entered doesn't exist");
      setEmailError(true);
      return;
    }

    const submitResponse = await submitData({ name, email, message });
    if (submitResponse.success) {
      setName('');
      setEmail('');
      setMessage('');
      raiseError(null);
    };
  };

  return (
    <div className="form__container">
      <form className="contactForm" action="" onSubmit={handleSubmission}>
        <div>{error}</div>
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
