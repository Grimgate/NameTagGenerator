import React, { Component } from "react";
import NameTagList from "./NameTagList.js";
import UserInput from "./UserInput";

class App extends Component {
  state = { names: [] };

  componentDidMount() {
    var storedString = localStorage.getItem("stateString");
    if (storedString) {
      var savedState = JSON.parse(storedString);
      this.setState({ names: savedState });
    }
  }

  addName = name => {
    var newNames = [name, ...this.state.names];
    this.setState({ names: newNames });
    var stateString = JSON.stringify(newNames);
    localStorage.setItem("stateString", stateString);
  };

  removeName = clickedIndex => {
    // to learn how the .filter method works, check out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    var filterCallback = (_, index) => index !== clickedIndex;
    var newNames = this.state.names.filter(filterCallback);
    this.setState({ names: newNames });
  };
  render() {
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>

        <UserInput addName={this.addName} />
        <NameTagList names={this.state.names} removeName={this.removeName} />
      </div>
    );
  }
}

export default App;
