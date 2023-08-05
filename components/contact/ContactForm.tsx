import axios, { AxiosError } from "axios";
import React, { useRef, useState } from "react";
import { emailVerificationKey, formSubmissionKey } from "../../config/apiKeys";
import { IoSend } from "react-icons/io5";
import { useSpring, a } from "@react-spring/web";
import { ThreeDots } from "react-loader-spinner";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import {
  isEmptyString,
  isTooShort,
  isValidEmail,
} from "../../utils/formHelper";

const ContactForm = () => {
  const formRef = useRef(null);
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

    if (error === null) return;

    setSuccess(false);
    setError(error);
    const timeOutID = setTimeout(() => {
      setError(null);
    }, 3000);
    setErrorTimeoutID(timeOutID);
  };

  const raiseSuccess = async () => {
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
  };

  const verifyEmail = async (email: string) => {
    const encodedParams = new URLSearchParams();
    encodedParams.set("email", email);

    const options = {
      method: "POST",
      url: "https://email-validator8.p.rapidapi.com/api/v2.0/email",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": emailVerificationKey,
        "X-RapidAPI-Host": "email-validator8.p.rapidapi.com",
      },
      data: encodedParams,
    };

    try {
      const { data } = await axios.request(options);
      return data;
    } catch (error: any) {
      if (error.response) {
        raiseError("Internal Server Error");
      } else {
        if (error.message === "Network Error")
          raiseError("Check your connection and try again");
        else raiseError("Sorry... Something went wrong");
      }
      return;
    }
  };

  const submitData = async (formData: any) => {
    axios.post(`https://getform.io/f/${formSubmissionKey}`, formData, {
      headers: { Accept: "application/json" },
    });
  };

  const handleSubmission = async (submitEvent: any) => {
    submitEvent.preventDefault();
    setProcessing(true);

    if (isEmptyString(name)) {
      raiseError("Name cannot be blank");
      setNameError(true);
      return;
    }

    if (isEmptyString(email)) {
      raiseError("Email cannot be blank");
      setEmailError(true);
      return;
    }

    // Manual verification
    if (!isValidEmail(email)) {
      raiseError("Please enter a valid email address");
      setEmailError(true);
      return;
    }

    if (isEmptyString(message)) {
      raiseError("Message cannot be blank");
      setMessageError(true);
      return;
    }

    if (isTooShort(message, 10)) {
      raiseError("The message is too short");
      setMessageError(true);
      return;
    }

    // Verify email using email-auth provider
    const emailVerification = await verifyEmail(email);
    if (emailVerification === null) return;
    if (
      emailVerification.mx_records === false ||
      emailVerification.valid === false
    ) {
      raiseError("The email you entered doesn't exist");
      setEmailError(true);
      return;
    }

    raiseSuccess();

    submitData({ name, email, message });
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

  const [spring, api] = useSpring(() => ({
    from: {
      y: 50,
      opacity: 0,
    },
    config: {
      tension: 200,
      friction: 50,
    },
  }));

  useIntersectionObserver(formRef, () => {
    api.start({
      y: 0,
      opacity: 1,
    });
  });

  return (
    <a.div className="contactForm__container" ref={formRef} style={spring}>
      <form className="contactForm" action="" onSubmit={handleSubmission}>
        <a.div
          className="error"
          style={{
            zIndex: "-1",
            top: "0",
            transform: "translateX(-50%)",
            ...errorSprings,
          }}
        >
          {error}
        </a.div>

        <a.div
          className="success"
          style={{
            zIndex: "-1",
            top: "0",
            transform: "translateX(-50%)",
            ...successSprings,
          }}
        >
          {success ? "Message sent successfully" : ""}
        </a.div>

        <div>
          <label htmlFor="contactForm__name">
            Name{" "}
            <span aria-hidden className={nameError ? "error" : ""}>
              *
            </span>
          </label>
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
        </div>

        <div>
          <label htmlFor="contactForm__email">
            Email{" "}
            <span aria-hidden className={emailError ? "error" : ""}>
              *
            </span>
          </label>
          <input
            type="email"
            id="contactForm__email"
            className={`contactForm__email ${emailError ? "invalid" : ""}`}
            value={email}
            placeholder="Email address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="contactForm__message">
            Message{" "}
            <span aria-hidden className={messageError ? "error" : ""}>
              *
            </span>
          </label>
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
        </div>
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
    </a.div>
  );
};

export default ContactForm;
