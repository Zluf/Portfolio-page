import React from 'react';
import Image from 'next/image';
import classes from './Experience.module.scss';
import softwareCraftersManchester from '@/public/img/software-crafters-manchester.jpeg';
import globalLegalHackathon2022 from '@/public/img/global-legal-hackathon-2022.png';

export default function Experience() {
  return (
    <section className={classes.experience}>
      <h2>Experience</h2>
      <div className={classes.expEntry}>
        <div className={classes.imgBox}>
          <Image
            width={150}
            height={150}
            alt="spring act log"
            src="data:image/png;base64,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"
          />
        </div>
        <p>
          Since November 2023, I've been actively engaged with{' '}
          <a href="https://springact.org">Spring Act</a>, a non-profit
          organization at the intersection of human rights and technology.
          Within this role, I have contributed to the development of client-side
          code for <a href="https://sophia.chat/">Sophia</a> — a chatbot
          designed to assist survivors of domestic violence. Currently I play a
          pivotal role in the front-end development of{' '}
          <a href="https://comebackcatz.com/">Comeback Catz</a>, a gamified web
          app empowering to speak up against sexism with confidence and humour.
        </p>
      </div>

      <div className={classes.expEntry}>
        <div className={classes.imgBox}>
          <Image
            src={softwareCraftersManchester}
            alt="software crafters manchester logo"
            width={300}
          />
        </div>
        <p>
          Starting from early 2023, I've been a dedicated participant at{' '}
          <a href="https://www.meetup.com/software-crafters-manchester/">
            Software Crafters Manchester
          </a>
          , a prominent local meetup group for software developers. During these
          sessions, I immerse myself in collaborative problem-solving
          activities, such as coding katas centered around Test-Driven
          Development methodologies. Furthermore, I actively engage in
          discussions addressing various tech-related challenges and their
          potential solutions. The group is organized the Manchester branch of{' '}
          <a href="https://www.codurance.com">Codurance</a>, a renowned global
          software consultancy.
        </p>
      </div>

      <div className={classes.expEntry}>
        <div className={classes.imgBox}>
          <Image
            src={globalLegalHackathon2022}
            alt="software crafters manchester logo"
            width={300}
          />
        </div>

        <p>
          In March 2022, I seized the opportunity to participate in the{' '}
          <a href="https://globallegalhackathon.com/">
            Global Legal Hackathon 2022
          </a>
          . Working alongside a diverse team composed of professionals from
          various backgrounds, we endeavored to develop a new application within
          a stringent 48-hour timeframe. Our efforts culminated in winning the
          first stage of the competition in the Access to Justice category. A
          comprehensive review of the event can be accessed{' '}
          <a href="https://www.legaltech.wales/researcher-blogs/lilw-meets-glh-2022-fastlaw">
            here
          </a>
          .
        </p>
      </div>
    </section>
  );
}
