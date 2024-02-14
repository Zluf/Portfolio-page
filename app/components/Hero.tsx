// import "../../styles/globals.css";
"use client";

import "../../styles/hero.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function Hero() {
  const [brgrClass, setBrgrClass] = useState("mobile-hidden");

  const toggleBrgrMenu = () => {
    setBrgrClass((prevBrgrClass) => {
      return prevBrgrClass === "mobile-visible"
        ? "mobile-hidden"
        : "mobile-visible";
    });
  };

  return (
    <section className="hero" id="hero">
      <header className="hero__header header">
        <nav className="header__nav">
          <a className={brgrClass} href="#about">
            About
          </a>
          <a className={brgrClass} href="#education">
            Education
          </a>
          <a className={brgrClass} href="#skills">
            Skills
          </a>
          <a className={brgrClass} href="#portfolio">
            Portfolio
          </a>
        </nav>
      </header>

      <div className="hero__overlay"></div>

      <button className="hero__brgr-menu" onClick={toggleBrgrMenu}>
        <div className="brgr-midline"></div>
      </button>

      <div className="hero__container">
        <div className="hero__title">
          <h3>Hi, there! I'm</h3>
          <h1>Slav Konovalov</h1>
          <h2>Front End Developer</h2>
          <div className="hero__location">
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <h3>Stockport, UK</h3>
          </div>
        </div>

        <nav className="hero__icons">
          <a
            href="https://www.linkedin.com/in/slav-konovalov-466650182"
            target="_blank"
            aria-label="LinkedIn page link"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/Zluf"
            aria-label="GitHub page link"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="mailto:slav.konovalov@gmail.com?subject=Interested in web development services&body=Hi, Slav"
            aria-label="Email link"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </nav>
      </div>
    </section>
  );
}
