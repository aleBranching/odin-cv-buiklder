import React, { Component } from "react";
import WorkExperienceBulletPoints from "./WorkExperienceBulletPoints";
import uniqid from "uniqid";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ExtraWorkExperience extends Component {
  constructor(props) {
    super(props);
    let firstKey = uniqid();
    let index = this.props.workExperienceDetails.findIndex(
      (element) => element.key === this.props.id
    );
    console.log(this.props.workExperienceDetails);
    this.state = {
      bulletPoint: this.props.workExperienceDetails[index].bulletPoint,
      workTitle: this.props.workExperienceDetails[index].workTitle,
      startDate: this.props.workExperienceDetails[index].startDate,
      finishDate: this.props.workExperienceDetails[index].finishDate,
    };
  }

  renderList = () => {
    return this.state.bulletPoint.map((element) => (
      <li key={element.key} data-key={element.key}>
        {/* <button onClick={() => this.handleDelete(element.key)}>delete</button> */}
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => this.handleDelete(element.key)}
        />
        <input
          type="text"
          value={element.bullet}
          data-key={element.key}
          onChange={this.updateBullet}
        ></input>
      </li>
    ));
  };

  updateBullet = (e) => {
    this.props.editBulletPoint(
      this.props.id,
      e.target.dataset.key,
      e.target.value,
      () => {
        console.log("target", e.target.value);

        // let index = 0;
        console.log(e.target.dataset);
        let index = this.state.bulletPoint.findIndex(
          (element) => element.key === e.target.dataset.key
        );
        let copy = [...this.state.bulletPoint];
        console.log("the copy", copy);

        copy.splice(index, 1, {
          key: e.target.dataset.key,
          bullet: e.target.value,
        });
        this.setState(
          {
            bulletPoint: copy,
          },
          () => {
            console.log(
              "the work experience state",
              this.props.workExperienceDetails
            );
            console.log("the original", this.state.bulletPoint);
          }
        );
      }
    );
  };

  //   handleDelete = () => {};

  handleAddBullet = () => {
    console.log("the original", this.state.bulletPoint);

    // below is setting with master state

    this.props.setNewBulletPoint(this.props.id, () => {
      // let copy = [...this.state.bulletPoint];

      // setTimeout(() => {
      let copy = JSON.parse(JSON.stringify([...this.state.bulletPoint]));
      console.log("here!!!", [...this.state.bulletPoint]);
      console.log("here!!!", copy);

      console.log("AAA", this.props.workExperienceDetails);
      copy.push({
        // key: this.props.workExperienceDetails.at(-1).bulletPoint.at(-1).key,
        key: uniqid(),
        bullet: "",
      });
      console.log("here!!!", copy);

      this.setState({ bulletPoint: copy }, () => {
        console.log(
          "the supposedly new internal props state",
          this.props.workExperienceDetails
        );
      });
      // }, );

      setTimeout(() => {
        console.log("the prop after timeout", this.props.workExperienceDetails);
      }, 500);
    });
  };

  handleChange = (field, event) => {
    let { value } = event.target;
    this.setState({ [field]: value });
    this.props.changeWorkExperienceState(this.props.id, field, value);
  };

  handleDelete = (id) => {
    this.props.deleteBulletPoint(this.props.id, id, () => {
      let index = this.state.bulletPoint.findIndex(
        (anItem) => anItem.key === id
      );
      console.log(index);

      let copy = [...this.state.bulletPoint];

      copy.splice(index, 1);

      this.setState({
        bulletPoint: copy,
      });
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <h4>A Work Experience:</h4>
          <input
            type="text"
            placeholder="Work Title"
            onChange={(e) => this.handleChange("workTitle", e)}
            value={this.state.workTitle}
          ></input>
          <input
            type="date"
            placeholder="Start year:"
            onChange={(e) => this.handleChange("startDate", e)}
            value={this.state.startDate}
          ></input>
          <input
            type="date"
            placeholder="Finish year:"
            onChange={(e) => this.handleChange("finishDate", e)}
            value={this.state.finishDate}
          ></input>
          {/* <input type="text" placeholder="Additional Info:" value={this.state.}></input> */}
        </form>
        <h6>bullet points</h6>
        <ul>{this.renderList()}</ul>

        <button onClick={this.handleAddBullet}>Add a bullet point </button>

        <button onClick={() => this.props.handleDelete(this.props.id)}>
          Delete
        </button>
      </React.Fragment>
    );
  }
}
