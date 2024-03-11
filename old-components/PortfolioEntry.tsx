"use client";

import Slider from "./Slider";
import { SliderProps } from "./Slider";
import { useState } from "react";

interface PFEntryProps extends SliderProps {
  title: string;
  skills: string[];
}

const PortfolioEntry: React.FC<PFEntryProps> = ({
  title,
  links,
  skills,
  img,
  description,
  bulletpoints,
}) => {
  const [slide, setSlide] = useState(0);

  const slideChange = (slideNum: number) => {
    setSlide((slideNum * 100) / img.src.length);
  };

  return (
    <div className="prj">
      <a className="prj__title" href={links.href[0]}>
        <i className="fas fa-file-alt"></i>
        <h3>{title}</h3>
        <i className="fas fa-arrow-right"></i>
      </a>

      <ul className="prj__skills-used flex">
        {skills.map((sk) => (
          <li key={sk}>{sk}</li>
        ))}
      </ul>

      <Slider
        links={links}
        description={description}
        bulletpoints={bulletpoints}
        img={img}
        slide={slide}
      />

      {/* Slider BTNs */}
      {img.src.length > 1 && (
        <div className="slider-navigation flex">
          <div className="slider-navigation__btn-container flex">
            {img.src.map((_, i) => (
              <button
                key={i}
                className={`slide-btn slide-${i + 1}`}
                onClick={() => slideChange(i)}
              >
                Page {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioEntry;
