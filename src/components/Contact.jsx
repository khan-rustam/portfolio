import React, { useState } from "react";
import toast from "react-hot-toast";
import vg from "../assets/vg.png";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  const [disableBtn, setDisableBtn] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);

    try {
      toast.success("Thank You, We will reach you soon.");
      setDisableBtn(false);

      await addDoc(collection(db, "contacts"), {
        name,
        email,
        number,
        message,
      });
      setName("");
      setMessage("");
      setNumber("");
      setEmail("");
    } catch (error) {
      toast.error("Error in Submission");
      console.log(error);
    }
  };

  const animations = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <div id="contact">
      <section>
        <motion.form onSubmit={submitHandler} {...animations.form}>
          <h2>Contact Me</h2>
          <input
            type="text"
            placeholder="Your Name:"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Your Number:"
            name="number"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          <input
            type="email"
            placeholder="Your Email:"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Your Message:"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <motion.button
            disabled={disableBtn}
            {...animations.button}
            type="submit"
            className={disableBtn ? "disableBtn" : ""}
          >
            Send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="Grapics" />
      </aside>
    </div>
  );
}
