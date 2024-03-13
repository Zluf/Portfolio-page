import React from "react";
import Link from "next/link";

import classes from "../../styles/Header.module.scss";

const HeaderNavMenu: React.FC<{ menuOnOff: boolean }> = ({ menuOnOff }) => {
  return (
    <nav
      className={`${classes.navMenu} ${
        !menuOnOff ? classes["navMenu__open"] : ""
      }`}
    >
      <Link href="/about">About</Link>
      <Link href="">Experience</Link>
      <Link href="">Projects</Link>
    </nav>
  );
};

export default HeaderNavMenu;
