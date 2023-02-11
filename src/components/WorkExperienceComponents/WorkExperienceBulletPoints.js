import React, { Component } from "react";
import uniqid from "uniqid";

export default class WorkExperienceBulletPoints extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h6>WorkExperienceBulletPoints</h6>
        <ul></ul>
        <form>
          <input
            type="text"
            placeholder="Bullet point:"
            value={this.state.newBulletText}
            onChange={this.handleChange}
          ></input>
        </form>
      </React.Fragment>
    );
  }
}
