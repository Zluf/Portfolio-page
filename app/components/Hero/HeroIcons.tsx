import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const HeroTitle: React.FC = () => {
  return (
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
  );
};

export default HeroTitle;
