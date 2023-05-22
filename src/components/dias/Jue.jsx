import { NavLink } from "react-router-dom";
import { NavBar } from "../../components"

const Jue = () => {

    return (
        <>
        <div className="bg-aquagym h-full">
            <NavBar/>

            <div className="container p-3">
                <table className="table table-bordered bg-dark">

                    <thead>
                        <tr>
                            <th className="fs-2 text-light text-center">Actividades </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <NavLink className="text-decoration-none text-light fs-5">
                                    Adultos
                                </NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <NavLink className="text-decoration-none text-light fs-5">
                                    Chicos
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

export default Jue