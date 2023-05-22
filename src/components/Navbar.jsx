import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <h2 className="navbar-brand text-light">Gestion de Dias :</h2>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="text-light text-decoration-none" to="/lunes">
                    Lunes
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="text-light text-decoration-none" to="/martes">
                    Martes
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="text-light text-decoration-none" to="/miercoles">
                    Miercoles
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="text-light text-decoration-none" to="/jueves">
                    Jueves
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="text-light text-decoration-none" to="/viernes">
                    Viernes
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="text-light text-decoration-none" to="/sabados">
                    Sabados
                </NavLink>
            </li>
          </ul>

        </div>
    </div>
  </nav>
    </>
  );
}
