import React from "react";

// carousel
import Slider from "./slider";

import "./index.css";

function getWindowSizes() {
  let width = 0;
  let height = 0;

  if (typeof window.innerWidth === "number") {
    width = window.innerWidth;
    height = window.innerHeight;
  } else {
    if (
      document.documentElement &&
      (document.documentElement.clientWidth ||
        document.documentElement.clientHeight)
    ) {
      width = document.documentElement.clientWidth;
      height = document.documentElement.clientHeight;
    } else {
      if (
        document.body &&
        (document.body.clientWidth || document.body.clientHeight)
      ) {
        width = document.body.clientWidth;
        height = document.body.clientHeight;
      }
    }
  }

  return {
    width,
    height
  };
}

export default function About({ about }) {
  const { width } = getWindowSizes();

  console.log(width);
  return (
    <div id="about" className="Home-about">
      <Slider />
      <div className="Home-about-info inner-wrapper flex-info">
        <div className="Home-about-info-text">
          <h3>{about.title}</h3>
          {about.about_paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          <p className="link-button-container">
            <a
              href="mailto:richmond-va@wonbuddhism.org?Interest in Won-Buddhism Richmond Temple"
              className="link-button"
            >
              Email Us Today
            </a>
          </p>
          <h3>{about.subtitle}</h3>
          {about.about_won_paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          <p className="link-button-container">
            <a
              href="http://www.wonbuddhism.org/#/what-is-won-buddhism"
              className="link-button"
            >
              Learn More
            </a>
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.815714206018!2d-77.29837195348834!3d37.63002244590334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b12207d0818e81%3A0xb7b75e251d8e2779!2s8266+Walnut+Grove+Rd%2C+Mechanicsville%2C+VA+23111!5e0!3m2!1sen!2sus!4v1522089571911"
          width={width <= 450 ? width : 450}
          height={width <= 450 ? width : 450}
          frameBorder="0"
          allowFullScreen
          title="Location of Won Buddhism RVA Temple"
          className="map-iframe"
        />
      </div>
    </div>
  );
}
