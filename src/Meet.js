import React from "react";
import "./Meet.css";
import MeetContactsMenu from "./MeetContactsMenu";
import MeetHeader from "./MeetHeader";
import MeetMenuButtons from "./MeetMenuButtons";
import MeetSearchBar from "./MeetSearchBar";
import { isMobile } from "react-device-detect";
import DownloadMobileApp from "./DownloadMobileApp";

function Meet() {
  return (
    <>
      {isMobile ? (
        <DownloadMobileApp />
      ) : (
        <div className="meet">
          <MeetHeader />
          <MeetSearchBar />
          <MeetMenuButtons />
          <MeetContactsMenu />
        </div>
      )}
    </>
  );
}

export default Meet;
