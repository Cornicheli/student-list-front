import { NavLink } from 'react-router-dom'
// import { Lun, Mar, Mier, Jue, Vier, Sab } from '../components/dias'

export const GestionDeDias = () => {
    return (
        <>
        <div className="accordion" id="accordionExample">

            <div className="accordion-item">

                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button text-dark fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Lunes
                    </button>
                </h2>

                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">

                    <div className="accordion-body d-flex justify-content-center">
                        <NavLink to="/mañana" className='text-decoration-none text-dark fs-4'>
                            Niños
                        </NavLink>
                    </div>

                    <div className="accordion-body d-flex justify-content-center">
                        <NavLink to="/lunes" className='text-decoration-none text-dark fs-4'>
                            Adultos
                        </NavLink>
                    </div>

                    <div className="accordion-body d-flex justify-content-center">
                        <NavLink to="/lunes" className='text-decoration-none text-dark fs-4'>
                            AquaGym
                        </NavLink>
                    </div>

                </div>

            </div>
        </div>

            <div className="accordion-item">

                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed text-dark fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Martes
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">

                    <div className="accordion-body d-flex justify-content-center">
                        <NavLink to="/lunes" className='text-decoration-none text-dark fs-4'>
                            Niños
                        </NavLink>
                    </div>

                    <div className="accordion-body d-flex justify-content-center">
                        <NavLink to="/lunes" className='text-decoration-none text-dark fs-4'>
                            Adultos
                        </NavLink>
                    </div>

                    <div className="accordion-body d-flex justify-content-center">
                        <NavLink to="/lunes" className='text-decoration-none text-dark fs-4'>
                            AquaGym
                        </NavLink>
                    </div>

                </div>
            </div>

            <div className="accordion-item">

                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed text-dark fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Miércoles
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">

                    <div className="accordion-body d-flex justify-content-center">
                        <NavLink to="/lunes" className='text-decoration-none text-dark fs-4'>
                            Niños
                        </NavLink>
                    </div>

                    <div className="accordion-body d-flex justify-content-center">
                        <NavLink to="/lunes" className='text-decoration-none text-dark fs-4'>
                            Adultos
                        </NavLink>
                    </div>

                    <div className="accordion-body d-flex justify-content-center">
                        <NavLink to="/lunes" className='text-decoration-none text-dark fs-4'>
                            AquaGym
                        </NavLink>
                    </div>

                </div>
            </div>

            <div className="accordion-item">

                <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed text-dark fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Jueves
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">

                    <div className="accordion-body d-flex justify-content-center">
                        <NavLink to="/lunes" className='text-decoration-none text-dark fs-4'>
                            Niños
                        </NavLink>
                    </div>

                    <div className="accordion-body d-flex justify-content-center">
                        <NavLink to="/lunes" className='text-decoration-none text-dark fs-4'>
                            Adultos
                        </NavLink>
                    </div>

                    <div className="accordion-body d-flex justify-content-center">
                        <NavLink to="/lunes" className='text-decoration-none text-dark fs-4'>
                            AquaGym
                        </NavLink>
                    </div>

                </div>
            </div>

            <div className="accordion-item">

                <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed text-dark fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Viernes
                    </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">

                    <div className="accordion-body d-flex justify-content-center">
                        <NavLink to="/lunes" className='text-decoration-none text-dark fs-4'>
                            Niños
                        </NavLink>
                    </div>

                    <div className="accordion-body d-flex justify-content-center">
                        <NavLink to="/lunes" className='text-decoration-none text-dark fs-4'>
                            Adultos
                        </NavLink>
                    </div>

                    <div className="accordion-body d-flex justify-content-center">
                        <NavLink to="/lunes" className='text-decoration-none text-dark fs-4'>
                            AquaGym
                        </NavLink>
                    </div>

                </div>
            </div>

            <div className="accordion-item">

                <h2 className="accordion-header" id="headingSix">
                    <button className="accordion-button collapsed text-dark fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        Sábado
                    </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                
                    <div className="accordion-body d-flex justify-content-center">
                        <NavLink to="/lunes" className='text-decoration-none text-dark fs-4'>
                            Niños
                        </NavLink>
                    </div>

                    <div className="accordion-body d-flex justify-content-center">
                        <NavLink to="/lunes" className='text-decoration-none text-dark fs-4'>
                            Adultos
                        </NavLink>
                    </div>

                    <div className="accordion-body d-flex justify-content-center">
                        <NavLink to="/lunes" className='text-decoration-none text-dark fs-4'>
                            AquaGym
                        </NavLink>
                    </div>

                </div>
            </div>
        </>
    )
}
