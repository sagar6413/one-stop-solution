import React, { useState } from "react";
import "./MeetingRoomActive.css";
import { WebcamFooterButtonsData } from "./WebcamFooterButtonsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatBox from "./ChatBox";

function MeetingRoomActive({ joinRoom }) {
  const activeUsers = ["user1", "user2", "user3", "user4", "user5"];
  const [chatOpen, setChatOpen] = useState(false);

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
      <div className={chatOpen ? "chat" : "chat not__Active"}>
        <ChatBox chatOpen={chatOpen} setChatOpen={setChatOpen} />
      </div>
      <div className="webcam__footer">
        {WebcamFooterButtonsData.map((item, index) => {
          return (
            <div
              onClick={() => {
                if (item.id === 3) {
                  joinRoom();
                } else if (item.id === 5) {
                  setChatOpen(!chatOpen);
                }
              }}
              key={index}
              className="webcam__footerButtons"
            >
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
