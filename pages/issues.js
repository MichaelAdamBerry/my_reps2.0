import React from "react";
import Router from "next/router";

export default class Issues extends React.Component {
  state = { term: "" };

  inputChange = e => {
    this.setState({ term: e.target.value });
  };

  handleSubmit = () => {
    event.preventDefault();
    console.log(`onSubmit fires with ${this.state.term}`);
    Router.push(`/issues_find?term=${this.state.term}`);
  };
  render() {
    const { term } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={term}
            label="Find an issue"
            onChange={this.inputChange}
          />
          <button onSubmit={this.handleSubmit}>Find Issue</button>
        </form>
      </div>
    );
  }
}
