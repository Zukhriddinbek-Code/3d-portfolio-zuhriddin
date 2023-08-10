/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

import { slideIn } from "../utils/motion";

// template_81xdtcl
// service_gdx1jac
// w10dMPbI55i1qERtg

const isEmpty = (value) => value.trim() === "";
const isEmailInc = (value) => value.trim() === "" && value.trim().includes("@");

const Contact = () => {
  // const formRef = useRef();
  // const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    email: true,
    message: true,
  });
  const [loading, setLoading] = useState(false);

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  /*const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  */

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredEmailIsValid = !isEmailInc(enteredEmail);
    const enteredMessageIsValid = !isEmpty(enteredMessage);

    setFormInputsValidity({
      name: enteredNameIsValid,
      email: enteredEmailIsValid,
      message: enteredMessageIsValid,
    });

    const formIsValid =
      enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid;

    if (!formIsValid) {
      return;
    }

    //submit data
    setLoading(true);

    /*    if (form.name.length)
      emailjs
        .send(
          "service_gdx1jac",
          "template_81xdtcl",
          {
            from_name: form.name,
            to_name: "Zuhriddin Ganiev",
            from_email: form.email,
            to_email: "zuhriddinganiyev2000@gmail.com",
            message: form.message,
          },
          "w10dMPbI55i1qERtg"
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you! I will get back to you!");

            setForm({ name: "", email: "", message: "" });
          },
          (error) => {
            setLoading(false);
            console.log(error);

            alert("Something went wrong!");
          }
        );*/
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
              ref={nameInputRef}
              // value={form.name}
              // onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium"
            />
            {!formInputsValidity.name && <p>Please enter a valid name!</p>}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              ref={emailInputRef}
              // value={form.email}
              // onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium"
            />
            {!formInputsValidity.email && (
              <p>Please enter a valid email address!</p>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              ref={messageInputRef}
              // value={form.message}
              // onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium"
            />
            {!formInputsValidity.message && <p>Message is empty!</p>}
          </label>

          <button className="bg-tertiry py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
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
