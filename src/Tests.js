import React from "react";
import "./Tests.css";
import TestSubject from "./TestSubject";
import { TestsData } from "./TestsData";

function Tests() {
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
      <div className="test__createTest">Create a new test</div>
    </div>
  );
}

export default Tests;
