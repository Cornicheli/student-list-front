import React from "react";
import ReactDOM from "react-dom/client";
import { Login, Register } from "./pages/index";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
