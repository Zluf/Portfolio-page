import React from "react";
import classes from "../../styles/Header.module.scss";

type HeaderManuButtonProps = {
  menuOnOff?: boolean;
  toggleBrgrMenu?: () => void;
};

const HeaderManuButton: React.FC<HeaderManuButtonProps> = ({
  menuOnOff,
  toggleBrgrMenu,
}) => {
  return (
    <button
      className={`${classes["menuBtn"]} ${
        !menuOnOff ? classes["menuBtn__open"] : ""
      } `}
      onClick={toggleBrgrMenu}
    >
      <div className={classes["menuBtn__line"]}></div>
    </button>
  );
};

export default HeaderManuButton;
