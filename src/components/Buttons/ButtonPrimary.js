import React from "react";
import { Link } from "react-router-dom";

const ButtonPrimary = (props) => {
  const { textButton, pathLink, icon, onClick } = props;
  const isClickeable = () => {
    if (onClick) {
      return onClick();
    }
  };
  return (
    <Link
      to={pathLink}
      className="linkContainer"
      onClick={() => isClickeable()}
    >
      <button className="buttonPrimary">
        <i className={icon} />
        {textButton}
      </button>
    </Link>
  );
};
export default ButtonPrimary;
