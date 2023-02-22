import React, { Component } from "react";
import "./SearchDepartments.css";

class SearchDepartments extends Component {
  state = { value: "" };

  onChangeHandler = e => {
    this.setState({ value: e.target.value }, () => {
      this.props.searchDepartments(this.state.value);
    });
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Filter by name..."
        name="name"
        onChange={ this.onChangeHandler }
        className="Search-Department-Input"
      />
    );
  }
}

export default SearchDepartments;
