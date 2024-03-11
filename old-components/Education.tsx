import "../../styles/education.scss";

import React from "react";

export default function Education() {
  return (
    <section className="education" id="education">
      <h2>Education</h2>
      <div className="education__module">
        <h3>Private Online Tutoring</h3>
        <p>
          After grabbing the basics of <strong>HTML & CSS</strong> I reached out
          to Tom Parson of {""}
          <a href="https://workwithhuddle.com/" target="_blank">
            Huddle Digital
          </a>{" "}
          via a tutoring website {""}
          <a href="https://www.superprof.com/" target="_blank">
            Superprof
          </a>{" "}
          {""}. Tom introduced me to a series of Adobe XD mock-up designs from
          which I built web pages while continuing to self-study relevant
          techniques. During the lessons Tom would give me his feedback and we
          would discuss page mark-up and styling practices which I would
          implement later in the projects. As Tom is an experienced Developer,
          his lessons were of great value to my learning.
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
          Working in a team developing new app that had to be accomplished and
          published within 2 days. The team won the first stage of the
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
  );
}
