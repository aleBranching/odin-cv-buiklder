import React, { Component } from "react";
import uniqid from "uniqid";

import ExtraWorkExperience from "./WorkExperienceComponents/ExtraWorkExperience";
export default class WorkExperience extends Component {
  constructor(props) {
    super(props);
    let firstKey = uniqid();
    this.state = {
      workExperiences: [
        <ExtraWorkExperience
          key={firstKey}
          id={firstKey}
          handleDelete={this.handleDelete}
        ></ExtraWorkExperience>,
      ],
    };
  }

  handleAddExperience = () => {
    let copy = [...this.state.workExperiences];
    let id = uniqid();

    copy.push(
      <ExtraWorkExperience
        key={id}
        id={id}
        handleDelete={this.handleDelete}
      ></ExtraWorkExperience>
    );
    this.setState({
      workExperiences: copy,
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
