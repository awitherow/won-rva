import React from "react";
import logo from "./logo.png";
import "./Home.css";

export default function Home({ t }) {
  const { header, intro } = t;

  return (
    <div className="App">
      <ul className="header-links">
        <li>
          <a href="">{header.home}</a>
        </li>
        <li>
          <a href="">{header.ongoing}</a>
        </li>
        <li>
          <a href="">{header.upcoming}</a>
        </li>
        <li>
          <a href="">{header.contact}</a>
        </li>
      </ul>
      <div className="App-intro">
        <div className="App-intro-title-container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{intro.heading}</h1>
        </div>
      </div>
    </div>
  );
}
