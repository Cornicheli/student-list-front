import React from "react";
import { InputMail, InputPass } from "../components/index";
import "../assets/login.css";

export default function Login() {
  return (
    <main className="main-login">
      <div style={{ marginTop: 20 }}>
        <h1 className="title-login">Iniciar Sesion</h1>
      </div>
      <form className="form-login">
        <InputMail />
        <InputPass />
        <button className="btn-login" type="submit">
          Ingresar
        </button>
      </form>
      <h2 className="subtitle-login">¿No tiene una cuenta? Regístrese</h2>
    </main>
  );
}
