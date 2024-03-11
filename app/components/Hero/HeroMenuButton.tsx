import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

type HeroTitleProps = {
  brgrClass: string;
  toggleBrgrMenu: () => void;
};

const HeroTitle: React.FC<HeroTitleProps> = ({ brgrClass, toggleBrgrMenu }) => {
  return (
    <button
      className={`hero__brgr-menu ${
        brgrClass === "mobile-hidden" ? "" : "menu-open"
      }`}
      onClick={toggleBrgrMenu}
    >
      <div className="brgr-midline"></div>
    </button>
  );
};

export default HeroTitle;
