import React from "react";
import { MenuItems } from "./MeetContactsMenuData";
import "./MeetContactsMenu.css";

function MeetContactsMenu() {
  return (
    <div className="contacts">
      {MenuItems.map((item, index) => {
        return (
          <div className="contacts__container">
            <div className="contacts__image">
              <img className="image" src={item.image} alt="" />
            </div>
            <div className="contacts__name">
              <h1>{item.name}</h1>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
}

export default MeetContactsMenu;
