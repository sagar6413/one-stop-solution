import React from "react";
import "./CreateNewChannel.css";

function CreateNewChannel({
  modalIsOpen,
  setModalIsOpen,
  onChange,
  handleNewChannelSubmit,
}) {
  return (
    <div className="CreateNewChannel">
      <div className="CreateNewChannel__title">
        <p> Create a new channel</p>
      </div>
      <div className="CreateNewChannel__form">
        <input
          type="text"
          onChange={onChange}
          name="subject_name"
          placeholder="Subject Name"
        />
        <input
          type="text"
          onChange={onChange}
          name="teacher_name"
          placeholder="Subject Teacher"
        />
        <input
          type="text"
          onChange={onChange}
          name="semester"
          placeholder="Semester"
        />
      </div>
      <div className="CreateNewChannel__button">
        <button onClick={handleNewChannelSubmit}>Create</button>
        <button onClick={() => setModalIsOpen(!modalIsOpen)}>Close</button>
      </div>
    </div>
  );
}

export default CreateNewChannel;
