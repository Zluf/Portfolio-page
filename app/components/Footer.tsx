import "../../styles/footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <a className="footer__btn--back-to-top" href="#hero">
        <span></span>
        <span></span>
        <span></span>
        <p>Back to Top</p>
      </a>
      <div className="footer__icons">
        <a
          href="https://www.linkedin.com/in/slav-konovalov-466650182"
          target="_blank"
          aria-label="LinkedIn page link"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/Zluf"
          aria-label="GitHub page link"
          target="_blank"
        >
          <i className="fab fa-github-square"></i>
        </a>
        <a
          href="mailto:slav.konovalov@gmail.com?subject=Interested in web development services&body=Hi, Slav"
          aria-label="Email link"
        >
          <i className="fas fa-envelope-square"></i>
        </a>
      </div>
    </footer>
  );
}
