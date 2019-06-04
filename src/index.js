import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./AppContainer";
import "font-awesome/css/font-awesome.css";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const oldFetch = window.fetch;
window.fetch = function fetch(url, settings) {
  const headers = Object.assign(settings ? settings.headers : {}, {
    authorization: localStorage.getItem("token")
  });
  // eslint-disable-next-line
  settings = settings || {};
  settings.headers = headers;
  return oldFetch(url, settings);
};

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
