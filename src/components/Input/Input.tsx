import React from "react";
import "./input.css";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = (props) => {
  return <input type="text" className="input" onChange={props.onChange} />;
};

export default Input;
