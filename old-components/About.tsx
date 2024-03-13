import "../../styles/about.scss";

export default function About() {
  return (
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
          Stockport, UK. 
        </p>
        <p>
          I'm currently open to jobs or projects that match the skill level of a
          Junior Developer. I'm prepared to commute within Greater Manchester /
          Stockport area or be engaged in remote projects.
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
  );
}
