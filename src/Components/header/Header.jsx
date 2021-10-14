import React from "react";
import "./header.css";

function Header({ data }) {
  return (
    <header>
      <h1 className="fullname">{data.fullname}</h1>
      <p className="occupation">{data.occupation}</p>
      <p className="heading">({data.heading})</p>
    </header>
  );
}

export default Header;
