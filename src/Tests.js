import React from "react";
import "./Tests.css";
import TestSubject from "./TestSubject";

function Tests() {
  return (
    <div className="test">
      <div className="test__items">
        <TestSubject
          subject_name="DBMS"
          teacher_name="DSD Sir"
          semester="7th"
          date="01/01/2022"
          image="https://source.unsplash.com/random/1600x1200"
        />
        <TestSubject
          subject_name="DBMS"
          teacher_name="DSD Sir"
          semester="7th"
          date="01/01/2022"
          image="https://source.unsplash.com/random/1600x1100"
        />
      </div>
      <div className="test__createTest">Create a new test</div>
    </div>
  );
}

export default Tests;
