import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/jsx/App";
import {BrowserRouter as Router,Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered:', registration);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

root.render(
  <React.StrictMode>
    <Router>
   <Routes>
    <Route Component={App} path="/"/>
   </Routes>
    </Router>
  </React.StrictMode>
);
