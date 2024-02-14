import "../../styles/footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <a className="footer__btn--back-to-top" href="#hero">
        <span></span>
        <span></span>
        <span></span>
        <p>Back to Top</p>
      </a>
      <nav className="footer__icons">
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
    </footer>
  );
}
