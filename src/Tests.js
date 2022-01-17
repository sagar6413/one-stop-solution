import React, { useState } from "react";
import "./Tests.css";
import TestSubject from "./TestSubject";
import { TestsData } from "./TestsData";
import Modal from "react-modal";
import CreateNewTest from "./CreateNewTest";

function Tests() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
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
        onRequestClose={() => {
          console.log("Modal closed");
          setModalIsOpen(!modalIsOpen);
        }}
      >
        <CreateNewTest
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
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
