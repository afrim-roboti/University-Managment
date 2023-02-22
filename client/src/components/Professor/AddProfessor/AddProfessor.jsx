import React, { Component } from "react";
import './AddProfessor.css';
import axios from "axios";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AddProfessor extends Component {
  state = {
    name: "",
    email: "",
    status: "",
    response: ""
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  addProfessor = async e => {
    e.preventDefault();

    try {

      const newProfessor = await axios.post("/api/professors/", {
          name: this.refs.name.value,
          email: this.refs.email.value,
          status: this.refs.status.value
        }
      );
      

      toast("Professor " + newProfessor.data.newProfessor.name + " created successfully" ,{ type: toast.TYPE.SUCCESS, autoClose: 3000 });
    } catch (err) {
      toast(err.message ,{ type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  render() {
    return (
      <div className="AddProfessor-Wrapper">
        <h1>Add Professor:</h1>
        <form onSubmit={this.addProfessor}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Enter the name of the Professor here"
            name="name"
            onChange={this.onChangeHandler}
            ref="name"
            className="Add-Professor-Input"
            required
            minLength="3"
            maxLength="33"
            id="name"
          />
          <label htmlFor="email">email: <b>(must be a valid email)</b></label>
          <input
            type="text"
            placeholder="enter your email here"
            name="email"
            onChange={this.onChangeHandler}
            ref="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            className="Add-Professor-Input"
            required
            id="email"
          />
          <label htmlFor="enrollnumber">Status: </label>
          <input
             type="text"
             placeholder="Enter the name of the Professor here"
             name="status"
             onChange={this.onChangeHandler}
             ref="status"
             className="Add-Professor-Input"
             required
             minLength="3"
             maxLength="33"
             id="status"
          />
          <button type="submit" className="Add-Professor-Submit fa fa-plus"></button>
          <button type="reset" className="Add-Professor-Reset fa fa-refresh"></button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default AddProfessor;
