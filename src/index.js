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

  componentWillMount() {
    const localStorageState = JSON.parse(
      window.localStorage.getItem("won-rva")
    );

    if (typeof localStorageState === "object") {
      this.setState({ ...localStorageState });
    }
  }

  changeState = (key, value) => {
    this.setState({ [key]: value }, () =>
      window.localStorage.setItem("won-rva", JSON.stringify(this.state))
    );
  };

  render() {
    const { locale } = this.state;

    return (
      <Home t={t[locale]} locale={locale} changeState={this.changeState} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
