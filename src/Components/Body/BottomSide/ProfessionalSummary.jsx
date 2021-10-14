import React from "react";
import "./professionalSummary.css";

function ProfessionalSummary({ data }) {
  return (
    <div className="professionalSummary">
      <div className="topSummary">
        <h4>Professional Summary</h4>
        <div className="summary">
          <p className="firstSummaryParagraph">{data.firstSummaryParagraph}</p>
          <p className="secondSummaryParagraph">
            {data.secondSummaryParagraph}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalSummary;
