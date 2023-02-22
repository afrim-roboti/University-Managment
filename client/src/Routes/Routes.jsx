import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

// Components
import NavBar from "../Layout/NavBar/NavBar";
import Home from "../Layout/Home/Home";
import Lectures from "../Layout/Lectures/Lectures";
import EditLecture from "../components/Lecture/EditLecture/EditLecture";
import AddLectureLayout from "../Layout/Lectures/AddLecture";


import Departments from "../Layout/Departments/Departments";
import EditDepartment from "../components/Department/EditDepartment/EditDepartment";
import AddDepartmentLayout from "../Layout/Departments/AddDepartment";

import Professors from "../Layout/Professors/Professors";
import AddProfessorLayout from "../Layout/Professors/AddProfessor";
import EditProfessor from "../components/Professor/EditProfessor/EditProfessor";

import Students  from "../Layout/Students/Students";
import AddStudent from "../components/Student/AddStudent/AddStudent";
import EditStudent from "../components/Student/EditStudent/EditStudent";

const Routes = () => {
  return (
    <Fragment>
        <NavBar />
        <Switch>
        <Route path="/" component={ Home } exact />
          <Route path="/lectures" component={ Lectures } exact />
          <Route path="/addLecture" component={ AddLectureLayout } exact />
          <Route path="/editLecture" component={ EditLecture } exact />

          <Route path="/departments" component={ Departments } exact />
          <Route path="/addDepartment" component={ AddDepartmentLayout } exact />
          <Route path="/editDepartment" component={ EditDepartment } exact />

          <Route path="/professors" component={ Professors } exact />
          <Route path="/addProfessor" component={ AddProfessorLayout } exact />
          <Route path="/editProfessor" component={ EditProfessor } exact />
          
          <Route path="/students" component={ Students } exact />
          <Route path="/addStudent" component={ AddStudent } exact />
          <Route path="/editStudent" component={ EditStudent } exact />  
          
        </Switch>
      </Fragment>
  );
};

export default Routes;
