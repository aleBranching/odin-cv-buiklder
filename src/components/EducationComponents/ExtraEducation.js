import React, { Component } from "react";

export default class extraEducation extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <h4>An Education:</h4>
          <input type="text" placeholder="Education Title"></input>
          <input type="date" placeholder="Start year:"></input>
          <input type="date" placeholder="Finish year:"></input>
          <input type="text" placeholder="Additional Info:"></input>
          <button onClick={() => this.props.handleDelete(this.props.id)}>
            Delete
          </button>
        </form>
      </React.Fragment>
    );
  }
}
