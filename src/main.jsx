import React from "react";
import ReactDOM from "react-dom/client";
import { Login, Register, AquaGym, GestionDeDias } from "./pages/index";
import { List } from './components/index'
import { Lun, Mar, Mier, Jue, Vier, Sab } from "./components/dias/index"
import { Mañana, Tarde, Noche } from "./components/turno";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {TableContainer} from "./container/TableContainer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/alumno" element={<List/>} />
        <Route path="/aquagym" element={<AquaGym/>} />
        <Route path="/gestiondedias" element={<GestionDeDias/>} />
        <Route path="/Table" element={<TableContainer/>} />
        {/* Gestion de Dias */}
          <Route path="/lunes" element={<Lun/>} />
          <Route path="/martes" element={<Mar/>} />
          <Route path="/miercoles" element={<Mier/>} />
          <Route path="/jueves" element={<Jue/>} />
          <Route path="/viernes" element={<Vier/>} />
          <Route path="/sabados" element={<Sab/>} />
        {/* Gestion de Dias */}
        {/* Gestion de Turnos */}
          <Route path="/mañana" element={<Mañana />}/>
          <Route path="/tarde" element={<Tarde />}/>
          <Route path="/noche" element={<Noche />}/>
        {/* Gestion de Turnos */}

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
