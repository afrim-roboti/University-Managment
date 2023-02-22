import React, { Component } from "react";
import './AddDepartment.css';
import axios from "axios";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AddDepartment extends Component {
  state = {
    name: "",
    numberofClass: "",
    numberofProffesors: "",
    numberofStudents: "",
    response: ""

  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  addDepartment = async e => {
    e.preventDefault();

    try {
        // Kur thirret funksioni addDeparmment i dergon fushat  nga forma ne formation Json ne Server Side
        // ku mundesohet permes paketes axios
      const newDepartment = await axios.post("/api/departments/", {
          name: this.refs.name.value,
          numberofClass: this.refs.numberofClass.value,
          numberofProffesors: this.refs.numberofProffesors.value,
          numberofStudents: this.refs.numberofStudents.value

        }
      );
      

      toast("Department " + newDepartment.data.newDepartment.name + " created successfully" ,{ type: toast.TYPE.SUCCESS, autoClose: 3000 });
    } catch (err) {
      toast(err.message ,{ type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  // Ktheje HTML Form , onSubmit momentin kur klikon buttonin Submit
  // thirret funksioni me larte me emrin addDepartment
  render() {
    return (
      <div className="AddDepartment-Wrapper">
        <h1>Add Department:</h1>
        <form onSubmit={this.addDepartment}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Enter the name of the Department here"
            name="name"
            onChange={this.onChangeHandler}
            ref="name"
            className="Add-Department-Input"
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
            className="Add-Department-Input"
            required
            minLength = "1"
            maxLength = "12"
            id="numberofClass"
          />
          <label htmlFor="numberofproffesors">Number of Professors: </label>
          <input
             type="number"
             placeholder="Enter Number of Professor here"
             name="numberofProffesors"
             onChange={this.onChangeHandler}
             ref="numberofProffesors"
             className="Add-Department-Input"
             required
             minLength="1"
             maxLength="16"
             id="numberofProffesors"

             />
          <label htmlFor="numberofstudents">Number of Students: </label>
          <input
             type="number"
             placeholder="Enter Number of Students here"
             name="numberofStudents"
             onChange={this.onChangeHandler}
             ref="numberofStudents"
             className="Add-Department-Input"
             required
             minLength="1"
             maxLength="16"
             id="numberofStudents"
          />
          <button type="submit" className="Add-Department-Submit fa fa-plus"></button>
          <button type="reset" className="Add-Department-Reset fa fa-refresh"></button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default AddDepartment;
 // eksportoje si komponent ne menyre qe tju qasemi nga jasht psh te Layout ose diku tjeter
