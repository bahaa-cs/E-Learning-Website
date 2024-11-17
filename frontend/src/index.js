import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootContainer = document.getElementById("root");

const root = ReactDOM.createRoot(rootContainer);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
