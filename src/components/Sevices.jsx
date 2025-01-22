import React from "react";
import { motion } from "framer-motion";
import { CgWebsite } from "react-icons/cg";
import { AiFillIeCircle, AiFillWindows } from "react-icons/ai";

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
    twoAndThree: {
      y: "-100%",
      opacity: 0,
    },
    four: {
      x: "100%",
      opacity: 0,
    },
  };

  const componentDiv = [
    {
      className: "serviceBox1",
      initialAnimation: animations.one,
      transition: {},
      icon: <h3>2+</h3>,
      para: <p>Years Experience</p>,
    },
    {
      className: "serviceBox2",
      initialAnimation: animations.twoAndThree,
      transition: {},
      icon: <AiFillIeCircle />,
      para: <span> Web Development </span>,
    },
    {
      className: "serviceBox3",
      initialAnimation: animations.twoAndThree,
      transition: { delay: 0.2 },
      icon: <AiFillWindows />,
      para: <span> Web Design </span>,
    },
    {
      className: "serviceBox4",
      initialAnimation: animations.four,
      transition: {},
      icon: <CgWebsite />,
      para: <span> MERN Stack Development </span>,
    },
  ];

  return (
    <div id="services">
      <h2>Sevices!</h2>
      <section>
        {componentDiv.map((i) => (
          <motion.div
            className={i.className}
            whileInView={animations.whileInView}
            initial={i.initialAnimation}
            key={i.className}
          >
            {i.icon}
            {i.para}
          </motion.div>
        ))}
      </section>
    </div>
  );
}
