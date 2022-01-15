import React from "react";
import "./MeetingRoomHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function MeetingRoomHeader() {
  return (
    <div className="meetingRoom__nav">
      <Link className="path" to="/meet">
        <div className="meetingRoom_navHome">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="meetingRoom_navHome_icon"
          />
          <span>
            <h3>Home</h3>
          </span>
        </div>
      </Link>
      <div className="meetingRoom_title">
        <h1>Meeting Room</h1>
      </div>
    </div>
  );
}

export default MeetingRoomHeader;
