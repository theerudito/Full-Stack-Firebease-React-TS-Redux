import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Components/redux/STORE/store";
import "./Components/STYLES/style.scss";
import { ROUTER } from "./Components/ROUTER/ROUTER";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Components/ROUTER/Layout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ROUTER />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
