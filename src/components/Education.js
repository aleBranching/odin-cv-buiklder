import React, { Component } from "react";
import ExtraEducation from "./EducationComponents/ExtraEducation";
import uniqid from "uniqid";

export default class Education extends Component {
  constructor(props) {
    super(props);
    let firstKey = uniqid();
    this.state = {
      educations: [
        <ExtraEducation
          handleDelete={this.handleDelete}
          id={firstKey}
          key={firstKey}
        ></ExtraEducation>,
      ],
    };
  }

  addExtraEducationCMPNT = () => {
    let aKey = uniqid();
    this.setState({
      educations: [...this.state.educations].concat(
        <ExtraEducation
          handleDelete={this.handleDelete}
          id={aKey}
          key={aKey}
        ></ExtraEducation>
      ),
    });

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
        <button onClick={this.addExtraEducationCMPNT}>Add Extra</button>
      </React.Fragment>
    );
  }
}
