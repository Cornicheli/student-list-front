import { NavLink } from "react-router-dom"

const Noche = () => {
    return (

        <div className="container">

            <div className="m-1">
                <h1 className="text-center p-2">Turno Noche</h1>
            </div>

            <div className="d-flex align-items-center justify-content-center flex-column">
                <NavLink to='/AdultosN' className='bg-dark text-white text-decoration-none fs-2 m-2'>
                    Adulto
                </NavLink>

                <NavLink to='/niñxsN' className='bg-dark text-white text-decoration-none fs-2 m-2'>
                    Chicxs
                </NavLink>

                <NavLink to='/AquagymN' className='bg-dark text-white text-decoration-none fs-2 m-2'>
                    AquaGym
                </NavLink>
            </div>

        </div>
    )
}

export default Noche