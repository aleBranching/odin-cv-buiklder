import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import "../style/CVEditor.css";

export default class CVEditor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="CVEditor">
        <PersonalDetails></PersonalDetails>
        <Education
          findindexInlistByID={this.props.findindexInlistByID}
          getElementsFromKeyElementList={
            this.props.getElementsFromKeyElementList
          }
        ></Education>
        <WorkExperience></WorkExperience>
      </div>
    );
  }
}
