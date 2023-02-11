import { Component } from "react";
import React from "react";
export default class PersonalDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h3>Personal Details</h3>
        <form>
          <input type="text" placeholder="Name:" autoFocus></input>
          <input type="email" placeholder="Email:"></input>
          <input type="text" placeholder="Phone number:"></input>
          <textarea placeholder="Personal Statement:"></textarea>
        </form>
      </React.Fragment>
    );
  }
}
