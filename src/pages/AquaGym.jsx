import { NavLink } from "react-router-dom";
import { NavBar } from "../components"
import './AquaGym.css'

const AquaGym = () => {

    return (
        <>
        <div className="bg-aquagym h-full">
            <NavBar/>

            <div className="container p-3">
                <table className="table table-bordered bg-dark">

                    <thead>
                        <tr>
                            <th className="fs-2 text-light text-center">Dias</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <NavLink className="text-decoration-none text-light fs-5">
                                    Martes
                                </NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <NavLink className="text-decoration-none text-light fs-5">
                                    Miercoles
                                </NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <NavLink className="text-decoration-none text-light fs-5">
                                    Jueves
                                </NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <NavLink className="text-decoration-none text-light fs-5">
                                    Viernes
                                </NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <NavLink className="text-decoration-none text-light fs-5">
                                    Sabados
                                </NavLink>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
            </div>
        </>
    )
}

export default AquaGym