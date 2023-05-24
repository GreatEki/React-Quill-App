import React from "react";
import { FaTimes } from "react-icons/fa";
import Button from "../Button/Button";

import "./modal.css";

interface Props {
  title: string;
  children: React.ReactNode;
  visible: boolean;
  toggleModal: () => void;
  handleSubmit: () => void;
}

const Modal: React.FC<Props> = (props) => {
  return (
    <div className={`backdrop ${props.visible && "backdrop--visible"}`}>
      <div className="modal">
        <div className="modal-header">
          <label className="modal-title"> {props.title}</label>

          <div className="close" onClick={props.toggleModal}>
            <FaTimes />
          </div>
        </div>

        <div className="modal-body">{props.children}</div>
        <div className="modal-footer">
          <Button
            label="Embed"
            className="btn-primary"
            handleClick={props.handleSubmit}
          />
          <Button
            label="Cancel"
            className="btn-light"
            handleClick={props.toggleModal}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
