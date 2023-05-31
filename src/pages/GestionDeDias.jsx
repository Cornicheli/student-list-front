import { NavLink } from 'react-router-dom'
import '../assets/login.css'

export const GestionDeDias = () => {
    return (
        <main className='ctn-main-gestion d-flex flex-column justify-content-evenly aling-items-center'>
            <h1 className='title-gestion text-center'>Gestion de Dias</h1>
            <section className='ctn-accordion h-full'>
            <div className="accordion" id="accordionExample"> 


                <div className="accordion-item m-3">

                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button text-dark fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Lunes
                        </button>
                    </h2>
        
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">

                        <div className="accordion-body d-flex justify-content-center border m-2">
                            <NavLink to="/mañana" className='text-decoration-none text-dark fs-4'>
                                Mañana
                            </NavLink>
                        </div>

                        <div className="accordion-body d-flex justify-content-center border m-2">
                            <NavLink to="/tarde" className='text-decoration-none text-dark fs-4'>
                                Tarde
                            </NavLink>
                        </div>

                        <div className="accordion-body d-flex justify-content-center border m-2">
                            <NavLink to="/noche" className='text-decoration-none text-dark fs-4'>
                                Noche
                            </NavLink>
                        </div>

                    </div>

                </div>
            </div>

                <div className="accordion-item m-3">

                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed text-dark fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Martes
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">

                        <div className="accordion-body d-flex justify-content-center border m-2">
                            <NavLink to="/mañana" className='text-decoration-none text-dark fs-4'>
                                Mañana
                            </NavLink>
                        </div>

                        <div className="accordion-body d-flex justify-content-center border m-2">
                            <NavLink to="/tarde" className='text-decoration-none text-dark fs-4'>
                                Tarde
                            </NavLink>
                        </div>

                        <div className="accordion-body d-flex justify-content-center border m-2">
                            <NavLink to="/noche" className='text-decoration-none text-dark fs-4'>
                                Noche
                            </NavLink>
                        </div>

                    </div>
                </div>

                <div className="accordion-item m-3">

                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed text-dark fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Miércoles
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">

                        <div className="accordion-body d-flex justify-content-center border m-2">
                            <NavLink to="/mañana" className='text-decoration-none text-dark fs-4'>
                                Mañana
                            </NavLink>
                        </div>

                        <div className="accordion-body d-flex justify-content-center border m-2">
                            <NavLink to="/tarde" className='text-decoration-none text-dark fs-4'>
                                Tarde
                            </NavLink>
                        </div>

                        <div className="accordion-body d-flex justify-content-center border m-2">
                            <NavLink to="/noche" className='text-decoration-none text-dark fs-4'>
                                Noche
                            </NavLink>
                        </div>

                    </div>
                </div>

                <div className="accordion-item m-3">

                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed text-dark fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Jueves
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">

                        <div className="accordion-body d-flex justify-content-center border m-2">
                            <NavLink to="/mañana" className='text-decoration-none text-dark fs-4'>
                                Mañana
                            </NavLink>
                        </div>

                        <div className="accordion-body d-flex justify-content-center border m-2">
                            <NavLink to="/tarde" className='text-decoration-none text-dark fs-4'>
                                Tarde
                            </NavLink>
                        </div>

                        <div className="accordion-body d-flex justify-content-center border m-2">
                            <NavLink to="/noche" className='text-decoration-none text-dark fs-4'>
                                Noche
                            </NavLink>
                        </div>

                    </div>
                </div>

                <div className="accordion-item m-3">

                    <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button collapsed text-dark fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Viernes
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">

                    <div className="accordion-body d-flex justify-content-center border m-2">
                            <NavLink to="/mañana" className='text-decoration-none text-dark fs-4'>
                                Mañana
                            </NavLink>
                        </div>

                        <div className="accordion-body d-flex justify-content-center border m-2">
                            <NavLink to="/tarde" className='text-decoration-none text-dark fs-4'>
                                Tarde
                            </NavLink>
                        </div>

                        <div className="accordion-body d-flex justify-content-center border m-2">
                            <NavLink to="/noche" className='text-decoration-none text-dark fs-4'>
                                Noche
                            </NavLink>
                        </div>

                    </div>
                </div>

                <div className="accordion-item m-3">

                    <h2 className="accordion-header" id="headingSix">
                        <button className="accordion-button collapsed text-dark fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            Sábado
                        </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                    
                    <div className="accordion-body d-flex justify-content-center border m-2">
                            <NavLink to="/mañana" className='text-decoration-none text-dark fs-4'>
                                Mañana
                            </NavLink>
                        </div>

                        <div className="accordion-body d-flex justify-content-center border m-2">
                            <NavLink to="/tarde" className='text-decoration-none text-dark fs-4'>
                                Tarde
                            </NavLink>
                        </div>

                        <div className="accordion-body d-flex justify-content-center border m-2">
                            <NavLink to="/noche" className='text-decoration-none text-dark fs-4'>
                                Noche
                            </NavLink>
                        </div>

                    </div>
                </div>
                    </section>
            </main>
    )
}
