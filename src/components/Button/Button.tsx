import React from "react";
import "./button.css";

interface Props {
  label: string;
  className: string;
  handleClick: () => void;
}

const Button: React.FC<Props> = (props) => {
  return (
    <button className={props.className} onClick={props.handleClick}>
      {" "}
      {props.label}
    </button>
  );
};

export default Button;
