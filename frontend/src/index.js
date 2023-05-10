import React from "react";
import ReactDOM from "react-dom/client";
import { Dapp } from "./components/Dapp";
import { BrowserRouter as Router } from "react-router-dom";

// We import bootstrap here, but you can remove if you want
// import "bootstrap/dist/css/bootstrap.css";
import "./styles/index.css";

// This is the entry point of your application, but it just renders the Dapp
// react component. All of the logic is contained in it.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Dapp />
    </Router>
  </React.StrictMode>
);
