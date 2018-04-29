import React from "react";

import Slider from "react-slick";
import "./slider.css";

const images = [
  {
    alt: "the temple reverendes Kim and Diane",
    number: 0
  },
  {
    alt: "the temple reverendes Kim and Diane",
    number: 1
  },
  {
    alt: "a view of the driveway",
    number: 3
  },
  {
    alt: "a look inside the temple",
    number: 5
  },
  {
    alt: "welcome to the temple!",
    number: 6
  },
  {
    alt: "a look of the driveway approaching the temple",
    number: 7
  }
];

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
      {images.map(image => (
        <img
          alt={image.alt}
          src={require(`./img/${image.number}.jpg`)}
          className="slide-image"
        />
      ))}
    </Slider>
  );
}
