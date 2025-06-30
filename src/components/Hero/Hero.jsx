import React from "react";

import styles from "./Hero.module.css";
import { getImage } from "../../utils/getImage";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Divya</h1>
        <p className={styles.description}>
          I'm a 3rd-year Computer Engineering student passionate about front-end development and
          turning ideas into interactive web experiences.. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:divyagurav107@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImage("hero/heroImage.png")}     
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};