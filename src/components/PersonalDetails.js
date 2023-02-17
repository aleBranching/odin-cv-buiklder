import { Component } from "react";
import React from "react";
export default class PersonalDetails extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    console.log(e.target.dataset.fieldType);

    let value = e.target.value;
    // console.log(value);
    this.props.changePersonalDetailsState(e.target.dataset.fieldType, value);
  };
  render() {
    return (
      <React.Fragment>
        <h3>Personal Details</h3>
        <form>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.props.personalDetails.name}
            placeholder="Name:"
            data-field-type="name"
            autoFocus
          ></input>
          <input
            type="email"
            data-field-type="email"
            onChange={this.handleChange}
            value={this.props.personalDetails.email}
            placeholder="Email:"
          ></input>
          <input
            value={this.props.personalDetails.phoneNumber}
            type="text"
            onChange={this.handleChange}
            data-field-type="phoneNumber"
            placeholder="Phone number:"
          ></input>
          <textarea
            value={this.props.personalDetails.personalStatement}
            data-field-type="personalStatement"
            onChange={this.handleChange}
            placeholder="Personal Statement:"
          ></textarea>
        </form>
      </React.Fragment>
    );
  }
}
