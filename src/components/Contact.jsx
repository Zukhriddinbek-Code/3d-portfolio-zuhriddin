/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Modal from "./Modal";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

import { slideIn } from "../utils/motion";

// template_81xdtcl
// service_gdx1jac
// w10dMPbI55i1qERtg

const isEmpty = (value) => value.trim() === "";
const isEmailInc = (value) => !value.trim().includes("@");

const Contact = () => {
  //loading state
  const [loading, setLoading] = useState(false);

  //state for modal rendering
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  //overall form validity
  const [formIsValid, setFormIsValid] = useState(false);

  //states of input data
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  //touched states
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredMessageTouched, setEnteredMessageTouched] = useState(false);

  const enteredNameIsValid = !isEmpty(enteredName);
  const enteredEmailIsValid = !isEmailInc(enteredEmail);
  const enteredMessageIsValid = !isEmpty(enteredMessage);

  //validation for rendering error p tag
  const nameInputInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailInputInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const messageInputInvalid = !enteredMessageIsValid && enteredMessageTouched;

  //onChange handlers
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const messageInputChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  //blur handlers
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };
  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };
  const messageInputBlurHandler = (event) => {
    setEnteredMessageTouched(true);
  };

  //onSubmit handler for the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // we assume that when submitted user is sure that every input field is touched, so we say touched state to true
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    setEnteredMessageTouched(true);

    // we make checks
    if (!enteredNameIsValid) {
      return;
    }

    if (!enteredEmailIsValid) {
      return;
    }

    if (!enteredMessageIsValid) {
      return;
    }

    // if we pass the validity checks, we assume that they are valid
    if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
      setFormIsValid(true);
    }

    if (!formIsValid) {
      return;
    }

    setLoading(true);

    //submit data
    emailjs
      .send(
        "service_gdx1jac",
        "template_81xdtcl",
        {
          from_name: enteredName,
          to_name: "Zuhriddin Ganiev",
          from_email: enteredEmail,
          to_email: "zuhriddinganiyev2000@gmail.com",
          message: enteredMessage,
        },
        "w10dMPbI55i1qERtg"
      )
      .then(
        () => {
          setLoading(false);
          setIsOpen(true);
          setSuccess(true);
          alert("Thank you! I will get back to you!");
          // {
          //   isOpen && <Modal setIsOpen={setIsOpen} />;
          // }

          // reseting input fields to an empty field
          // setLoading(true);
          //setting entered input data back to empty field
          setEnteredName("");
          setEnteredEmail("");
          setEnteredMessage("");
          //setting touched state back to false
          setEnteredNameTouched(false);
          setEnteredEmailTouched(false);
          setEnteredMessageTouched(false);

          // setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          setSuccess(false);
          alert("Something went wrong!");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch!</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          // ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              onChange={nameInputChangeHandler}
              onBlur={nameInputBlurHandler}
              value={enteredName}
              placeholder="What's your name?"
              className={`${
                nameInputInvalid && styles.inputBorderError
              } bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg font-medium`}
            />
            {nameInputInvalid && (
              <p className={styles.errorParagraph}>
                Please enter a valid name!
              </p>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              onChange={emailInputChangeHandler}
              onBlur={emailInputBlurHandler}
              value={enteredEmail}
              placeholder="What's your email?"
              className={`${
                emailInputInvalid && styles.inputBorderError
              } bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg font-medium`}
            />
            {emailInputInvalid && (
              <p className={styles.errorParagraph}>
                Please enter a valid email address!
              </p>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              onChange={messageInputChangeHandler}
              onBlur={messageInputBlurHandler}
              value={enteredMessage}
              placeholder="What do you want to say?"
              className={`${
                messageInputInvalid && styles.inputBorderError
              } bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg font-medium`}
            />
            {messageInputInvalid && (
              <p className={styles.errorParagraph}>Required field!</p>
            )}
          </label>

          <button
            className={`bg-tertiry py-3 px-8 outline-none w-fit text-white font-bold shadow-lg shadow-primary rounded-xl`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
