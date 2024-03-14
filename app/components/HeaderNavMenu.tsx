import React from "react";
import Link from "next/link";

import classes from "../../styles/Header.module.scss";

type HeaderNavMenusProps = {
  menuOnOff?: boolean;
  toggleBrgrMenu?: () => void;
};

const HeaderNavMenu: React.FC<HeaderNavMenusProps> = ({
  menuOnOff,
  toggleBrgrMenu,
}) => {
  return (
    <nav
      className={`${classes.navMenu} ${
        !menuOnOff ? classes["navMenu__open"] : ""
      }`}
    >
      <Link onClick={toggleBrgrMenu} href="/about">
        About
      </Link>
      <Link onClick={toggleBrgrMenu} href="/experience">
        Experience
      </Link>
      <Link onClick={toggleBrgrMenu} href="/projects">
        Projects
      </Link>
    </nav>
  );
};

export default HeaderNavMenu;
