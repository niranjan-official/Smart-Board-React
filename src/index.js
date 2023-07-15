import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/jsx/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registered:", registration);
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  });
}

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
