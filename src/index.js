import React, { Component } from "react";
import ReactDOM from "react-dom";

// service worker
import registerServiceWorker from "./registerServiceWorker";

// components
import Home from "./pages/Home/";

// styles
import "./index.css";

// translations
import locale from "./locale/";

class App extends Component {
  state = {
    locale: "en"
  };

  render() {
    return <Home t={locale[this.state.locale]} />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
