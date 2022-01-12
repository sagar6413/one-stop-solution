import React from "react";
import "./Channels.css";
import Subject from "./Subject";
import { ChannelData } from "./ChannelData";

function Channels() {
  return (
    <div className="channels">
      <div className="channels__items">
        {ChannelData.map((item, index) => {
          return (
            <Subject
              key={index}
              subject_name={item.subject_name}
              teacher_name={item.teacher_name}
              semester={item.semester}
            />
          );
        })}
      </div>
      <div className="channels__createChannel">Create a new channel</div>
    </div>
  );
}

export default Channels;
