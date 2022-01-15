import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { menu_buttons } from "./MeetMenuButtonsData.js";
import { Link } from "react-router-dom";
import "./MeetMenuButtons.css";

function MeetMenuButtons() {
  return (
    <div className="menubuttons">
      {menu_buttons.map((item, index) => {
        return (
          <Link className="path" to={item.path}>
            <div key={index} className={item.cNameDiv}>
              <FontAwesomeIcon icon={item.icon} className={item.cNameButton} />
              <span>{item.text}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default MeetMenuButtons;
