import { BASE_URL } from "../api/api"
import { useState } from "react";
// import { NavBar } from "../components";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'
import "../assets/login.css";

const Register = () => {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    nombre : '',
    apellido : '',
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
      let res = await axios.post(`${BASE_URL}/auth/signup`,formData)
      console.log(res.data)
      if(res.data.success){
        Swal.fire({
          title: "Registro correcto",
          html: "Te redirigimos al la página de inicio...",
          timer: 2000,
          timerProgressBar: true,
          willClose: () => {
            navigate('/')
          },
        })
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Hay un error...",
        text: `Has introducido un correo o contraseña no válidos.`,
      });
    }
  };

  return (
    <>
      {/* <NavBar /> */}
      <main className="ctn-main-login h-100 d-flex  flex-column align-items-center justify-content-center">
        <section className="main-login">
          <form className="w-75" onSubmit={handleOnSubmit}>
          <div className="mb-4 w-100">
              <label key="exampleInputNombre1" className="form-label text-light">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputNombre1"
                aria-describedby="nombrelHelp"
                name='nombre'
                onChange={handleOnChange}
              />
            </div>
            <div className="mb-4 w-100">
              <label key="exampleInputApellido1" className="form-label text-light">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputApellido1"
                aria-describedby="nombrelHelp"
                name='apellido'
                onChange={handleOnChange}
              />
            </div>
            <div className="mb-4 w-100">
              <label key="exampleInputEmail1" className="form-label text-light">
                Mail
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name='email'
                onChange={handleOnChange}
              />
            </div>
            <div className="mb-4 w-100">
              <label key="exampleInputPassword1" className="form-label text-light">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name='password'
                onChange={handleOnChange}
              />
            </div>
            <button type="submit" className="btn btn-primary mb-3">
              Registrarse
            </button>
            <p className="mt-4 text-light">
              Ya tenes cuenta ?{" "}
              <NavLink className="text-light" to="/">
                Ingresa
              </NavLink>
            </p>
          </form>
        </section>
      </main>
    </>
  );
}
export default Register