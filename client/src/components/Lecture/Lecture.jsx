import React from 'react';
import './Lecture.css';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import { withRouter } from 'react-router'

const Lecture = ({ _id, name, numberofClass, removeLecture}) => {

  return(
        <tr>
          <td>{ name }</td>
          <td>{ numberofClass }</td>
          <td>
            <button onClick={ () => removeLecture(_id) } className="Action-Button fa fa-trash"></button>
            <Link to={{ pathname: '/editLecture', search: _id}}>
            <button className="Action-Button fa fa-pencil"></button>
            </Link>
          </td>

        </tr>
  );
};




export default withRouter(Lecture);