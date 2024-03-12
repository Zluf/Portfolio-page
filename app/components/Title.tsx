import React from "react";
import classes from "../../styles/Title.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Title: React.FC = () => {
  return (
    <div className={classes.title}>
      <h3>Hi, there! I'm</h3>
      <h1>Slav Konovalov</h1>
      <h2>Front End Developer</h2>
      <div className={classes.location}>
        <FontAwesomeIcon icon={faLocationDot} />
        <h3>Manchester, UK</h3>
      </div>
    </div>
  );
};

export default Title;
