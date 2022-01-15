import React from "react";
import "./MeetingRoomActive.css";
import { WebcamFooterButtonsData } from "./WebcamFooterButtonsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MeetingRoomActive() {
  const activeUsers = ["user1", "user2", "user3", "user4", "user5"];

  return (
    <div className="camera">
      <div className="webcam__container">
        {activeUsers.map((user, index) => {
          return (
            <div key={index} className="webcam__activeUserContainer">
              <h3>{user}</h3>
            </div>
          );
        })}
      </div>
      <div className="webcam__footer">
        {WebcamFooterButtonsData.map((item, index) => {
          return (
            <div key={index} className="webcam__footerButtons">
              <FontAwesomeIcon
                icon={item.icon}
                className="webcam__footerButtons__icon"
              />
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MeetingRoomActive;
