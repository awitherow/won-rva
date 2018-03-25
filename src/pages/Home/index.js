import React from "react";

import Introduction from "./sections/Introduction/";
import Activities from "./sections/Activities/";
import Footer from "./sections/Footer/";

export default function Home({ t }) {
  const { header, intro, info } = t;
  return (
    <div id="home" className="Home">
      <Introduction header={header} intro={intro} />
      <Activities info={info} />
      <Footer />
    </div>
  );
}
