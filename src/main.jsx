import React from "react";
import ReactDOM from "react-dom/client";
import { Login, Register } from "./pages/index";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import List from "./components/List";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/alumno" element={<List />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
