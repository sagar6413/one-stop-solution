import React from "react";
import "./Subject.css";

function Subject({ subject_name, teacher_name, semester }) {
  return (
    <div className="subject">
      <h1>{subject_name}</h1>
      <div className="subject__rowInfo">
        <p>
          <strong> Subject Teacher : </strong> {teacher_name}
        </p>
        <p>
          <strong> SEMESTER :</strong> {semester}
        </p>
      </div>
    </div>
  );
}

export default Subject;
