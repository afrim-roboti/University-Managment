import React, { Component } from "react";
import "./SearchProfessors.css";

class SearchProfessors extends Component {
  state = { value: "" };

  onChangeHandler = e => {
    this.setState({ value: e.target.value }, () => {
      this.props.searchProfessors(this.state.value);
    });
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Filter by name..."
        name="name"
        onChange={ this.onChangeHandler }
        className="Search-Professor-Input"
      />
    );
  }
}

export default SearchProfessors;
