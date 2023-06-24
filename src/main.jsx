import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./home/home";
import Navigation from "./Navbar";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navigation />
    <Home />
  </React.StrictMode>
);
