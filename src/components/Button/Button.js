import React from "react";

import "./style.css";

const Button = ({ type, handleClick, fullWidth, children }) => {
  const styles = {
    width: fullWidth && "100%"
  };

  return (
    <button className="Button" type={type} onClick={handleClick} style={styles}>
      {children}
    </button>
  );
};

export default Button;
