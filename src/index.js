import React from "react";
import ReactDOM from "react-dom";
// import "modern-normalize/modern-normalize.css";
import App from "./components/App";
import "modern-normalize/modern-normalize.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>{<App />}</React.StrictMode>,
  document.getElementById("root")
);