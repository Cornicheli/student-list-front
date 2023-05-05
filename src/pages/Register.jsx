import React from "react";
import { NavBar } from "../components";
import { Link } from "react-router-dom";
import "../assets/login.css";

export default function Register() {
  return (
    <>
      {/* <header> */}
      <NavBar />
      {/* </header> */}
      <main className="ctn-main-login h-100 d-flex  flex-column align-items-center justify-content-center">
        <section className="main-login">
          <form className="w-75">
            <div className="mb-4 w-100">
              <label for="exampleInputEmail1" className="form-label text-light">
                Mail
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-4 w-100">
              <label
                for="exampleInputPassword1"
                className="form-label text-light"
              >
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Registrarse
            </button>
            <p className="mt-4 text-light">
              Ya tenes cuenta ?{" "}
              <Link className="text-light" to="/">
                Ingresa
              </Link>
            </p>
          </form>
        </section>
      </main>
    </>
  );
}
