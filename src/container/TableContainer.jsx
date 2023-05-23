import React from 'react'
import { Link } from 'react-router-dom'

export const TableContainer = () => {
  return (
    <>
    <div className="bg-aquagym h-full">
        <div className="container p-3">
            <table className="table table-bordered bg-dark">
                <thead>
                    <tr>
                        <th className="fs-2 text-light text-center"> Actividades de Lunes </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle bg-dark" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Adultos
                                </button>
                                <ul className="dropdown-menu bg-dark p-2" aria-labelledby="dropdownMenuButton1">
                                    <li><Link className="dropdown-item bg-dark p-2" >Mañana</Link></li>
                                    <li><Link className="dropdown-item bg-dark p-2" >Tarde</Link></li>
                                    <li><Link className="dropdown-item bg-dark p-2" >Noche</Link></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle bg-dark" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Niños
                                </button>
                                <ul className="dropdown-menu bg-dark p-2" aria-labelledby="dropdownMenuButton1">
                                    <li><Link className="dropdown-item bg-dark p-2" href="#">Mañana</Link></li>
                                    <li><Link className="dropdown-item bg-dark p-2" href="#">Tarde</Link></li>
                                    <li><Link className="dropdown-item bg-dark p-2" href="#">Noche</Link></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}
