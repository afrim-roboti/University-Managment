import React from 'react';
import './Department.css';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import { withRouter } from 'react-router'

const Department = ({ _id, name, numberofClass, numberofProffesors, numberofStudents, removeDepartment }) => {

  return(
        <tr>
          <td>{ name }</td>
          <td>{ numberofClass }</td>
          <td>{ numberofProffesors }</td>
          <td>{ numberofStudents }</td>
          <td>
            <button onClick={ () => removeDepartment(_id) } className="Action-Button fa fa-trash"></button>
            <Link to={{ pathname: '/editDepartment', search: _id}}>
            <button className="Action-Button fa fa-pencil"></button>
            </Link>
          </td>

        </tr>
  );
};




export default withRouter(Department);
