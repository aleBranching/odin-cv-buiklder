import { Children, Component } from "react";
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
      personalDetails: {
        name: "geage",
        email: "gaegaeg@gmail.com",
        phoneNumber: "+11111111",
        personalStatement: "this is a personal statement and it is good",
      },
      education: [
        {
          key: uniqid(),
          educationTitle: "University of somethong",
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
            { key: uniqid(), bullet: "did this for this amount of time" },
          ],
        },
      ],
    };
  }
  // helper functions
  findindexInlistByID = (aList, id) =>
    aList.findIndex((element) => element.key === id);

  // getElementsFromKeyElementList = (list) => list.map((anItem) => anItem.id);

  changePersonalDetailsState = (field, value) => {
    console.log("ran");
    let copy = { ...this.state.personalDetails };

    copy[field] = value;
    // copy[field] = value;
    console.log("the copy", copy);
    console.log("the original", this.state.personalDetails);
    this.setState({ personalDetails: copy }, () => {
      console.log("state after", this.state.personalDetails);
    });
    // console.log(this.state.masterDetails.personalDetails);
  };

  changeEducationState = (id, field, value) => {
    let index = this.findindexInlistByID(this.state.education, id);
    console.log("HERE", this.state.education);
    console.log("the index", index);

    let copy = JSON.parse(JSON.stringify(this.state.education));

    // let copy = { ...this.state.education };
    // console.log("are they equal", this.state.education === copy);

    // copy = copy.splice(index, 1, {
    //   key: uniqid(),
    //   educationTitle: value,
    //   startDate: "2021-02-01",
    //   finishDate: "2023-02-01",
    //   additionalInfo: "Got an attendance award",
    // });
    // console.log("the copy after", copy);
    // this.setState({ education: copy }, () => {
    //   console.log("after change", this.state.education);
    // });
    // let testCopy = { ...this.state.education };
    // console.log("testCopy", testCopy);
    // copy[index][field] = value;
    // console.log("THE VALUE", value);
    // console.log("the copy", copy);
    // console.log("the original", this.state.education);

    // this.setState({ education: copy }, () => {
    //   console.log("test get value", this.state.education[0].educationTitle);
    // });
    // let test = { [field]: value };
    // let el = {
    //   key: uniqid(),
    //   educationTitle: "University of York",
    //   startDate: "2021-02-01",
    //   finishDate: "2023-02-01",
    //   additionalInfo: "Got an attendance award",
    // };

    // let test = Object.assign({}, el, { [field]: value });
    // console.log("testOBJ", test);

    this.setState(
      (prevState) => {
        return {
          education: prevState.education.map(
            (el) => {
              if (el.key === id) {
                console.log("they are the same");
                return Object.assign({}, el, { [field]: value });
              } else {
                console.log("not same");
                return el;
              }
            }
            // el.key === id ? Object.assign({}, el, { [field]: value }) : el
          ),
        };
      },
      () => {
        console.log("changed", this.state.education);
        // callback();
        // this.forceUpdate();
      }
    );
    // this.setState(
    //   (prevState) =>
    //     // prevState.splice()
    //     ({ education: prevState }),
    //   console.log("the modified", this.state)
    // );
  };
  deleteAnEducation = (id) => {
    this.setState((prevState) => {
      return { education: prevState.education.filter((el) => el.key !== id) };
    });
  };

  changeWorkExperienceState = (id, field, value) => {
    let index = this.findindexInlistByID(this.state.workExperience, id);

    // this.setState({ workExperience: copy }, () =>
    //   console.log("checking state", this.state.workExperience)
    // );

    this.setState(
      (prevState) => {
        return {
          workExperience: prevState.workExperience.map((el) =>
            el.key === id ? Object.assign({}, el, { [field]: value }) : el
          ),
        };
      },
      () => console.log("checking the state", this.state.workExperience)
    );
  };
  setNewWorkExperienceState = (callback) => {
    let copy = JSON.parse(JSON.stringify(this.state.workExperience));
    copy.push({
      key: uniqid(),
      workTitle: "",
      startDate: "",
      finishDate: "",
      bulletPoint: [{ key: uniqid(), title: "" }],
    });
    console.log("the copy", copy);
    this.setState({ workExperience: copy }, callback);
  };

  deleteAWorkExperience = (id) => {
    this.setState((prevState) => {
      return {
        workExperience: prevState.workExperience.filter((el) => el.key !== id),
      };
    });
  };
  setNewEducationState = (callback) => {
    let copy = [...this.state.education];

    copy.push({
      key: uniqid(),
      educationTitle: "",
      startDate: "",
      finishDate: "",
      additionalInfo: "",
    });

    this.setState({ education: copy }, callback);
  };

  setNewWorkState = () => {
    let copy = [...this.state.masterDetails.workExperience];

    copy.push({
      key: uniqid(),
      workTitle: "",
      startDate: "",
      finishDate: "",
      bulletPoint: [{ key: uniqid(), title: "" }],
    });

    this.setState({
      masterDetails: {
        workExperience: copy,
      },
    });
  };

  setNewBulletPoint = (parentID, callback) => {
    let index = this.state.workExperience.findIndex(
      (el) => el.key === parentID
    );
    let copy = JSON.parse(JSON.stringify([...this.state.workExperience]));

    copy[index].bulletPoint.push({
      key: uniqid(),
      bullet: "",
    });

    this.setState({ workExperience: copy }, callback);
    // console.log("the supposedly new state", copy);
    setTimeout(
      () => console.log("the supposedly new state", this.state.workExperience),
      0
    );
  };

  editBulletPoint = (parentID, bulletID, newValue, callback) => {
    let parentIndex = this.findindexInlistByID(
      this.state.workExperience,
      parentID
    );

    let bulletIndex = this.findindexInlistByID(
      this.state.workExperience[parentIndex].bulletPoint,
      bulletID
    );

    // let bulletKey= this.state.masterDetails.workExperience[parentIndex].bulletPoint[bulletIndex]

    let copy = [...this.state.workExperience];

    copy[parentIndex].bulletPoint.splice(bulletIndex, 1, {
      key: bulletID,
      title: newValue,
    });

    this.setState(
      {
        masterDetails: {
          workExperience: copy,
        },
      },
      callback
    );
  };

  deleteBulletPoint = (parentID, bulletID, callback) => {
    let parentIndex = this.findindexInlistByID(
      this.state.workExperience,
      parentID
    );

    let bulletIndex = this.findindexInlistByID(
      this.state.workExperience[parentIndex].bulletPoint,
      bulletID
    );

    // let bulletKey= this.state.masterDetails.workExperience[parentIndex].bulletPoint[bulletIndex]

    let copy = [...this.state.workExperience];

    copy[parentIndex].bulletPoint.splice(bulletIndex, 1);

    this.setState({ workExperience: copy }, callback);
  };

  render() {
    return (
      <div className="App">
        <CVEditor
          deleteAnEducation={this.deleteAnEducation}
          masterDetails={this.state.masterDetails}
          personalDetails={this.state.personalDetails}
          educationDetails={this.state.education}
          findindexInlistByID={this.findindexInlistByID}
          getElementsFromKeyElementList={this.getElementsFromKeyElementList}
          changePersonalDetailsState={this.changePersonalDetailsState}
          changeEducationState={this.changeEducationState}
          changeWorkExperienceState={this.changeWorkExperienceState}
          deleteAWorkExperience={this.deleteAWorkExperience}
          workExperience={this.state.workExperience}
          setNewEducationState={this.setNewEducationState}
          setNewWorkState={this.setNewWorkState}
          setNewBulletPoint={this.setNewBulletPoint}
          editBulletPoint={this.editBulletPoint}
          deleteBulletPoint={this.deleteBulletPoint}
          setNewWorkExperienceState={this.setNewWorkExperienceState}
        ></CVEditor>
        <Preview></Preview>
      </div>
    );
  }
}

export default App;
