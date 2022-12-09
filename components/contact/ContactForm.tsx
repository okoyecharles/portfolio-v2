import axios from "axios";
import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { useSpring, animated } from "@react-spring/web";
import { ThreeDots } from "react-loader-spinner";

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

  const [successTimeoutID, setSuccessTimeoutID] = useState<
    NodeJS.Timeout | undefined
  >(undefined);
  const [success, setSuccess] = useState<boolean>(false);

  const [processing, setProcessing] = useState(false);

  const clearErrors = () => {
    setNameError(false);
    setEmailError(false);
    setMessageError(false);
  };

  const raiseError = async (error: string | null) => {
    // Disable all previous errors
    clearErrors();
    setProcessing(false);
    if (typeof errorTimeoutID === "number") {
      clearTimeout(errorTimeoutID);
    }

    // Stop if no error was specified
    if (error === null) return;

    setSuccess(false);
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
        headers: { apikey: process.env.EMAIL_VERIFICATION_KEY }
      }
    );
    const { data, status } = await response;
    if (status === 429) return { error: "expired" };
    return data;
  };

  const submitData = async (formData: any) => {
    const { data } = await axios.post(
      `https://getform.io/f/${process.env.FORM_SUBMISSION_KEY}`,
      formData,
      { headers: { Accept: "application/json" } }
    );
    return data;
  };

  const handleSubmission = async (submitEvent: any) => {
    submitEvent.preventDefault();
    setProcessing(true);

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

    // Manual verification using regex
    const EMAIL_REGEX =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!EMAIL_REGEX.test(email)) {
      raiseError("Please enter a valid email address");
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

    // Verify email using API Layer's email-auth provider
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
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");

      clearTimeout(successTimeoutID);
      const timeoutID = setTimeout(() => {
        setSuccess(false);
      }, 3000);
      setSuccessTimeoutID(timeoutID);

      raiseError(null);
    }
  };

  const errorSprings = useSpring({
    y: error ? -40 : 0,
    opacity: error ? 0.9 : 0,
    config: {
      friction: 20,
      tension: 200,
    },
  });

  const successSprings = useSpring({
    y: success ? -40 : 0,
    opacity: success ? 1 : 0,
    config: {
      friction: 20,
      tension: 200,
    },
  });

  return (
    <div className="contactForm__container">
      <form className="contactForm" action="" onSubmit={handleSubmission}>
        <animated.div
          className="error"
          style={{
            zIndex: "-1",
            top: "0",
            transform: "translateX(-50%)",
            ...errorSprings,
          }}
        >
          {error}
        </animated.div>

        <animated.div
          className="success"
          style={{
            zIndex: "-1",
            top: "0",
            transform: "translateX(-50%)",
            ...successSprings,
          }}
        >
          Message sent successfully
        </animated.div>

        <input
          type="text"
          id="contactForm__name"
          className={`contactForm__name ${nameError ? "invalid" : ""}`}
          value={name}
          placeholder="Full Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input
          type="email"
          id="contactForm__email"
          className={`contactForm__email ${emailError ? "invalid" : ""}`}
          value={email}
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <textarea
          id="contactForm__message"
          className={`contactForm__message ${messageError ? "invalid" : ""}`}
          rows={5}
          value={message}
          placeholder="Type your message here..."
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button type="submit" disabled={processing}>
          Send
          {processing ? (
            <ThreeDots
              height="15"
              width="20"
              radius="9"
              color="var(--loading)"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              visible={true}
            />
          ) : (
            <IoSend />
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
