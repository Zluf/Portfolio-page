import "../styles/globals.css";
import "../styles/styles.scss";
import hero from "../styles/hero.module.scss";
import header from "../styles/header.module.scss";

export default function Home() {
  return (
    <section className={hero.hero} id="hero">
      <div className="testsass">aaa</div>
      <header className={`${header.hero__header} ${header.header}`}>
        <nav className={header.header__nav}>
          <a className={header.mobileHidden} href="#about">
            About
          </a>
          <a className={header.mobileHidden} href="#education">
            Education
          </a>
          <a className={header.mobileHidden} href="#skills">
            Skills
          </a>
          <a className={header.mobileHidden} href="#portfolio">
            Portfolio
          </a>
        </nav>
      </header>
      <div className={hero.hero__overlay}></div>
      <div className={hero.hero__brgrMenu}>
        <div className={hero.brgrMidline}></div>
      </div>
      {/*<div className={hero.hero__container">
         <div className={hero.hero__title">
           <h3>Hi, there! I'm</h3>
           <h1>Slav Konovalov</h1>
           <h2>Front End Developer</h2>
           <h3>
             <i className={hero.fa fa-map-marker" aria-hidden="true"></i>
             Stockport, UK
           </h3>
         </div>
         <nav className={hero.hero__icons">
           <a
             href="https:www.linkedin.com/in/slav-konovalov-466650182"
             target="_blank"
             aria-label="LinkedIn page link"
           >
             <i className={hero.fab fa-linkedin"></i>
           </a>
           <a
             href="https:github.com/Zluf"
             aria-label="GitHub page link"
             target="_blank"
           >
             <i className={hero.fab fa-github-square"></i>
           </a>
           <a
             href="mailto:slav.konovalov@gmail.com?subject=Interested in web development services&body=Hi, Slav"
             aria-label="Email link"
           >
             <i className={hero.fas fa-envelope-square"></i>
           </a>
         </nav>
       </div> */}
    </section>
  );
}
