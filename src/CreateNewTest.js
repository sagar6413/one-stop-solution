import React, { useState } from "react";
import "./CreateNewTest.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

function CreateNewTest({ modalIsOpen, setModalIsOpen }) {
  const [startDate, setStartDate] = useState();
  return (
    <div className="CreateNewTest">
      <div className="CreateNewTest__title">
        <p> Create a new channel</p>
      </div>
      <div className="CreateNewTest__form">
        <input type="text" placeholder="Subject Name" />
        <input type="text" placeholder="Subject Teacher" />
        <input type="text" placeholder="Semester" />

        <DatePicker
          placeholderText="Date"
          selected={startDate}
          className="CreateNewTest__date"
          // selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div className="CreateNewTest__button">
        <button>Create</button>
        <button onClick={() => setModalIsOpen(!modalIsOpen)}>Close</button>
      </div>
    </div>
  );
}

export default CreateNewTest;
