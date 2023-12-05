import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // 代表严格模式
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
