import React, { useState } from "react";

import "./style/Button.scss";

const Button = ({ text, handleClick }) => {
  const [clicked, setClicked] = useState("btn");

  const animateClick = () => {
    setClicked("btn btn--clicked");
    setTimeout(() => {
      setClicked("btn");
      handleClick();
    }, 100);
  };

  return (
    <button
      onClick={() => {
        animateClick();
      }}
      className={clicked}
    >
      {text}
    </button>
  );
};

export default Button;
