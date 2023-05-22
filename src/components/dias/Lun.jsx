import { NavLink } from "react-router-dom";
import { NavBar } from "../../components"

const Lun = () => {

    return (
        <>
        <div className="bg-aquagym h-full">
            <NavBar/>

            <div className="container p-3">
                <table className="table table-bordered bg-dark">

                    <thead>
                        <tr>
                            <th className="fs-2 text-light text-center"> Actividades de Lunes </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle bg-dark" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Adultos
                                    </button>
                                    <ul className="dropdown-menu bg-dark p-2" aria-labelledby="dropdownMenuButton1">
                                        <li><NavLink className="dropdown-item bg-dark p-2" href="#">Mañana</NavLink></li>
                                        <li><NavLink className="dropdown-item bg-dark p-2" href="#">Tarde</NavLink></li>
                                        <li><NavLink className="dropdown-item bg-dark p-2" href="#">Noche</NavLink></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle bg-dark" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Niños
                                    </button>
                                    <ul className="dropdown-menu bg-dark p-2" aria-labelledby="dropdownMenuButton1">
                                        <li><NavLink className="dropdown-item bg-dark p-2" href="#">Mañana</NavLink></li>
                                        <li><NavLink className="dropdown-item bg-dark p-2" href="#">Tarde</NavLink></li>
                                        <li><NavLink className="dropdown-item bg-dark p-2" href="#">Noche</NavLink></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>


                    


                </table>
            </div>
            </div>
        </>
    )
}

export default Lun