// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LeitnerProvider } from "./context/LeitnerContext";
import "./index.css"; // Tailwind

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js")
      .then(() => console.log("Service Worker registered"))
      .catch((err) => console.log("SW registration failed", err));
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LeitnerProvider>
      <App />
    </LeitnerProvider>
  </React.StrictMode>
);
