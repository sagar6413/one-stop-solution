import React from "react";
import "./MeetingRoomNotActive.css";

function MeetingRoomNotActive({ name, setName, roomId, setRoomId, joinRoom }) {
  return (
    <div className="meetingRoom__Container">
      <div className="meetingroom__createMeet">
        <input
          className="meetingroom__createMeet_input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Name"
        />
        <input
          className="meetingroom__createMeet_input"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          type="text"
          placeholder="Enter Room ID"
        />
        <button onClick={() => joinRoom()}>Start Meeting</button>
      </div>
    </div>
  );
}

export default MeetingRoomNotActive;
