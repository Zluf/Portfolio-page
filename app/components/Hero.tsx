// import "../../styles/globals.css";
"use client";

import "../../styles/hero.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
import HeroHeader from "./Hero/HeroHeader";
import HeroTitle from "./Hero/HeroTitle";
import HeroIcons from "./Hero/HeroIcons";
import HeroMenuButton from "./Hero/HeroMenuButton";
import Image from "next/image";

export default function Hero() {
  const [brgrClass, setBrgrClass] = useState("mobile-hidden");

  const toggleBrgrMenu = () => {
    setBrgrClass((prevBrgrClass) => {
      return prevBrgrClass === "mobile-visible"
        ? "mobile-hidden"
        : "mobile-visible";
    });
  };

  return (
    <section className="hero" id="hero">
      <Image
        src="/img/sk-logo.png"
        className="logo"
        width={35}
        height={35}
        alt="logo"
      />
      <HeroHeader brgrClass={brgrClass} />
      <div className="hero__overlay"></div>
      <HeroMenuButton brgrClass={brgrClass} toggleBrgrMenu={toggleBrgrMenu} />
      <div className="hero__container">
        <HeroTitle />
        <HeroIcons />
      </div>
    </section>
  );
}
