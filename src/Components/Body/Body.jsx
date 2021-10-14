import React from "react";
import "./body.css";
import ChartJs from "../Chart/Chart";
import Contact from "./TopSide/Contact";
import PersonalInformation from "./TopSide/PersonalInformation";
import Skills from "./TopSide/Skills";
import ProfessionalSummary from "./BottomSide/ProfessionalSummary";
import { data } from "../../data";
import Chart2 from "../Chart/SecondChart";
import EducationalBackground from "./Education/EducationalBackground";

function Body() {
  return (
    <div className="detailsContainer">
      <div className="topContainer ">
        <PersonalInformation data={data} />
        <Contact data={data} />
        <Skills data={data} />
      </div>
      <div className="secondContainer">
        <ProfessionalSummary data={data} />
        <h4>front end Development skills</h4>
        <div className="chartContainer">
          <ChartJs />
        </div>
        <h4>Backend Development Skills</h4>
        <div className="chartContainer">
          <Chart2 />
        </div>
      </div>
      <EducationalBackground />
    </div>
  );
}

export default Body;
