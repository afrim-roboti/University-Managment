import React, { Component } from "react";
import "./Professors.css";
import axios from "axios";
import { Link } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
// Components
import Professor from "../../components/Professor/Professor";
import SearchProfessors from "../../components/Professor/SearchProfessor/SearchProfessors";


class Professors extends Component {
  state = {
    data: null,
    allProfessors: null,
    error: ""
  };

  async componentDidMount() {
    try {
      const professors = await axios("/api/professors/");
      this.setState({ data: professors.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  removeProfessor = async id => {
    try {
      const professorRemoved = await axios.delete(`/api/professors/${id}`);
      const professors = await axios("/api/professors/");
      this.setState({ data: professors.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  searchProfessors = async username => {
    let allProfessors = [...this.state.data.professors];
    if (this.state.allProfessors === null) this.setState({ allProfessors });

    let professors = this.state.data.professors.filter(({ name }) =>
      name.toLowerCase().includes(username.toLowerCase())
    );
    if (professors.length > 0) this.setState({ data: { professors } });

    if (username.trim() === "")
      this.setState({ data: { professors: this.state.allProfessors } });
  };

  render() {
    let professors;

    if (this.state.data)
    professors =
        this.state.data.professors &&
        this.state.data.professors.map(professor => (
          <Professor key={professor._id} {...professor} removeProfessor={this.removeProfessor} />
        ));
    else return <div className="Spinner-Wrapper"> <PropagateLoader color={'#333'} /> </div>;

    if (this.state.error) return <h1>{this.state.error}</h1>;
    if (this.state.data !== null)
      if (!this.state.data.professors.length)
        return <div className="d-flex justify-content-center flex-nowrap">

                  <div className="btn pull-right"> 
                  <Link to={{ pathname: '/addProfessor'}}>
                       <button className="Add-Button fa fa-plus">Add Professor</button>
                   </Link>
                   </div>   

                  <h1 className="No-Professors">No professors!</h1>
              </div>;

    return (
      <div className="Table-Wrapper">
        <h1>Professors:</h1>
        {/* <SearchProfessors searchProfessors={this.searchProfessors} /> */}
        <Link to={{ pathname: '/addProfessor'}}>
         <button className="Add-Button fa fa-plus">Add Professor</button>
        </Link>
        <table className="Table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{professors}</tbody>
        </table>
      </div>
    );
  }
}

export default Professors;
