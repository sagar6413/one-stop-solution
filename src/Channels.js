import React, { useState } from "react";
import "./Channels.css";
import Subject from "./Subject";
import { ChannelData } from "./ChannelData";
import Modal from "react-modal";
import CreateNewChannel from "./CreateNewChannel";

function Channels() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
      <Modal
        className="channels__createChannelModal"
        isOpen={modalIsOpen}
        onRequestClose={() => {
          console.log("Modal closed");
          setModalIsOpen(!modalIsOpen);
        }}
      >
        <CreateNewChannel
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
      </Modal>
      <div
        className="channels__createChannel"
        onClick={() => setModalIsOpen(!modalIsOpen)}
      >
        Create a new channel
      </div>
    </div>
  );
}

export default Channels;
