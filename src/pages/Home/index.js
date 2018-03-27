import React from "react";

import Introduction from "./sections/Introduction/";
import Activities from "./sections/Activities/";
import About from "./sections/About/";
import Footer from "./sections/Footer/";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home({ t, locale, changeState }) {
  const { header, intro, info, about } = t;
  return (
    <div id="home" className="Home">
      <Introduction
        locale={locale}
        header={header}
        intro={intro}
        changeState={changeState}
      />
      <Activities info={info} />
      <About about={about} />
      <Footer />
    </div>
  );
}
