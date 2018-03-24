import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="header-links">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Ongoing</a>
          </li>
          <li>
            <a href="">Upcoming</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Admin</a>
          </li>
        </ul>
        <div className="App-intro">
          <div className="App-intro-title-container">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">
              Welcome to the Won Buddhist Temple of Richmond
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
