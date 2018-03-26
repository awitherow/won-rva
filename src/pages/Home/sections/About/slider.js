import React from "react";

import Slider from "react-slick";
import "./slider.css";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    adaptiveHeight: true
  };

  return (
    <Slider {...settings}>
      <img
        alt="stacked zen stones"
        className="slide-image"
        src={require("./1.jpg")}
      />
      <img
        alt="more stacked zen stones"
        className="slide-image"
        src={require("./2.jpg")}
      />
      <img
        alt="even more stacked zen stones"
        className="slide-image"
        src={require("./3.jpg")}
      />
    </Slider>
  );
}
