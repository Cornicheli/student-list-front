import { NavLink } from "react-router-dom"

const Tarde = () => {
    return (

        <div className="container">

        <div className="m-1">
            <h1 className="text-center p-2">Turno Tarde</h1>
        </div>

        <div className="d-flex align-items-center justify-content-center flex-column">
            <NavLink to='/AdultosT' className='bg-dark text-white text-decoration-none fs-2 m-2'>
                Adulto
            </NavLink>

            <NavLink to='/niñxsT' className='bg-dark text-white text-decoration-none fs-2 m-2'>
                Chicxs
            </NavLink>

            <NavLink to='/AquagymT' className='bg-dark text-white text-decoration-none fs-2 m-2'>
                AquaGym
            </NavLink>
        </div>

    </div>

    )
}

export default Tarde