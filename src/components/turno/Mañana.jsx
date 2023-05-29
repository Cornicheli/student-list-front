import { NavLink } from "react-router-dom"

const Mañana = () => {

    return (
        <div className="container">

        <div className="m-1">
            <h1 className="text-center p-2">Turno Mañana</h1>
        </div>

        <div className="d-flex align-items-center justify-content-center flex-column">
            <NavLink to='/AdultosM' className='bg-dark text-white text-decoration-none fs-2 m-2'>
                Adulto
            </NavLink>

            <NavLink to='/niñxsM' className='bg-dark text-white text-decoration-none fs-2 m-2'>
                Chicxs
            </NavLink>

            <NavLink to='/AquagymM' className='bg-dark text-white text-decoration-none fs-2 m-2'>
                AquaGym
            </NavLink>
        </div>

    </div>
    )

}

export default Mañana