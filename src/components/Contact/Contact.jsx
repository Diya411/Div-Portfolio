import React from "react";

import styles from "./Contact.module.css";
import { getImage } from "../../utils/getImage";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImage("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:divyagurav107@gmail.com">divyagurav107@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImage("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/divyamsgurav" target="_blank" rel="noopener noreferrer">linkedin.com/in/divyamsgurav</a>
        </li>
        <li className={styles.link}>
          <img src={getImage("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/Diya411" target="_blank" rel="noopener noreferrer">github.com/Diya411</a>
        </li>
      </ul>
    </footer>
  );
};