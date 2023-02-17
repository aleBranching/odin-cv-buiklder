import React, { Component } from "react";
import uniqid from "uniqid";

import ExtraWorkExperience from "./WorkExperienceComponents/ExtraWorkExperience";
export default class WorkExperience extends Component {
  constructor(props) {
    super(props);
    let firstKey = this.props.workExperienceDetails[0].key;

    this.state = {
      workExperiences: [
        <ExtraWorkExperience
          key={firstKey}
          id={firstKey}
          workExperienceDetails={this.props.workExperienceDetails}
          changeWorkExperienceState={this.props.changeWorkExperienceState}
          handleDelete={this.handleDelete}
        ></ExtraWorkExperience>,
      ],
    };
  }

  handleAddExperience = () => {
    let copy = [...this.state.workExperiences];
    // let id = uniqid();
    this.props.setNewWorkExperienceState(() => {
      let id =
        this.props.workExperienceDetails[
          this.props.workExperienceDetails.length - 1
        ].key;
      console.log(
        "the work experience prop",
        this.props.workExperienceDetails[
          this.props.workExperienceDetails.length - 1
        ]
      );
      console.log("the id", id);
      copy.push(
        <ExtraWorkExperience
          key={id}
          id={id}
          changeWorkExperienceState={this.props.changeWorkExperienceState}
          workExperienceDetails={this.props.workExperienceDetails}
          handleDelete={this.handleDelete}
        ></ExtraWorkExperience>
      );
      this.setState({
        workExperiences: copy,
      });
    });
  };

  handleDelete = (id) => {
    console.log(this.state.workExperiences);
    let index = this.state.workExperiences.findIndex(
      (reactElement) => reactElement.props.id === id
    );
    console.log(index);

    let copy = [...this.state.workExperiences];

    copy.splice(index, 1);
    this.setState({ workExperiences: copy });
  };

  render() {
    return (
      <React.Fragment>
        <h3>Work Experience</h3>
        {this.state.workExperiences}
        <button onClick={this.handleAddExperience}>Add Experience</button>
      </React.Fragment>
    );
  }
}
