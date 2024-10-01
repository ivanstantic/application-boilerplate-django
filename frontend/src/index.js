import "regenerator-runtime/runtime";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./assets/css/index.css";
import store from "./store/store";
import App from "./App";


const app = (
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>
);

// Render app
const container = document.getElementById("app");
const root = createRoot(container);
root.render(app);
