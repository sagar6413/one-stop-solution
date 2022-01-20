import React, { useState } from "react";
import "./Channels.css";
import Subject from "./Subject";
import { ChannelData } from "./ChannelData";
import Modal from "react-modal";
import CreateNewChannel from "./CreateNewChannel";

function Channels() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [tempChannelData, setChannelData] = useState({
    subject_name: "",
    teacher_name: "",
    semester: "",
  });
  const handleNewChannelSubmit = () => {
    ChannelData.push(tempChannelData);
    // console.log();
    setModalIsOpen(!modalIsOpen);
  };
  const onChange = (event) => {
    // preventDefault(event);
    setChannelData({
      ...tempChannelData,
      [event.target.name]: event.target.value,
    });
  };

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
        ariaHideApp={false}
        contentLabel="Selected Option"
        onRequestClose={() => {
          console.log("Modal closed");
          setModalIsOpen(!modalIsOpen);
        }}
      >
        <CreateNewChannel
          handleNewChannelSubmit={handleNewChannelSubmit}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          onChange={onChange}
          tempChannelData={tempChannelData}
          setChannelData={setChannelData}
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
