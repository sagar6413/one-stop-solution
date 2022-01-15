import React from "react";
import "./Meet.css";
import MeetContactsMenu from "./MeetContactsMenu";
import MeetHeader from "./MeetHeader";
import MeetMenuButtons from "./MeetMenuButtons";
import MeetSearchBar from "./MeetSearchBar";

function Meet() {
  return (
    <div className="meet">
      <MeetHeader />
      <MeetSearchBar />
      <MeetMenuButtons />
      <MeetContactsMenu />
    </div>
  );
}

export default Meet;
