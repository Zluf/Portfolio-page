import React from "react";

const HeroHeader: React.FC<{ brgrClass: string }> = ({ brgrClass }) => {
  return (
    <header className="hero__header header">
      <nav className={`header__nav-menu ${brgrClass}`}>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
      </nav>
    </header>
  );
};

export default HeroHeader;
