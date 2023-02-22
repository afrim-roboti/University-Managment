import React, { Component } from "react";
import './EditProfessor.css';
import axios from "axios";
import { withRouter } from 'react-router'
import {toast, ToastContainer} from "react-toastify";

class EditProfessor extends Component {
  state = {
    id: '',
    name: "",
    email: "",
    status: "",
    response: ""
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  async componentDidMount() {
    try {
    let search =  this.props.location.search,
      id = search.substring(1, search.length);
    const updateProfessor = await axios(`/api/professors/${id}`);
    const { name, email, status } = updateProfessor.data.professor;
    this.setState({ id, name, email, status  });
    } catch (err) {
      this.setState({ response: "Professor not found!" })
    }
  };

  updateProfessorHandler = async (e) => {
    e.preventDefault();
    try {
      const professor = await axios.put(`/api/professors/${this.state.id}`, {
        name: this.refs.name.value,
        email: this.refs.email.value,
        status: this.refs.status.value
      });
      toast(professor.data.message ,{ type: toast.TYPE.INFO, autoClose: 3000 });

    } catch (err) {
      toast(err.message ,{ type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  render() {
    if (this.state.response === "Professor not found!")
      return <h1>Professor not found!</h1>
    return (
      <div className="Edit-Professor-Wrapper">
        <h1>Edit page</h1>
        <form onSubmit={this.updateProfessorHandler}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Name..."
            value={ this.state.name }
            name="name"
            onChange={this.onChangeHandler}
            ref="name"
            required
            className="Edit-Professor-Input"
            id="name"
          />
          <label htmlFor="email">Email: <b>(must be a valid email)</b></label>
          <input
            type="email"
            placeholder="Enter your email here"
            value={ this.state.email }
            name="email"
            required
            onChange={this.onChangeHandler}
            ref="email"
            className="Edit-Professor-Input"
            id="email"
          />
          <label htmlFor="status">Status: </label>
          <input
            type="text"
            placeholder="Enter the professor's status"
            value={ this.state.status }
            name="status"
            required
            minLength="3"
            maxLength="33"
            onChange={this.onChangeHandler}
            ref="status"
            className="Edit-Professor-Input"
            id="status"

          />
          <button type="submit" className="Edit-Professor-Submit fa fa-pencil"></button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default withRouter(EditProfessor);
