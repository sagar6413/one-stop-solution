import React from "react";
import "./CreateNewTest.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

function CreateNewTest({
  modalIsOpen,
  setModalIsOpen,
  onChange,
  handleNewTestSubmit,
  DatePicker,
  setStartDate,
  tempTestData,
  setTestData,
  startDate,
}) {
  const handleDateChange = (date) => {
    setStartDate(date);
    // onChange();
    // console.log(date);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    console.log(day);
    console.log(month);
    console.log(year);
    const finalDate = `${day}/${month}/${year}`;
    console.log(finalDate);
    console.log(typeof finalDate);
    setTestData({ ...tempTestData, date: finalDate });
  };
  return (
    <div className="CreateNewTest">
      <div className="CreateNewTest__title">
        <p> Create a new channel</p>
      </div>
      <div className="CreateNewTest__form">
        <input
          type="text"
          name="subject_name"
          onChange={onChange}
          placeholder="Subject Name"
          required={true}
        />
        <input
          type="text"
          name="teacher_name"
          onChange={onChange}
          placeholder="Subject Teacher"
        />
        <input
          type="text"
          name="semester"
          onChange={onChange}
          placeholder="Semester"
        />

        <DatePicker
          name="date"
          placeholderText="Date"
          selected={startDate}
          dateFormat="dd/MM/yyyy"
          className="CreateNewTest__date"
          minDate={new Date()}
          filterDate={(date) => date.getDay() !== 0 && date.getDay() !== 6}
          onChange={(date) => handleDateChange(date)}
          shouldCloseOnSelect={true}
          // showYearDropdown={true}
          showMonthDropdown={true}
          scrollableMonthDropdown={true}
        />
      </div>
      <div className="CreateNewTest__button">
        <button onClick={handleNewTestSubmit}>Create</button>
        <button onClick={() => setModalIsOpen(!modalIsOpen)}>Close</button>
      </div>
    </div>
  );
}

export default CreateNewTest;
