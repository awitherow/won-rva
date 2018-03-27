import React from "react";

// carousel
import Slider from "./slider";

import "./index.css";

export default function About({ about }) {
  return (
    <div id="about" className="Home-about">
      <div className="gold-background">
        <div className="Home-about-info inner-wrapper flex-info">
          <div className="Home-about-info-text">
            <h3>{about.title}</h3>
            {about.about_paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <p className="button-link-container-flex">
              <a
                about="_blank"
                href="mailto:richmond-va@wonbuddhism.org?Interest in Won-Buddhism Richmond Temple"
                className="button-link"
              >
                Email Us Today
              </a>
              <a
                about="_blank"
                href="https://www.google.com/maps/@37.6179084,-77.3496596,15z"
                className="button-link"
              >
                Visit Our Location
              </a>
            </p>
          </div>

          <div className="slides-container">
            <Slider />
          </div>
          {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.815714206018!2d-77.29837195348834!3d37.63002244590334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b12207d0818e81%3A0xb7b75e251d8e2779!2s8266+Walnut+Grove+Rd%2C+Mechanicsville%2C+VA+23111!5e0!3m2!1sen!2sus!4v1522089571911"
          width={width <= 450 ? width : 450}
          height={width <= 450 ? width : 450}
          frameBorder="0"
          allowFullScreen
          title="Location of Won Buddhism RVA Temple"
          className="map-iframe"
        /> */}
        </div>
      </div>

      <div className="light-grey-background">
        <div className="inner-wrapper flex-info">
          <div>
            <h3>{about.subtitle}</h3>
            {about.about_won_paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <div className="button-link-container-flex">
              <a
                about="_blank"
                href="http://www.wonbuddhism.org/#/what-is-won-buddhism"
                className="button-link"
              >
                More About Won-Buddhism
              </a>
              <a
                about="_blank"
                href="http://www.wonbuddhism.org/#/il-won-sang"
                className="button-link"
              >
                Our Teachings
              </a>
              <a
                about="_blank"
                href="http://www.wonbuddhism.org/#/timeless-zen"
                className="button-link"
              >
                How to Practice
              </a>
              <a
                about="_blank"
                href="http://www.wonbuddhism.org/#/resource"
                className="button-link"
              >
                Main Writings
              </a>
            </div>
          </div>
          <img
            className="il-won-image"
            src={require("./life-il-won.jpg")}
            alt="abundance of life flowering from the il-won-sang"
          />
        </div>
      </div>
    </div>
  );
}
