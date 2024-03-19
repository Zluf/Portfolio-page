import React from "react";
import Image from "next/image";
import classes from "./Title.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";

import react from "@/public/img/png-icons/React.png";
import js from "@/public/img/png-icons/JS.png";
import ts from "@/public/img/png-icons/ts.webp";
import sass from "@/public/img/png-icons/Sass.png";
import css from "@/public/img/png-icons/CSS3.png";
import html from "@/public/img/png-icons/HTML5.png";
import git from "@/public/img/png-icons/git.png";

const Title: React.FC = () => {
  return (
    <section className={classes.title}>
      <h3>Hi, there! I'm</h3>
      <h1>Slav Konovalov</h1>
      <h2>Front End Developer</h2>
      <div className={classes.skills}>
        <div className={classes.react}>
          <Image src={react} alt="react icon" width={25} height={25} />
        </div>

        <div className={classes.ts}>
          <Image src={ts} alt="typescript icon" width={28} height={28} />
        </div>

        <div className={classes.js}>
          <FontAwesomeIcon icon={faJs} />
        </div>

        <div className={classes.sass}>
          <Image src={sass} alt="sass icon" width={25} height={25} />
        </div>

        <div className={classes.css}>
          <FontAwesomeIcon icon={faCss3Alt} />
        </div>

        <div className={classes.html}>
          <FontAwesomeIcon icon={faHtml5} />
        </div>

        <div className={classes.git}>
          <Image src={git} alt="git icon" width={25} height={25} />
        </div>
      </div>

      <div className={classes.location}>
        <FontAwesomeIcon icon={faLocationDot} />
        <h3>Manchester, UK</h3>
      </div>
    </section>
  );
};

export default Title;
