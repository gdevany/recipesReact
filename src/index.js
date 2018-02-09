// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import "./index.css";
// import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./westbankstyle.css";
import {Provider} from "react-redux";
import store from "./store";


const oldFetch = window.fetch;
window.fetch = function fetch(url, settings) {
  const headers = Object.assign(settings ? settings.headers : {},
  {authorization: localStorage.getItem("token")});
  // eslint-disable-next-line
  settings = settings || {};
  settings.headers = headers;
  return oldFetch(url, settings);
};


ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById("root")
);
