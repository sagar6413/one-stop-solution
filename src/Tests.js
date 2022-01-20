import React, { useState } from "react";
import "./Tests.css";
import TestSubject from "./TestSubject";
import { TestsData } from "./TestsData";
import Modal from "react-modal";
import CreateNewTest from "./CreateNewTest";
import dbmsimage from "./img/Tests/dbms.jpg";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Tests() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [startDate, setStartDate] = useState();
  const [tempTestData, setTestData] = useState({
    subject_name: "",
    teacher_name: "",
    semester: "",
    date: "",
    image: dbmsimage,
  });
  const handleNewTestSubmit = () => {
    TestsData.push(tempTestData);
    // console.log();
    setModalIsOpen(!modalIsOpen);
  };
  const onChange = (event) => {
    // preventDefault(event);
    setTestData({ ...tempTestData, [event.target.name]: event.target.value });
  };
  return (
    <div className="test">
      <div className="test__items">
        {TestsData.map((item, index) => {
          return (
            <TestSubject
              key={index}
              subject_name={item.subject_name}
              teacher_name={item.teacher_name}
              semester={item.semester}
              date={item.date}
              image={item.image}
            />
          );
        })}
      </div>
      <Modal
        className="tests__createTestModal"
        isOpen={modalIsOpen}
        ariaHideApp={false}
        contentLabel="Selected Option"
        onRequestClose={() => {
          console.log("Modal closed");
          setModalIsOpen(!modalIsOpen);
        }}
      >
        <CreateNewTest
          handleNewTestSubmit={handleNewTestSubmit}
          DatePicker={DatePicker}
          startDate={startDate}
          setStartDate={setStartDate}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          onChange={onChange}
          tempTestData={tempTestData}
          setTestData={setTestData}
        />
      </Modal>
      <div
        className="test__createTest"
        onClick={() => setModalIsOpen(!modalIsOpen)}
      >
        Create a new test
      </div>
    </div>
  );
}

export default Tests;
