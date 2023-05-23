import { NavLink } from "react-router-dom";
import { NavBar } from "../../components"

const Mar = () => {

    return (
        <>
            <div className="bg-aquagym h-full">
                <NavBar/>

                <div className="container pt-3">

                            <div className="mt-3 mb-3">
                                <h1 className="fs-2 text-light text-center"> Actividades Semanales </h1>
                            </div>

                            <div className="container d-flex justify-content-evenly bg-dark">

                                    <NavLink to='/' className="btn btn-outline-primary rounded text-white fs-5">
                                        Mañana
                                    </NavLink>

                                    <NavLink to='/' className="btn btn-outline-primary rounded text-white fs-5">
                                        Tarde
                                    </NavLink>

                                    <NavLink to='/' className="btn btn-outline-primary rounded text-white fs-5">
                                        Noche
                                    </NavLink>

                            </div>

                </div>
            </div>
        </>
    )
}

export default Mar