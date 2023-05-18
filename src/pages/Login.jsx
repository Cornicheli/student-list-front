import { useState } from "react";
import { BASE_URL } from "../api/api";
import { NavBar } from "../components";
import { NavLink } from "react-router-dom";
// import { InputEmail, InputPass, Button } from "../components";
import axios from "axios";
import "../assets/login.css";

export const Login = () => {

  const [formData, setFormData] = useState({
    email : '',
    password : '',
  });
  
  const handleOnChange = (e) => {
    const { name , value } = e.target
    let newFormData = {...formData, [ name ] : value}
    setFormData(newFormData)
  }

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      if(!e.target.checkValidity()){
        console.log('no enviado')
      }else{
        let res = await axios.post(`${BASE_URL}/auth/signin`,formData)
        console.log(res.data)
      }
    } catch (error) {
      console.log(error)
    }


    
  };

  return (
    <>
      <NavBar />
      <main className="ctn-main-login h-100 d-flex  flex-column align-items-center justify-content-center">
        <section className="main-login">
          <form className="w-75" onSubmit={handleOnSubmit}>
            <div className="mb-4 w-100">
              <label key="exampleInputEmail1" className="form-label text-light">
                mail
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                onChange={handleOnChange}
              />
            </div>
            <div className="mb-4 w-100">
              <label key="exampleInputPassword1" className="form-label text-light">
                password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                onChange={handleOnChange}
              />
            </div>
            <button type="submit" className="btn btn-primary mb-3">
              Ingresar
            </button>
            <p className="mt-4 text-light">
              No tenes cuenta ?{" "}
              <NavLink className="text-light" to="/signup">
                Registrate
              </NavLink>
              {" "}
              <NavLink className="text-light" to="/alumno">
                alumno
              </NavLink>
            </p>
          </form>
        </section>
      </main>
    </>
  );
}
export default Login
