import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { jsx, css, Global, ClassNames } from "@emotion/react";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
