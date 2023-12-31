import React, { createElement, useEffect, useRef, useState } from "react";
import { BsExclamationLg, BsPatchCheckFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
import { Map, Blast } from "../../components";
import emailjs from "@emailjs/browser";

import "./contact.scss";

function Contact() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const arrayName = ["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animation-hover");
    }, 3000);
  }, []);

  const [validInput, setValidInput] = useState({
    name: "",
    message: "",
    email: "",
    subject: "",
  });

  // select all the input with useRef Hook
  const EmailRef = useRef(null);
  const TextAreaRef = useRef(null);
  const MessageRef = useRef(null);
  const form = useRef(null);

  // Handle change function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValidInput((preValue) => {
      return { ...preValue, [name]: value };
    });
  };

  // Error function
  const setError = (inputRef) => {
    if (inputRef.current.parentElement.classList.contains("success")) {
      inputRef.current.parentElement.classList.remove("success");
    } else {
      inputRef.current.parentElement.classList.add("error");
    }
  };

  // Success function
  const setSuccess = (inputRef) => {
    if (inputRef.current.parentElement.classList.contains("error")) {
      inputRef.current.parentElement.classList.remove("error");
    } else {
      inputRef.current.parentElement.classList.add("success");
    }
  };

  // show Message function
  const showMessage = (message, updateColor) => {
    const messageContent = document.createElement("div");
    messageContent.textContent = message;
    messageContent.classList.add("div-content");
    MessageRef.current.prepend(messageContent);
    messageContent.style.backgroundColor = updateColor;

    MessageRef.current.style.transform = `translateX(${"0"}%)`;
    MessageRef.current.style.visibility = "visible";
    setTimeout(() => {
      messageContent.classList.add("hide");
      messageContent.addEventListener("transitionend", () => {
        messageContent.remove();
      });
      messageContent.style.transform = `translateX(${"0"}%)`;
      EmailRef.current.parentElement.classList.remove("error");
      TextAreaRef.current.parentElement.classList.remove("error");
      EmailRef.current.parentElement.classList.remove("success");
      TextAreaRef.current.parentElement.classList.remove("success");
    }, 5000);
  };

  // Submit Button Function
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, message } = validInput;
    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!email && !message) {
      setError(EmailRef);
      setError(TextAreaRef);
      showMessage("Please fill in the required inputs");
    } else if (!email && message) {
      setError(EmailRef);

      showMessage("Ooops! Email can't be empty");
    } else if (!email.match(pattern)) {
      setError(EmailRef);
      showMessage("Ooops! Email not valid");
    } else if (!message && email.match(pattern)) {
      setError(TextAreaRef);

      showMessage("Leave a message please!");
    } else if (email && !message) {
      setError(TextAreaRef);
      showMessage("Oooops! Message can't be empty");
    } else if (email && message) {
      emailjs.sendForm(
        "service_kotoahe",
        "template_2yhlsbj",
        form.current,
        "QqVDz5vqLU2sKu5oy"
      );
      setSuccess(EmailRef);
      setSuccess(TextAreaRef);
      showMessage("Message sent successfully", "green");
    }
    setValidInput({
      name: "",
      message: "",
      email: "",
      subject: "",
    });
  };
  return (
    <>
      <section className="contact-section">
        <div className="fake-big">@</div>
        <form ref={form} className="contact-form" onSubmit={onSubmit}>
          <div>
            <h2 aria-label="contact me" className="contact__heading">
              <Blast
                letterClass={letterClass}
                arrayStr={arrayName}
                indexLetter={12}
              />
            </h2>
            <Fade bottom>
              <p>
                I’m interested in freelance opportunities and I am always ready
                to build projects at anytime, if you have any job offer for me,
                you could use the form below to react out to me.
              </p>
            </Fade>
          </div>
          <Fade bottom>
            <div className="input-wrapper">
              <div className="form-input-group">
                <input
                  autoComplete="false"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={validInput.name}
                  onChange={handleChange}
                />
                <span className="switch__bg"></span>
                <BsExclamationLg className="exclamation" />
                <BsPatchCheckFill className="checkCircle" />
              </div>

              <div className="form-input-group">
                <input
                  autoComplete="false"
                  ref={EmailRef}
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={validInput.email}
                  onChange={handleChange}
                />
                <span className="switch__bg"></span>
                <BsExclamationLg className="exclamation" />
                <BsPatchCheckFill className="checkCircle" />
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="form-input-group">
              <input
                autoComplete="false"
                type="text"
                placeholder="Subject"
                name="subject"
                value={validInput.subject}
                onChange={handleChange}
              />
              <span className="switch__bg"></span>
              <BsExclamationLg className="exclamation" />
              <BsPatchCheckFill className="checkCircle" />
            </div>
          </Fade>
          <Fade bottom>
            <div className="form-input-group">
              <textarea
                autoComplete="false"
                ref={TextAreaRef}
                type="text"
                placeholder="Message"
                name="message"
                value={validInput.message}
                onChange={handleChange}
              />
              <span className="switch__bg"></span>
              <BsExclamationLg className="exclamation" />
              <BsPatchCheckFill className="checkCircle" />
            </div>
          </Fade>
          <Fade left>
            <button type="submit" className="contact-button submit-button">
              <div>
                <span className="bg switch__bg"></span>
                <span className="base switch__border-color"></span>
                <span className="text">
                  Send Message
                  {/* <RiSendPlane2Fill className="message-deliver" /> */}
                </span>
              </div>
            </button>
          </Fade>
        </form>
        <div className="google-map">
          <Map />
        </div>
        <div ref={MessageRef} className="message"></div>
      </section>
    </>
  );
}

export default Contact;
