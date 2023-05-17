import { Link  } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 h-35">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Ituzaingo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dias de semana
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <Link  className="dropdown-item" to="/">
                      Lunes
                    </Link >
                  </li>
                  <li>
                    <Link  className="dropdown-item" to="/signup">
                      Martes
                    </Link >
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Miercoles
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Jueves
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Viernes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sabado
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
