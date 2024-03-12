import React from "react";
import classes from "../../styles/Header.module.scss";

const HeaderNavMenu: React.FC<{ menuOnOff: boolean }> = ({ menuOnOff }) => {
  return (
    <nav
      className={`${classes.navMenu} ${
        !menuOnOff ? classes["navMenu__open"] : ""
      }`}
    >
      <a href="">About</a>
      <a href="">Experience</a>
      <a href="">Portfolio</a>
    </nav>
  );
};

export default HeaderNavMenu;
