import "@/styles/about.scss";
import Image from "next/image";
import classes from "@/styles/About.module.scss";

export default function About() {
  return (
    <section className={classes.about}>
      <article>
        <h2>About Me</h2>
        <p>Greetings, dear visitor!</p>
        <p>
          My name is Slav Konovalov. I'm a Front-End Developer residing in
          Stockport, UK. This website showcases some of {""}
          <a href="/portfolio">my works {""}</a>built along an ongoing study of
          Front-End technologies.
        </p>
        <p>
          I'm currently open to jobs or projects that match the skill level of a
          Junior Developer. I'm prepared to commute within Greater Manchester /
          Stockport area or be engaged in remote projects.
        </p>
        <p>
          You can view my resume {""}
          <a href="https://drive.google.com/file/d/1QIGpIIXwkRXfM63f_FPbaHA0m0v9lQoY/view?usp=sharing">
            here
          </a>
          .
        </p>
      </article>
      <Image
        src="/img/sk-logo.png"
        width={200}
        height={200}
        alt="Slav Konovalov Frontend Web Developer logo"
      />
    </section>
  );
}
