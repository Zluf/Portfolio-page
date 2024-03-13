import "@/styles/about.scss";
import Image from "next/image";
import classes from "@/styles/About.module.scss";

export default function About() {
  return (
    <section className={classes.about}>
      <article>
        <h2>About Me</h2>
        <div className={classes.textWrapper}>
          <p>Greetings, dear visitor!</p>
          <p>
            My name is Slav Konovalov. I'm a Front-End Developer residing in
            Manchester, UK. My areas of focus are apps and web pages built with{" "}
            <strong>React.js</strong> with strong emphasis UI and UX design.
          </p>

          <p>
            I started my journey as an attempt at career change in 2021. After
            grasping the basics of HTML/CSS I started building web pages as
            practice projects. That was under the guidance of a senior developer{" "}
            (Tom Parson of Huddle Digital) who took me through the principles
            and standards of Front End Development.
          </p>
          <p>
            In the coming years I would build my own web projects, take part in
            Hackathons, engage with other Developers at local meetups, take part
            in a number of courses to further my knowledge. Up to this day I
            continue to practice everything that was mentioned above, while
            never losing passion and fasciantion for the craft.
          </p>

          <p>
            You can view my resume {""}
            <a href="https://drive.google.com/file/d/1QIGpIIXwkRXfM63f_FPbaHA0m0v9lQoY/view?usp=sharing">
              here
            </a>
            .
          </p>
        </div>

        {/* <h2>Skills</h2>
        <div className={classes.skillWrapper}>
          <div>
            <Image
              src="/img/png-icons/React.png"
              width={50}
              height={50}
              alt="react"
            />
          </div>

          <Image
            src="/img/png-icons/Sass.png"
            width={50}
            height={50}
            alt="react"
          />
        </div> */}
      </article>
      <Image
        className={classes.logoImg}
        src="/img/sk-logo.png"
        width={200}
        height={200}
        alt="Slav Konovalov Frontend Web Developer logo"
      />
    </section>
  );
}
