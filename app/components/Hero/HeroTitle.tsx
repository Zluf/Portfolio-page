import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const HeroTitle: React.FC = () => {
  return (
    <div className="hero__title">
      <h3>Hi, there! I'm</h3>
      <h1>Slav Konovalov</h1>
      <h2>Front End Developer</h2>

      <div className="hero__location">
        <span>
          <FontAwesomeIcon icon={faLocationDot} />
        </span>
        <h3>Manchester, UK</h3>
      </div>
    </div>
  );
};

export default HeroTitle;
