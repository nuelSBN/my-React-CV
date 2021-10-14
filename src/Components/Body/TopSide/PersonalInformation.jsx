import React from "react";
import ContactAddress from "./ContactAddress";
import "./personalInformation.css";

function PersonalInformation({ data }) {
  return (
    <div className="personalInformation">
      <h4>Personal Information</h4>
      <div className="pesonalInfoContainer">
        <div className="labelContainer">
          <span>Date of Birth:</span>
        </div>
        <div className="answer">
          <span>{data.dob}</span>
        </div>
      </div>
      <div className="pesonalInfoContainer">
        <div className="labelContainer">
          <span>Sex:</span>
        </div>
        <div className="answer">
          <span>{data.sex}</span>
        </div>
      </div>
      <div className="pesonalInfoContainer">
        <div className="labelContainer ">
          <span>Nationality:</span>
        </div>
        <div className="answer">
          <span>{data.nationality}</span>
        </div>
      </div>
      <div className="pesonalInfoContainer ">
        <div className="labelContainer ">
          <span>State of Origin:</span>
        </div>
        <div className="answer">
          <span>{data.stateOfOrigin}</span>
        </div>
      </div>
      <div className="pesonalInfoContainer ">
        <div className="labelContainer ">
          <span>LGA:</span>
        </div>
        <div className="answer">
          <span>{data.lga}</span>
        </div>
      </div>
      <ContactAddress data={data} />
    </div>
  );
}

export default PersonalInformation;
