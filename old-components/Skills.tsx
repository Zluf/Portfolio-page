import "../../styles/skills.scss";

export default function Skills() {
  return (
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
          Understanding Box Model, Unit Lengths, BEM convention, Selectors and
          Positioning. Alignment & Layout of elements with Flexbox & Grid. Use
          of Transitions, Animations, Selectors & Media Quieries for Responsive
          Design.
        </p>
      </div>

      <div className="skills__img-container">
        <h3>Sass</h3>
        <img
          src="img/png-icons/Sass.png"
          alt="sass css pre-procecessor icon png image"
        />
        <p>
          Using features like nesting, mixins & variables to organize styling.
        </p>
      </div>

      <div className="skills__img-container">
        <h3>JavaScript</h3>
        <img src="img/png-icons/JS.png" alt="javascript icon png image" />
        <p>
          Understanding of Basic Syntax, Procedural & Object-Oriented
          Programming. Manipulating DOM-Tree. Use of Asynchronous functions and
          Fetch API. Import and use of 3rd party Packages with NPM.
        </p>
      </div>

      <div className="skills__img-container">
        <h3>ReactJS</h3>
        <img src="img/png-icons/React.png" alt="reactJS icon png image" />
        <p>
          Building Single-Page Applications with Functional Components. Use of
          React Hooks.
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
          Basic skills for image editing. Sometimes I would make adjustments for
          digital assets or create my own ones.
        </p>
      </div>
    </section>
  );
}
