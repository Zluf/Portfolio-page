import "../styles/globals.css";
import "../styles/styles.scss";
import "../styles/hero.scss";
import "../styles/header.scss";
import "../styles/main.scss";
import "../styles/about.scss";
import "../styles/education.scss";
import "../styles/skills.scss";
import "../styles/portfolio.scss";
import "../styles/footer.scss";

import Image from "next/image";

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

        {/* 🚩 EDUCATION */}
        <section className="education" id="education">
          <h2>Education</h2>
          <div className="education__module">
            <h3>Private Online Tutoring</h3>
            <p>
              After grabbing the basics of <strong>HTML & CSS</strong> I reached
              out to Tom Parson of {""}
              <a href="https://workwithhuddle.com/" target="_blank">
                Huddle Digital
              </a>{" "}
              via a tutoring website {""}
              <a href="https://www.superprof.com/" target="_blank">
                Superprof
              </a>{" "}
              {""}. Tom introduced me to a series of Adobe XD mock-up designs
              from which I built web pages while continuing to self-study
              relevant techniques. During the lessons Tom would give me his
              feedback and we would discuss page mark-up and styling practices
              which I would implement later in the projects. As Tom is an
              experienced Developer, his lessons were of great value to my
              learning.
            </p>
          </div>

          <div className="education__module">
            <img
              className="education__title"
              src="img/udmy.png"
              alt="Udemy Online Courses logo"
            />

            <h3>Udemy</h3>
            <p>
              <a href="https://www.udemy.com/course/the-complete-javascript-course">
                The Complete JavaScript Course 2022
              </a>{" "}
              {""}
              [Completed]
              <br />
              <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">
                React (incl Hooks, React Router, Redux)
              </a>{" "}
              {""}
              [In Progress...]
              <br />
              <a href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/">
                Node.js, Express, MongoDB & More
              </a>{" "}
              {""}
              [In Progress...]
              <br />
              On-going and thorough study of Udemy courses as I implement learnt
              skills in the projects.
            </p>
          </div>
          <div className="education__module">
            <img
              className="education__title"
              src="img/fem.png"
              alt="Frontend Mentor logo"
            />
            <h3>Frontend Mentor</h3>
            <p>
              On-going practice of building apps and web pages from pre-designed
              mock-ups at {""}
              <a href="https://www.frontendmentor.io/home">frontendmentor.io</a>
            </p>
          </div>
          <div className="education__module">
            <img
              className="education__title"
              src="img/hlg.png"
              alt="Global Legal Hackathon 2022 image title"
            />
            <h3>Global Legal Hackathon</h3>
            <p>
              Working in a team developing new app that had to be accomplished
              and published within 2 days. The team won the first stage of the
              competition in the category of Access to Justice.
              <br />
              <a href="https://www.youtube.com/watch?v=b4IADyH9BJM">
                Fast Law: Team presentation (video)
              </a>
              <br />
              <a href="https://legaltech.wales/researcher-blogs/lilw-meets-glh-2022-fastlaw">
                Fast Law: Project description (article)
              </a>
            </p>
          </div>
        </section>

        {/* 🚩 SKILLs  */}
        <section className="skills" id="skills">
          <h2>Skills</h2>

          <div className="skills__img-container">
            <h3>HTML</h3>
            <img src="img/png-icons/HTML5.png" alt="html5 icon png image" />
            <p>
              Use of Semantic markup tags and their attributes. Checking for W3C
              Validation and Performance. Basic understanding of Accessibility
              tools.
            </p>
          </div>

          <div className="skills__img-container">
            <h3>CSS</h3>
            <img src="img/png-icons/CSS3.png" alt="css3 icon png image" />
            <p>
              Understanding Box Model, Unit Lengths, BEM convention, Selectors
              and Positioning. Alignment & Layout of elements with Flexbox &
              Grid. Use of Transitions, Animations, Selectors & Media Quieries
              for Responsive Design.
            </p>
          </div>

          <div className="skills__img-container">
            <h3>Sass</h3>
            <img
              src="img/png-icons/Sass.png"
              alt="sass css pre-procecessor icon png image"
            />
            <p>
              Using features like nesting, mixins & variables to organize
              styling.
            </p>
          </div>

          <div className="skills__img-container">
            <h3>JavaScript</h3>
            <img src="img/png-icons/JS.png" alt="javascript icon png image" />
            <p>
              Understanding of Basic Syntax, Procedural & Object-Oriented
              Programming. Manipulating DOM-Tree. Use of Asynchronous functions
              and Fetch API. Import and use of 3rd party Packages with NPM.
            </p>
          </div>

          <div className="skills__img-container">
            <h3>ReactJS</h3>
            <img src="img/png-icons/React.png" alt="reactJS icon png image" />
            <p>
              Building Single-Page Applications with Functional Components. Use
              of React Hooks.
            </p>
          </div>

          <div className="skills__img-container">
            <h3>Git</h3>
            <img
              src="img/png-icons/git.png"
              alt="git version control icon png image"
            />
            <p>
              Knowledge of Git & GitHub commands in a Command-Line Interface.
              Understanding of Git workflow. Use of Github Desktop software.
            </p>
          </div>

          <h2>Tools</h2>

          <div className="skills__img-container">
            <h3>VSCode</h3>
            <img
              src="img/png-icons/VSCode.png"
              alt="Virtual Studio Code icon png image"
            />
            <p>
              I use VSCode as my main code editor. With installed software
              extensions for code formatting and compiling.
            </p>
          </div>

          <div className="skills__img-container">
            <h3>Photoshop</h3>
            <img
              src="img/png-icons/PS.png"
              alt="Adobe Photohop Code icon png image"
            />
            <p>
              Basic skills for image editing. Sometimes I would make adjustments
              for digital assets or create my own ones.
            </p>
          </div>
        </section>

        {/* 🚩 PORTFOLIO  */}
        <section className="portfolio" id="portfolio">
          <article className="portfolio__info">
            <h2>Portfolio</h2>
            <p>
              Here you can view the pages I've built, arranged most recent to
              oldest. All pages are built from scratch from pre-designed Adobe
              XD mock-ups.
            </p>
          </article>

          {/* 🎌 PAGE: Precision Gym  */}
          <div className="prj tic-tac-toe">
            <a className="prj__title" href="https://precision-gym.netlify.app/">
              <i className="fas fa-file-alt"></i>
              <h3>Gym Tracker App</h3>
              <i className="fas fa-arrow-right"></i>
            </a>
            <ul className="prj__skills-used flex">
              <li>ReactJS</li>
              <li>Firebase</li>
              <li>Database</li>
              <li>CSS</li>
            </ul>
            <div className="prj__img-box">
              <img
                src="img/precision-gym.png"
                alt="screenshot precision-gym app"
              />
              <div className="img__overlay">
                <p>
                  A Front End app that allows the user to track their gym
                  progress by inputting relevant data. Built after an idea
                  during workout sessions. More info at
                  <a href="https://github.com/Zluf/precision-gym-app-react">
                    GitHub page
                  </a>
                  .
                </p>
                <ul>
                  <li>Own project</li>
                  <li>User Input</li>
                  <li>Data manipulation</li>
                  <li>Storing and Fetching Database</li>
                  <li>User Account Authentication</li>
                </ul>
                <nav>
                  <a href="https://precision-gym.netlify.app/">
                    <i className="fa fa-link" aria-hidden="true"></i>
                  </a>
                  <a href="https://github.com/Zluf/precision-gym-app-react">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </nav>
              </div>
            </div>
          </div>

          {/* 🎌 PAGE: Tic Tac Toe  */}
          <div className="prj tic-tac-toe">
            <a
              className="prj__title"
              href="https://tic-tac-toe-by-slavk.netlify.app/"
            >
              <i className="fas fa-file-alt"></i>
              <h3>Tic Tac Toe</h3>
              <i className="fas fa-arrow-right"></i>
            </a>
            <ul className="prj__skills-used flex">
              <li>ReactJS</li>
              <li>Vite</li>
              <li>CSS</li>
              <li>Animations</li>
            </ul>
            <div className="prj__img-box">
              <img
                src="img/tic-tac-toe.png"
                alt="screenshot tic tac toe game"
              />
              <div className="img__overlay">
                <p>
                  Tic Tac Toe game built with ReactJS Functional Components with
                  Vite build tool.
                </p>
                <ul>
                  <li>
                    Animation sequences for Xs, Os and crossing out winning
                    combination
                  </li>
                  <li>Score that gets updated</li>
                  <li>Tie result</li>
                  <li>Hover states for the current player's move</li>
                  <li>Color harmony generated by Adobe Color Wheel</li>
                </ul>
                <nav>
                  <a href="https://tic-tac-toe-by-slavk.netlify.app/">
                    <i className="fa fa-link" aria-hidden="true"></i>
                  </a>
                  <a href="https://github.com/Zluf/tic-tac-toe">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </nav>
              </div>
            </div>
          </div>

          {/* 🎌 PAGE:E-Commerce  */}
          <div className="prj e-commerce-page">
            <a className="prj__title" href="/pages/e-commerce-page/">
              <i className="fas fa-file-alt"></i>
              <h3>E-Commerce Page</h3>
              <i className="fas fa-arrow-right"></i>
            </a>
            <ul className="prj__skills-used flex">
              <li>ReactJS</li>
              <li>CSS</li>
              <li>Desktop</li>
              <li>Mobile</li>
            </ul>
            <div className="prj__img-box">
              <img
                src="img/e-commerce-page.png"
                alt="screenshot product page for an e-commerce company"
              />
              <div className="img__overlay">
                <p>
                  E-Commerce product page built with ReactJS Functional
                  Components. Instructions, mock-up and assets are provided by
                  Frontendmentor.io.
                </p>
                <ul>
                  <li>Optimal layout for desktop, tablet and mobile devices</li>
                  <li>Hover states for interactive elements on the page</li>
                  <li>
                    Clicking on the large product image opens a lightbox gallery
                  </li>
                  <li>
                    Clicking on the small thumbnail images switches the large
                    product page
                  </li>
                  <li>Set product quantity can be added to the cart</li>
                  <li>The cart can be viewed and emptied</li>
                </ul>
                <nav>
                  <a href="/pages/e-commerce-page">
                    <i className="fa fa-link" aria-hidden="true"></i>
                  </a>
                  <a href="https://github.com/Zluf/e-commerce-app">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </nav>
              </div>
            </div>
          </div>

          {/* 🎌 PAGE: Advice Generator  */}
          <div className="prj advice-generator-page">
            <a className="prj__title" href="/pages/advice-generator-app/">
              <i className="fas fa-file-alt"></i>
              <h3>Advice Generator App</h3>
              <i className="fas fa-arrow-right"></i>
            </a>
            <ul className="prj__skills-used flex">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>API</li>
              <li>Desktop</li>
              <li>Mobile</li>
            </ul>
            <div className="prj__img-box">
              <img
                src="img/advice.png"
                alt="screenshot app that generates text from API"
              />
              <div className="img__overlay">
                <p>
                  An app that generates random advice text from an external API.
                  Instructions, mock-up and assets are provided by
                  Frontendmentor.io.
                </p>
                <ul>
                  <li>Optimal layout for desktop and mobile devices</li>
                  <li>Hover states for interactive elements on the page</li>
                  <li>Clicking the button generates a new piece of advice</li>
                </ul>
                <nav>
                  <a href="/pages/advice-generator-app">
                    <i className="fa fa-link" aria-hidden="true"></i>
                  </a>
                  <a href="https://github.com/Zluf/advise-generator-app">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </nav>
              </div>
            </div>
          </div>

          {/* 🎌 PAGE: Interior Design  */}
          <div className="prj interiors-page">
            <a className="prj__title" href="/pages/interior/">
              <i className="fas fa-file-alt"></i>
              <h3>Interior Design page</h3>
              <i className="fas fa-arrow-right"></i>
            </a>
            <ul className="prj__skills-used flex">
              <li>HTML</li>
              <li>SASS</li>
              <li>Desktop</li>
              <li>Mobile</li>
            </ul>
            <div className="prj__img-box">
              <img
                src="img/interior.png"
                alt="screenshot landing page for an interior design service"
              />
              <div className="img__overlay">
                <p>
                  Landing page for an interior design company. Built for
                  HTML/CSS practice. Mock-up and Assets were provided by Tom
                  Parson as part of his private tutoring. As page was designed
                  for a client names and details are changed for
                  confidentiality.
                </p>
                <ul></ul>
                <nav>
                  <a href="/pages/interior">
                    <i className="fa fa-link" aria-hidden="true"></i>
                  </a>
                  <a href="https://github.com/Zluf/Interiors-page">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </nav>
              </div>
            </div>
          </div>

          {/* 🎌 PAGE: Charity 2  */}
          <div className="prj charity-page-2">
            <a className="prj__title" href="/pages/charity2/">
              <i className="fas fa-file-alt"></i>
              <h3>Charity page 2</h3>
              <i className="fas fa-arrow-right"></i>
            </a>
            <ul className="prj__skills-used flex">
              <li>HTML</li>
              <li>SASS</li>
              <li>JavaScript</li>
              <li>Desktop</li>
            </ul>
            <div className="prj__img-box">
              <img
                src="img/charity2.png"
                alt="screenshot homepage for a charity"
              />
              <div className="img__overlay">
                <p>
                  Built for HTML/CSS practice. Mock-up and Assets were provided
                  by Tom Parson as part of his private tutoring. As page was
                  designed for a client names and details are changed for
                  confidentiality.
                </p>
                <nav>
                  <a href="/pages/charity2">
                    <i className="fa fa-link" aria-hidden="true"></i>
                  </a>
                  <a href="https://github.com/Zluf/Charity-page-2">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </nav>
              </div>
            </div>
          </div>

          {/* 🎌 PAGE: Analytics  */}
          <div className="prj analytics-page">
            <a className="prj__title" href="/pages/analytics/page1">
              <i className="fas fa-file-alt"></i>
              <h3>Analytics page</h3>
              <i className="fas fa-arrow-right"></i>
            </a>
            <ul className="prj__skills-used flex">
              <li>HTML</li>
              <li>CSS</li>
              <li>Desktop</li>
              <li>Mobile</li>
            </ul>
            <div className="slider">
              <div className="slider__reel slides-x3">
                <div className="prj__img-box slide analytics-1">
                  <img
                    src="img/analytics-1.png"
                    alt="screenshot login page for an analytics service"
                  />
                  <div className="img__overlay">
                    <p>
                      Built for HTML/CSS practice. Mock-up and Assets were
                      provided by Tom Parson as part of his private tutoring. As
                      page was designed for a client names and details are
                      changed for confidentiality.
                    </p>
                    <nav>
                      <a href="/pages/analytics/page1">
                        <i className="fa fa-link" aria-hidden="true"></i>
                      </a>
                      <a href="https://github.com/Zluf/Analytics-page">
                        <i className="fa fa-github" aria-hidden="true"></i>
                      </a>
                    </nav>
                  </div>
                </div>
                <div className="prj__img-box slide analytics-2">
                  <img
                    src="img/analytics-2.png"
                    alt="screenshot page for an analytics service"
                  />
                  <div className="img__overlay">
                    <p>
                      Built for HTML/CSS practice. Mock-up and Assets were
                      provided by Tom Parson as part of his private tutoring. As
                      page was designed for a client names and details are
                      changed for confidentiality.
                    </p>
                    <nav>
                      <a href="/pages/analytics/page2">
                        <i className="fa fa-link" aria-hidden="true"></i>
                      </a>
                      <a href="https://github.com/Zluf/Analytics-page">
                        <i className="fa fa-github" aria-hidden="true"></i>
                      </a>
                    </nav>
                  </div>
                </div>
                <div className="prj__img-box slide analytics-3">
                  <img
                    src="img/analytics-3.png"
                    alt="screenshot page for an analytics service"
                  />
                  <div className="img__overlay">
                    <p>
                      Built for HTML/CSS practice. Mock-up and Assets were
                      provided by Tom Parson as part of his private tutoring. As
                      page was designed for a client names and details are
                      changed for confidentiality.
                    </p>
                    <nav>
                      <a href="/pages/analytics/page3">
                        <i className="fa fa-link" aria-hidden="true"></i>
                      </a>
                      <a href="https://github.com/Zluf/Analytics-page">
                        <i className="fa fa-github" aria-hidden="true"></i>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-navigation flex">
              <div className="slider-navigation__btn-container flex">
                <button className="slide-btn slide-1">Page 1</button>
                <button className="slide-btn slide-2">Page 2</button>
                <button className="slide-btn slide-3">Page 3</button>
              </div>
            </div>
          </div>

          {/* 🎌 PAGE: Sports Data  */}
          <div className="prj sports-data-page">
            <a className="prj__title" href="/pages/sports-data/">
              <i className="fas fa-file-alt"></i>
              <h3>Sports Data page</h3>
              <i className="fas fa-arrow-right"></i>
            </a>
            <ul className="prj__skills-used flex">
              <li>HTML</li>
              <li>CSS</li>
              <li>Desktop</li>
            </ul>
            <div className="slider">
              <div className="slider__reel slides-x2">
                <div className="prj__img-box slide">
                  <img
                    src="img/sports-1.png"
                    alt="screenshot login page for an analytics service"
                  />
                  <div className="img__overlay">
                    <p>
                      Built for HTML/CSS practice. Mock-up and Assets were
                      provided by Tom Parson as part of his private tutoring. As
                      page was designed for a client names and details are
                      changed for confidentiality.
                    </p>
                    <nav>
                      <a href="/pages/sports-data">
                        <i className="fa fa-link" aria-hidden="true"></i>
                      </a>
                      <a href="https://github.com/Zluf/Sports-data-page">
                        <i className="fa fa-github" aria-hidden="true"></i>
                      </a>
                    </nav>
                  </div>
                </div>
                <div className="prj__img-box slide">
                  <img
                    src="img/sports-2.png"
                    alt="screenshot page for an analytics service"
                  />
                  <div className="img__overlay">
                    <p>
                      Built for HTML/CSS practice. Mock-up and Assets were
                      provided by Tom Parson as part of his private tutoring. As
                      page was designed for a client names and details are
                      changed for confidentiality.
                    </p>
                    <nav>
                      <a href="/pages/sports-data/page2">
                        <i className="fa fa-link" aria-hidden="true"></i>
                      </a>
                      <a href="https://github.com/Zluf/Sports-data-page">
                        <i className="fa fa-github" aria-hidden="true"></i>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-navigation flex">
              <div className="slider-navigation__btn-container flex">
                <button className="slide-btn slide-1">Page 1</button>
                <button className="slide-btn slide-2">Page 2</button>
              </div>
            </div>
          </div>

          {/* 🎌 PAGE: Debt Solutions  */}
          <div className="prj debt-solutions-page slides">
            <a className="prj__title" href="/pages/debt-solutions/">
              <i className="fas fa-file-alt"></i>
              <h3>Debt Solutions page</h3>
              <i className="fas fa-arrow-right"></i>
            </a>
            <ul className="prj__skills-used flex">
              <li>HTML</li>
              <li>CSS</li>
              <li>Desktop</li>
            </ul>
            <div className="slider">
              <div className="slider__reel slides-x2">
                <div className="prj__img-box slide analytics-1">
                  <img
                    src="img/debt-1.png"
                    alt="screenshot login page for a debt solutions service"
                  />
                  <div className="img__overlay">
                    <p>
                      Built for HTML/CSS practice. Mock-up and Assets were
                      provided by Tom Parson as part of his private tutoring. As
                      page was designed for a client names and details are
                      changed for confidentiality.
                    </p>
                    <nav>
                      <a href="/pages/debt-solutions">
                        <i className="fa fa-link" aria-hidden="true"></i>
                      </a>
                      <a href="https://github.com/Zluf/Debt-Solutions-page">
                        <i className="fa fa-github" aria-hidden="true"></i>
                      </a>
                    </nav>
                  </div>
                </div>
                <div className="prj__img-box slide analytics-2">
                  <img
                    src="img/debt-2.png"
                    alt="screenshot login page for a debt solutions service"
                  />
                  <div className="img__overlay">
                    <p>
                      Built for HTML/CSS practice. Mock-up and Assets were
                      provided by Tom Parson as part of his private tutoring. As
                      page was designed for a client names and details are
                      changed for confidentiality.
                    </p>
                    <nav>
                      <a href="/pages/debt-solutions/page2">
                        <i className="fa fa-link" aria-hidden="true"></i>
                      </a>
                      <a href="https://github.com/Zluf/Debt-Solutions-page">
                        <i className="fa fa-github" aria-hidden="true"></i>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-navigation flex">
              <div className="slider-navigation__btn-container flex">
                <button className="slide-btn slide-1">Page 1</button>
                <button className="slide-btn slide-2">Page 2</button>
              </div>
            </div>
          </div>

          {/* 🎌 PAGE: Charity 1  */}
          <div className="prj charity-page-1">
            <a className="prj__title" href="/pages/charity1/">
              <i className="fas fa-file-alt"></i>
              <h3>Charity page 1</h3>
              <i className="fas fa-arrow-right"></i>
            </a>
            <ul className="prj__skills-used flex">
              <li>HTML</li>
              <li>CSS</li>
              <li>Desktop</li>
            </ul>
            <div className="prj__img-box">
              <img
                src="img/charity1.png"
                alt="sample homepage for a charity organization"
              />
              <div className="img__overlay">
                <p>
                  Built for HTML/CSS practice. Mock-up and Assets were provided
                  by Tom Parson as part of his private tutoring. As page was
                  designed for a client names and details are changed for
                  confidentiality.
                </p>
                <nav>
                  <a href="/pages/charity1">
                    <i className="fa fa-link" aria-hidden="true"></i>
                  </a>
                  <a href="https://github.com/Zluf/Charity-page-1">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* 🚩 FOOTER  */}
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
    </>
  );
}
