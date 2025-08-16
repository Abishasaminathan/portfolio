import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

function bootstrap(){
  // Light theme by default for professional vibe
  const saved = localStorage.getItem("theme");
  const light = saved ? saved === "light" : true;
  document.documentElement.classList.toggle("light", light);
}
bootstrap();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
