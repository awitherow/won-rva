import React from "react";

import "./index.css";

import logo from "./logo.png";

export default function Introduction({ header, intro }) {
  return (
    <div className="Home-top">
      <ul className="header-links">
        <li>
          <a href="#home">{header.home}</a>
        </li>
        <li>
          <a href="#activities">{header.activities}</a>
        </li>
        <li>
          <a href="#about">{header.about}</a>
        </li>
      </ul>
      <div className="Home-intro">
        <img src={logo} className="Home-logo" alt="logo" />
        <h1 className="Home-title">{intro.title}</h1>
        <h2 className="Home-subtitle">{intro.subtitle}</h2>
      </div>
    </div>
  );
}
