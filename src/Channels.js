import React from "react";
import "./Channels.css";
import Subject from "./Subject";

function Channels() {
  return (
    <div className="channels">
      <div className="channels__items">
        <Subject subject_name="DBMS" teacher_name="DSD Sir" semester="7th" />
      </div>
      <div className="channels__createChannel">Create a new channel</div>
    </div>
  );
}

export default Channels;
