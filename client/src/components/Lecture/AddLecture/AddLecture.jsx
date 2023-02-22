import React, { Component } from "react";
import './AddLecture.css';
import axios from "axios";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AddLecture extends Component {
  state = {
    name: "",
    numberofClass: "",
    response: ""

  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  addLecture = async e => {
    e.preventDefault();

    try {
      const newLecture = await axios.post("/api/lectures/", {
          name: this.refs.name.value,
          numberofClass: this.refs.numberofClass.value
        }
      );
      
      toast("Lecture " + newLecture.data.newLectures.name + " created successfully" ,{ type: toast.TYPE.SUCCESS, autoClose: 3000 });
    } catch (err) {
      toast(err.message ,{ type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  render() {
    return (
      <div className="AddLecture-Wrapper">
        <h1>Add Lecture:</h1>
        <form onSubmit={this.addLecture}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Enter the name of the Lecture here"
            name="name"
            onChange={this.onChangeHandler}
            ref="name"
            className="Add-Lecture-Input"
            required
            minLength="3"
            maxLength="33"
            id="name"
          />
          <label htmlFor="numberofclass">Number of Class:</label>
          <input
            type="number"
            placeholder="enter Number of Class here"
            name="numberofClass"
            onChange={this.onChangeHandler}
            ref="numberofClass"
            className="Add-Lecture-Input"
            required
            minLength = "1"
            maxLength = "12"
            id="numberofClass"
          />
          <button type="submit" className="Add-Lecture-Submit fa fa-plus"></button>
          <button type="reset" className="Add-Lecture-Reset fa fa-refresh"></button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default AddLecture;