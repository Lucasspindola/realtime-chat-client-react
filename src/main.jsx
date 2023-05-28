import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import GlobalStyles from "./components/GlobalStyle/globalStyles.js";
import { BrowserRouter } from "react-router-dom";
import { AllContexts } from "./components/allContexts/index.jsx";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <AllContexts>
        <App />
      </AllContexts>
    </BrowserRouter>
  </React.StrictMode>
);
