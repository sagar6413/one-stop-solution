import React, { useState } from "react";
import "./MeetingRoom.css";

import MeetingRoomNotActive from "./MeetingRoomNotActive";
import MeetingRoomHeader from "./MeetingRoomHeader";
import MeetingRoomActive from "./MeetingRoomActive";

function MeetingRoom() {
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();
  const [startCamera, setStartCamera] = useState(false);
  const __startCamera = () => {
    setStartCamera(!startCamera);
  };
  const joinRoom = () => {
    __startCamera();
  };

  return (
    <>
      <MeetingRoomHeader />

      {startCamera ? (
        <MeetingRoomActive joinRoom={joinRoom} />
      ) : (
        <MeetingRoomNotActive
          name={name}
          setName={setName}
          roomId={roomId}
          setRoomId={setRoomId}
          joinRoom={joinRoom}
        />
      )}
    </>
  );
}

export default MeetingRoom;
