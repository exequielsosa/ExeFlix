import React from "react";
import { render } from "react-dom";
import "normalize.css";
import App from "./app";
import { GlobalStyles } from "./global-styles.js";
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';
// import reportWebVitals from './reportWebVitals';

render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
    <GlobalStyles />
    <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
// reportWebVitals();
