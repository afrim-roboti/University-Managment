import React, { Component } from "react";
import "./Departments.css";
import axios from "axios";
import { Link } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
// Components
import Department from "../../components/Department/Department";


// Ketu eshte tabela ne Front ne momentin kur hym tek meny-ja departments.
// Nese ka departments ne Db atehere shfaqet tabela perndryshe vetem buttoni Add New Deparmtnet 
class Departments extends Component {
  state = {
    data: null,
    allDepartments: null,
    error: ""
  };
 // kur thirret component Departments behet invoke apo thirret automatikisht funksioni
 // kur funksioni ben thirrje pastaj ne Sever ku i merr te gjitha departments permes api
 // dhe  ruan te dhenat ne konstaten departments, e cila renderohet me posht ne html table
  async componentDidMount() {
    try {
      const departments = await axios("/api/departments");
      this.setState({ data: departments.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  removeDepartment = async id => {
    try {
      const departmentRemoved = await axios.delete(`/api/departments/${id}`);
      const departments = await axios("/api/departments/");
      this.setState({ data: departments.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  searchDepartments = async username => {
    let allDepartments = [...this.state.data.departments];
    if (this.state.allDepartments === null) this.setState({ allDepartments });

    let departments = this.state.data.departments.filter(({ name }) =>
      name.toLowerCase().includes(username.toLowerCase())
    );
    if (departments.length > 0) this.setState({ data: { departments } });

    if (username.trim() === "")
      this.setState({ data: { departments: this.state.allDepartments } });
  };

  render() {
    let departments;

    if (this.state.data)
    departments =
        this.state.data.departments &&
        this.state.data.departments.map(department => (
          <Department key={department.numberofClass} {...department} removeDepartment={this.removeDepartment} />
        ));
    else return <div className="Spinner-Wrapper"> <PropagateLoader color={'#333'} /> </div>;

    if (this.state.error) return <h1>{this.state.error}</h1>;
    if (this.state.data !== null)
      if (!this.state.data.departments.length)
        return <div className="d-flex justify-content-center flex-nowrap">

                  <div className="btn pull-right"> 
                  <Link to={{ pathname: '/addDepartment'}}>
                       <button className="Add-Button fa fa-plus">Add Department</button>
                   </Link>
                   </div>   

                  <h1 className="No-Departments">No departments!</h1>
              </div>;

    return (
      <div className="Table-Wrapper">
        <h1>Departments:</h1>
        {/* <SearchDepartments searchDepartments={this.searchDepartments} /> */}
        <Link to={{ pathname: '/addDepartment'}}>
         <button className="Add-Button fa fa-plus">Add Department</button>
        </Link>
        <table className="Table">
          <thead>
            <tr>
              <th>Name</th>
              <th>numberofClass</th>
              <th>numberofProffesors</th>
              <th>numberofStudents</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{departments}</tbody>
        </table>
      </div>
    );
  }
}

export default Departments;