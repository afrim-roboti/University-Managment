import React, { Component } from "react";
import "./Lectures.css";
import axios from "axios";
import { Link } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
// Components
import Lecture from "../../components/Lecture/Lecture";



class Lectures extends Component {
  state = {
    data: null,
    allLectures: null,
    error: ""
  };

  async componentDidMount() {
    try {
      const lectures = await axios("/api/lectures/");
      this.setState({ data: lectures.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  removeLecture = async id => {
    try {
      const lectureRemoved = await axios.delete(`/api/lectures/${id}`);
      const lectures = await axios("/api/lectures/");
      this.setState({ data: lectures.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  searchLectures = async username => {
    let allLectures = [...this.state.data.lectures];
    if (this.state.allLectures === null) this.setState({ allLectures});

    let lectures = this.state.data.lectures.filter(({ name }) =>
      name.toLowerCase().includes(username.toLowerCase())
    );
    if (lectures.length > 0) this.setState({ data: { lectures } });

    if (username.trim() === "")
      this.setState({ data: { lectures: this.state.allLectures} });
  };

  render() {
    let lectures;

    if (this.state.data)
    lectures =
        this.state.data.lectures &&
        this.state.data.lectures.map(lecture => (
          <Lecture key={lecture.numberofClass} {...lecture} removeLecture={this.removeLecture} />
        ));
    else return <div className="Spinner-Wrapper"> <PropagateLoader color={'#333'} /> </div>;

    if (this.state.error) return <h1>{this.state.error}</h1>;
    if (this.state.data !== null)
      if (!this.state.data.lectures.length)
        return <div className="d-flex justify-content-center flex-nowrap">

                  <div className="btn pull-right"> 
                  <Link to={{ pathname: '/addLecture'}}>
                       <button className="Add-Button fa fa-plus">Add Lecture</button>
                   </Link>
                   </div>   

                  <h1 className="No-Lectures">No lectures</h1>
              </div>;

    return (
      <div className="Table-Wrapper">
        <h1>Lectures:</h1>
        <Link to={{ pathname: '/addLecture'}}>
         <button className="Add-Button fa fa-plus">Add Lecture</button>
        </Link>
        <table className="Table">
          <thead>
            <tr>
              <th>Name</th>
              <th>numberofClass</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{lectures}</tbody>
        </table>
      </div>
    );
  }
}

export default Lectures;