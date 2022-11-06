import React from "react";
import { createRoot } from "react-dom/client";
import "./components/app-shell/app-bar";
import "./components/app-shell/foot-bar";
import App from "./components/App.js";
import "./styles/main.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
