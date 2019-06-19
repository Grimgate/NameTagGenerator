import React, { Component } from "react";

class UserInput extends Component {
  state = { name: "" };
  updateName = event => this.setState({ name: event.target.value });
  handleSubmit = event => {
    event.preventDefault();
    this.props.addName(this.state.name);

    this.setState({ name: "" });
  };

  render() {
    return (
      <div className="UserInput">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add A New Name Here..."
            value={this.state.name}
            onChange={this.updateName}
          />
          <input type="submit" value="Add A New Name Tag!" />
        </form>
      </div>
    );
  }
}

export default UserInput;
