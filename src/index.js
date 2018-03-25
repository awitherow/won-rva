import React, { Component } from "react";
import ReactDOM from "react-dom";

// service worker
import registerServiceWorker from "./registerServiceWorker";

// components
import Home from "./pages/Home/";

// styles
import "./index.css";

// translations
import t from "./locale/";

class App extends Component {
  state = {
    locale: "en"
  };

  render() {
    const { locale } = this.state;
    return <Home t={t[locale]} />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
