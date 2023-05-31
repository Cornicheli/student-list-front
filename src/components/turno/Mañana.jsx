import { NavLink } from "react-router-dom"

const Mañana = () => {

    return (
        <div className="container">

        <div className="m-1">
            <h1 className="text-center p-2">Turno Mañana</h1>
        </div>

        <div className="d-flex align-items-center justify-content-center flex-column">
            <NavLink to='/AdultosM' className='bg-ligth text-dark text-decoration-none fs-2 m-2 border border-dark shadow p-2 mb-3 bg-body rounded w-50 text-center'>
                Adulto
            </NavLink>

            <NavLink to='/niñxsM' className='bg-ligth text-dark text-decoration-none fs-2 m-2 border border-dark shadow p-2 mb-3 bg-body rounded w-50 text-center'>
                Chicxs
            </NavLink>

            <NavLink to='/AquagymM' className='bg-ligth text-dark text-decoration-none fs-2 m-2 border border-dark shadow p-2 mb-3 bg-body rounded w-50 text-center'>
                AquaGym
            </NavLink>
        </div>

    </div>
    )

}

export default Mañana