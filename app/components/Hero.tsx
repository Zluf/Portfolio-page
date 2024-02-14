// import "../../styles/globals.css";
import "../../styles/hero.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <header className="hero__header header">
        <nav className="header__nav">
          <a className="mobile-hidden" href="#about">
            About
          </a>
          <a className="mobile-hidden" href="#education">
            Education
          </a>
          <a className="mobile-hidden" href="#skills">
            Skills
          </a>
          <a className="mobile-hidden" href="#portfolio">
            Portfolio
          </a>
        </nav>
      </header>
      <div className="hero__overlay"></div>
      <div className="hero__brgr-menu">
        <div className="brgr-midline"></div>
      </div>
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
