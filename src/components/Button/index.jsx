/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from "react";
import "./Button.css";

function Button({ onClick }) {
  return (
    <button onClick={onClick} className="btn">
      + New Type
    </button>
  );
}

export default Button;
