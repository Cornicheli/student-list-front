import { NavLink } from "react-router-dom"

const Tarde = () => {
    return (

        <div className="container">

        <div className="m-1">
            <h1 className="text-center p-2">Turno Tarde</h1>
        </div>

        <div className="d-flex align-items-center justify-content-center flex-column">
            <NavLink to='/AdultosT' className='bg-ligth text-dark text-decoration-none fs-2 m-2 border border-dark shadow p-2 mb-3 bg-body rounded w-50 text-center'>
                Adulto
            </NavLink>

            <NavLink to='/niñxsT' className='bg-ligth text-dark text-decoration-none fs-2 m-2 border border-dark shadow p-2 mb-3 bg-body rounded w-50 text-center'>
                Chicxs
            </NavLink>

            <NavLink to='/AquagymT' className='bg-ligth text-dark text-decoration-none fs-2 m-2 border border-dark shadow p-2 mb-3 bg-body rounded w-50 text-center'>
                AquaGym
            </NavLink>
        </div>

    </div>

    )
}

export default Tarde