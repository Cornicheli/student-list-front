import React from "react";
import "../assets/inputPass.css";

export default function InputPass() {
  return (
    <label className="ctn-password">
      Contraseña
      <input className="password" type="password" />
    </label>
  );
}
