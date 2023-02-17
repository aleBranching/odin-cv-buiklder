import React, { Component } from "react";

export default class extraEducation extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   educationTitle: this.props.educationDetails[0].educationTitle,
    // };
    this.state = {
      dummyChange: true,
    };
  }

  // this.props.id
  // this.props.educationDetails
  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    let field = e.target.dataset.fieldType;
    let value = e.target.value;
    console.log("happened", this.props.id);
    // console.log("education details", this.props.educationDetails);

    this.props.changeEducationState(this.props.id, field, value);
  };

  findindexInlistByID = (aList, id) =>
    aList.findIndex((element) => element.key === id);

  getValue = (field) => {
    let index = this.findindexInlistByID(
      this.props.educationDetails,
      this.props.id
    );

    // let test = "educationTitle";

    // console.log("return value", this.props.educationDetails[index][test]);
    return this.props.educationDetails[index][field];
  };

  render() {
    let index = this.props.educationDetails.findIndex(
      (element) => element.key === this.props.id
    );
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <h4>An Education:</h4>
          <input
            type="text"
            data-field-type="educationTitle"
            onChange={this.handleChange}
            value={this.props.educationDetails[0].educationTitle}
            placeholder="Education Title"
          ></input>
          <input
            type="date"
            data-field-type="startDate"
            onChange={this.handleChange}
            value={this.getValue("startDate")}
            placeholder="Start year:"
          ></input>
          <input
            type="date"
            data-field-type="finishDate"
            onChange={this.handleChange}
            value={this.getValue("finishDate")}
            placeholder="Finish year:"
          ></input>
          <input
            type="text"
            data-field-type="additionalInfo"
            onChange={this.handleChange}
            value={this.getValue("additionalInfo")}
            placeholder="Additional Info:"
          ></input>
          <button onClick={() => this.props.handleDelete(this.props.id)}>
            Delete
          </button>
        </form>
      </React.Fragment>
    );
  }
}
