import "../styles/globals.css";
import classes from "../styles/hero.module.scss";

export default function Home() {
  return (
    <section id="hero">
      <header className={`${classes.hero__header} ${classes.header}`}>
        <nav className={classes.header__nav}>
          <a className={classes.mobileHidden} href="#about">
            About
          </a>
          <a className={classes.mobileHidden} href="#education">
            Education
          </a>
          <a className={classes.mobileHidden} href="#skills">
            Skills
          </a>
          <a className={classes.mobileHidden} href="#portfolio">
            Portfolio
          </a>
        </nav>
      </header>
      {/* // <div className={classes.hero__overlay}></div>
      // <div className={classes.hero__brgr-menu}>
      //   <div className={classes.brgr-midline"></div>
      // </div>
      // <div className={classes.hero__container">
      //   <div className={classes.hero__title">
      //     <h3>Hi, there! I'm</h3>
      //     <h1>Slav Konovalov</h1>
      //     <h2>Front End Developer</h2>
      //     <h3>
      //       <i className={classes.fa fa-map-marker" aria-hidden="true"></i>
      //       Stockport, UK
      //     </h3>
      //   </div>
      //   <nav className={classes.hero__icons">
      //     <a
      //       href="https://www.linkedin.com/in/slav-konovalov-466650182"
      //       target="_blank"
      //       aria-label="LinkedIn page link"
      //     >
      //       <i className={classes.fab fa-linkedin"></i>
      //     </a>
      //     <a
      //       href="https://github.com/Zluf"
      //       aria-label="GitHub page link"
      //       target="_blank"
      //     >
      //       <i className={classes.fab fa-github-square"></i>
      //     </a>
      //     <a
      //       href="mailto:slav.konovalov@gmail.com?subject=Interested in web development services&body=Hi, Slav"
      //       aria-label="Email link"
      //     >
      //       <i className={classes.fas fa-envelope-square"></i>
      //     </a>
      //   </nav>
      // </div> */}
    </section>
  );
}
