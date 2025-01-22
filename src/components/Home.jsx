import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/my-pic.png";

export default function Home({ ratio }) {
  const animation = {
    h1: {
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
    },
  };

  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClintsCount = () => {
    animate(0, 10, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 50, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animation.h1}>
            Hi, I AM <br />
            Rustam Khan
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A   Developer", "A   Designer", "A   Freelancer"],
              autoStart: true,
              loop: true,
              wraapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:rustam.khan28@outlook.com">Hire Me</a>
            <a href="https://drive.google.com/file/d/1V89CUsc9kpf8o8h9EppHM14I24ecEqBW/view?usp=sharing" target="blank">
              Resume  <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +
              {ratio < 2 && (
                <motion.span
                  whileInView={animationClintsCount}
                  ref={clientCount}
                ></motion.span>
              )}
            </p>
            <span>Clints</span>
          </article>
          <article>
            <p>
              +
              {ratio < 2 && (
                <motion.span
                  whileInView={animationProjectsCount}
                  ref={projectCount}
                ></motion.span>
              )}
            </p>
            <span>Projects</span>
          </article>

          <aside>
            <article data-special>
              <p>Contact</p>
              <span>+91 90790 57892</span>
            </article>
          </aside>
        </div>
      </section>

      <section>
        <img src={me} alt="Rustam" />
      </section>
      <BsChevronDown />
    </div>
  );
}
