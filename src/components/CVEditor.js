import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

export default class CVEditor extends Component {
  // constructor(props)
  render() {
    return (
      <React.Fragment>
        <PersonalDetails></PersonalDetails>
        <WorkExperience></WorkExperience>
        <Education></Education>
      </React.Fragment>
    );
  }
}
