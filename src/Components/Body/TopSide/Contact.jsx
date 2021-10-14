import React from "react";
import "./contact.css";

function Contact({ data }) {
  return (
    <div className="contactInformation">
      <h4>Phone Contact</h4>
      <div className="contactInfoContainer">
        <div className="contactLabelContainer">
          <span>{data.phoneContact}</span>
        </div>
      </div>
      <h4>Email Address</h4>
      <div className="contactInfoContainer">
        <div className="contactLabelContainer">
          <span>{data.email}</span>
        </div>
      </div>
      <h4>Linkedin Address</h4>
      <div className="contactInfoContainer">
        <div className="contactLabelContainer">
          <span>{data.linkedenAdd}</span>
        </div>
      </div>
      <h4 className="">Github Address</h4>
      <div className="contactInfoContainer">
        <div className="contactLabelContainer">
          <span className="">{data.gitAdd}</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
