import React from "react";
import "./CreateNewChannel.css";

function CreateNewChannel({ modalIsOpen, setModalIsOpen }) {
  return (
    <div className="CreateNewChannel">
      <div className="CreateNewChannel__title">
        <p> Create a new channel</p>
      </div>
      <div className="CreateNewChannel__form">
        <input type="text" placeholder="Subject Name" />
        <input type="text" placeholder="Subject Teacher" />
        <input type="text" placeholder="Semester" />
      </div>
      <div className="CreateNewChannel__button">
        <button>Create</button>
        <button onClick={() => setModalIsOpen(!modalIsOpen)}>Close</button>
      </div>
    </div>
  );
}

export default CreateNewChannel;
