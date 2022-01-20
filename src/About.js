import React from "react";
import "./About.css";
import userImage from "./img/About/user.png";

function About() {
  return (
    <div className="about">
      <div className="about__userInfo">
        <div className="about__userImage">
          <img src={userImage} alt="" />
          <div className="about__userName">
            <p>User Name : Sagar Shrivastava</p>
            <p>Age :</p>
            <p>Gender :</p>
            <p>Date of Birth :</p>
          </div>
        </div>
      </div>
      <h1>User Performance</h1>
      <div className="about__userPerformance">
        <div className="about__userPerformanceGraph">Graph 1</div>
        <div className="about__userPerformanceGraph">Graph 2</div>
        <div className="about__userPerformanceGraph">Graph 3</div>
      </div>
    </div>
  );
}

export default About;
