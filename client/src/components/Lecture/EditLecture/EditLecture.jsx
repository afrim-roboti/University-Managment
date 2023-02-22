import React, { Component } from "react";
import './EditLecture.css';
import axios from "axios";
import { withRouter } from 'react-router';

import {toast, ToastContainer} from "react-toastify";


class EditLecture extends Component {
    state = {
      id: "",
      name: "",
      numberofClass: "",
      response: ""
    };
  
  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  async componentDidMount() {
    try {
    let search =  this.props.location.search,
    id = search.substring(1, search.length);
    const updateLecture = await axios(`/api/lectures/${id}`);
    const { name, numberofClass} = updateLecture.data.lectures;
    this.setState({ id, name, numberofClass });
    } catch (err) {
      this.setState({ response: "Lecture not found!" })
    }
  };

  updateLectureHandler = async (e) => {
    e.preventDefault();
    try {
      const lecture = await axios.put(`/api/lectures/${this.state.id}`, {
        name: this.refs.name.value,
        numberofClass: this.refs.numberofClass.value
      });
      toast(lecture.data.message ,{ type: toast.TYPE.INFO, autoClose: 3000 });

    } catch (err) {
      toast(err.message ,{ type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  render() {
    if (this.state.response === "Lecture not found!")
      return <h1>Lecture not found!</h1>
    return (
      <div className="Edit-Lecture-Wrapper">
           <h1>Edit Lecture:</h1>
        <form onSubmit={this.updateLectureHandler}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Enter the name of the Lecture here"
            value={this.state.name}
            name="text"
            onChange={this.onChangeHandler}
            ref="name"
            className="Add-Lecture-Input"
            required
            minLength="3"
            maxLength="33"
            id="name"
          />
         <label htmlFor="numberofClass">Number of Class:</label>
          <input
            type="number"
            placeholder="enter Number of Class here"
            value={this.state.numberofClass} 
            name="numberofClass"
            onChange={this.onChangeHandler}
            ref="numberofClass"
            className="Add-Lecture-Input"
            required
            minLength = "1"
            maxLength = "12"
            id="numberofClass"
          />
          <button type="submit" className="Edit-Lecture-Submit fa fa-pencil"></button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default withRouter(EditLecture);