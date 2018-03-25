import React from "react";
import logo from "./logo.png";
import "./Home.css";

export default function Home({ t }) {
  const { header, intro, info } = t;

  return (
    <div id="home" className="Home">
      <div className="Home-top">
        <ul className="header-links">
          <li>
            <a href="#home">{header.home}</a>
          </li>
          <li>
            <a href="#activities">{header.activities}</a>
          </li>
          <li>
            <a href="">{header.about}</a>
          </li>
          <li>
            <a href="">{header.contact}</a>
          </li>
        </ul>
        <div className="Home-intro">
          <img src={logo} className="Home-logo" alt="logo" />
          <h1 className="Home-title">{intro.title}</h1>
          <h2 className="Home-subtitle">{intro.subtitle}</h2>
        </div>
      </div>
      <div id="activities" className="Home-info">
        <div className="Home-info-programs">
          <h3>{info.programs.title}</h3>
          <div className="Home-info-items">
            {info.programs.items.map(({ day, title, description }, i) => (
              <div key={i} className="Home-info-item">
                <h4 className="Home-info-item-title">
                  {day} - {title}
                </h4>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="Home-info-upcoming">
          <h3>{info.upcoming.title}</h3>
          <div className="Home-info-items">
            {info.upcoming.items
              .slice(0, 3)
              .map(({ date, title, description, register }, i) => (
                <div key={i} className="Home-info-item">
                  <h4 className="Home-info-item-title">
                    {date} - {title}
                  </h4>
                  <p>{description}</p>
                  <a href={`mailto:${register}`}>More Info by Email</a> or call
                  (804)-235-XXXX.
                </div>
              ))}
          </div>
          <a href="">See All Future Events</a>
        </div>
      </div>
      <footer>Copyright Won-Buddhism of Richmond, 2018</footer>
    </div>
  );
}
