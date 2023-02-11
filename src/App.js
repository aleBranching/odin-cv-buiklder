import { Component } from "react";
import CVEditor from "./components/CVEditor";
import Preview from "./components/Preview";
import "./style/App.css";
import uniqid from "uniqid";
import PersonalDetails from "./components/PersonalDetails";
// import { faCopy } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterDetails: {
        personalDetails: {
          name: "ale",
          email: "alek12345@gmail.com",
          phoneNumber: "+44747219851",
          personalStatement: "this is a personal statement and it is good",
        },
        education: [
          {
            key: uniqid(),
            educationTitle: "University of York",
            startDate: "2021-02-01",
            finishDate: "2023-02-01",
            additionalInfo: "Got an attendance award",
          },
        ],
        workExperience: [
          {
            key: uniqid(),
            workTitle: "Chef at something something",
            startDate: "2021-01-12",
            finishDate: "2021-12-12",
            bulletPoint: [
              { key: uniqid(), title: "did this for this amount of time" },
            ],
          },
        ],
      },
    };
  }
  // helper functions
  findindexInlistByID = (aList, id) =>
    aList.findIndex((element) => element.key === id);

  // getElementsFromKeyElementList = (list) => list.map((anItem) => anItem.id);

  setPersonalDetailsState = (field, value) => {
    let copy = [...this.state.masterDetails.personalDetails];

    copy[field] = value;
    this.setState({ masterDetails: { PersonalDetails: copy } });
  };

  setEducationState = (id, field, value) => {
    let index = this.findindexInlistByID(
      this.state.masterDetails.education,
      id
    );

    let copy = [...this.state.masterDetails.education];

    copy = copy.splice(index, 1, { [field]: value });

    this.setState({ masterDetails: { education: copy } });
  };
  setWorkExperienceState = (id, field, value) => {
    let index = this.findindexInlistByID(
      this.state.masterDetails.workExperience,
      id
    );

    let copy = [...this.state.masterDetails.workExperience];

    copy = copy.splice(index, 1, { [field]: value });

    this.setState({ masterDetails: { workExperience: copy } });
  };

  setNewEducationState = () => {
    let copy = [...this.state.masterDetails.education];

    copy.push({
      key: uniqid(),
      educationTitle: "University of York",
      startDate: "2021-02-01",
      finishDate: "2023-02-01",
      additionalInfo: "Got an attendance award",
    });
  };

  render() {
    return (
      <div className="App">
        <CVEditor
          findindexInlistByID={this.findindexInlistByID}
          getElementsFromKeyElementList={this.getElementsFromKeyElementList}
        ></CVEditor>
        <Preview></Preview>
      </div>
    );
  }
}

export default App;
