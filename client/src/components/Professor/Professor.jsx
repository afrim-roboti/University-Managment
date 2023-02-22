import React from 'react';
import './Professor.css';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import { withRouter } from 'react-router'

const Professor = ({ _id, name, email, status, removeProfessor }) => {

  return(
        <tr>
          <td>{ name }</td>
          <td>{ email }</td>
          <td>{ status }</td>
          <td>
            <button onClick={ () => removeProfessor(_id) } className="Action-Button fa fa-trash"></button>
            <Link to={{ pathname: '/editProfessor', search: _id }}>
            <button className="Action-Button fa fa-pencil"></button>
            </Link>
          </td>

        </tr>
  );
};




export default withRouter(Professor);
