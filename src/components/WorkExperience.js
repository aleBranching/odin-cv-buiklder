import React, { Component } from "react";
import uniqid from "uniqid";

import ExtraWorkExperience from "./WorkExperienceComponents/ExtraWorkExperience";
export default class WorkExperience extends Component {
  constructor(props) {
    super(props);
    let firstKey = this.props.workExperienceDetails[0].key;

    this.state = {
      workExperiences: [firstKey],
    };
  }

  renderList = (list) => {
    return list.map((element) => {
      return (
        <ExtraWorkExperience
          key={element}
          id={element}
          workExperienceDetails={this.props.workExperienceDetails}
          changeWorkExperienceState={this.props.changeWorkExperienceState}
          handleDelete={this.handleDelete}
          setNewBulletPoint={this.props.setNewBulletPoint}
          editBulletPoint={this.props.editBulletPoint}
          deleteBulletPoint={this.deleteBulletPoint}
        ></ExtraWorkExperience>
      );
    });
  };

  handleAddExperience = () => {
    // let copy = JSON.parse(JSON.stringify(this.state.workExperiences));
    let copy = [...this.state.workExperiences];
    // let id = uniqid();
    let id = uniqid();
    copy.push(id);

    console.log("the copy", copy);
    let add = () => {
      console.log("the work experience prop", this.props.workExperienceDetails);
      console.log("the id", id);
      this.setState(
        { workExperiences: [...this.state.workExperiences].concat(id) },
        () => console.log("check")
      );
    };
    this.props.setNewWorkExperienceState(add, id);
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
    this.props.deleteAWorkExperience(id);
  };

  render() {
    return (
      <React.Fragment>
        <h3>Work Experience</h3>
        {this.renderList(this.state.workExperiences)}
        <button onClick={this.handleAddExperience}>Add Experience</button>
      </React.Fragment>
    );
  }
}
