import React from "react";
import "./contactAddress.css";

function ContactAddress({ data }) {
  return (
    <div className="contactAddress">
      <h4>Contact Address</h4>
      <div className="contactAddressContainer">
        <span>{data.contactAddress}</span>
      </div>
    </div>
  );
}

export default ContactAddress;
