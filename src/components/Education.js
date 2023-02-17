import React, { Component } from "react";
import ExtraEducation from "./EducationComponents/ExtraEducation";
import uniqid from "uniqid";

export default class Education extends Component {
  constructor(props) {
    super(props);
    let firstKey = this.props.educationDetails[0].key;
    this.state = {
      educations: [
        <ExtraEducation
          handleDelete={this.handleDelete}
          id={firstKey}
          key={firstKey}
          educationDetails={this.props.educationDetails}
          changeEducationState={this.props.changeEducationState}
        ></ExtraEducation>,
      ],
    };
  }

  // need to refactor to use key from new state decleration
  addExtraEducationCMPNT = () => {
    // let aKey = uniqid();
    this.props.setNewEducationState(() => {
      let aKey =
        this.props.educationDetails[this.props.educationDetails.length - 1].key;

      console.log("the length", this.props.educationDetails.length);

      this.setState({
        educations: [...this.state.educations].concat(
          <ExtraEducation
            handleDelete={this.handleDelete}
            id={aKey}
            key={aKey}
            educationDetails={this.props.educationDetails}
            changeEducationState={this.props.changeEducationState}
          ></ExtraEducation>
        ),
      });
    });

    // setTimeout(() => {
    //   console.log("the length", this.props.educationDetails.length);
    //   console.log("the details", this.props.educationDetails);
    // }, 1000);

    // console.log(this.state.educations);
  };

  handleDelete = (id) => {
    console.log(id);

    let index = this.state.educations.findIndex(
      (anItem) => anItem.props.id === id
    );
    console.log(index);

    let copy = [...this.state.educations];

    copy.splice(index, 1);

    this.setState({
      educations: copy,
    });
  };

  render() {
    return (
      <React.Fragment>
        <h3>Education</h3>
        {this.state.educations}
        <button onClick={this.addExtraEducationCMPNT}>
          Add Extra Education
        </button>
      </React.Fragment>
    );
  }
}
