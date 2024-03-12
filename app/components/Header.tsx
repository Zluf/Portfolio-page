"use client";
import React, { useState } from "react";
import Image from "next/image";
import HeaderMenuButton from "./HeaderMenuButton";
import classes from "../../styles/Header.module.scss";
import HeaderNavMenu from "./HeaderNavMenu";
import Link from "next/link";

const Header: React.FC = () => {
  const [menuOnOff, setMenuOnOff] = useState(true);

  const toggleBrgrMenu = () => {
    setMenuOnOff(!menuOnOff);
  };

  return (
    <header className={classes.header}>
      <Link href="/">
        <Image
          className={classes.logo}
          src="/img/sk-logo.png"
          width={35}
          height={35}
          alt="logo"
        />
      </Link>

      <HeaderMenuButton menuOnOff={menuOnOff} toggleBrgrMenu={toggleBrgrMenu} />
      <HeaderNavMenu menuOnOff={menuOnOff} />
    </header>
  );
};

export default Header;
