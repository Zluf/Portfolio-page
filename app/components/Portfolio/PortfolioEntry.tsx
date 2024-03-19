"use client";

import { useState } from "react";
import classes from "./PortfolioEntry.module.scss";
import Link from "next/link";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PFEntryProps {
  title: string;
  skills: string[];
  links: { href: string[]; github: string };
  description?: string;
  bulletpoints?: string[];
  img: { src: string[]; alt: string };
}

const PortfolioEntry: React.FC<PFEntryProps> = ({
  title,
  links,
  skills,
  description,
  bulletpoints,
  img,
}) => {
  const [slide, setSlide] = useState(0);
  const [reelTransform, setReelTransform] = useState(0);

  const reelTransformHandler = (slideNum: number) => {
    setSlide(slideNum);
    setReelTransform((slideNum * 100) / img.src.length);
  };

  return (
    <div className={description ? classes.prj : classes.smallerPrj}>
      <nav className={classes.navLinks}>
        <Link className={classes.title} href={links.href[slide]}>
          <h3>{title}</h3>
        </Link>
        <Link className={classes.pageLink} href={links.href[slide]}>
          <FontAwesomeIcon icon={faLink} />
        </Link>
        <a className={classes.githubLink} href={links.github}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </nav>

      {/* Skills Used */}
      <ul className={classes.skillsUsed}>
        {skills.map((sk) => (
          <li key={sk}>{sk}</li>
        ))}
      </ul>

      {/* Image Box / Image Slider */}
      <div className={classes.slider}>
        <div
          className={classes.reel}
          style={{
            width: `${100 * img.src.length}%`,
            transform: `translateX(-${reelTransform}%)`,
          }}
        >
          {img.src.map((imgPath, i) => (
            <div key={imgPath} className={`${classes.imgBox} ${classes.slide}`}>
              <img src={imgPath} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>

      {/* Project Description*/}
      {description && (
        <div className={classes.imgOverlay}>
          <p>{description}</p>
          <ul>
            {bulletpoints?.map((bp) => (
              <li key={bp}>{bp}</li>
            ))}
          </ul>
          <nav className={`${classes.navLinks} ${classes.innerNavLinks}`}>
            <Link className={classes.pageLink} href={links.href[slide]}>
              <FontAwesomeIcon icon={faLink} />
            </Link>
            <a className={classes.githubLink} href={links.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </nav>
        </div>
      )}

      {/* Slider BTNs */}
      {img.src.length > 1 && (
        <div className={classes.sliderNavigation}>
          {img.src.map((_, i) => (
            <button
              key={i}
              className={`${classes.slideBtn} ${classes[`slide-${i + 1}`]} `}
              onClick={() => reelTransformHandler(i)}
            >
              Page {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PortfolioEntry;
