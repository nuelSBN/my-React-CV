import React from "react";
import "./educationalBackground.css";

function EducationalBackground() {
  return (
    <div className="educationSection">
      <h4>Education</h4>
      <div className="educationSummary">
        <div className="educationRow">
          <div className="yearContainer">
            <p>2020</p>
          </div>
          <div className="courseContainer">
            <p>Web Designing and Development</p>
          </div>
          <div className="schoolContainer">
            <p>Bafuto Institute Of Management And Information Technology</p>
          </div>
        </div>
        <div className="educationRow">
          <div className="yearContainer">
            <p>2017</p>
          </div>
          <div className="courseContainer">
            <p>National Examination Council Certificate Examination</p>
          </div>
          <div className="schoolContainer">
            <p>Owland Senior Secondary School, Agodo Egbe Lagos</p>
          </div>
        </div>
        <div className="educationRow">
          <div className="yearContainer">
            <p>2011</p>
          </div>
          <div className="courseContainer">
            <p>First School Leaving Certificate</p>
          </div>
          <div className="schoolContainer">
            <p>New Era Nursery and Primary School</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationalBackground;
