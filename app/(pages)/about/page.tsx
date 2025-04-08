import Image from 'next/image'
import classes from './About.module.scss'

export default function About() {
  return (
    <section className={classes.about}>
      <article>
        <h2>About Me</h2>
        <p>Greetings, dear visitor!</p>
        <p>
          My name is Slav Konovalov. I'm a Front-End Developer residing in
          Manchester, UK. My expertise lies in crafting applications and web
          pages using <strong>React.js</strong> (including extensions{' '}
          <strong>Next.js</strong> and <strong>React Native</strong>) with a
          strong focus on both UI design and functionality.
        </p>

        <p>
          My journey into the realm of Front-End Development began in 2021,
          spurred by a desire for a career change. Starting with the
          fundamentals of HTML/CSS, I began crating web pages as practical
          exercises. Guided by the expertise of a seasoned developer,{' '}
          <a href="https://tomparson.com/">Tom Parson</a> from Huddle Digital, I
          delved into the principles and standards of Front-End Development.
        </p>
        <p>
          In the coming years I would build my own web projects, take part in
          Hackathons, network with other Developers at local meetups, undertake
          a number of Udemy courses to enhance my skill set. To this day, I
          remain dedicated to honing my craft, fueled by an unwavering passion
          and fascination.
        </p>
        <p>
          In the coming years I would build my own web projects, take part in
          Hackathons, network with other Developers at local meetups, undertake
          a number of Udemy courses to enhance my skill set. To this day, I
          remain dedicated to honing my craft, fueled by an unwavering passion
          and fascination.
        </p>
        <p>
          In the coming years I would build my own web projects, take part in
          Hackathons, network with other Developers at local meetups, undertake
          a number of Udemy courses to enhance my skill set. To this day, I
          remain dedicated to honing my craft, fueled by an unwavering passion
          and fascination.
        </p>
        <p>
          In the coming years I would build my own web projects, take part in
          Hackathons, network with other Developers at local meetups, undertake
          a number of Udemy courses to enhance my skill set. To this day, I
          remain dedicated to honing my craft, fueled by an unwavering passion
          and fascination.
        </p>

        <p>
          Presently, I am proud to be a member of the esteemed developer team at{' '}
          <a href="https://springact.org">Spring Act</a>, an NGO dedicated to
          supporting victims of domestic violence.
        </p>

        <p>
          For further details, please feel free to explore my resume {''}
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1txfBTioVl87Z592CRhtT6syIjzJwTlQ0/view?usp=sharing"
          >
            here
          </a>
          .
        </p>
      </article>
      <Image
        className={classes.logoImg}
        src="/img/sk-logo.png"
        width={200}
        height={200}
        alt="Slav Konovalov Frontend Web Developer logo"
      />
    </section>
  )
}
