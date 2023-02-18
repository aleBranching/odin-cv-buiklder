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
        <PersonalDetails
          changePersonalDetailsState={this.props.changePersonalDetailsState}
          masterDetails={this.props.masterDetails}
          personalDetails={this.props.personalDetails}
        ></PersonalDetails>
        <Education
          deleteAnEducation={this.props.deleteAnEducation}
          educationDetails={this.props.educationDetails}
          changeEducationState={this.props.changeEducationState}
          setNewEducationState={this.props.setNewEducationState}
          findindexInlistByID={this.props.findindexInlistByID}
          getElementsFromKeyElementList={
            this.props.getElementsFromKeyElementList
          }
        ></Education>
        <WorkExperience
          deleteBulletPoint={this.props.deleteBulletPoint}
          setNewBulletPoint={this.props.setNewBulletPoint}
          setNewWorkExperienceState={this.props.setNewWorkExperienceState}
          workExperienceDetails={this.props.workExperience}
          changeWorkExperienceState={this.props.changeWorkExperienceState}
          deleteAWorkExperience={this.props.deleteAWorkExperience}
          editBulletPoint={this.props.editBulletPoint}
        ></WorkExperience>
      </div>
    );
  }
}
