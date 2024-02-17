import React from "react";
import footerImg from "../assets/footer avtar.png";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { SiNetlify } from "react-icons/si";

const footerIcons = [
  {
    link: "https://www.linkedin.com/in/kh4n28/",
    icon: <AiFillLinkedin />,
  },
  {
    link: "https://github.com/khan-rustam",
    icon: <AiFillGithub />,
  },
  {
    link: "https://www.instagram.com/____rustam.___/",
    icon: <AiFillInstagram />,
  },
  {
    link: "https://app.netlify.com/teams/khan-rustam",
    icon: <SiNetlify />,
  },
  {
    link: "https://twitter.com/KH4N2809",
    icon: <AiFillTwitterSquare />,
  },
];

export default function Footer() {
  return (
    <footer>
      <div>
        <img src={footerImg} alt="Founder" />
        <h2>Rustam Khan</h2>
        <p>In investing, you get what you don't pay for.</p>
      </div>

      <aside>
        <h2>Check Out Me</h2>
        <article>
          {footerIcons.map((i) => (
            <a href={i.link} target="_blank" key={i.link}>
              {i.icon}
            </a>
          ))}
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
}
