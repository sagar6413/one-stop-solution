import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import "./MeetHeader.css";

function MeetHeader() {
  return (
    <div className="meetheader">
      <NotificationsIcon className="meetheader__Icon header__notification" />
      <h1>Meet & Chat</h1>
      <MessageOutlinedIcon className="meetheader__Icon header__message" />
    </div>
  );
}

export default MeetHeader;
