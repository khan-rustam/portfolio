import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai";

export default function Sevices() {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      x: "-100%",
      opacity: 0,
    },
    twAndThree: {
      y: "-100%",
      opacity: 0,
    },
    four: {
      x: "100%",
      opacity: 0,
    },
  };

  return (
    <div id="services">
      <h2>Sevices</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>1+</h3>
          <p>Years Experience</p>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twAndThree}
        >
          <AiFillIeCircle />
          <span> web Development </span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <AiFillAndroid />
          <span> App Development </span>
        </motion.div>
        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <AiFillWindows />
          <span> web Design </span>
        </motion.div>
      </section>
    </div>
  );
}
