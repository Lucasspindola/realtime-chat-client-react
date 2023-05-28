import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AllContexts } from "./components/allContexts/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AllContexts>
        <App />
      </AllContexts>
    </BrowserRouter>
  </React.StrictMode>
);
