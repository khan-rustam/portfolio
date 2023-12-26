import React from "react";
import footerImg from "../assets/footer avtar.png";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

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
          <a href="https://www.linkedin.com/in/kh4n28/" target={"blank"}>
            <AiFillLinkedin />
          </a>

          <a href="https://github.com/Rustam028" target={"blank"}>
            <AiFillGithub />
          </a>

          <a href=" https://www.instagram.com/kh4n_028/" target={"blank"}>
            <AiFillInstagram />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
}
