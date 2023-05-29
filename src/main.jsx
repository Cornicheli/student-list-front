import React from "react";
import ReactDOM from "react-dom/client";
import { Login, Register, GestionDeDias } from "./pages";
import { List } from './components/index'
import { Lun, Mar, Mier, Jue, Vier, Sab } from "./components/dias"
import { Mañana, Tarde, Noche } from "./components/turno";
import { AdultosM, AdultosT, AdultosN, NiñxsM, NiñxsT, NiñxsN, AquagymM, AquagymT, AquagymN} from "./components/grupo";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {TableContainer} from "./container/TableContainer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/alumno" element={<List/>} />
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
        {/* Gestion de Grupos */}
          <Route path="/AdultosM" element={<AdultosM />}/>
          <Route path="/AdultosT" element={<AdultosT />}/>
          <Route path="/AdultosN" element={<AdultosN />}/>
          <Route path="/niñxsM" element={<NiñxsM />}/>
          <Route path="/NiñxsT" element={<NiñxsT />}/>
          <Route path="/niñxsN" element={<NiñxsN />}/>
          <Route path="/AquagymM" element={<AquagymM />}/>
          <Route path="/AquagymT" element={<AquagymT />}/>
          <Route path="/AquagymN" element={<AquagymN />}/>
        {/* Gestion de Grupos */}

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
