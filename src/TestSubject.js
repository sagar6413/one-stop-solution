import React from "react";
import "./TestSubject.css";

function TestSubject({ subject_name, teacher_name, semester, date, image }) {
  return (
    <div className="testSubject">
      <div className="testSubjectInfo">
        <h1>{subject_name}</h1>
        <div className="testsubject__rowInfo">
          <p>
            <strong> Subject Teacher : </strong> {teacher_name}
          </p>
          <p>
            <strong> SEMESTER :</strong> {semester}
          </p>
          <p>
            <strong> Exam Date :</strong> {date}
          </p>
        </div>
      </div>
      <div className="testSubjectImage">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default TestSubject;
