import React, { Component } from "react";
import './EditDepartment.css';
import axios from "axios";
import { withRouter } from 'react-router'
import {toast, ToastContainer} from "react-toastify";

class EditDepartment extends Component {
  state = {
    id: '',
    name: "",
    numberofClass: "",
    numberofProffesors: "",
    numberofStudents:"",
    response: ""
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  //kur funksioni ben thirrje pastaj ne Sever ku i merr te gjitha departments permes api
  // kur renderohen dhe behet update tabela

  async componentDidMount() {
    try {
    let search =  this.props.location.search,
    id = search.substring(1, search.length);
    const updateDepartment = await axios(`/api/departments/${id}`);
    const { name, numberofClass, numberofProffesors, numberofStudents } = updateDepartment.data.departments;
    this.setState({ id, name, numberofClass, numberofProffesors,numberofStudents  });
    } catch (err) {
      this.setState({ response: "Department not found!" })
    }
  };

  updateDepartmentHandler = async (e) => {
    e.preventDefault();
    try {
      const department = await axios.put(`/api/departments/${this.state.id}`, {
        name: this.refs.name.value,
        numberofClass: this.refs.numberofClass.value,
        numberofProffesors: this.refs.numberofProffesors.value,
        numberofStudents: this.refs.numberofStudents.value

      });
      toast(department.data.message ,{ type: toast.TYPE.INFO, autoClose: 3000 });

    } catch (err) {
      toast(err.message ,{ type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  render() {
    console.log(this.state);
    if (this.state.response === "Department not found!")
      return <h1>Department not found!</h1>
    return (
      <div className="Edit-Department-Wrapper">
        <h1>Edit Department</h1>
        <form onSubmit={this.updateDepartmentHandler}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Name..."
            value={ this.state.name }
            name="name"
            onChange={this.onChangeHandler}
            ref="name"
            required
            className="Edit-Department-Input"
            id="name"
          />
          <label htmlFor="email">Number of Class</label>
          <input
            type="number"
            placeholder="Enter number of class"
            value={ this.state.numberofClass }
            name="numberofClass"
            required
            onChange={this.onChangeHandler}
            ref="numberofClass"
            className="Edit-Department-Input"
            id="numberofClass"
          />
          <label htmlFor="enrollnumber">Number of Professors: </label>
          <input
            type="number"
            placeholder="Enter class numbers"
            value={ this.state.numberofProffesors }
            name="numberofProffesors"
            min="1"
            max="120"
            required
            onChange={this.onChangeHandler}
            ref="numberofProffesors"
            className="Edit-Department-Input"
            id="numberofProffesors"
          />
         <label htmlFor="enrollnumber">Number of Students: </label>
          <input
            type="number"
            placeholder="Enter the student numbers"
            value={ this.state.numberofStudents }
            name="numberofStudents"
            min="1"
            max="120"
            required
            onChange={this.onChangeHandler}
            ref="numberofStudents"
            className="Edit-Department-Input"
            id="numberofStudents"
          />

          <button type="submit" className="Edit-Department-Submit fa fa-pencil"></button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default withRouter(EditDepartment);
