import { useState } from "react";
import * as AiIcon from "react-icons/ai";
import { MdBubbleChart } from "react-icons/md";

import "./dropdown.css";

interface Props {
  toggleModal: () => void;
}

const Dropdown: React.FC<Props> = (props) => {
  const { toggleModal } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <AiIcon.AiOutlinePlus />
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <h5 className="menu-caption">EMBEDS</h5>
          <ul>
            <li className="menu-item" onClick={toggleModal}>
              <AiIcon.AiFillPicture />
              <div>
                <h5> Picture </h5>
                <small className="small">Jpeg, png</small>
              </div>
            </li>
            <li className="menu-item">
              <AiIcon.AiFillVideoCamera />
              <div>
                <h5> Video </h5>
                <small className="small">JW Player, Youtube, Vimeo</small>
              </div>
            </li>
            <li className="menu-item">
              <MdBubbleChart />
              <div>
                <h5> Social </h5>
                <small className="small">
                  Instagram, Twitter, TikTok, Snapchat, Facebook
                </small>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
