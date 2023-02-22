import React, { Component } from "react";
import "./Student.css";
import axios from "axios";
import { Link } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
// Components
import Student from "../../components/Student/Student";
import SearchStudents from "../../components/Student/SearchStudent/SearchStudents";
import AddStudent from "../../components/Student/AddStudent/AddStudent";

class Students extends Component {
  state = {
    data: null,
    allStudents: null,
    error: ""
  };

  async componentDidMount() {
    try {
      const students = await axios("/api/students/");
      this.setState({ data: students.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  

  removeStudent = async id => {
    try {
      const studentRemoved = await axios.delete(`/api/students/${id}`);
      const students = await axios("/api/students/");
      this.setState({ data: students.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  searchStudents = async username => {
    let allStudents = [...this.state.data.students];
    if (this.state.allStudents === null) this.setState({ allStudents });

    let students = this.state.data.students.filter(({ name }) =>
      name.toLowerCase().includes(username.toLowerCase())
    );
    if (students.length > 0) this.setState({ data: { students } });

    if (username.trim() === "")
      this.setState({ data: { students: this.state.allStudents } });
  };

  render() {
    let students;

    if (this.state.data)
      students =
        this.state.data.students &&
        this.state.data.students.map(student => (
          <Student key={student._id} {...student} removeStudent={this.removeStudent} />
        ));
    else return <div className="Spinner-Wrapper"> <PropagateLoader color={'#333'} /> </div>;

    if (this.state.error) return <h1>{this.state.error}</h1>;
    if (this.state.data !== null)
      if (!this.state.data.students.length)
        return <div className="d-flex justify-content-center flex-nowrap">

                  <div className="btn pull-right"> 
                  <Link to={{ pathname: '/addStudent'}}>
                       <button className="Add-Button fa fa-plus">Add Student</button>
                   </Link>
                   </div>   

                <h1 className="No-Students">No students!</h1>
                </div>;

    return (
      <div className="Table-Wrapper">
        <h1>Students:</h1>
        <div className="text-right">
            <div className="align-self-end">
              <Link to={{ pathname: '/addStudent'}}>
               <button className="Add-Button fa fa-plus">Add Student</button>
            </Link>
            </div>
        </div>
        <table className="Table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Enrollment Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{students}</tbody>
        </table>
      </div>
    );
  }
}

export default Students;
