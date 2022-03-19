import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.min.css";
import Routes from "./Routes";
import { PruebasProvider } from "./context/pruebas";

ReactDOM.render(
  <PruebasProvider>
    <Routes />
  </PruebasProvider>,

  document.getElementById("root")
);
