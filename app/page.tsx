import "../styles/globals.css";
import "../styles/styles.scss";
import "../styles/hero.scss";
import "../styles/header.scss";
import "../styles/about.scss";
import "../styles/main.scss";

export default function Home() {
  return (
    <>
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
            <h3>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              Stockport, UK
            </h3>
          </div>
          <nav className="hero__icons">
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
          </nav>
        </div>
      </section>
      <main>
        <section id="about">
          <div className="logo-sk">
            <img
              src="img/sk-logo.png"
              alt="SLav Konovalov Frontend Web Developer logo"
            />
          </div>
          <article>
            <h2>About Me</h2>
            <p>Greetings, dear visitor!</p>
            <p>
              My name is Slav Konovalov. I'm a Front-End Developer residing in
              Stockport, UK. This website showcases some of&nbsp;
              <a href="#portfolio">my works&nbsp;</a>built along an ongoing
              study of Front-End technologies.
            </p>
            <p>
              I'm currently open to jobs or projects that match the skill level
              of a Junior Developer. I'm prepared to commute within Greater
              Manchester / Stockport area or be engaged in remote projects.
            </p>
            <p>
              You can view my resume&nbsp;
              <a href="https://drive.google.com/file/d/1QIGpIIXwkRXfM63f_FPbaHA0m0v9lQoY/view?usp=sharing">
                here
              </a>
              .
            </p>
          </article>
        </section>
      </main>
    </>
  );
}
