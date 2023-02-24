import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import storeValueCounter from "./storeValueCounter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={storeValueCounter}>
    <App />
  </Provider>
);
