import React from "react";
import ReactDOM from "react-dom";

// service worker
import registerServiceWorker from "./registerServiceWorker";

// components
import Home from "./pages/Home/";

// styles
import "./index.css";

ReactDOM.render(<Home />, document.getElementById("root"));
registerServiceWorker();
